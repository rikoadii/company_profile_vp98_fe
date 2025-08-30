import { useState } from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProjectCard from "./ProjectCard";
import ProjectImageLarge from "./ProjectImageLarge";
import ProjectImageSmall from "./ProjectImageSmall";
import ScrollAnimationWrapper from './ScrollAnimationWrapper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import custom styles
import './GroupProjects.css';

export default function GroupProjects({ projects = [] }) {
  // Remove loading prop and all loading-related code
  
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

  // Function to create dynamic sections based on large projects
  const createDynamicSections = (allProjects) => {
    const sections = [];
    const largeProjects = allProjects.filter(project => project.isMain === true);
    const smallProjects = allProjects.filter(project => project.isMain !== true);
    
    let smallProjectIndex = 0;
    let largeProjectIndex = 0;
    
    // Process large projects one by one
    while (largeProjectIndex < largeProjects.length) {
      const currentLarge = largeProjects[largeProjectIndex];
      
      // Get up to 4 small projects for this section
      const availableSmallProjects = smallProjects.slice(smallProjectIndex, smallProjectIndex + 4);
      
      // Check if this is the last large project and if it would be alone
      const isLastLarge = largeProjectIndex === largeProjects.length - 1;
      const nextLarge = largeProjects[largeProjectIndex + 1];
      
      // If this is the second-to-last large project and the next one would be alone
      if (!isLastLarge && nextLarge && availableSmallProjects.length < 4) {
        const nextAvailableSmall = smallProjects.slice(smallProjectIndex + availableSmallProjects.length, smallProjectIndex + availableSmallProjects.length + 4);
        
        // If the next large project would have no small projects, combine them
        if (nextAvailableSmall.length === 0) {
          sections.push({
            largeProjects: [currentLarge, nextLarge],
            smallProjects: availableSmallProjects,
            type: 'double-large'
          });
          largeProjectIndex += 2; // Skip the next large project
        } else {
          sections.push({
            largeProjects: [currentLarge],
            smallProjects: availableSmallProjects,
            type: 'normal'
          });
          largeProjectIndex += 1;
        }
      } else {
        sections.push({
          largeProjects: [currentLarge],
          smallProjects: availableSmallProjects,
          type: 'normal'
        });
        largeProjectIndex += 1;
      }
      
      smallProjectIndex += availableSmallProjects.length;
    }
    
    // If there are remaining small projects without large projects, create a section for them
    if (smallProjectIndex < smallProjects.length) {
      const remainingSmall = smallProjects.slice(smallProjectIndex);
      sections.push({
        largeProjects: [],
        smallProjects: remainingSmall,
        type: 'small-only'
      });
    }
    
    return sections;
  };

  // Function to render section based on section type
  const renderSection = (section, sectionIndex) => {
    const { largeProjects, smallProjects, type } = section;
    const isLeftLarge = sectionIndex % 2 === 0; // Alternate large position
    
    if (type === 'double-large') {
      // Render two large projects side by side
      return (
        <div className="grid grid-cols-2 gap-4 sm:gap-6 h-[300px] sm:h-[350px] md:h-[422px]">
          <ProjectImageLarge project={largeProjects[0]} />
          <ProjectImageLarge project={largeProjects[1]} />
        </div>
      );
    }
    
    if (type === 'small-only') {
      // Render only small projects in a grid
      return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 h-[300px] sm:h-[350px] md:h-[422px]">
          {smallProjects.slice(0, 4).map((project) => (
            <ProjectImageSmall key={project.id} project={project} />
          ))}
        </div>
      );
    }
    
    // Normal section with 1 large + small projects
    const largeProject = largeProjects[0];
    
    if (!largeProject) {
      return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 h-[300px] sm:h-[350px] md:h-[422px]">
          {smallProjects.slice(0, 4).map((project) => (
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

  const dynamicSections = createDynamicSections(projects);
  const [showAll, setShowAll] = useState(false);
  const visibleSections = showAll ? dynamicSections : dynamicSections.slice(0, 2);

  return (
    <div className="my-8 sm:my-12 md:my-16">
        {/* Desktop Layout - Dynamic sections */}
        <div className="hidden lg:block">
            <div className="max-w-7xl mx-auto px-2 sm:px-4 pb-8 sm:pb-12 space-y-8 sm:space-y-12">
                {visibleSections.map((section, index) => (
                  <ScrollAnimationWrapper 
                    key={`section-${index}`}
                    animationType="scroll-fade-in" 
                    delay={index * 0.2}
                  >
                    <div>
                      {renderSection(section, index)}
                    </div>
                  </ScrollAnimationWrapper>
                ))}
                {dynamicSections.length > 2 && (
                  <ScrollAnimationWrapper animationType="scroll-scale" delay={0.3}>
                    <div className="flex justify-center mt-8">
                        <button
                        onClick={() => setShowAll(!showAll)}
                        className="px-6 py-3 bg-[#FF0000] text-white rounded-lg hover:bg-[#FF0000] transition-colors duration-200 shadow-md"
                      >
                        {showAll ? 'Show Less' : 'See More'}
                      </button>
                    </div>
                  </ScrollAnimationWrapper>
                )}
            </div>
        </div>        {/* Mobile & Tablet Layout - Carousel */}
        <ScrollAnimationWrapper animationType="scroll-slide-left">
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
                  {projects.map((project, index) => (
                      <SwiperSlide key={project.id}>
                          <ProjectCard 
                            project={project} 
                            priority={index < 2} // Priority for first 2 projects
                          />
                      </SwiperSlide>
                  ))}
              </Swiper>
          </div>
        </ScrollAnimationWrapper>
    </div>
)
}
