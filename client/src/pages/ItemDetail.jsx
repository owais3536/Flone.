import { useParams } from "react-router";

import { mensItemData } from "../../public/data";
import { useState } from "react";
import { Minus, Plus } from "lucide-react";

import ItemCard from "../components/ItemCard";

const ItemDetail = () => {
    const { id } = useParams();
    const item = mensItemData.find((item) => item.id == id);
    const [selectedColor, setSelectedColor] = useState(item.colors[0]);
    const [selectedSize, setSelectedSize] = useState();


    if (!item) return <p>No item found...</p>;

    return (
        <main className="container mx-auto">
            <div className="flex flex-col lg:flex-row">
                {/* left */}
                <div className="flex-1 flex flex-col-reverse md:flex-row xl:justify-end gap-y-4">
                    <div className="flex flex-row md:flex-col justify-center">
                        <img src="/men-2.png" alt="" className="w-[100px]" />
                        <img src="/men-2.png" alt="" className="w-[100px]" />
                        <img src="/men-2.png" alt="" className="w-[100px]" />
                    </div>

                    <img src="/men-2.png" alt="" className="bg-slate-100" />
                </div>
                {/* right */}
                <div className="flex-1 mt-10 md:ml-4">
                    {/* name & price */}
                    <h2 className="text-xl font-medium capitalize">{item.name}</h2>
                    <div className="mt-4 flex item-center gap-2">
                        <span className="text-sm">$ {item.discountPrice}</span>
                        <Minus width={14} />
                        <span className="text-sm line-through text-red-400">$ {item.originalPrice}</span>
                    </div>
                    {/* colors */}
                    <div className="mt-10">
                        <span>Color: {selectedColor}</span>
                        <div className="flex item-center gap-2 mt-4">
                            {item.colors.map((color) => (
                                <span
                                    key={color}
                                    onClick={() => setSelectedColor(color)}
                                    style={{
                                        backgroundColor: color,
                                        border: selectedColor === color ? "2px solid black" : "1px solid #ccc"
                                    }}
                                    className="w-6 h-6 rounded-full inline-block cursor-pointer"
                                ></span>
                            ))}
                        </div>
                    </div>
                    {/* size */}
                    <div className="mt-10">
                        <span>Size</span>
                        <div className="flex items-center gap-2 mt-4">
                            {item.sizes.map((size) => (
                                <span
                                    key={size}
                                    onClick={() => setSelectedSize(size)}
                                    className={`w-8 h-7 text-center cursor-pointer ${selectedSize === size ? "border border-black" : ""}`}
                                >{size}</span>
                            ))}
                        </div>
                    </div>
                    {/* add to cart */}
                    <div className="flex items-center gap-4 mt-10">
                        <div className="flex item-center gap-2 border border-black/30 p-2">
                            <Plus width={16} />
                            <span>1</span>
                            <Minus width={16} />
                        </div>
                        <button className="text-lg capitalize font-medium w-1/3 bg-black text-white p-2">Add to Cart</button>
                    </div>
                    {/* items details */}
                    <div className="flex flex-col gap-y-3 mt-8">
                        <span>Details</span>
                        <ol className="list-disc ml-8">
                            {item.details.map((d, index) => (
                                <li key={index} className="text-sm my-1">{d}</li>
                            ))}
                        </ol>
                    </div>
                </div>
            </div>

            {/* related/recommended products */}
            <div className="mt-10">
                <h3 className="text-xl uppercase">You might also like</h3>
                <div
                    className="my-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
                    xl:grid-cols-4 2xl:grid-cols-5 place-items-center gap-4"
                >
                    <ItemCard name={item.name} src={item.src} originalPrice={item.originalPrice} discountPrice={item.discountPrice} />
                    <ItemCard name={item.name} src={item.src} originalPrice={item.originalPrice} discountPrice={item.discountPrice} />
                    <ItemCard name={item.name} src={item.src} originalPrice={item.originalPrice} discountPrice={item.discountPrice} />
                    <ItemCard name={item.name} src={item.src} originalPrice={item.originalPrice} discountPrice={item.discountPrice} />
                    <ItemCard name={item.name} src={item.src} originalPrice={item.originalPrice} discountPrice={item.discountPrice} />
                </div>
            </div>
        </main>
    );
};

export default ItemDetail;