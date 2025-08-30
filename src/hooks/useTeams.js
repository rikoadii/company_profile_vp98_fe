import { useEffect, useState } from 'react';

const useTeams = () => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        setLoading(true);
        setError(null); // Reset error state
        
        const apiUrl = 'https://admin.victoryproduction98.com/api/teams.php';
        
        // Use regular fetch instead of cached fetch temporarily
        const response = await fetch(apiUrl);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (data.success) {
          // Transform API data to match component structure
          const transformedTeams = data.data.map(team => ({
            id: team.id,
            name: team.name,
            jabatan: team.role,
            // Handle image path - check if it's already a full URL or needs base URL
            image: team.profile.startsWith('https') 
              ? team.profile 
              : `https://admin.victoryproduction98.com/uploads/teams/${team.profile}`
          }));
          
          setTeams(transformedTeams);
        } else {
          throw new Error(data.message || 'Failed to fetch teams');
        }
      } catch (err) {
        setError(err.message);
        console.error('Error fetching teams:', err);
        
        // Set empty teams on error instead of keeping loading state
        setTeams([]);
      } finally {
        setLoading(false);
      }
    };

    fetchTeams();
  }, []);

  return { teams, loading, error };
};

export default useTeams;
