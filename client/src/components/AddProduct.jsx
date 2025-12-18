import { useState } from "react";

const AddProduct = ({ addProduct, setAddProduct }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [discountPrice, setDiscountPrice] = useState(0);
  const [details, setDetails] = useState([]);
  const [detail, setDetail] = useState("");

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

    handleKeyDown(e);
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
            <div className="flex flex-wrap items-center gap-3 ring ring-gray-400 rounded-md p-2">
              <ul className="inline-flex flex-wrap items-center gap-2">
                {details.map((d, index) => (
                  <li
                    key={index}
                    className="text-xs text-gray-700 bg-gray-300 px-2 py-1 rounded-sm"
                  >
                    {d}
                  </li>
                ))}
              </ul>
              <input
                type="text"
                name="details"
                value={detail}
                onChange={(e) => setDetail(e.target.value)}
                onKeyDown={handleKeyDown}
                className="outline-none text-sm w-fit"
              />
            </div>
          </div>
          <button
            type="submit"
            className="text-sm my-6 py-1 px-3 bg-emerald-300 rounded-md cursor-pointer"
          >
            Add Product
          </button>
        </aside>
      </form>
    </>
  );
};

export default AddProduct;
