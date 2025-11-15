import React from 'react'

const Banner = () => {
    return (
        <>
            <section
                className='container mx-auto my-4 relative flex items-center w-full h-fit overflow-hidden bg-slate-50'
            >
                <div className="w-1/2 flex items-center justify-center">
                    <img
                        src="/men-5.png"
                        alt="banner image"
                        className='block'
                    />
                </div>
                <div className="w-1/2 flex flex-col items-center justify-cnter">
                    <h5 className='text-xl md:text-2xl lg:text-3xl font-medium mb-2'>Stylish</h5>
                    <h2 className='text-3xl md:text-5xl lg:text-7xl font-bold mb-2'>Male Clothes</h2>
                    <p className='text-base'>30% off summer vacations</p>
                </div>
            </section>
        </>
    )
}

export default Banner;