
const Services = () => {
    return (
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-10 my-20">
            <div className="w-1/3 flex items-center justify-center flex-col gap-2">
                <img src="/delivery-truck.png" alt="delivery truck" width={70} />
                <h4 className="text-sm">Free Shipping</h4>
                <p className="text-xs text-center w-60">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, porro?
                </p>
            </div>
            <div className="w-1/3 flex items-center justify-center flex-col gap-2">
                <img src="/24-hour.png" alt="" width={70} />
                <h4 className="text-sm">24/7 Support</h4>
                <p className="text-xs text-center w-60">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam, laudantium!
                </p>
            </div>
            <div className="w-1/3 flex items-center justify-center flex-col gap-2">
                <img src="/refund.png" alt="" width={70} />
                <h4 className="text-sm">Money Return</h4>
                <p className="text-xs text-center w-60">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, enim.
                </p>
            </div>
        </div>
    )
}

export default Services