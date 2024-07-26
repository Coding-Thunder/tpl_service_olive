import ImageIcons from "../ImageIcons/ImageIcons"
import { navLinksMiddle } from "../../utils/constants"
import { Link } from "react-router-dom"
import MobileNav from "../MobileNav/MobileNav"

// images
import logo from "../../assets/logo.png"
import tata from "../../assets/tata.png"
import teams from "../../assets/teams.png"
import yahoo from "../../assets/yahoo.png"
import pin from "../../assets/pin.png"
import line from "../../assets/line.png"
import { Search } from "lucide-react"


const Navbar = () => {

    // todo add relative links for each item 
    const navImages = [
        { image: tata, link: "#", alt: "tata" },
        { image: teams, link: "#", alt: "teams" },
        { image: yahoo, link: "#", alt: "yahoo" },
        { image: pin, link: "#", alt: "pin" }
    ]
    return (
        <>
            <nav className="hidden lg:flex justify-between items-center px-12 py-4">
                <Link to={"/"}>
                    <ImageIcons alt="Logo" src={logo} width={90} />
                </Link>
                <div className="flex justify-between items-center gap-10">
                    {navLinksMiddle.map((item: Record<string, any>) => (
                        <Link to={item.link}>
                            {item.label}
                        </Link>
                    ))}

                </div>

                <div className="flex justify-between items-center gap-4">
                    {navImages.map(({ link, image, alt }) => {
                        let compliment = (alt === "tata")
                        return (
                            <div className={`w-fit ${compliment && "mr-8"}`}>
                                <Link to={link}>
                                    <ImageIcons alt={alt} src={image} width={compliment ? 50 : 25} />
                                </Link>
                            </div>
                        )
                    })}
                    <ImageIcons alt={"line"} src={line} width={2} />
                    <Search />
                </div>
            </nav>
            <MobileNav />
        </>
    )
}

export default Navbar