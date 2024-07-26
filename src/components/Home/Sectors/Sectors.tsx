
import ImageIcons from "../../ImageIcons/ImageIcons"
import "./Sectors.css"
import steel from "../../../assets/steel.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { sectors } from "../../../utils/constants";
import ReadMore from "../../ReadMore/ReadMore";

const Sectors = () => {
    return (
        <section className="h-[700px] w-4/5 mx-auto py-10 ">
            <p className="text-5xl text-blue_app_2 text-center mb-20">
                Sector We Operate
            </p>
            <div className="sectors h-4/5 flex justify-between items-center rounded-xl">
                <Swiper
                    direction="vertical"
                    slidesPerView={1}
                    spaceBetween={30}
                    mousewheel={true}
                    pagination={{
                        clickable: true,
                    }}
                    loop={true}
                    autoplay={true}
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    className="h-full w-6/6 md:w-5/6"
                >
                    {sectors.map(({ name }) => (
                        <>
                            <SwiperSlide className="w-full flex items-center   justify-between bg-transparent text-white">
                                <div className="w-2/3 lg:w-2/5 xl:w-3/5 flex flex-col items-start gap-6">
                                    <p className="text-4xl font-bold text-blue_app capitalize">
                                        {name}
                                    </p>
                                    <p className="text-black pr-">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s.
                                    </p>

                                    <ReadMore />
                                </div>
                                <ImageIcons className="-translate-x-10 hidden sm:block sm:w-[150px] lg:w-[300px]" src={steel} alt="steel" width={300} />

                            </SwiperSlide>
                        </>
                    ))}

                </Swiper>
            </div>
        </section>
    )
}

export default Sectors

