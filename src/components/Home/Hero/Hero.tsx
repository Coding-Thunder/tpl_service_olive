import "./Hero.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { heroText } from "../../../utils/constants";
import ReadMore from "../../ReadMore/ReadMore";

const Hero = () => {
    return (
        <section className="hero-p w-svw h-[700px]">

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
                className="h-full w-5/6"
            >
                {heroText.map(({ leading, secondary }) => (
                    <>
                        <SwiperSlide className="z-0 w-full flex items-start flex-col justify-center bg-transparent text-white">
                            <p className="hero_leading text-6xl lg:text-8xl font-bold">
                                {leading}
                            </p>
                            <p className="translate-x-4 text-3xl lg:text-5xl text-orage_app">
                                {secondary}
                            </p>
                            <ReadMore className="mt-4  lg:mt-10 translate-x-8" />
                        </SwiperSlide>
                    </>
                ))}

            </Swiper>
            );
        </section>
    )
}

export default Hero