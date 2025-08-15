// Dynamic import images using object mapping
const importImages = () => {
  const images = {};
  for (let i = 1; i <= 10; i++) {
    images[`image${i}`] = new URL(`../assets/projects/project${i}.png`, import.meta.url).href;
  }
  return images;
};

const images = importImages();

export const projects = [
  {
    id: 1,
    title: "PERESMIAN (SOSIALISASI SARANA PRASARANA) GEDUNG BARU UNIVERSITAS TERBUKA MATARAM",
    location: "GEDUNG BARU UT, JALAN LINGKAR MATARAM",
    description: "EVENT KONSEP, EVENT PRODUCTION, 3D EVENT, SHOW MANAGEMENT, PRE EVENT MANAGEMENT PARTNER, VIP & TALENT MANAGEMENT,",
    image: images.image1,
    category: "Corporate",
    size: "large"
  },
  {
    id: 2,
    title: "PERESMIAN (SOSIALISASI SARANA PRASARANA) GEDUNG BARU UNIVERSITAS TERBUKA MATARAM",
    location: "GEDUNG BARU UT, JALAN LINGKAR MATARAM",
    description: "EVENT KONSEP, EVENT PRODUCTION, 3D EVENT, SHOW MANAGEMENT, PRE EVENT MANAGEMENT PARTNER, VIP & TALENT MANAGEMENT,",
    image: images.image2,
    category: "Corporate",
    size: "small"
  },
  {
    id: 3,
    title: "FAMILY GATHERING PT. INDOMOBIL CAHAYA PRIMA - MATARAM (HAPPY FAMILY - HAPPY COMPANY)",
    location: "GILI TRAWANGAN",
    description: "EVENT KONSEP, EVENT PRODUCTION, 3D EVENT, SHOW MANAGEMENT, PRE EVENT MANAGEMENT PARTNER, VIP & TALENT MANAGEMENT,",
    image: images.image3,
    category: "Corporate",
    size: "small"
  },
  {
    id: 4,
    title: "KOKO OLIMPIADE (KOKO CRUNCH) LOMBA MENGGAMBAR MEWARNAI SISWA SD SE-KOTA MATARAM",
    location: "GELANGGANG PEMUDA KOTA MATARAM",
    description: "EVENT PRODUCTION, MANAGEMENT, TALENT BUILDING CONSTRUCTION",
    image: images.image4,
    category: "Entertainment",
    size: "small"
  },
  {
    id: 5,
    title: "RAPAT KERJA DAERAH (KANVIL VI DENPASAR)",
    location: "HOTEL PRISM PARK, MATARAM",
    description: "EVENT PRODUCTION, DESIGN, EVENT MANAGEMENT",
    image: images.image5,
    category: "Corporate",
    size: "small"
  },
  {
    id: 6,
    title: "INTERFAITH DIALOGUE ON ENVIRONMENTAL ACTION (IDEA) VOICE OF PEACE",
    location: "GEDUNG PUSPA BAHASA NTB",
    description: "EVENT PRODUCTION, PLANNING, PRODUCTION MANAGEMENT, VENUE SETUP, TRANSPORTATION, AKOMODASI",
    image: images.image6,
    category: "Community",
    size: "small"
  },
  {
    id: 7,
    title: "KONSEP GIGI",
    location: "PRAYA MATARAM",
    description: "CONTENT PRODUCTION, EVENT PRODUCTION, EVENT PROMOTION, VENUE SETUP",
    image: images.image7,
    category: "Entertainment",
    size: "small"
  },
  {
    id: 8,
    title: "KOKO OLIMPIADE (KOKO CRUNCH) LOMBA MENGGAMBAR MEWARNAI SISWA SD SE-KOTA MATARAM",
    location: "GELANGGANG PEMUDA KOTA MATARAM",
    description: "EVENT PRODUCTION, MANAGEMENT, TALENT BUILDING CONSTRUCTION",
    image: images.image8,
    category: "Entertainment",
    size: "large"
  },
  {
    id: 9,
    title: "RAPAT KERJA DAERAH (KANVIL VI DENPASAR)",
    location: "HOTEL PRISM PARK, MATARAM",
    description: "EVENT PRODUCTION, DESIGN, EVENT MANAGEMENT",
    image: images.image9,
    category: "Corporate",
    size: "small"
  },
  {
    id: 10,
    title: "PERESMIAN (SOSIALISASI SARANA PRASARANA) GEDUNG BARU UNIVERSITAS TERBUKA MATARAM",
    location: "GEDUNG BARU UT, JALAN LINGKAR MATARAM",
    description: "EVENT KONSEP, EVENT PRODUCTION, 3D EVENT, SHOW MANAGEMENT, PRE EVENT MANAGEMENT PARTNER, VIP & TALENT MANAGEMENT,",
    image: images.image10,
    category: "Corporate",
    size: "small"
  }
]

export default projects
