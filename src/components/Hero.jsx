import { IoIosArrowDropdown } from "react-icons/io";

export default function Hero() {
  return (
    <>
      <div className="hero min-h-screen">
        <div className="hero-content text-center">
          <div className="flex flex-col items-center">
            <h1 className="text-6xl text-black mb-5 font-bold">Victory <span className="bg-[#FF0000] text-white px-4 py-1 rounded-[15px] border-4 border-dashed border-black">Production</span></h1>
            <h1 className="text-6xl text-black mt-3 font-bold">Agency Creative Company</h1>
            <p className="py-6 text-black mt-5 text-lg">CV. SEMBILAN SEMBILAN adalah agensi kreatif terpadu yang menghadirkan solusi <br /> visual dan komunikasi efektif melalui strategi, produksi, dan inovasi kreatif.</p>
            <button className="px-6 py-4 text-base bg-[#FF0000] text-white rounded-4xl mt-10 hover:bg-[#cc0000] transition-colors flex items-center gap-2">
              Get in touch <IoIosArrowDropdown size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        <div className="flex flex-row items-center justify-center gap-[100px]">
          <div className="flex flex-col items-center space-y-2">
            <div className="text-6xl font-bold text-black">50<span className="text-[#FF0000]">+</span></div>
            <div className="text-black text-xl font-bold">Projects</div>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <div className="text-6xl font-bold text-black">30K<span className="text-[#FF0000]">+</span></div>
            <div className="text-black text-xl font-bold">Participants</div>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <div className="text-6xl font-bold text-black">3<span className="text-[#FF0000]">+</span></div>
            <div className="text-black text-xl font-bold">Years</div>
          </div>
        </div>
      </div>
    </>
  );
}