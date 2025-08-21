import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Custom styles for Swiper pagination
import './ProjectDetail.css';

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await fetch(`https://admin.victoryproduction98.com/api/projects.php`);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (data.success) {
          const projectData = data.data.find(project => project.project_id === id);
          
          if (!projectData) {
            throw new Error('Project not found');
          }

          // Transform project data to match our needs
          const transformedProject = {
            id: projectData.project_id,
            title: projectData.name_projects,
            image: projectData.image_project.startsWith('http') 
              ? projectData.image_project 
              : `https://admin.victoryproduction98.com/uploads/projects/${projectData.image_project}`,
            category: projectData.categories_name,
            location: projectData.location_projects,
            description: projectData.description_projects,
            details: {
              category: projectData.categories_name,
              location: projectData.location_projects,
              status: projectData.is_main === "1" ? "Featured Project" : "Regular Project"
            }
          };
          
          setProject(transformedProject);
        } else {
          throw new Error(data.message || 'Failed to fetch project');
        }
      } catch (error) {
        console.error('Error fetching project:', error);
        navigate('/projects');
      }
    };

    fetchProject();
  }, [id, navigate]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-500"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">

      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-black hover:text-red-500 transition-colors mb-8"
        >
          <FaArrowLeft /> Back to Projects
        </button>

        {/* Project Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-black mb-4">{project.title}</h1>
          <div className="flex items-center gap-4 text-gray-600">
            <span>{project.date}</span>
            <span>•</span>
            <span>{project.category}</span>
            <span>•</span>
            <span>{project.location}</span>
          </div>
        </div>

        {/* Project Image */}
        <div className="mb-12 rounded-lg overflow-hidden shadow-lg">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Project Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2">
            <h2 className="text-2xl text-black font-semibold mb-4">Project Overview</h2>
            <div className="prose max-w-none">
              <div dangerouslySetInnerHTML={{ __html: project.description }} 
                   className="text-gray-700 mb-8 leading-relaxed" 
              />
            </div>

            {/* Project Gallery Carousel */}
            <div className="mt-8">
              <h3 className="text-xl text-black font-semibold mb-4">Project Gallery</h3>
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                navigation={true}
                pagination={{ 
                  clickable: true,
                  dynamicBullets: true 
                }}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                  }
                }}
                className="w-full rounded-lg overflow-hidden"
              >
                {[project.image, project.image, project.image].map((img, index) => (
                  <SwiperSlide key={index}>
                    <div className="aspect-w-16 aspect-h-9">
                      <img
                        src={img}
                        alt={`${project.title} - Gallery ${index + 1}`}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          {/* Project Details Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl text-black font-semibold mb-4">Project Details</h3>
              <div className="space-y-4">
                {Object.entries(project.details).map(([key, value]) => (
                  <div key={key}>
                    <h4 className="text-gray-600 font-medium capitalize">{key}</h4>
                    <p className="text-black">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
