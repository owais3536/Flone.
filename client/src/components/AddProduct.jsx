import { CloudUpload } from "lucide-react";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../store/product";
import { toast } from "react-toastify";

const AddProduct = ({ toggleMenu, setToggleMenu }) => {
  const dispatch = useDispatch();
  const fileRef = useRef(null);

  const [name, setName] = useState("");
  const [originalPrice, setOriginalPrice] = useState(0);
  const [discountPrice, setDiscountPrice] = useState(0);
  const [units, setUnits] = useState(0);
  const [sizes, setSizes] = useState([]);
  const [colors, setColors] = useState([]);
  const [images, setImages] = useState([]);
  const [detail, setDetail] = useState("");
  const [detailsList, setDetailsList] = useState([]);
  const [showImage, setShowImage] = useState([]);

  function toggleSize(value) {
    setSizes((prev) =>
      prev.includes(value)
        ? prev.filter(size => size !== value)
        : [...prev, value]
    );
  }

  function toggleColor(value) {
    setColors((prev) =>
      prev.includes(value)
        ? prev.filter(color => color !== value)
        : [...prev, value]
    );
  }

  function handleList(e) {
    if (e.key === "Enter" && detail.trim() !== "") {
      e.preventDefault();
      setDetailsList(prev => [...prev, detail]);
      setDetail("");
    }
  }

  function handleFiles() {
    const files = Array.from(fileRef.current.files);
    setImages(files);
    setShowImage(files.map(file => file.name));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("originalPrice", originalPrice);
    formData.append("discountPrice", discountPrice);
    formData.append("units", units);
    formData.append("sizes", JSON.stringify(sizes));
    formData.append("colors", JSON.stringify(colors));
    formData.append("details", JSON.stringify(detailsList));

    images.forEach(image => formData.append("images", image));

    dispatch(addProduct(formData))
      .unwrap()
      .then(() => {
        toast.success("Product added successfully");
      })
      .catch(err => toast.error(err));
  }

  return (
    <>
      <div
        onClick={(prev) => setToggleMenu(!prev)}
        className={`fixed top-0 right-0 w-full h-full bg-black/30 pointer-events-auto
        transition-all duration-300 ease-in-out z-30 opacity-0
        ${toggleMenu ? "opacity-100" : "pointer-events-none"}`}>
      </div>

      <aside className={`w-[420px] h-full fixed top-0 bg-white px-4 py-6 overflow-y-scroll
        transition-all duration-300 ease-in-out z-30 
        ${toggleMenu ? "right-0" : "-right-full"}`}
      >
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <h2 className="text-xl font-semibold">Add Product</h2>

          <div className="mt-6">
            <label className="text-sm">Product Name:</label>
            <input
              type="text"
              placeholder="Enter name"
              onChange={(e) => setName(e.target.value)}
              className="block mt-1 w-full rounded-sm text-base py-1 px-2 ring ring-gray-400 outline-none"
            />
          </div>
          <div className="mt-4">
            <label className="text-sm">Original Price:</label>
            <input
              type="number"
              min={1}
              placeholder="Enter price"
              onChange={(e) => setOriginalPrice(Number(e.target.value))}
              className="block mt-1 w-full rounded-sm text-base py-1 px-2 ring ring-gray-400 outline-none"
            />
          </div>
          <div className="mt-4">
            <label className="text-sm">Discount Price:</label>
            <input
              type="number"
              min={1}
              placeholder="Enter price"
              onChange={(e) => setDiscountPrice(Number(e.target.value))}
              className="block mt-1 w-full rounded-sm text-base py-1 px-2 ring ring-gray-400 outline-none"
            />
          </div>
          <div className="mt-4">
            <label className="text-sm">Available Units:</label>
            <input
              type="number"
              min={1}
              placeholder="Enter available units"
              onChange={(e) => setUnits(Number(e.target.value))}
              className="block mt-1 w-full rounded-sm text-base py-1 px-2 ring ring-gray-400 outline-none"
            />
          </div>
          <div className="mt-4">
            <label className="text-sm">Product Details:</label>
            <div className="py-1 px-2 ring ring-gray-400 rounded-sm">
              <input
                type="text"
                value={detail}
                onChange={(e) => setDetail(e.target.value)}
                onKeyDown={handleList}
                placeholder="Enter details"
                className="block mt-1 w-full text-base outline-none"
              />
              <ul className="mt-4">
                {detailsList?.map((d, index) => (
                  <li key={index}>{d}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-4">
            <div className="text-sm mb-1">Size:</div>
            {["XS", "S", "M", "L", "XL"].map((s) => {
              const isSelected = sizes.includes(s);
              return (
                <button
                  key={s}
                  type="button"
                  onClick={() => toggleSize(s)}
                  className={`text-sm w-8 py-1 ring ring-gray-400 mx-1
                  ${isSelected ? "bg-black text-white" : ""}`}
                >
                  {s}
                </button>
              );
            })}
          </div>
          <div className="mt-4">
            <div className="text-sm mb-1">Colors:</div>
            {["Red", "Blue", "Green", "Yellow", "white", "Black", "Brown"].map((c) => {
              const isSelected = colors.includes(c);
              return (
                <button
                  key={c}
                  type="button"
                  onClick={() => toggleColor(c)}
                  className={`text-sm px-2 py-1 ring ring-gray-400 m-1
                  ${isSelected ? "bg-black text-white" : ""}`}
                >
                  {c}
                </button>
              );
            })}
          </div>
          <div className="mt-4">
            <div className="border border-blue-700 border-dashed rounded-md">
              <label htmlFor="images" className="flex flex-col items-center justify-center p-6 cursor-pointer">
                <CloudUpload width={28} height={28} />
                <p>Upload images</p>
              </label>
              <input
                type="file"
                name="images"
                id="images"
                multiple
                className="hidden"
                ref={fileRef}
                onChange={handleFiles}
              />
              <div className="flex flex-col gap-2 p-2">
                {showImage?.map((image, index) => (
                  <p key={index} className="p-2 bg-purple-700 rounded-sm text-sm font-medium text-white">{image}</p>
                ))
                }
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full text-sm font-medium text-center py-2 mt-10
                    bg-purple-700 text-white rounded-md cursor-pointer hover:bg-purple-600"
          >
            Add
          </button>
        </form >
      </aside>
    </>
  );
};

export default AddProduct;