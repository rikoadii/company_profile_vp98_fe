import { useEffect, useState } from 'react';

const useCategories = () => {
  // Set default categories immediately
  const [categories, setCategories] = useState([
    { id: 'all', name_category: 'All Projects' },
    { id: 'corporate', name_category: 'Corporate' },
    { id: 'entertainment', name_category: 'Entertainment' },
    { id: 'community', name_category: 'Community' }
  ]);
  const [loading, setLoading] = useState(false); // Set to false to remove loading
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        // setLoading(true); // Comment out loading state
        setError(null); // Reset error state
        
        const apiUrl = 'https://admin.victoryproduction98.com/api/categories.php';
        
        // Use regular fetch instead of cached fetch temporarily
        const response = await fetch(apiUrl);
        
        if (!response.ok) {
          // Fallback to static categories if API fails
          const defaultCategories = [
            { id: 'all', name_category: 'All Projects' },
            { id: 'corporate', name_category: 'Corporate' },
            { id: 'entertainment', name_category: 'Entertainment' },
            { id: 'community', name_category: 'Community' }
          ];
          setCategories(defaultCategories);
          setLoading(false);
          return;
        }
        
        const data = await response.json();
        
        if (data.success && data.data) {
          const apiCategories = data.data.map(category => ({
            id: category.id_categories,
            name_category: category.categories_name,
            project_count: category.project_count
          }));

          const allCategories = [
            { id: 'all', name_category: 'All Projects' },
            ...apiCategories
          ];
          
          setCategories(allCategories);
        } else {
          throw new Error(data.message || 'Failed to fetch categories');
        }
      } catch (err) {
        // Fallback to static categories if API fails
        const defaultCategories = [
          { id: 'all', name_category: 'All Projects' },
          { id: 'corporate', name_category: 'Corporate' },
          { id: 'entertainment', name_category: 'Entertainment' },
          { id: 'community', name_category: 'Community' }
        ];
        setCategories(defaultCategories);
        setError(err.message);
        console.warn('Using fallback categories:', err);
      } finally {
        // setLoading(false); // Comment out to keep loading always false
      }
    };

    fetchCategories();
  }, []);

  return { categories, loading, error };
};

export default useCategories;
