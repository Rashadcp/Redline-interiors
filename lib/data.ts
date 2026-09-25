export const STUDIO_ASSETS = {
  logo: "/logo1.png",
  hero: "/projects/living-cove-chandelier-lounge.jpg",
  
  // Kitchen Works (Commit b1d4916)
  kitchenChampagne: "/projects/kitchen-champagne-gloss.jpg",
  kitchenOlive: "/projects/kitchen-olive-matte.jpg",
  kitchenCharcoal: "/projects/kitchen-charcoal-gloss.jpg",
  kitchenSageIsland: "/projects/kitchen-sage-island.jpg",
  
  // Living Spaces (Commit b1d4916)
  livingFlutedConsole: "/projects/living-modern-fluted-console.jpg",
  livingChandelierLounge: "/projects/living-cove-chandelier-lounge.jpg",
  livingDualArtSectional: "/projects/living-dual-art-sectional.jpg",
  livingClassicalMolding: "/projects/living-classical-molding-warm.jpg",
  livingPartitionTv: "/projects/living-partition-tv-shelving.jpg",
  livingSymmetricalTv: "/projects/living-symmetrical-backlit-tv.jpg",
  livingCurvedJapandiTv: "/projects/living-curved-japandi-tv.jpg",
  livingParametricArchTv: "/projects/living-parametric-arch-tv.jpg",
  
  // Wash Counters & Vanities (Commit b1d4916)
  vanityGranitePendant: "/projects/vanity-granite-fluted-pendant.jpg",
  vanityUnderstairMarble: "/projects/vanity-understair-backlit-marble.jpg",
  vanityTimberAlcove: "/projects/vanity-timber-alcove-halo.jpg",
  vanityOrganicMirror: "/projects/vanity-organic-mirror-partition.jpg",

  // Bedroom Suites
  bedroomMasterSuite: "/projects/bedroom-master-suite-warm.jpg",

  // Dining Spaces & Breakfast Counters
  diningMarbleCounter: "/projects/dining-marble-breakfast-counter.jpg",

  // Legacy mappings directly replaced with high-res photos
  kitchen: "/projects/kitchen-champagne-gloss.jpg",
  living: "/projects/living-modern-fluted-console.jpg",
  bedroom: "/projects/bedroom-master-suite-warm.jpg",
  dining: "/projects/dining-marble-breakfast-counter.jpg",
  port5: "/projects/kitchen-olive-matte.jpg",
  port6: "/projects/living-dual-art-sectional.jpg",
  port7: "/projects/living-curved-japandi-tv.jpg",
  port9: "/projects/living-symmetrical-backlit-tv.jpg",
  port10: "/projects/kitchen-charcoal-gloss.jpg",
};

export const NAV_ITEMS = [
  { label: "Home", id: "home", href: "/" },
  { label: "About", id: "about", href: "/about" },
  { label: "Services", id: "services", href: "/services" },
  { label: "Projects", id: "projects", href: "/projects" },
  { label: "Contact", id: "contact", href: "/contact" },
] as const;

export type ProjectSection = "kitchen" | "living" | "vanity" | "bedroom" | "dining";

export interface ProjectItem {
  number: string;
  title: string;
  category: string;
  section: ProjectSection;
  location: string;
  area: string;
  year: string;
  scope: string;
  image: string;
  className: string;
}

export const PROJECT_SECTIONS = [
  {
    id: "kitchen" as const,
    label: "Modular Kitchens",
    tagline: "Ergonomic culinary architecture, premium acrylic & matte finishes, fluted oak joinery, and ambient illumination",
    count: 4,
  },
  {
    id: "living" as const,
    label: "Living Spaces",
    tagline: "Contemporary open layouts, bespoke media consoles, fluted wall accents, and warm ambient illumination",
    count: 8,
  },
  {
    id: "vanity" as const,
    label: "Wash Counters & Vanities",
    tagline: "Bespoke dining wash counters, halo-lit mirrors, fluted wood cladding, and luxury vessel basins",
    count: 4,
  },
];

export const PROJECTS: ProjectItem[] = [
  // --- KITCHEN SECTION (Featuring High-Resolution Works) ---
  {
    number: "01",
    title: "Champagne Gloss & Fluted Walnut Kitchen",
    category: "Modular Kitchen",
    section: "kitchen",
    location: "Calicut, Kerala",
    area: "340 SQ.FT",
    year: "2025",
    scope: "High-Gloss Champagne Acrylics, Fluted Walnut Wall Accents, Under-Cabinet Lighting & Garden Views",
    image: STUDIO_ASSETS.kitchenChampagne,
    className: "project-large",
  },
  {
    number: "02",
    title: "Nordic Olive & Slat-Wood Ceiling Kitchen",
    category: "Modular Kitchen",
    section: "kitchen",
    location: "Thalappara, Malappuram",
    area: "380 SQ.FT",
    year: "2025",
    scope: "Matte Olive Cabinetry, Fluted Oak Feature Ceiling, Integrated Black Quartz Sink & Smart Appliance Tower",
    image: STUDIO_ASSETS.kitchenOlive,
    className: "project-tall",
  },
  {
    number: "03",
    title: "Charcoal Slate & Dual-Tone Glass Front Kitchen",
    category: "Modular Kitchen",
    section: "kitchen",
    location: "Kochi, Kerala",
    area: "360 SQ.FT",
    year: "2025",
    scope: "High-Gloss Charcoal & White Dual-Tone Facades, Backlit Fluted Glass Display, Seamless Black Quartz",
    image: STUDIO_ASSETS.kitchenCharcoal,
    className: "project-wide",
  },
  {
    number: "04",
    title: "Earthy Sage Island Kitchen & Hanging Gantry",
    category: "Modular Kitchen",
    section: "kitchen",
    location: "Thrissur, Kerala",
    area: "420 SQ.FT",
    year: "2025",
    scope: "Central Island Breakfast Counter with Hob, Suspended Matte Black Exhaust Gantry, Open Display Plants",
    image: STUDIO_ASSETS.kitchenSageIsland,
    className: "project-large",
  },

  // --- LIVING SPACES SECTION (Featuring High-Resolution Works) ---
  {
    number: "05",
    title: "Modern Fluted TV Console & Ambient Lounge",
    category: "Living Architecture",
    section: "living",
    location: "Calicut, Kerala",
    area: "680 SQ.FT",
    year: "2025",
    scope: "Suspended Backlit Media Console, Vertical Fluted Oak Wall Panels, Sheer Linen Drapes & Cove Lighting",
    image: STUDIO_ASSETS.livingFlutedConsole,
    className: "project-large",
  },
  {
    number: "06",
    title: "Warm Minimalist Mood Lounge & Ring Chandelier",
    category: "Living Lounge",
    section: "living",
    location: "Kochi, Kerala",
    area: "740 SQ.FT",
    year: "2025",
    scope: "Curved Velvet Club Chairs, Recessed Fluted Wood Accent Walls, Double Ring Brass Chandelier & Marble Table",
    image: STUDIO_ASSETS.livingChandelierLounge,
    className: "project-tall",
  },
  {
    number: "07",
    title: "Dual Art Minimalist Sectional Living Suite",
    category: "Spatial Architecture",
    section: "living",
    location: "Malappuram, Kerala",
    area: "620 SQ.FT",
    year: "2025",
    scope: "Full-Height Backlit Display Bookcase, Custom Low-Profile Coffee Table, Dual Wall Sconces & Sectional Seating",
    image: STUDIO_ASSETS.livingDualArtSectional,
    className: "project-wide",
  },
  {
    number: "08",
    title: "Neo-Classical Molding & Warm Linen Living Room",
    category: "Living Space",
    section: "living",
    location: "Trivandrum, Kerala",
    area: "580 SQ.FT",
    year: "2025",
    scope: "Classical Wall Wainscoting Profiles, Brushed Brass Linear Sconces, Premium Italian Tile Flooring & Ambient Cove",
    image: STUDIO_ASSETS.livingClassicalMolding,
    className: "project-portrait",
  },
  {
    number: "09",
    title: "Open Partition TV Unit & Display Bookshelf",
    category: "Media Architecture",
    section: "living",
    location: "Thalappara, Malappuram",
    area: "650 SQ.FT",
    year: "2025",
    scope: "Floor-to-Ceiling Open Partition Divider with Warm LED Bookshelf & Suspended Console",
    image: STUDIO_ASSETS.livingPartitionTv,
    className: "project-large",
  },
  {
    number: "10",
    title: "Symmetrical Backlit TV Wall & Fluted Oak Niche",
    category: "Living Millwork",
    section: "living",
    location: "Calicut, Kerala",
    area: "720 SQ.FT",
    year: "2025",
    scope: "Texture Stone Backlit Feature Wall, Fluted Louver Accents, Tinted Glass Console & Vertical Sconces",
    image: STUDIO_ASSETS.livingSymmetricalTv,
    className: "project-wide",
  },
  {
    number: "11",
    title: "Curved Minimalist Japandi TV Console",
    category: "Living Architecture",
    section: "living",
    location: "Kochi, Kerala",
    area: "560 SQ.FT",
    year: "2025",
    scope: "Curved Corner Floating Joinery, Perimeter Halo Backlit Wall Paneling & Fluted Wood Detailing",
    image: STUDIO_ASSETS.livingCurvedJapandiTv,
    className: "project-tall",
  },
  {
    number: "12",
    title: "Parametric Halo Arch TV Feature Wall",
    category: "Spatial Architecture",
    section: "living",
    location: "Thrissur, Kerala",
    area: "690 SQ.FT",
    year: "2025",
    scope: "Sculptural 3D Geometric Arches, Concealed Linear LED Backlighting & Long Floating Walnut Bench",
    image: STUDIO_ASSETS.livingParametricArchTv,
    className: "project-large",
  },

  // --- WASH COUNTERS & VANITIES SECTION ---
  {
    number: "13",
    title: "Granite & Fluted Oak Floating Vanity",
    category: "Wash Counter",
    section: "vanity",
    location: "Calicut, Kerala",
    area: "120 SQ.FT",
    year: "2025",
    scope: "Textured Granite Feature Wall, Fluted Oak Vertical Slat Paneling, Charcoal Floating Vanity & Pendant Lights",
    image: STUDIO_ASSETS.vanityGranitePendant,
    className: "project-portrait",
  },
  {
    number: "14",
    title: "Under-Staircase Luxury Marble Wash Counter",
    category: "Bespoke Vanity",
    section: "vanity",
    location: "Thalappara, Malappuram",
    area: "140 SQ.FT",
    year: "2025",
    scope: "Custom Under-Stair Joinery, Marble Slab Countertop, Halo Backlit Round LED Mirror & Brass Cylindrical Sconces",
    image: STUDIO_ASSETS.vanityUnderstairMarble,
    className: "project-tall",
  },
  {
    number: "15",
    title: "Timber Alcove Dining Wash Counter Portal",
    category: "Dining Wash Area",
    section: "vanity",
    location: "Kochi, Kerala",
    area: "160 SQ.FT",
    year: "2025",
    scope: "Full Architectural Timber Portal Archway, Fluted Backing, Circular Backlit Mirror & Dual Amber Pendants",
    image: STUDIO_ASSETS.vanityTimberAlcove,
    className: "project-large",
  },
  {
    number: "16",
    title: "Organic Mirror & Partition Foyer Wash Counter",
    category: "Powder Vanity",
    section: "vanity",
    location: "Thrissur, Kerala",
    area: "150 SQ.FT",
    year: "2025",
    scope: "Freeform Asymmetrical Halo LED Mirror, Black Metal Slatted Divider with Indoor Plants & Quartz Top",
    image: STUDIO_ASSETS.vanityOrganicMirror,
    className: "project-tall",
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
  phone: "+91 80758 97986",
  displayPhone: "080758 97986",
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
