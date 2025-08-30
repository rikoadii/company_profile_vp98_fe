import { useEffect, useState } from 'react';

const useProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false); // Set to false to remove loading
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        console.log('useProjects - Starting to fetch projects...');
        // setLoading(true); // Comment out loading state
        setError(null); // Reset error state
        
        const apiUrl = 'https://admin.victoryproduction98.com/api/projects.php';
        console.log('useProjects - Fetching from:', apiUrl);
        
        // Use regular fetch instead of cached fetch temporarily
        const response = await fetch(apiUrl);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('useProjects - Raw response data:', data);
        
        if (data.success) {
          console.log('useProjects - Raw API data:', data.data.slice(0, 2)); 
          const transformedProjects = data.data.map(project => ({
            id: project.project_id,
            title: project.name_projects,
            location: project.location_projects,
            description: project.description_projects,
            image: project.image_project.startsWith('http') 
              ? project.image_project 
              : `https://admin.victoryproduction98.com/uploads/projects/${project.image_project}`,
            category: project.categories_name,
            category_id: project.id_categories,
            isMain: project.is_main === "1" || project.is_main === 1,
            size: (project.is_main === "1" || project.is_main === 1) ? 'large' : 'small'
          }));
          
          console.log('useProjects - Transformed projects:', transformedProjects.slice(0, 2));
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
        
        // Set empty projects on error instead of keeping loading state
        setProjects([]);
      } finally {
        // setLoading(false); // Comment out to keep loading always false
      }
    };

    fetchProjects();
  }, []);

  return { projects, loading, error };
};

export default useProjects;
