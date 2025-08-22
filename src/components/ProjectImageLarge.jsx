import { useNavigate } from 'react-router-dom';

export default function ProjectImageLarge({ project }) {
  const navigate = useNavigate();
  
  const handleClick = () => {
    console.log('ProjectImageLarge - Navigating to project:', project);
    console.log('ProjectImageLarge - Project ID:', project.id);
    console.log('ProjectImageLarge - Navigate URL:', `/project/${project.id}`);
    navigate(`/project/${project.id}`);
  };

  return (
    <div 
      onClick={handleClick}
      className="relative overflow-hidden rounded-lg group cursor-pointer h-[422px]">
      <div className="relative w-full h-full">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-red-500 via-red-500/20 to-transparent group-hover:from-red-600 group-hover:via-red-600/30 transition-all duration-300" />
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <h3 className="text-[18px] font-bold mb-2 leading-[28px]">
          {project.title}
        </h3>
        <p className="text-[12px] font-semibold mb-2 leading-[16px]">
          LOC: {project.location}
        </p>
        <p className="text-[10px] font-semibold leading-[16px]">
          {project.description}
        </p>
      </div>
    </div>
  )
}
