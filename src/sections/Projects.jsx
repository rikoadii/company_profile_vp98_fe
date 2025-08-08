import HeaderSection from "../components/HeaderSection";
import GroupButtonProjects from "../components/GroupButtonProjects";
import GroupProjects from "../components/GroupProjects";
import { projects } from "../data/projectsData.js";

export default function Projects() {
    return (
        <div className="w-full mt-16 px-18 bg-white">
            <HeaderSection 
                title="Recent Projects" 
                subtitle="Victory Production"
            />
            <GroupButtonProjects />
            <GroupProjects projects={projects} />
        </div>
    );
}