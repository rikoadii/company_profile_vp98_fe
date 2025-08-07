import ButtonProjects from "./ButtonProjects"


export default function GroupButtonProjects(){
    return (
        <div className="items-center text-center w-full">
            <ButtonProjects text="All Projects"/>
            <ButtonProjects text="Corporate"/>
            <ButtonProjects text="Entertainment"/>
            <ButtonProjects text="Community"/>
        </div>
    )
}