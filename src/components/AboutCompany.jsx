import { socialMediaData } from "../data/socialMediaData";

export default function AboutCompany() {
  return (
    <div className="py-6 md:py-12">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-5xl">
        <div className="mb-6 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black">About Company</h2>
        </div>
        <div className="space-y-4 md:space-y-6">
          <p className="text-sm md:text-base lg:text-lg text-gray-700 text-justify leading-relaxed">
            CV. SEMBILAN DELAPAN adalah Agensi kreatif profesional yang menyediakan layanan terpadu. Kami menawarkan
            layanan yang mencakup perencanaan strategis, arah kreatif, produksi, manajemen acara, serta pengembangan
            interaktif.
          </p>
          <p className="text-sm md:text-base lg:text-lg text-gray-700 text-justify leading-relaxed">
            CV. SEMBILAN DELAPAN tidak hanya menghadirkan pengalaman visual yang luar biasa, tetapi juga selalu mencari
            cara kreatif untuk menyampaikan pesan Anda secara efektif kepada pelanggan.
          </p>
        </div>
        <div className="mt-4 md:mt-5 flex flex-row gap-2 md:gap-3">
          {socialMediaData.map((social) => (
            <a
              key={social.id}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-black text-gray-400 hover:bg-[#FF0000] transition-colors duration-300"
            >
              <social.icon size={16} className="md:w-5 md:h-5" color="white" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}