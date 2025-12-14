
const AddProduct = ({ addProduct, setAddProduct }) => {
    console.log(addProduct);
    return <>
        <div
            onClick={() => setAddProduct(!addProduct)}
            className={`fixed top-0 right-0 w-full h-full bg-black/30 transition-all duration-300 ease-in-out z-40
                ${addProduct ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"}`}
        ></div>
        <aside
            className={`fixed top-0 h-full w-[420px] bg-white px-4 z-50 transition-all duration-300 ease-in-out py-8
                ${addProduct ? "-right-100" : "right-0"}`}
        >
            <h2>Add Product</h2>

            <div className="mt-6">
                <label className="text-xs text-gray-600">Name</label>
                <input
                    type="text"
                    placeholder="Enter product name"
                    className="w-full px-1 py-2 text-xs ring ring-gray-400 outline-none rounded-md"
                />
            </div>
            <div className="mt-4">
                <label className="text-xs text-gray-600"></label>
                <input
                    type="text"
                    placeholder="Enter product name"
                    className="w-full px-1 py-2 text-xs ring ring-gray-400 outline-none rounded-md"
                />
            </div>
        </aside>
    </>;
};

export default AddProduct;