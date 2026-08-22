export const STUDIO_ASSETS = {
  logo: "/logo1.png",
  hero: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=85",
  library: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=85",
  stair: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85",
  villa: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
  apartment: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1400&q=85",
};

export const NAV_ITEMS = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Services", id: "services" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
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
    title: "The Malabar Villa",
    category: "Tropical Modern Residence",
    location: "Calicut, Kerala",
    area: "6,200 SQ.FT",
    year: "2025",
    scope: "Architecture & Interior",
    image: STUDIO_ASSETS.villa,
    className: "project-large",
  },
  {
    number: "02",
    title: "Vembanad Waterfront Estate",
    category: "Contemporary Courtyard Villa",
    location: "Kumarakom, Kerala",
    area: "8,500 SQ.FT",
    year: "2025",
    scope: "Full Spatial Design",
    image: STUDIO_ASSETS.stair,
    className: "project-tall",
  },
  {
    number: "03",
    title: "Marine Drive Penthouse",
    category: "Luxury Coastal Residence",
    location: "Kochi, Kerala",
    area: "4,400 SQ.FT",
    year: "2024",
    scope: "Bespoke Interiors",
    image: STUDIO_ASSETS.apartment,
    className: "project-wide",
  },
  {
    number: "04",
    title: "Travancore Pavilion",
    category: "Heritage Sanctuary",
    location: "Trivandrum, Kerala",
    area: "5,100 SQ.FT",
    year: "2024",
    scope: "Restoration & Modernism",
    image: STUDIO_ASSETS.library,
    className: "project-portrait",
  },
];

export const SERVICES = [
  "Tropical Modern Architecture",
  "Luxury Residential Interiors",
  "Courtyard & Landscape Integration",
  "Bespoke Teak & Joinery Craft",
  "Commercial & Hospitality Design",
] as const;

export const STUDIO_INFO = {
  email: "studio@redlineinteriors.in",
  phone: "+91 98470 54321",
  secondaryPhone: "+91 484 231 4567",
  address: {
    line1: "85 Panampilly Nagar, Main Avenue",
    line2: "Kochi, Kerala — 682036, India",
  },
  locations: ["Kochi", "Calicut", "Trivandrum", "Thrissur", "Kottayam", "Bangalore"],
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
