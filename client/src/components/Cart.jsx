import { Minus, Plus } from "lucide-react"

const Cart = () => {
    return (
        <section className="pt-10 container mx-auto">
            <h1 className="text-center text-3xl">Cart</h1>

            <table className="mt-10 w-full">
                <thead className="border-b border-black/30">
                    <tr className="flex items-center py-3">
                        <th className="flex-2 text-start">Product</th>
                        <th className="flex-1">Quantity</th>
                        <th className="flex-1">Price</th>
                        <th className="flex-1">Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="flex py-4 border-b border-gray-400">
                        <td className="flex-2 ">Item name</td>
                        <td className="flex-1 flex items-center justify-center ">
                            <div className="flex items-center border border-gray-400 px-3">
                                <Minus width={14} />
                                <span>1</span>
                                <Plus width={14} />
                            </div>
                        </td>
                        <td className="flex-1 text-center font-bold">$ 16.00</td>
                        <td className="flex-1 text-center font-bold">$ 16.00</td>
                    </tr>
                </tbody>
            </table>

            <div className="flex justify-between mt-10">
                <div className="w-full">
                    <h2 className="text-lg font-semibold">Have a coupon?</h2>
                    <p className="text-sm">
                        Add your code for and instant cart discount
                    </p>
                    <div
                        className="w-2/4 mt-4 py-3 px-2 border border-gray-400 rounded-md flex items-center gap-3"
                    >
                        <input
                            type="text"
                            placeholder="Input"
                            className="border-none outline-none w-full"
                        />
                        <button className="border-none outline-none font-semibold">Apply</button>
                    </div>
                </div>

                <div className="w-2/4 border border-gray-400 rounded-md p-4">
                    <h2 className="text-xl font-semibold">Cart summary</h2>
                    <div className="flex items-center justify-between mt-8">
                        <span className="text-sm">Subtotal</span>
                        <span className="text-sm font-semibold">$16.00</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-lg font-semibold">Total</span>
                        <span className="text-lg font-semibold">$16.00</span>
                    </div>
                    <button className="w-full py-2 bg-black text-white rounded-md mt-4">Checkout</button>
                </div>
            </div>

        </section>
    )
}

export default Cart