import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";


export default function AboutCompany() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="mb-12">
          <h2 className="text-5xl font-bold text-black">About Company</h2>
        </div>

        <div className="space-y-6">
          <p className="text-lg text-gray-700 text-[16px] leading-relaxed">
            CV. SEMBILAN DELAPAN adalah Agensi kreatif profesional yang menyediakan layanan terpadu.
            Kami menawarkan layanan yang mencakup perencanaan strategis, arah kreatif, produksi,
            manajemen acara, serta pengembangan interaktif.
          </p>

          <p className="text-lg text-gray-700 text-[16px] leading-relaxed">
            CV. SEMBILAN DELAPAN tidak hanya menghadirkan pengalaman visual yang luar biasa,
            tetapi juga selalu mencari cara kreatif untuk menyampaikan pesan Anda secara efektif
            kepada pelanggan.
          </p>
        </div>
        <div className="mt-5 flex flex-row gap-3">
          <a
            href="#"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-black text-gray-400 hover:bg-[#FF0000] transition-colors duration-300"
          >
            <FaFacebookF size={20} color="white" />
          </a>
          <a
            href="#"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-black text-gray-400 hover:bg-[#FF0000] transition-colors duration-300"
          >
            <FaInstagram size={20} color="white" />
          </a>
          <a
            href="#"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-black text-gray-400 hover:bg-[#FF0000] transition-colors duration-300"
          >
            <FaTiktok size={20} color="white" />
          </a>
          <a
            href="#"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-black text-gray-400 hover:bg-[#FF0000] transition-colors duration-300"
          >
            <FaLinkedinIn size={20} color="white" />
          </a>
        </div>
      </div>
    </div>
  );
}