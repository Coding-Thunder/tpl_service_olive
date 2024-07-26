import ReadMore from "../../ReadMore/ReadMore"
import Card from "../Card/Card"
import person1 from "../../../assets/person1.png"
import person2 from "../../../assets/person2.png"
import person3 from "../../../assets/person3.png"

const Services = () => {
    return (
        <section className="py-20 lg:py-0 h-fit lg:h-[600px] bg-dark_app flex-col lg:flex-row flex justify-center ">
            <div className="w-full lg:w-1/5 justify-center lg:justify-start  flex lg:flex-col gap-10 mx-auto lg:mx-0">
                <div className="orange_gradient p-12 w-[350px] h-[250px] flex justify-center items-center ">
                    <p className="text-white text-5xl font-bold text-center">
                        Services We Offer
                    </p>
                </div>
                <div className="w-[50ch] lg:w-full flex flex-col justify-center items-start lg:translate-x-20 gap-10">
                    <p className="text-white">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                    </p>
                    <ReadMore />
                </div>
            </div>
            <div className="flex-col mt-20 lg:mt-0 md:flex-row w-full lg:w-4/5 flex justify-center items-center gap-10">
                <Card image={person1} link="#" service="some" />
                <Card image={person2} link="#" service="some" />
                <Card image={person3} link="#" service="some" />
            </div>
        </section>
    )
}

export default Services

