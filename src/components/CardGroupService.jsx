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
            title: "3D Design",
            secondTitle: "Visualisasi Realistis & Presisi",
            content: "Pembuatan desain 3D untuk layout panggung, booth, dan area event lainnya. Membantu Anda melihat hasil akhir sebelum acara berlangsung."
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