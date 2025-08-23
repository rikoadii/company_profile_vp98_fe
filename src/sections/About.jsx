import AboutCompany from "../components/AboutCompany"
import Introduction from "../components/Introduction"
import Event from "../components/Event"
import WhoWeAre from "../components/WhoWeAre"
import Marquee from "react-fast-marquee"
import { collabData } from "../data/collabData.js"
import useCenterImage from "../hooks/useCenterImage"

export default function About() {
  const { centerImage, loading, error, retryFetch } = useCenterImage();

  // Debug logging
  console.log('About.jsx - Center Image:', centerImage);
  console.log('About.jsx - Loading:', loading);
  console.log('About.jsx - Error:', error);

  return (
    <div className="py-10 md:py-20 w-full" id="about">
      <div className="container mx-auto md:px-0">
        <div className="flex flex-col lg:flex-row gap-4 md:gap-8">
          <div className="flex-1">
            <AboutCompany />
          </div>
          <div className="flex-1">
            <Introduction />
          </div>
        </div>
        <div className="relative mt-[-80px] md:mt-[-350px] lg:mt-[-467px] mb-8 md:mb-16 z-10">
          <div className="mx-auto max-w-4xl px-0 md:px-4">
            {loading ? (
              <div className="w-full h-64 bg-gray-200 animate-pulse md:rounded-tr-[30px] md:rounded-bl-[30px]" />
            ) : error ? (
              <div className="w-full p-4 bg-red-100 text-red-600 md:rounded-tr-[30px] md:rounded-bl-[30px] flex flex-col items-center">
                <p className="mb-2">{error}</p>
                <button 
                  onClick={retryFetch}
                  className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
                >
                  Retry
                </button>
              </div>
            ) : (
              <img
                src={centerImage?.full_image_url || "/placeholder.svg"}
                alt="Team Photo - CV. SEMBILAN DELAPAN"
                className="w-full h-auto md:h-[467px] shadow-lg object-cover md:rounded-tr-[30px] md:rounded-bl-[30px]"
                onError={(e) => {
                  e.target.src = "/placeholder.svg";
                }}
              />
            )}
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-4 md:gap-8">
          <div className="flex-1 mt-[-160px] md:mt-[-300px] lg:mt-[-530px]">
            <Event />
          </div>
          <div className="flex-1">
            <WhoWeAre />
          </div>
        </div>
      </div>
      <div className="mt-8 md:mt-16">
        <div className="text-center text-l text-black md:text-3xl font-bold mb-6 md:mb-12">
            <h2 className="">Kolaborasi Terpercaya</h2>
        </div>
        <Marquee speed={50} gradient={false}>
          {collabData.map((collab, index) => (
            <div key={index} className="flex items-center justify-center mx-2 md:mx-4">
              <img
                src={collab.image || "/placeholder.svg"}
                alt={collab.name}
                className="h-10 md:h-16 w-auto object-contain px-4 md:px-8"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  )
}
