
const Footer = () => {
    return (
        <footer className="container mx-auto mt-20 bg-slate-100 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-20">
            <div>
                <h2 className="text-3xl font-bold">Flone.</h2>
                <p className="text-base">&copy; 2025 Flone. <br /> All Rights Reserved</p>
            </div>

            <ul className="flex flex-col gap-3">
                <h4 className="font-medium uppercase">About Us</h4>
                <li className="text-sm text-gray-500">About Us</li>
                <li className="text-sm text-gray-500">Store location</li>
                <li className="text-sm text-gray-500">Contact</li>
                <li className="text-sm text-gray-500">Order tracking</li>
            </ul>

            <ul className="flex flex-col gap-3">
                <h4 className="font-medium uppercase">Useful links</h4>
                <li className="text-sm text-gray-500">Returns</li>
                <li className="text-sm text-gray-500">Support Policy</li>
                <li className="text-sm text-gray-500">Size Guide</li>
                <li className="text-sm text-gray-500">FAQs</li>
            </ul>

            <ul className="flex flex-col gap-3">
                <h4 className="font-medium uppercase">Follow Us</h4>
                <li className="text-sm text-gray-500">Facebook</li>
                <li className="text-sm text-gray-500">Twitter</li>
                <li className="text-sm text-gray-500">Instagram</li>
                <li className="text-sm text-gray-500">Youtube</li>
            </ul>

            <div className="flex flex-col justify-between">
                <div className="">
                    <h4 className="font-medium uppercase">Subscribe</h4>
                    <p className="text-sm text-gray-500">Get E-mail updates about our latest shop and latest offers</p>
                </div>

                <form>
                    <input
                        type="text"
                        placeholder="Enter your email here."
                        className="w-full outline-none border-b border-gray-500 py-2"
                    />
                    <button
                        type="button"
                        className="mt-4 border-b border-b-gray-500 cursor-pointer"
                    >
                        Subscribe
                    </button>
                </form>
            </div>
        </footer>
    )
}

export default Footer