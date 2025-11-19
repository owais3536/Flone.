import { Link } from "react-router-dom";
const SignUp = () => {

    return (
        <div className="container mx-auto py-10">
            <div className="flex items-center justify-center">
                <form className="w-2/3 p-4 shadow-lg flex items-center rounded-md">
                    <div className="w-1/2 hidden lg:block">
                        <img src="/form-image.jpg" alt="form image" className="w-full h-auto" />
                    </div>
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-center text-2xl font-bold">Sign Up</h2>
                        <p className="text-center text-sm text-gray-400 mt-2">Unlock your world</p>

                        <div className="flex flex-col gap-1 mb-3">
                            <label htmlFor="name" className="text-sm px-2 text-gray-600">Name</label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Enter your name"
                                required
                                className="border border-gray-400 p-2 rounded-md"
                            />
                        </div>
                        <div className="flex flex-col gap-1 mb-3">
                            <label htmlFor="email" className="text-sm px-2 text-gray-600">Email</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                                required
                                className="border border-gray-400 p-2 rounded-md"
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="password" className="text-sm px-2 text-gray-600">Password</label>
                            <input
                                type="password"
                                id="password"
                                placeholder="Enter your password"
                                required
                                className="border border-gray-400 p-2 rounded-md"
                            />
                        </div>
                        <p className="mt-3 text-sm text-gray-500">
                            Already have an account! <Link to="/signin" className="font-bold text-blue-400">Sign In</Link>
                        </p>
                        <button
                            type="submit"
                            className="mt-3 w-full text-center text-white bg-blue-600 hover:bg-blue-500 py-2 rounded-md cursor-pointer"
                        >
                            Create an account
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp;