import ButtonProjects from "./ButtonProjects"
import useCategories from "../hooks/useCategories"
import './GroupButtonProjects.css';

export default function GroupButtonProjects({ selectedCategory, onCategoryChange }){
    const { categories, loading } = useCategories();

    // Show loading state with static buttons if categories are loading
    const buttonsData = loading ? [
        { id: 'all', text: "All Projects" },
        { id: 'corporate', text: "Corporate" },
        { id: 'entertainment', text: "Entertainment" },
        { id: 'community', text: "Community" }
    ] : categories.map(category => ({
        id: category.id,
        text: category.name_category
    }));

    const handleCategoryClick = (categoryId) => {
        if (onCategoryChange) {
            onCategoryChange(categoryId);
        }
    };

    return (
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
            {/* Desktop Layout */}
            <div className="hidden md:flex flex-wrap justify-center items-center w-full gap-4">
                {buttonsData.map((button) => (
                    <ButtonProjects 
                        key={button.id} 
                        text={button.text}
                        isActive={selectedCategory === button.id || selectedCategory === button.id.toString()}
                        onClick={() => handleCategoryClick(button.id)}
                    />
                ))}
            </div>

            {/* Mobile & Tablet Layout - Scrollable horizontal dengan hidden overflow */}
            <div className="md:hidden overflow-hidden">
                <div className="flex gap-2 sm:gap-3 overflow-x-auto scrollbar-hide pb-2">
                    {buttonsData.map((button) => (
                        <div key={button.id} className="flex-shrink-0">
                            <ButtonProjects 
                                text={button.text}
                                isActive={selectedCategory === button.id || selectedCategory === button.id.toString()}
                                onClick={() => handleCategoryClick(button.id)}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}