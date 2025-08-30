import { useState, useMemo, useEffect } from "react";

const useProjectFilter = (projects, categories = []) => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    if (categories.length > 0 && selectedCategory === null) {
      setSelectedCategory("all");
    }
  }, [categories, selectedCategory]);

  const filteredProjects = useMemo(() => {
    if (!projects || projects.length === 0) return [];

    if (selectedCategory === "all") {
      return projects;
    }

    if (selectedCategory === null) {
      return [];
    }

    return projects.filter((project) => {
      const categoryId = project.category_id;

      const selectedCategoryNum = parseInt(selectedCategory);

      const categoryName = project.category?.toLowerCase();
      const selectedCategoryLower = selectedCategory.toString().toLowerCase();

      return (
        categoryId === selectedCategoryNum ||
        categoryId === selectedCategory ||
        categoryName === selectedCategoryLower
      );
    });
  }, [projects, selectedCategory]);

  return {
    selectedCategory,
    setSelectedCategory,
    filteredProjects,
  };
};

export default useProjectFilter;
