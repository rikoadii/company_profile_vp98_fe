import { useState, useEffect } from 'react';

const useCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://localhost/be_vp98_php/api/categories.php');
        
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
          // Transform API categories dan tambahkan "All Projects" sebagai default
          const apiCategories = data.data.map(category => ({
            id: category.id_categories,
            name_category: category.categories_name,
            project_count: category.project_count
          }));
          
          // Add "All Projects" sebagai option pertama (default)
          const allCategories = [
            { id: 'all', name_category: 'All Projects' },
            ...apiCategories
          ];
          
          setCategories(allCategories);
        } else {
          throw new Error(data.message || 'Failed to fetch categories');
        }
      } catch (err) {
        // Fallback to static categories
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
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return { categories, loading, error };
};

export default useCategories;
