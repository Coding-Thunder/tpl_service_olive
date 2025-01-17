import { Link } from "react-router-dom"
import { footerLinks } from "../../utils/constants"
import ImageIcons from "../ImageIcons/ImageIcons"

// images
import location from "../../assets/location.png"
import phone from "../../assets/phone.png"
import mail from "../../assets/mail.png"

// socials links images
import facebook from "../../assets/facebook.png"
import linkedin from "../../assets/linkedin.png"
import insta from "../../assets/insta.png"
import youtube from "../../assets/youtube.png"
import mailDark from "../../assets/mail_dark.png"
import olive from "../../assets/olive_logo.png"

const Footer = () => {
    return (
        <div className="bg-app_gray-1 h-fit">
            <div className="px-32 pt-8">
                <div className="w-full mx-auto lg:mx-0 justify-between lg:pl-24  flex flex-wrap gap-10 lg:gap-0">
                    <div className="w-full lg:w-1/4 flex flex-col items-start  gap-2 ">
                        {footerLinks.about_us.map((item, idx) => (
                            <>
                                <Link key={'Footer1' + idx} className={item.leading ? "text-xl text-blue_app_2" : ""} to={item.link}>{item.name}</Link>
                            </>
                        ))}
                        <Link className={"text-xl  text-blue_app_2"} to={"#"}>{footerLinks.careers}</Link>
                        <Link className={"text-xl text-blue_app_2"} to={"#"}>{footerLinks.blogs}</Link>

                    </div>

                    <div className="w-full lg:w-1/4 flex flex-col items-start gap-2 ">
                        {footerLinks.services_we_offer.map((item, idx) => (
                            <>
                                <Link key={'Footer2' + idx} className={item.leading ? "text-xl text-blue_app_2" : ""} to={item.link}>{item.name}</Link>
                            </>
                        ))}

                        {footerLinks.communication.map((item, idx) => (
                            <>
                                <Link key={'Footer3' + idx} className={item.leading ? "text-xl text-blue_app_2" : ""} to={item.link}>{item.name}</Link>
                            </>
                        ))}
                    </div>
                    <div className="w-full lg:w-1/4 flex flex-col items-start gap-2 ">
                        {footerLinks.related_links.map((item, idx) => (
                            <>
                                <Link key={'Footer4' + idx} className={item.leading ? "text-xl text-blue_app_2 uppercase" : ""} to={item.link}>{item.name}</Link>
                            </>
                        ))}
                    </div>
                    <div className="w-full lg:w-1/4 flex flex-col items-start gap-2 ">
                        {footerLinks.contact_us.map((item, idx) => (
                            <>
                                <Link key={'Footer5' + idx} className={item.leading ? "text-xl text-blue_app_2" : "font-bold"} to={item.link}>{item.name}</Link>
                            </>
                        ))}
                        <div className="flex items-start justify-start gap-4">
                            <ImageIcons src={location} width={14} className="mt-1" alt="Location" />
                            <p className="text-sm w-3/5">{footerLinks.address}</p>
                        </div>
                        <div className="flex items-start justify-start gap-4">
                            <ImageIcons src={phone} width={14} className="mt-1" alt="Location" />
                            <p className="text-sm">{footerLinks.phone}</p>
                        </div>

                        <div className="flex items-start justify-start gap-4">
                            <ImageIcons src={mail} width={14} className="mt-1" alt="Location" />
                            <p className="text-sm">{footerLinks.mail}</p>
                        </div>

                        <div className="w-[88%] pl-7 pt-6 flex items-center justify-start gap-3">
                            <Link to={"www.facebook.com/"} target="_blank">
                                <ImageIcons alt="Facebook" width={12} src={facebook} />
                            </Link>
                            <Link to={"www.linkedin.com/"} target="_blank">
                                <ImageIcons alt="Linkedin" width={20} src={linkedin} />
                            </Link>
                            <Link to={"www.instagram.com/"} target="_blank">
                                <ImageIcons alt="Instagram" width={20} src={insta} />
                            </Link>
                            <Link to={"www.youtube.com/"} target="_blank">
                                <ImageIcons alt="Youtube" width={25} src={youtube} />
                            </Link>
                            <ImageIcons alt="Mail" width={25} src={mailDark} />
                        </div>
                    </div>
                </div>



            </div>
            <hr className="border-t border-gray-300 my-4 " />
            <div className="flex  flex-col md:flex-row text-sm items-center justify-between px-14 py-6">
                <p>© Copyright 2024. TPL Services. All Rights Reserved.</p>
                <div className="flex items-center">
                    <p className="mr-2">Design and development by</p>
                    <ImageIcons alt="Olive" width={110} src={olive} />
                </div>
            </div>
        </div>
    )
}

export default Footer