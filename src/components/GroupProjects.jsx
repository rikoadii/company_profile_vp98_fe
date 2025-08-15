import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import ProjectImageLarge from "./ProjectImageLarge"
import ProjectImageSmall from "./ProjectImageSmall"
import ProjectCard from "./ProjectCard"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import custom styles
import './GroupProjects.css';

export default function GroupProjects({ projects = [] }) {
  // Jika tidak ada projects, return empty atau fallback
  if (!projects || projects.length === 0) {
    return (
      <div className="my-16">
        <div className="max-w-7xl mx-auto px-4 pb-12">
          <p className="text-center text-gray-500">No projects available</p>
        </div>
      </div>
    )
  }

  // Split projects into sections of 5 untuk desktop
  const section1 = projects.slice(0, 5); // Projects 1-5
  const section2 = projects.slice(5, 10); // Projects 6-10

return (
    <div className="my-8 sm:my-12 md:my-16">
        {/* Desktop Layout - Grid seperti sebelumnya */}
        <div className="hidden lg:block">
            <div className="max-w-7xl mx-auto px-2 sm:px-4 pb-8 sm:pb-12 space-y-8 sm:space-y-12">
                {/* Section 1: Large left, 4 small right */}
                {section1.length >= 5 && (
                    <div className="grid grid-cols-2 gap-4 sm:gap-6 h-[300px] sm:h-[350px] md:h-[422px]">
                        {/* Large image on left - 50% */}
                        <ProjectImageLarge project={section1[0]} />

                        {/* 4 small images on right - 50% (2x2 grid) */}
                        <div className="grid grid-cols-2 grid-rows-2 gap-2 sm:gap-4 h-full">
                            {section1.slice(1).map((project) => (
                                <ProjectImageSmall key={project.id} project={project} />
                            ))}
                        </div>
                    </div>
                )}

                {/* section 2 */}
                {section2.length >= 5 && (
                  <div className="grid grid-cols-2 gap-4 sm:gap-6 h-[300px] sm:h-[350px] md:h-[422px]">
                      {/* 4 small images on left - 50% (2x2 grid) */}
                      <div className="grid grid-cols-2 grid-rows-2 gap-2 sm:gap-4 h-full">
                          {section2.slice(1).map((project) => (
                              <ProjectImageSmall key={project.id} project={project} />
                          ))}
                      </div>

                      {/* Large image on right - 50% */}
                      <ProjectImageLarge project={section2[0]} />
                  </div>
                )}
            </div>
        </div>

        {/* Mobile & Tablet Layout - Carousel */}
        <div className="lg:hidden px-2 sm:px-4">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={16}
                slidesPerView={1}
                centeredSlides={true}
                navigation={true}
                pagination={{ 
                    clickable: true,
                    dynamicBullets: true 
                }}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    380: {
                        slidesPerView: 1.2,
                        spaceBetween: 16,
                    },
                    480: {
                        slidesPerView: 1.5,
                        spaceBetween: 20,
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 24,
                        centeredSlides: false,
                    },
                    768: {
                        slidesPerView: 2.3,
                        spaceBetween: 24,
                    }
                }}
                className="projects-carousel"
            >
                {projects.map((project) => (
                    <SwiperSlide key={project.id}>
                        <ProjectCard project={project} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    </div>
)
}
