import { IoIosArrowDropdown } from "react-icons/io";

export default function Hero() {
  return (
    <>
      {/* Hero Section */}
      <div className="hero min-h-screen px-4 md:px-8">
        <div className="hero-content text-center">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl sm:text-4xl sm:mb-1 md:mb-1 md:text-5xl lg:text-6xl text-black mb-5 font-bold">
              Victory{" "}
              <span className="bg-[#FF0000] text-white px-3 py-1 sm:px-4 sm:py-1 rounded-[15px] border-2 sm:border-4 border-dashed border-black">
                Production98
              </span>
            </h1>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-black mt-3 font-bold">
              Agency Creative Company
            </h1>
            <p className="py-4 sm:py-6 text-black mt-4 sm:mt-5 text-[12px] text-sm sm:text-base md:text-lg max-w-2xl">
              CV. SEMBILAN DELAPAN adalah agensi kreatif terpadu yang menghadirkan solusi <br className="hidden sm:block" /> 
              visual dan komunikasi efektif melalui strategi, produksi, dan inovasi kreatif.
            </p>
            <button className="px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base bg-[#FF0000] text-white rounded-3xl mt-6 sm:mt-10 hover:bg-[#cc0000] transition-colors flex items-center gap-2">
              Get in touch <IoIosArrowDropdown size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto mb-10 px-4">
        <div className="flex flex-row sm:flex-row flex-wrap items-center justify-center gap-8 sm:gap-[100px]">
          <div className="flex flex-col items-center space-y-1 sm:space-y-2">
            <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-black">
              50<span className="text-[#FF0000]">+</span>
            </div>
            <div className="text-black text-lg sm:text-xl font-bold">Projects</div>
          </div>
          <div className="flex flex-col items-center space-y-1 sm:space-y-2">
            <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-black">
              30K<span className="text-[#FF0000]">+</span>
            </div>
            <div className="text-black text-lg sm:text-xl font-bold">Participants</div>
          </div>
          <div className="flex flex-col items-center space-y-1 sm:space-y-2">
            <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-black">
              3<span className="text-[#FF0000]">+</span>
            </div>
            <div className="text-black text-lg sm:text-xl font-bold">Years</div>
          </div>
        </div>
      </div>
    </>
  );
}
