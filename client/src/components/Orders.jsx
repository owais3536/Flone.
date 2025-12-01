
const Orders = () => {
    const status = "pending";

    return (
        <>
            <div className="p-10">
                <div className="p-4 bg-white">
                    <table className=" w-full">
                        <thead className="border-b border-b-gray-300">
                            <tr>
                                <th className="text-start text-gray-500 text-sm pb-4">Product</th>
                                <th className="text-start text-gray-500 text-sm pb-4">Quantity</th>
                                <th className="text-start text-gray-500 text-sm pb-4">User Email</th>
                                <th className="text-start text-gray-500 text-sm pb-4">Address</th>
                                <th className="text-start text-gray-500 text-sm pb-4">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-b-gray-300">
                                <td className="flex gap-2 py-4">
                                    <img src="/men-3.png" alt="" className="w-10 object-cover" />
                                    <div className="flex flex-col gap-1 text-sm">
                                        <span>Item name</span>
                                        <span>Size: M</span>
                                    </div>
                                </td>
                                <td className="text-sm py-4">2</td>
                                <td className="text-sm py-4">user@fake.com</td>
                                <td className="text-sm py-4">Abc fake st.</td>
                                <td className="text-sm py-4">
                                    {status === "pending" ? (
                                        <span className="bg-yellow-300 px-2 py-1 rounded-full text-sm">Pending</span>
                                    ) : (
                                        <span className="bg-emerald-300 px-2 py-1 rounded-full text-sm">Completed</span>
                                    )}
                                </td>
                            </tr>
                            <tr className="border-b border-b-gray-300">
                                <td className="flex gap-2 py-4">
                                    <img src="/men-3.png" alt="" className="w-10 object-cover" />
                                    <div className="flex flex-col gap-1 text-sm">
                                        <span>Item name</span>
                                        <span>Size: M</span>
                                    </div>
                                </td>
                                <td className="text-sm py-4">2</td>
                                <td className="text-sm py-4">user@fake.com</td>
                                <td className="text-sm py-4">Abc fake st.</td>
                                <td className="text-sm py-4">
                                    {status === "pending" ? (
                                        <span className="bg-yellow-300 px-2 py-1 rounded-full text-sm">Pending</span>
                                    ) : (
                                        <span className="bg-emerald-300 px-2 py-1 rounded-full text-sm">Completed</span>
                                    )}
                                </td>
                            </tr>
                            <tr className="border-b border-b-gray-300">
                                <td className="flex gap-2 py-4">
                                    <img src="/men-3.png" alt="" className="w-10 object-cover" />
                                    <div className="flex flex-col gap-1 text-sm">
                                        <span>Item name</span>
                                        <span>Size: M</span>
                                    </div>
                                </td>
                                <td className="text-sm py-4">2</td>
                                <td className="text-sm py-4">user@fake.com</td>
                                <td className="text-sm py-4">Abc fake st.</td>
                                <td className="text-sm py-4">
                                    {status === "pending" ? (
                                        <span className="bg-yellow-300 px-2 py-1 rounded-full text-sm">Pending</span>
                                    ) : (
                                        <span className="bg-emerald-300 px-2 py-1 rounded-full text-sm">Completed</span>
                                    )}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default Orders;