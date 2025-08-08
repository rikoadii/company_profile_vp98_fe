import AboutCompany from "../components/AboutCompany";
import Introduction from "../components/Introduction";
import aboutImage from "../assets/about-v98.png";
import Event from "../components/Event";
import WhoWeAre from "../components/WhoWeAre";


export default function About() {
    return (
        <div className="py-20 bg-gray-50 w-full">
            <div className="container mx-auto">
                <div className="flex flex-row gap-8">
                    <div className="flex-1">
                        <AboutCompany />
                    </div>
                    <div className="flex-1">
                        <Introduction />
                    </div>
                </div>
                <div className="relative mt-[-467px] mb-16 z-10">
                    <div className="mx-auto max-w-4xl">
                        <img
                            src={aboutImage}
                            alt="Team Photo - CV. SEMBILAN DELAPAN"
                            className="w-full h-auto rounded-tr-[30px] rounded-bl-[30px] shadow-lg object-cover"
                        />
                    </div>
                </div>
                <div className="flex flex-row gap-8">
                    <div className="flex-1 mt-[-530px]">
                        <Event />
                    </div>
                    <div className="flex-1">
                        <WhoWeAre />
                    </div>
                </div>
            </div>
        </div>
    );
}
