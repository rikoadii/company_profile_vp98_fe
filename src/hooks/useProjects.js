import { useState, useEffect } from 'react';


const useProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://localhost/be_vp98_php/api/projects.php');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (data.success) {
          // Transform API data to match component structure
          const transformedProjects = data.data.map(project => ({
            id: project.project_id,
            title: project.name_projects,
            location: project.location_projects,
            description: project.description_projects,
            // Handle image path - check if it's already a full URL or needs base URL
            image: project.image_project.startsWith('http') 
              ? project.image_project 
              : `http://localhost/be_vp98_php/uploads/projects/${project.image_project}`,
            category: project.categories_name,
            category_id: project.id_categories, // Add category ID for filtering
            isMain: project.is_main === "1" || project.is_main === 1,
            size: (project.is_main === "1" || project.is_main === 1) ? 'large' : 'small'
          }));
          
          setProjects(transformedProjects);
        } else {
          throw new Error(data.message || 'Failed to fetch projects');
        }
      } catch (err) {
        setError(err.message);
        console.error('Error fetching projects:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return { projects, loading, error };
};

export default useProjects;
