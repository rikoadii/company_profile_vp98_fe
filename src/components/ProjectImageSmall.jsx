import { useNavigate } from 'react-router-dom';

export default function ProjectImageSmall({ project }) {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate(`/project/${project.id}`);
  };

  return (
    <div 
      onClick={handleClick}
      className="relative overflow-hidden rounded-lg group cursor-pointer h-[201px]">
      <div className="relative w-full h-full">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-red-500 via-red-500/20 to-transparent group-hover:from-red-600 group-hover:via-red-600/30 transition-all duration-300" />
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
        <h3 className="text-[11px] lg:text-[11px] font-semibold mb-1 leading-[16px]">
          {project.title}
        </h3>
        <p className="text-[8px] font-semibold mb-1 leading-[16px]">
          LOC: {project.location}
        </p>
        <p className="text-[6px] font-semibold mb-1 leading-[14px]">
          {project.description}
        </p>
      </div>
    </div>
  )
}
