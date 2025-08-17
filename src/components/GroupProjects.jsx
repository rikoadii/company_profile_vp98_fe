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

  // Split projects into 2 sections of 5 each
  const section1 = projects.slice(0, 5); // Projects 1-5
  const section2 = projects.slice(5, 10); // Projects 6-10

  // Function to render section based on isMain field
  const renderSection = (sectionProjects, isLeftLarge = true) => {
    if (sectionProjects.length === 0) return null;

    // Find project with isMain: true in this section
    const largeProject = sectionProjects.find(project => project.isMain === true);
    // Get remaining projects for small grid
    const smallProjects = sectionProjects.filter(project => project.isMain !== true);

    // If no large project found, display all as equal size
    if (!largeProject) {
      return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 h-[300px] sm:h-[350px] md:h-[422px]">
          {sectionProjects.slice(0, 4).map((project) => (
            <ProjectImageSmall key={project.id} project={project} />
          ))}
        </div>
      );
    }

    // Render with large + small layout
    const LargeComponent = () => <ProjectImageLarge project={largeProject} />;
    const SmallGrid = () => (
      <div className="grid grid-cols-2 grid-rows-2 gap-2 sm:gap-4 h-full">
        {smallProjects.slice(0, 4).map((project) => (
          <ProjectImageSmall key={project.id} project={project} />
        ))}
      </div>
    );

    return (
      <div className="grid grid-cols-2 gap-4 sm:gap-6 h-[300px] sm:h-[350px] md:h-[422px]">
        {isLeftLarge ? (
          <>
            <LargeComponent />
            <SmallGrid />
          </>
        ) : (
          <>
            <SmallGrid />
            <LargeComponent />
          </>
        )}
      </div>
    );
  };

  return (
    <div className="my-8 sm:my-12 md:my-16">
        {/* Desktop Layout - Maintain 2 section structure */}
        <div className="hidden lg:block">
            <div className="max-w-7xl mx-auto px-2 sm:px-4 pb-8 sm:pb-12 space-y-8 sm:space-y-12">
                {/* Section 1: Check for isMain, default large on left */}
                {section1.length > 0 && renderSection(section1, true)}

                {/* Section 2: Check for isMain, default large on right */}
                {section2.length > 0 && renderSection(section2, false)}
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
