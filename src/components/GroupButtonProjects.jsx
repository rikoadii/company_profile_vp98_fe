import useCategories from "../hooks/useCategories";
import ButtonProjects from "./ButtonProjects";
import './GroupButtonProjects.css';
import ScrollAnimationWrapper from './ScrollAnimationWrapper';

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
        <ScrollAnimationWrapper animationType="scroll-fade-in">
            <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
                {/* Desktop Layout */}
                <div className="hidden md:flex flex-wrap justify-center items-center w-full gap-4">
                    {buttonsData.map((button, index) => (
                        <ScrollAnimationWrapper 
                            key={button.id}
                            animationType="scroll-scale" 
                            delay={index * 0.05}
                        >
                            <ButtonProjects 
                                text={button.text}
                                isActive={selectedCategory === button.id || selectedCategory === button.id.toString()}
                                onClick={() => handleCategoryClick(button.id)}
                            />
                        </ScrollAnimationWrapper>
                    ))}
                </div>

                {/* Mobile & Tablet Layout - Scrollable horizontal dengan hidden overflow */}
                <div className="md:hidden overflow-hidden">
                    <ScrollAnimationWrapper animationType="scroll-slide-left">
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
                    </ScrollAnimationWrapper>
                </div>
            </div>
        </ScrollAnimationWrapper>
    );
}