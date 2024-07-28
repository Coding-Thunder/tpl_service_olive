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
import hero from "../../../assets/hero.png"

const Hero = () => {
    return (
        <section className="hero-p w-svw h-[700px]">

            <Swiper
                direction="vertical"
                slidesPerView={1}
                spaceBetween={-4}
                mousewheel={true}
                pagination={{
                    clickable: true,
                }}
                speed={800}
                autoplay={{
                    delay: 6000, // Duration in milliseconds
                    disableOnInteraction: false,
                }}
                loop={true}
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                className="h-full z-0"
            >
                {heroText.map(({ leading, secondary }) => (
                    <>
                        <SwiperSlide className="flex items-start flex-col justify-center bg-transparent text-white">
                            <img src={hero} alt="hero" className="absolute z-0 h-full w-full" />
                            <div className="z-10  w-5/6 mx-auto">
                                <p className="hero_leading text-6xl lg:text-8xl font-bold">
                                    {leading}
                                </p>
                                <p className="translate-x-4 text-3xl lg:text-5xl text-orage_app">
                                    {secondary}
                                </p>
                                <ReadMore className="mt-4  lg:mt-10 translate-x-8" />
                            </div>
                        </SwiperSlide>
                    </>
                ))}

            </Swiper>
        </section>
    )
}

export default Hero