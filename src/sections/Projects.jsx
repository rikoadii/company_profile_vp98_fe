import HeaderSection from "../components/HeaderSection";
import GroupButtonProjects from "../components/GroupButtonProjects";
import GroupProjects from "../components/GroupProjects";

export default function Projects() {
    return (
        <div className="w-full mt-16 px-18">
            <HeaderSection 
                title="Recent Projects" 
                subtitle="Victory Production"
            />
            <GroupButtonProjects />
            <GroupProjects />
        </div>
    );
}