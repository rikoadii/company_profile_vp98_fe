import HeaderSection from "../components/HeaderSection";
import GroupButtonProjects from "../components/GroupButtonProjects";
import GroupProjects from "../components/GroupProjects";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage";
import useProjects from "../hooks/useProjects";
import useProjectFilter from "../hooks/useProjectFilter";
import useCategories from "../hooks/useCategories";

export default function Projects() {
    const { projects, loading: projectsLoading, error: projectsError } = useProjects();
    const { categories, loading: categoriesLoading } = useCategories();
    const { selectedCategory, setSelectedCategory, filteredProjects } = useProjectFilter(projects, categories);

    const loading = projectsLoading || categoriesLoading;
    const error = projectsError;

    return (
        <div className="w-full mt-8 sm:mt-12 md:mt-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-18 bg-white" id="projects">
            <HeaderSection 
                title="Recent Projects" 
                subtitle="Victory Production"
            />
            <div className="mt-6 sm:mt-8 md:mt-10">
                <GroupButtonProjects 
                    selectedCategory={selectedCategory}
                    onCategoryChange={setSelectedCategory}
                />
            </div>
            
            {loading && <LoadingSpinner />}
            
            {error && (
                <ErrorMessage 
                    message={error} 
                    onRetry={() => window.location.reload()} 
                />
            )}
            
            {!loading && !error && (
                <>
                    {/* Show filtered projects or empty state */}
                    {filteredProjects.length > 0 ? (
                        <GroupProjects projects={filteredProjects} />
                    ) : (
                        <div className="my-16">
                            <div className="max-w-7xl mx-auto px-4 pb-12 text-center">
                                <div className="text-gray-400 mb-4">
                                    <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-700 mb-2">No Projects Found</h3>
                                <p className="text-gray-500">No projects available in this category</p>
                            </div>
                        </div>
                    )}
                </>
            )}
        </div>
    );
}