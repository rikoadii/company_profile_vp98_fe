import CardService from "./CardService";

export default function CardGroupService(){
    const servicesData = [
        {
            title: "Event Consultant",
            secondTitle: "Strategi & Konsep Acara yang Terarah",
            content: "Kami membantu merancang konsep acara dari awal termasuk tema, rundown, dan perencanaan teknis untuk memastikan acara Anda berjalan sukses."
        },
        {
            title: "Production",
            secondTitle: "Eksekusi Produksi Profesional",
            content: "Layanan produksi lengkap: panggung, backdrop, lighting, audiovisual, dan kebutuhan teknis lainnya siap mewujudkan acara yang memukau."
        },
        {
            title: "Design",
            secondTitle: "Kreativitas & Inovasi Visual",
            content: "Layanan desain komprehensif mulai dari konsep visual, branding event, hingga desain layout. Menciptakan identitas visual yang menarik dan sesuai dengan tema acara Anda."
        }
    ];

    return (
        <div className="w-full mt-6 sm:mt-8 md:mt-12">
            {/* Responsive Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                {servicesData.map((service, index) => (
                    <CardService
                        key={index}
                        title={service.title}
                        secondTitle={service.secondTitle}
                        content={service.content}
                    />
                ))}
            </div>
        </div>
    )
}