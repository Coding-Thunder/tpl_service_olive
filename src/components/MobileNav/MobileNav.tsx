import { Menu } from "lucide-react"
import logo from "../../assets/logo.png"
import ImageIcons from '../ImageIcons/ImageIcons'
import { Link } from 'react-router-dom'

const MobileNav = () => {
    return (
        <nav className='flex lg:hidden p-4 justify-between items-center'>
            <Link to={"/"}>
                <ImageIcons alt="Logo" src={logo} width={90} />
            </Link>
            <Menu />
        </nav>
    )
}

export default MobileNav