import { useEffect, useState } from 'react';

const useChildProjects = (parentProjectId) => {
  const [childProjects, setChildProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalRecords, setTotalRecords] = useState(0);

  // Console log untuk debug
  console.log('useChildProjects - Received parentProjectId:', parentProjectId);
  console.log('useChildProjects - parentProjectId type:', typeof parentProjectId);

  useEffect(() => {
    // Skip fetching if no parent project ID is provided
    if (!parentProjectId) {
      console.log('useChildProjects - No parentProjectId provided, skipping fetch');
      setLoading(false);
      return;
    }

    const fetchChildProjects = async () => {
      try {
        setLoading(true);
        setError(null);

        const apiUrl = `https://admin.victoryproduction98.com/api/child_project.php?parent_project=${parentProjectId}`;
        console.log('useChildProjects - Fetching from URL:', apiUrl);
        
        const response = await fetch(apiUrl);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('useChildProjects - API Response:', data);
        
        if (data.success) {
          // Transform API data to match component structure
          const transformedChildProjects = data.data.map(childProject => ({
            id: childProject.id,
            parentId: childProject.id_parent_project,
            image: childProject.image,
            parentTitle: childProject.parent_title,
            parentDescription: childProject.parent_description,
            imageUrl: childProject.image_url,
            // Use full_image_url directly from API
            fullImageUrl: childProject.full_image_url
          }));
          
          console.log('useChildProjects - Transformed child projects:', transformedChildProjects);
          console.log('useChildProjects - Total records:', data.total_records);
          
          setChildProjects(transformedChildProjects);
          setTotalRecords(data.total_records || 0);
        } else {
          console.log('useChildProjects - API returned error:', data.message);
          throw new Error(data.message || 'Failed to fetch child projects');
        }
      } catch (err) {
        console.error('useChildProjects - Error fetching child projects:', err);
        setError(err.message);
        console.error('Error fetching child projects:', err);
        setChildProjects([]);
        setTotalRecords(0);
      } finally {
        setLoading(false);
      }
    };

    fetchChildProjects();
  }, [parentProjectId]);

  return { 
    childProjects, 
    loading, 
    error, 
    totalRecords 
  };
};

export default useChildProjects;