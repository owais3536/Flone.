import { Heart } from "lucide-react"

const ItemCard = ({ name, src, originalPrice, discountPrice }) => {
    return (
        <div className="w-[300px] overflow-hidden relative">
            <div className="bg-slate-100 w-full flex justify-center ">
                <img src={src} alt="Men fashion image" width={240} />
            </div>
            <div className="mt-3">
                <div className="flex items-center justify-between">
                    <h4 className="font-medium uppercase">{name}</h4>
                    <Heart />
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-sm">$ {discountPrice}</span>
                    <span>-</span>
                    <span className="text-sm line-through text-red-400">$ {originalPrice}</span>
                </div>
            </div>
        </div>
    )
}

export default ItemCard