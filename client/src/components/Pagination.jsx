import { ChevronLeft, ChevronRight } from "lucide-react"

const Pagination = () => {
    return (
        <div className="flex items-center gap-4">
            <span className="border border-black/50">
                <ChevronLeft width={20} />
            </span>
            <p className="text-lg font-medium">1 - 3</p>
            <span className="border border-black/50">
                <ChevronRight width={20} />
            </span>
        </div>
    )
}

export default Pagination