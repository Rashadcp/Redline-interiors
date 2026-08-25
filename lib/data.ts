export const STUDIO_ASSETS = {
  logo: "/logo1.png",
  hero: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=85",
  kitchen: "/kitchen.jpg",
  living: "/living.png",
  bedroom: "/bedroom.jpg",
  dining: "/dining.png",
  port5: "/port5.jpg",
  port6: "/port6.webp",
  port7: "/port7.jpg",
  port9: "/port9.jpg",
  port10: "/port10.jpg",
};

export const NAV_ITEMS = [
  { label: "Home", id: "home", href: "/" },
  { label: "About", id: "about", href: "/about" },
  { label: "Services", id: "services", href: "/services" },
  { label: "Projects", id: "projects", href: "/projects" },
  { label: "Contact", id: "contact", href: "/contact" },
] as const;

export interface ProjectItem {
  number: string;
  title: string;
  category: string;
  location: string;
  area: string;
  year: string;
  scope: string;
  image: string;
  className: string;
}

export const PROJECTS: ProjectItem[] = [
  {
    number: "01",
    title: "Minimalist Modular Kitchen",
    category: "Kitchen Architecture",
    location: "Kochi, Kerala",
    area: "350 SQ.FT",
    year: "2025",
    scope: "Bespoke Joinery & Island Integration",
    image: STUDIO_ASSETS.kitchen,
    className: "project-large",
  },
  {
    number: "02",
    title: "Contemporary Open Living Area",
    category: "Living Space",
    location: "Calicut, Kerala",
    area: "800 SQ.FT",
    year: "2025",
    scope: "Full Spatial Design & Ambient Lighting",
    image: STUDIO_ASSETS.living,
    className: "project-tall",
  },
  {
    number: "03",
    title: "Luxury Master Bedroom Suite",
    category: "Bedroom Architecture",
    location: "Trivandrum, Kerala",
    area: "450 SQ.FT",
    year: "2024",
    scope: "Warm Minimalist Woodwork & Textures",
    image: STUDIO_ASSETS.bedroom,
    className: "project-wide",
  },
  {
    number: "04",
    title: "Bespoke Media Console & Lounge",
    category: "Living Millwork",
    location: "Kottayam, Kerala",
    area: "420 SQ.FT",
    year: "2025",
    scope: "Backlit Travertine & Fluted Oak Finish",
    image: STUDIO_ASSETS.port9,
    className: "project-portrait",
  },
  {
    number: "05",
    title: "Spanish Cocina & Breakfast Bar",
    category: "Modular Kitchen",
    location: "Bangalore, Karnataka",
    area: "380 SQ.FT",
    year: "2025",
    scope: "Fluted Terra Cotta & Walnut Cabinets",
    image: STUDIO_ASSETS.port10,
    className: "project-large",
  },
  {
    number: "06",
    title: "Elegant Fine Dining Space",
    category: "Dining Interior",
    location: "Thrissur, Kerala",
    area: "320 SQ.FT",
    year: "2024",
    scope: "Custom Teak Tables & Acoustic Paneling",
    image: STUDIO_ASSETS.dining,
    className: "project-tall",
  },
  {
    number: "07",
    title: "Warm Ambient Living Lounge",
    category: "Spatial Architecture",
    location: "Kochi, Kerala",
    area: "540 SQ.FT",
    year: "2024",
    scope: "Cove Lighting & Soft Linen Palette",
    image: STUDIO_ASSETS.port6,
    className: "project-wide",
  },
  {
    number: "08",
    title: "Serene Minimalist Bedroom",
    category: "Private Suite",
    location: "Calicut, Kerala",
    area: "480 SQ.FT",
    year: "2024",
    scope: "Integrated Wardrobe & Soft Oak Trim",
    image: STUDIO_ASSETS.port7,
    className: "project-portrait",
  },
];

export const SERVICES = [
  "Bespoke Modular Kitchens",
  "Living Room & Media Lounge Design",
  "Master & Guest Bedroom Suites",
  "Dining Spaces & Breakfast Counters",
  "Turnkey Inside-Home Interior Execution",
] as const;

export const STUDIO_INFO = {
  name: "Redline Interiors",
  category: "Interior Construction Contractor",
  rating: "5.0",
  reviewCount: "4 Reviews",
  phone: "+91 81369 40526",
  displayPhone: "081369 40526",
  hours: "Open · Closes 8:00 PM",
  address: {
    plusCode: "3WG3+H52",
    line1: "3WG3+H52, Moonniyur, Thalappara",
    line2: "Malappuram, Kerala — 676311, India",
    city: "Moonniyur, Thalappara",
    state: "Kerala",
    pincode: "676311",
    url: "https://maps.app.goo.gl/FgnbDU9m9Lf4jxb66?g_st=iwb",
  },
  socials: [
    { label: "Instagram", href: "#home" },
    { label: "Pinterest", href: "#home" },
    { label: "LinkedIn", href: "#home" },
  ],
  copyrightYear: 2026,
  developer: {
    name: "Winshine Infotech",
    url: "https://winshineinfotech.com",
  },
};
