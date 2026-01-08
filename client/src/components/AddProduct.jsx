
const AddProduct = () => {

  return (
    <>
    <div className="fixed top-0 right-0 w-full h-full bg-black/30"></div>

    <aside className="w-[420px] h-full fixed top-0 right-0 bg-white px-4 py-6">
      <h2 className="text-xl font-semibold">Add Product</h2>

      <div className="mt-6">
        <label className="text-sm">Product Name:</label>
        <input 
          type="text" 
          className="block mt-1 w-full rounded-sm text-base py-1 px-2 ring ring-gray-400 outline-none"
        />
      </div>
      <div className="mt-4">
        <label className="text-sm">Original Price:</label>
        <input 
          type="number" 
          className="block mt-1 w-full rounded-sm text-base py-1 px-2 ring ring-gray-400 outline-none"
        />
      </div>
      <div className="mt-4">
        <label className="text-sm">Discount Price:</label>
        <input 
          type="number" 
          className="block mt-1 w-full rounded-sm text-base py-1 px-2 ring ring-gray-400 outline-none"
        />
      </div>
    </aside>
    </>
  );
}

export default AddProduct;