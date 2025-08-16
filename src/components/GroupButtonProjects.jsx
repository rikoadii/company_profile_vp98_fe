import { Swiper, SwiperSlide } from 'swiper/react';
import ButtonProjects from "./ButtonProjects"
import 'swiper/css';
import './GroupButtonProjects.css';

export default function GroupButtonProjects(){
    const buttonsData = [
        { text: "All Projects" },
        { text: "Corporate" },
        { text: "Entertainment" },
        { text: "Community" }
    ];

    return (
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
            {/* Desktop Layout */}
            <div className="hidden md:flex flex-wrap justify-center items-center w-full gap-4">
                {buttonsData.map((button, index) => (
                    <ButtonProjects key={index} text={button.text} />
                ))}
            </div>

            {/* Mobile & Tablet Layout */}
            <div className="md:hidden overflow-hidden">
                <Swiper
                    spaceBetween={8}
                    slidesPerView="auto"
                    centeredSlides={false}
                    freeMode={true}
                    navigation={false}
                    pagination={false}
                    grabCursor={true}
                    className="px-2"
                    breakpoints={{
                        320: {
                            spaceBetween: 8,
                            slidesOffsetBefore: 16,
                            slidesOffsetAfter: 16,
                        },
                        480: {
                            spaceBetween: 12,
                            slidesOffsetBefore: 24,
                            slidesOffsetAfter: 24,
                        },
                        640: {
                            spaceBetween: 16,
                            slidesOffsetBefore: 32,
                            slidesOffsetAfter: 32,
                        }
                    }}
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