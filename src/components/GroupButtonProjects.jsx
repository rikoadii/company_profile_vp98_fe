import { Swiper, SwiperSlide } from 'swiper/react';
import ButtonProjects from "./ButtonProjects"

// Import Swiper styles
import 'swiper/css';

// Import custom styles
import './GroupButtonProjects.css';


export default function GroupButtonProjects(){
    const buttonsData = [
        { text: "All Projects" },
        { text: "Corporate" },
        { text: "Entertainment" },
        { text: "Community" }
    ];

    return (
        <div className="w-full px-2 sm:px-4 md:px-6">
            {/* Desktop Layout - Flex normal */}
            <div className="hidden md:flex flex-wrap justify-center items-center w-full gap-2 sm:gap-3 md:gap-4">
                {buttonsData.map((button, index) => (
                    <ButtonProjects key={index} text={button.text} />
                ))}
            </div>

            {/* Mobile & Tablet Layout - Carousel */}
            <div className="md:hidden">
                <Swiper
                    spaceBetween={12}
                    slidesPerView="auto"
                    centeredSlides={false}
                    freeMode={true}
                    navigation={false}
                    pagination={false}
                    grabCursor={true}
                    breakpoints={{
                        320: {
                            spaceBetween: 8,
                        },
                        480: {
                            spaceBetween: 12,
                        },
                        640: {
                            spaceBetween: 16,
                        }
                    }}
                    className="button-carousel"
                >
                    {buttonsData.map((button, index) => (
                        <SwiperSlide key={index} style={{ width: 'auto' }}>
                            <ButtonProjects text={button.text} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}