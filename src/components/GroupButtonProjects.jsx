import ButtonProjects from "./ButtonProjects"
import './GroupButtonProjects.css';

export default function GroupButtonProjects(){
    const buttonsData = [
        { text: "All Projects" },
        { text: "Corporate" },
        { text: "Entertainment" },
        { text: "Community" }
    ];

    return (
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
            {/* Desktop Layout */}
            <div className="hidden md:flex flex-wrap justify-center items-center w-full gap-4">
                {buttonsData.map((button, index) => (
                    <ButtonProjects key={index} text={button.text} />
                ))}
            </div>

            {/* Mobile & Tablet Layout - Scrollable horizontal dengan hidden overflow */}
            <div className="md:hidden overflow-hidden">
                <div className="flex gap-2 sm:gap-3 overflow-x-auto scrollbar-hide pb-2">
                    {buttonsData.map((button, index) => (
                        <div key={index} className="flex-shrink-0">
                            <ButtonProjects text={button.text} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}