import { useState } from "react";
import { useDispatch } from "react-redux";
import { X } from "lucide-react";

import ImageUpload from "./ImageUpload";

const AddProduct = ({ addProduct, setAddProduct }) => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [discountPrice, setDiscountPrice] = useState(0);
  const [details, setDetails] = useState([]);
  const [detail, setDetail] = useState("");
  const [size, setSize] = useState([]);
  const [color, setColor] = useState([]);

  const handleSize = (e) => {
    const { value, checked } = e.target;
    setSize((prev) =>
      checked ? [...prev, value] : prev.filter((s) => s !== value),
    );
  };

  const handleColor = (e) => {
    const { value, checked } = e.target;
    setColor((prev) =>
      checked ? [...prev, value] : prev.filter((c) => c !== value),
    );
  };

  const handleDelete = (index) => {
    setDetails(details.filter((_, i) => i !== index));
  };

  const handleKeyDown = (e) => {
    if (e.keyCode !== 13) {
      return;
    }

    if (!details.includes(detail)) {
      setDetails([...details, detail]);
    }
    setDetail("");
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("discoundPrice", discountPrice);
    formData.append("detail", detail);
    formData.append("size", size);
    formData.append("color", color);

    dispatch(addProduct(formData));
    console.log("working");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div
          onClick={() => setAddProduct(!addProduct)}
          className={`fixed top-0 right-0 w-full h-full bg-black/30 transition-all duration-300 ease-in-out z-40
                ${addProduct ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        ></div>
        <aside
          className={`fixed top-0 h-full w-[420px] bg-white px-4 z-50 transition-all duration-300 ease-in-out py-8
                ${addProduct ? "right-0" : "-right-120"}`}
        >
          <h2>Add Product</h2>

          <div className="mt-6">
            <label className="text-xs text-gray-600">Name</label>
            <input
              type="text"
              value={name}
              name="name"
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter product name"
              className="w-full px-1 py-2 text-xs ring ring-gray-400 outline-none rounded-md"
            />
          </div>
          <div className="mt-4">
            <label className="text-xs text-gray-600">Product Price</label>
            <input
              type="text"
              value={price}
              name="price"
              onChange={(e) => setPrice(e.target.value)}
              className="w-full px-1 py-2 text-xs ring ring-gray-400 outline-none rounded-md"
            />
          </div>
          <div className="mt-4">
            <label className="text-xs text-gray-600">Discount Price</label>
            <input
              type="text"
              name="discount price"
              value={discountPrice}
              className="w-full px-1 py-2 text-xs ring ring-gray-400 outline-none rounded-md"
              onChange={(e) => setDiscountPrice(e.target.value)}
            />
          </div>
          <div className="mt-4">
            <label className="text-xs text-gray-600">Details</label>
            <div className="flex flex-wrap p-2 py-3 gap-2 ring ring-gray-400 rounded-md">
              {details.map((d, index) => (
                <div
                  key={index}
                  className="inline-flex items-center gap-1 bg-gray-200 text-gray-800 px-2 py-1 rounded-sm"
                >
                  <span className="text-xs capitalize">{d}</span>
                  <span className="text-xs cursor-pointer">
                    <X width={12} onClick={() => handleDelete(index)} />
                  </span>
                </div>
              ))}
              <input
                placeholder="Type here"
                name="detail"
                value={detail}
                onKeyDown={handleKeyDown}
                onChange={(e) => setDetail(e.target.value)}
                className="text-xs outline-none"
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="text-xs text-gray-600">Colors</label>
            <div className="flex items-center gap-2">
              {["XS", "S", "M", "L", "XL"].map((size) => (
                <div key={size} className="flex items-center gap-1">
                  <input type="checkbox" value={size} onChange={handleSize} />
                  <label className="text-xs font-medium">{size}</label>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-4">
            <label className="text-xs text-gray-600">Colors</label>
            <div className="flex items-center gap-2 flex-wrap">
              {[
                "Red",
                "Blue",
                "Green",
                "Brown",
                "Grey",
                "Purple",
                "Pink",
                "Yellow",
                "Orange"].map((color) => (
                  <div key={color} className="flex items-center gap-1">
                    <input type="checkbox" value={color} onChange={handleColor} />
                    <label className="text-xs font-medium">{color}</label>
                  </div>
                ))}
            </div>
          </div>
          <div className="mt-10 ring ring-gray-400 rounded-md">
            <ImageUpload />
          </div>
          <button className="w-full h-fit text-center text-xs font-medium py-2 rounded-md mt-10 bg-violet-700 text-white cursor-pointer">
            Add Product
          </button>
        </aside>
      </form>
    </>
  );
};

export default AddProduct;
