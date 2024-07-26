import React from "react"
import ImageIcons from "../../ImageIcons/ImageIcons"
import arrowRounded from "../../../assets/arrow_rounder.png"
import { Link } from "react-router-dom"

interface Props {
    image: string
    service: string
    link: string
}
const Card: React.FC<Props> = ({ image, service }) => {
    return (
        <div className="h-[70%] w-3/5 md:w-[25%]">
            <div className="w-full h-fit object-contain">
                <img src={image} alt="Card Service" />
            </div>
            <div className="flex justify-between items-center bg-white p-4 text-xl">
                <p><span>{service}</span> <span>Services</span></p>
                <Link to={"#"}>
                    <ImageIcons className="cursor-pointer" alt="Link" src={arrowRounded} width={30} />
                </Link>
            </div>
        </div>
    )
}

export default Card