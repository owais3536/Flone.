import { FilePen, Plus } from "lucide-react";
import AddProduct from "./AddProduct";
import { useState } from "react";

const Products = () => {
    const [addProduct, setAddProduct] = useState(false);

    return (
        <>
            <div className="p-10">
                <div className="flex justify-end bg-white rounded-lg p-4">
                    <button
                        className="flex items-center gap-2 text-sm 
                        bg-purple-700 text-white py-2 px-4 rounded-lg cursor-pointer"
                        onClick={() => setAddProduct(!addProduct)}
                    >
                        <Plus width={16} />
                        Add Product
                    </button>
                </div>

                <div className="mt-10 bg-white p-4 rounded-lg">
                    <table className="w-full">
                        <thead className="border-b border-b-gray-300">
                            <tr>
                                <th className="text-start text-gray-500 text-sm pb-4">Product Name</th>
                                <th className="text-start text-gray-500 text-sm pb-4">Product Unit Price</th>
                                <th className="text-start text-gray-500 text-sm pb-4">Products</th>
                                <th className="text-start text-gray-500 text-sm pb-4">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-b-gray-300">
                                <td className="flex gap-2 py-4">
                                    <img src="/men-3.png" alt="" className="w-10 object-cover" />
                                    <span>Item name</span>
                                </td>
                                <td className="text-sm py-4">$67.00</td>
                                <td className="text-sm py-4">112</td>
                                <td className="py-4">
                                    <span className="bg-emerald-300 px-2 py-1 rounded-full text-sm">In Stock</span>
                                </td>
                                <td>
                                    <FilePen width={24} height={24} className="w-6 h-6 cursor-pointer" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div >

            <AddProduct addProduct={addProduct} setAddProduct={setAddProduct} />
        </>
    );
};

export default Products;