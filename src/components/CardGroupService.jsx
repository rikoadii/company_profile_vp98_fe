import CardService from "./CardService";


export default function CardGroupService(){
    return (
        <div className="w-full flex flex-wrap gap-4 flex-row">
            <CardService
  title="Event Consultant" 
  secondTitle="Strategi & Konsep Acara yang Terarah"
  content="Kami membantu merancang konsep acara dari awal termasuk tema, rundown, dan perencanaan teknis untuk memastikan acara Anda berjalan sukses."
/>
        <CardService 
  title="Prodcution" 
  secondTitle="Eksekusi Produksi Profesional"
  content="Layanan produksi lengkap: panggung, backdrop, lighting, audiovisual, dan kebutuhan teknis lainnya siap mewujudkan acara yang memukau."
/>
        <CardService 
  title="3D Design" 
  secondTitle="Visualisasi Realistis & Presisi"
  content="Pembuatan desain 3D untuk layout panggung, booth, dan area event lainnya. Membantu Anda melihat hasil akhir sebelum acara berlangsung."
/>
        </div>
    )
}