import { useState, useEffect } from 'react';

const useProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://admin.victoryproduction98/api/projects');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (data.success) {
          // Transform API data to match component structure
          const transformedProjects = data.data.map(project => ({
            id: project.id,
            title: project.name_projects,
            location: project.location_projects,
            description: project.description_projects,
            // Handle image path - check if it's already a full URL or needs base URL
            image: project.image.startsWith('http') 
              ? project.image 
              : `http://admin.victoryproduction98/storage/${project.image}`,
            category: project.category.name_category,
            category_id: project.category_projects, // Add category ID for filtering
            isMain: project.isMain === 1,
            size: project.isMain === 1 ? 'large' : 'small'
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
