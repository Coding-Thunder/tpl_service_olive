
import { ArrowUpRight } from "lucide-react"
import { sustainability } from "../../../utils/constants"
import "./Sustainability.css"
import ReadMore from "../../ReadMore/ReadMore"

const Sustainability = () => {
    return (
        <section className="sustainability min-h-[700px] max-h-fit w-full flex justify-start items-center px-20">
            <div className="stories bg-green_app-1 h-[500px] w-[700px] bg-opacity-70 text-white">
                <div className="p-12 flex flex-col items-start justify-center gap-6">
                    <p className="text-5xl">Sustainability</p>
                    <p>
                        Implementing sustainability practices in the operation and maintenance of a site involves various strategies aimed att...
                    </p>

                    {sustainability.map(item => (
                        <>
                            <div className="flex justify-start items-center gap-4">
                                <div className="border border-white rounded-full">
                                    <ArrowUpRight className="size-4" />
                                </div>
                                <p className="font-bold">{item.label}</p>
                            </div>
                        </>
                    ))}
                    <ReadMore leading="View Stories" />
                </div>
            </div>
        </section>
    )
}

export default Sustainability