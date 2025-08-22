import { useEffect, useState } from 'react';


const useProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        console.log('useProjects - Starting to fetch projects...');
        setLoading(true);
        const apiUrl = 'https://admin.victoryproduction98.com/api/projects.php';
        console.log('useProjects - Fetching from:', apiUrl);
        
        const response = await fetch(apiUrl);
        console.log('useProjects - Response status:', response.status);
        console.log('useProjects - Response ok:', response.ok);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('useProjects - Raw response data:', data);
        
        if (data.success) {
          console.log('useProjects - Raw API data:', data.data.slice(0, 2)); // Show first 2 items
          
          // Transform API data to match component structure
          const transformedProjects = data.data.map(project => ({
            id: project.project_id,
            title: project.name_projects,
            location: project.location_projects,
            description: project.description_projects,
            // Handle image path - check if it's already a full URL or needs base URL
            image: project.image_project.startsWith('http') 
              ? project.image_project 
              : `https://admin.victoryproduction98.com/uploads/projects/${project.image_project}`,
            category: project.categories_name,
            category_id: project.id_categories, // Add category ID for filtering
            isMain: project.is_main === "1" || project.is_main === 1,
            size: (project.is_main === "1" || project.is_main === 1) ? 'large' : 'small'
          }));
          
          console.log('useProjects - Transformed projects:', transformedProjects.slice(0, 2)); // Show first 2 items
          console.log('useProjects - All project IDs:', transformedProjects.map(p => ({ id: p.id, type: typeof p.id })));
          
          setProjects(transformedProjects);
        } else {
          console.log('useProjects - API returned success=false:', data);
          throw new Error(data.message || 'Failed to fetch projects');
        }
      } catch (err) {
        console.error('useProjects - Error details:', err);
        console.error('useProjects - Error message:', err.message);
        console.error('useProjects - Error stack:', err.stack);
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
