import { useNavigate } from 'react-router-dom';
import OptimizedImage from './OptimizedImage';

export default function ProjectCard({ project, priority = false }) {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate(`/project/${project.id}`);
  };

  return (
    <div 
      onClick={handleClick}
      className="relative overflow-hidden rounded-lg group cursor-pointer h-[280px] sm:h-[320px]">
      <div className="relative w-full h-full">
        <OptimizedImage
          src={project.image}
          alt={project.title}
          className="w-full h-full transition-transform duration-300 group-hover:scale-105"
          priority={priority}
          width={400}
          height={320}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-red-500 via-red-500/20 to-transparent group-hover:from-red-600 group-hover:via-red-600/30 transition-all duration-300" />
      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
        <h3 className="text-sm sm:text-base font-bold mb-1 sm:mb-2 leading-tight">
          {project.title}
        </h3>
        <p className="text-xs sm:text-sm font-semibold mb-1 leading-tight">
          LOC: {project.location}
        </p>
        <p className="text-xs font-medium leading-tight line-clamp-2">
          {project.description}
        </p>
      </div>
    </div>
  )
}
