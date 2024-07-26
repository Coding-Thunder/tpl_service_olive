import { Link } from "react-router-dom";
import { cn } from "../../lib/utils";
import { Button } from "../ui/button";
import { MdArrowOutward } from "react-icons/md";



interface Props {
    className?: string
    leading?: string
    link?: string
}

const ReadMore: React.FC<Props> = ({ className, leading = "Read More", link = "#" }) => {
    return (
        <Button className={cn("bg-blue_app text-sm text-white  flex justify-between gap-8 py-6 hover:opacity-50 rounded-3xl", className)}>
            <span>{leading}</span>
            <Link to={link}><MdArrowOutward /></Link>
        </Button>)
}

export default ReadMore