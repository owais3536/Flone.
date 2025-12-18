import { useState } from "react";

const AddProduct = ({ addProduct, setAddProduct }) => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [discountPrice, setDiscountPrice] = useState(0);
    const [details, setDetails] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(name);
        console.log(price);
        console.log(discountPrice);
        console.log(details);
    };

    return <>
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
                {details.map((d, index) => (
                    <div className="mt-4">
                        <label className="text-xs text-gray-600">Details</label>
                        <input
                            key={index}
                            type="text"
                            name="details"
                            value={d}
                            onChange={(e) => setDetails(e.target.value)}
                            className="w-full px-1 py-2 text-xs ring ring-gray-400 outline-none rounded-md"
                        />
                    </div>
                ))}
                <button
                    type="submit"
                    className="my-6 py-3 bg-emerald-300 rounded-md cursor-pointer"
                >
                    Add Product
                </button>
            </aside>
        </form>
    </>;
};

export default AddProduct;