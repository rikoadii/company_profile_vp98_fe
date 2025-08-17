import { useState, useMemo, useEffect } from 'react';

const useProjectFilter = (projects, categories = []) => {
  const [selectedCategory, setSelectedCategory] = useState('all'); // Default ke 'all'

  // Set "All Projects" sebagai default ketika categories loaded
  useEffect(() => {
    if (categories.length > 0 && selectedCategory === null) {
      setSelectedCategory('all');
    }
  }, [categories, selectedCategory]);

  // Filter projects berdasarkan category yang dipilih
  const filteredProjects = useMemo(() => {
    if (!projects || projects.length === 0) return [];
    
    // Jika "All Projects" dipilih, tampilkan semua projects
    if (selectedCategory === 'all') {
      return projects;
    }
    
    if (selectedCategory === null) {
      return []; // Don't show any projects until category is selected
    }
    
    // Filter berdasarkan category ID yang exact match
    return projects.filter(project => {
      // Check by category ID (primary method)
      const categoryId = project.category_id;
      
      // Convert selectedCategory to number for comparison
      const selectedCategoryNum = parseInt(selectedCategory);
      
      // Also check by category name as fallback (case insensitive)
      const categoryName = project.category?.toLowerCase();
      const selectedCategoryLower = selectedCategory.toString().toLowerCase();
      
      return categoryId === selectedCategoryNum || 
             categoryId === selectedCategory ||
             categoryName === selectedCategoryLower;
    });
  }, [projects, selectedCategory]);

  return {
    selectedCategory,
    setSelectedCategory,
    filteredProjects
  };
};

export default useProjectFilter;
