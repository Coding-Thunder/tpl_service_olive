import ReadMore from "../../ReadMore/ReadMore"
import "./HeroSecondary.css"
import bod from "../../../assets/bod.png"
import commaUp from "../../../assets/comma_up.png"
import commaDown from "../../../assets/comma_down.png"
// import ring from "../../assets/ring.png"
import ImageIcons from "../../ImageIcons/ImageIcons"

const HeroSecondary = () => {
    return (
        <section className="hero-s  h-fit w-svw ">
            <div className="flex justify-center items-center w-5/6 mx-auto rounded-3xl overflow-hidden -translate-y-24">
                <div className="bg-white h-fit  lg:h-[200px]  rounded-3xl lg:rounded-none w-3/4 p-12 flex items-start gap-4 justify-center flex-col ">
                    <p className="text-5xl text-blue_app_2">
                        Who We Are
                    </p>
                    <p className="w-[70%]">
                        TPL Services Private Limited (TPLSPL) a wholly owned subsidiary of Tata Projects Limited (TPL) is leading service provider in the area of Operations and Maintenance domain through its Line of Businesses (LoB) Operation Services and Utility Services.
                    </p>
                    <div>
                        <ReadMore className=" lg:hidden -translate-x-2 -translate-y-2" />
                    </div>
                </div>
                <div className="hidden w-1/4 hero-s-right h-[200px] lg:flex items-center  justify-center">
                    <ReadMore className="-translate-x-2 -translate-y-2" />
                </div>
            </div>

            <div className="w-full flex justify-center items-center lg:items-start lg:justify-start flex-col pb-10 lg:pb-0 lg:flex-row">
                <div className="w-2/5">
                    {/* <ImageIcons alt="ring" src={ring} width={100} className="absolute left-0 top-0" /> */}
                    <ImageIcons alt="bod" src={bod} width={400} />
                </div>
                <div className="h-full w-3/5">
                    <div className="flex flex-col justify-center items-start gap-3 w-full lg:w-[50%]">
                        <p className="text-orage_app text-4xl">Message from BOD </p>
                        <ImageIcons alt="bod" src={commaUp} width={30} className="-translate-x-6 mt-2" />
                        <p>
                            Tata Projects’ Chief Strategy & Growth Officer, Mr. Himanshu Chaturvedi, joined the firm in 2018. He is in charge of creating the company’s strategic plan, as well as identifying business growth opportunities, technology alliances, and focusing on the Sustainability / Clean Energy business offering. He is also in charge of Marketing Communication and serves as the interim Head of the Services division
                        </p>
                        <div className="flex justify-end items-end w-full translate-x-12">
                            <ImageIcons alt="bod" src={commaDown} width={30} className="-translate-x-6 mt-2" />
                        </div>

                        <p className="text-orage_app text-3xl">
                            Himanshu Chaturvedi
                        </p>
                        <ReadMore className="translate-x-0" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSecondary