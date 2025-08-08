import image1 from "../assets/projects/project1.png"
import image2 from "../assets/projects/project2.png"
import image3 from "../assets/projects/project3.png"
import image4 from "../assets/projects/project4.png"
import image5 from "../assets/projects/project5.png"
import image6 from "../assets/projects/project6.png"
import image7 from "../assets/projects/project7.png"
import image8 from "../assets/projects/project8.png"
import image9 from "../assets/projects/project9.png"
import image10 from "../assets/projects/project10.png"
import ProjectImageLarge from "./ProjectImageLarge"
import ProjectImageSmall from "./ProjectImageSmall"


const projects = [
  {
    id: 1,
    title: "PERESMIAN (SOSIALISASI SARANA PRASARANA) GEDUNG BARU UNIVERSITAS TERBUKA MATARAM",
    location: "GEDUNG BARU UT, JALAN LINGKAR MATARAM",
    description: "EVENT KONSEP, EVENT PRODUCTION, 3D EVENT, SHOW MANAGEMENT, PRE EVENT MANAGEMENT PARTNER, VIP & TALENT MANAGEMENT,",
    image: image1,
    category: "Corporate",
    size: "large"
  },
  {
    id: 2,
    title: "PERESMIAN (SOSIALISASI SARANA PRASARANA) GEDUNG BARU UNIVERSITAS TERBUKA MATARAM",
    location: "GEDUNG BARU UT, JALAN LINGKAR MATARAM",
    description: "EVENT KONSEP, EVENT PRODUCTION, 3D EVENT, SHOW MANAGEMENT, PRE EVENT MANAGEMENT PARTNER, VIP & TALENT MANAGEMENT,",
    image: image2,
    category: "Corporate",
    size: "small"
  },
  {
    id: 3,
    title: "FAMILY GATHERING PT. INDOMOBIL CAHAYA PRIMA - MATARAM (HAPPY FAMILY - HAPPY COMPANY)",
    location: "GILI TRAWANGAN",
    description: "EVENT KONSEP, EVENT PRODUCTION, 3D EVENT, SHOW MANAGEMENT, PRE EVENT MANAGEMENT PARTNER, VIP & TALENT MANAGEMENT,",
    image: image3,
    category: "Corporate",
    size: "small"
  },
  {
    id: 4,
    title: "KOKO OLIMPIADE (KOKO CRUNCH) LOMBA MENGGAMBAR MEWARNAI SISWA SD SE-KOTA MATARAM",
    location: "GELANGGANG PEMUDA KOTA MATARAM",
    description: "EVENT PRODUCTION, MANAGEMENT, TALENT BUILDING CONSTRUCTION",
    image: image4,
    category: "Entertainment",
    size: "small"
  },
  {
    id: 5,
    title: "RAPAT KERJA DAERAH (KANVIL VI DENPASAR)",
    location: "HOTEL PRISM PARK, MATARAM",
    description: "EVENT PRODUCTION, DESIGN, EVENT MANAGEMENT",
    image: image5,
    category: "Corporate",
    size: "small"
  },
  {
    id: 6,
    title: "INTERFAITH DIALOGUE ON ENVIRONMENTAL ACTION (IDEA) VOICE OF PEACE",
    location: "GEDUNG PUSPA BAHASA NTB",
    description: "EVENT PRODUCTION, PLANNING, PRODUCTION MANAGEMENT, VENUE SETUP, TRANSPORTATION, AKOMODASI",
    image: image6,
    category: "Community",
    size: "small"
  },
  {
    id: 7,
    title: "KONSEP GIGI",
    location: "PRAYA MATARAM",
    description: "CONTENT PRODUCTION, EVENT PRODUCTION, EVENT PROMOTION, VENUE SETUP",
    image: image7,
    category: "Entertainment",
    size: "small"
  },
  {
    id: 8,
    title: "KOKO OLIMPIADE (KOKO CRUNCH) LOMBA MENGGAMBAR MEWARNAI SISWA SD SE-KOTA MATARAM",
    location: "GELANGGANG PEMUDA KOTA MATARAM",
    description: "EVENT PRODUCTION, MANAGEMENT, TALENT BUILDING CONSTRUCTION",
    image: image8,
    category: "Entertainment",
    size: "large"
  },
  {
    id: 9,
    title: "RAPAT KERJA DAERAH (KANVIL VI DENPASAR)",
    location: "HOTEL PRISM PARK, MATARAM",
    description: "EVENT PRODUCTION, DESIGN, EVENT MANAGEMENT",
    image: image9,
    category: "Corporate",
    size: "small"
  },
  {
    id: 10,
    title: "PERESMIAN (SOSIALISASI SARANA PRASARANA) GEDUNG BARU UNIVERSITAS TERBUKA MATARAM",
    location: "GEDUNG BARU UT, JALAN LINGKAR MATARAM",
    description: "EVENT KONSEP, EVENT PRODUCTION, 3D EVENT, SHOW MANAGEMENT, PRE EVENT MANAGEMENT PARTNER, VIP & TALENT MANAGEMENT,",
    image: image10,
    category: "Corporate",
    size: "small"
  }
]

export default function GroupProjects() {
  // Split projects into sections of 5
  const section1 = projects.slice(0, 5); // Projects 1-5
  const section2 = projects.slice(5, 10); // Projects 6-10

return (
    <div className="my-16">
        {/* Header */}
        {/* <div className="text-center py-12 px-4">
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-4">
                Recent Projects
            </h1>
            <p className="text-xl md:text-2xl text-gray-700">
                Victory Production
            </p>
        </div> */}

        <div className="max-w-7xl mx-auto px-4 pb-12 space-y-12">
            {/* Section 1: Large left, 4 small right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-[422px]">
                {/* Large image on left - 50% */}
                <ProjectImageLarge project={section1[0]} />

                {/* 4 small images on right - 50% (2x2 grid) */}
                <div className="grid grid-cols-2 grid-rows-2 gap-4 h-full">
                    {section1.slice(1).map((project) => (
                        <ProjectImageSmall key={project.id} project={project} />
                    ))}
                </div>
            </div>

            {/* section 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-[422px]">
                {/* 4 small images on left - 50% (2x2 grid) */}
                <div className="grid grid-cols-2 grid-rows-2 gap-4 h-full">
                    {section2.slice(1).map((project) => (
                        <ProjectImageSmall key={project.id} project={project} />
                    ))}
                </div>

                {/* Large image on right - 50% */}
                <ProjectImageLarge project={section2[0]} />
            </div>

            
        </div>
    </div>
)
}
