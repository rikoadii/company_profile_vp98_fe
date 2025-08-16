import HeaderSection from "../components/HeaderSection";
import GroupButtonProjects from "../components/GroupButtonProjects";
import GroupProjects from "../components/GroupProjects";
import { projects } from "../data/projectsData.js";

export default function Projects() {
    return (
        <div className="w-full mt-8 sm:mt-12 md:mt-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-18 bg-white" id="projects">
            <HeaderSection 
                title="Recent Projects" 
                subtitle="Victory Production"
            />
            <div className="mt-6 sm:mt-8 md:mt-10">
                <GroupButtonProjects />
            </div>
            <GroupProjects projects={projects} />
        </div>
    );
}