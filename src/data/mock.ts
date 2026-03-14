export interface Ad {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  location: string;
  date: string;
  sellerId: number;
  views: number;
  contacts: number;
  status: "active" | "paused" | "expired";
}

export interface Seller {
  id: number;
  company: string;
  location: string;
  memberSince: string;
  activeAds: number;
}

export const categories = [
  { name: "Matériel", icon: "🔧", color: "#2563EB" },
  { name: "Équipement", icon: "⚙️", color: "#7C3AED" },
  { name: "Fournitures", icon: "📦", color: "#059669" },
  { name: "Services", icon: "🤝", color: "#D97706" },
  { name: "Véhicules", icon: "🚛", color: "#DC2626" },
  { name: "Autres", icon: "📋", color: "#6B7280" },
];

export const sellers: Seller[] = [
  {
    id: 1,
    company: "Durand Industrie SAS",
    location: "Lyon (69)",
    memberSince: "Mars 2024",
    activeAds: 5,
  },
  {
    id: 2,
    company: "BTP Solutions SARL",
    location: "Marseille (13)",
    memberSince: "Janvier 2025",
    activeAds: 3,
  },
  {
    id: 3,
    company: "Équip'Pro France",
    location: "Paris (75)",
    memberSince: "Septembre 2024",
    activeAds: 4,
  },
];

export const ads: Ad[] = [
  {
    id: 1,
    title: "Chariot élévateur Toyota 2.5T — excellent état",
    description:
      "Chariot élévateur Toyota 8FGU25, capacité 2,5 tonnes. Moteur GPL, hauteur de levée 4,5 m. Entretien suivi, carnet à jour. Pneus neufs, batterie remplacée en 2024. Heures compteur : 3 200 h. Idéal pour entrepôt ou chantier. Livraison possible sur devis.",
    price: 12000,
    category: "Véhicules",
    location: "Lyon (69)",
    date: "12 mars 2026",
    sellerId: 1,
    views: 342,
    contacts: 18,
    status: "active",
  },
  {
    id: 2,
    title: "Lot de 50 chaises de bureau ergonomiques",
    description:
      "Lot de 50 chaises de bureau professionnelles, marque Steelcase modèle Leap V2. Assise tissu noir, accoudoirs réglables 4D, soutien lombaire ajustable. Utilisées 2 ans en open space, très bon état général. Vendu en lot uniquement. Retrait sur place ou transport à organiser.",
    price: 4500,
    category: "Équipement",
    location: "Paris (75)",
    date: "11 mars 2026",
    sellerId: 3,
    views: 189,
    contacts: 12,
    status: "active",
  },
  {
    id: 3,
    title: "Groupe électrogène diesel 100 kVA",
    description:
      "Groupe électrogène Caterpillar DE100E0, puissance 100 kVA / 80 kW. Moteur diesel Cat C4.4. Insonorisé, démarrage automatique. Compteur : 850 h. Révisé récemment, prêt à l'emploi. Parfait pour chantiers BTP ou alimentation de secours. Certificat de conformité fourni.",
    price: 18500,
    category: "Matériel",
    location: "Marseille (13)",
    date: "10 mars 2026",
    sellerId: 2,
    views: 276,
    contacts: 9,
    status: "active",
  },
  {
    id: 4,
    title: "Four professionnel à convection — boulangerie",
    description:
      "Four professionnel Bongard Cervap, 10 niveaux, gaz naturel. Capacité : 10 plaques 60×40 cm. Buée intégrée, programmateur digital. Révisé et nettoyé. Convient pour boulangerie, pâtisserie ou restauration collective. Manuel d'utilisation inclus.",
    price: 8900,
    category: "Équipement",
    location: "Toulouse (31)",
    date: "9 mars 2026",
    sellerId: 1,
    views: 134,
    contacts: 7,
    status: "active",
  },
  {
    id: 5,
    title: "Palette de parpaings creux 20×20×50 — 150 unités",
    description:
      "Palette complète de parpaings creux standard, dimensions 20×20×50 cm. 150 unités par palette. Norme NF. Stock disponible immédiatement : 12 palettes. Prix dégressif à partir de 3 palettes. Livraison possible Île-de-France et régions limitrophes.",
    price: 320,
    category: "Fournitures",
    location: "Créteil (94)",
    date: "8 mars 2026",
    sellerId: 3,
    views: 98,
    contacts: 4,
    status: "active",
  },
  {
    id: 6,
    title: "Nacelle élévatrice articulée 16 m",
    description:
      "Nacelle articulée Haulotte HA16RTJ PRO, hauteur de travail 16 m, déport 9,20 m. Diesel 4×4, pneus tout terrain. Heures : 2 100 h. Contrôle technique à jour, carnet d'entretien complet. Parfaite pour travaux en hauteur sur chantiers extérieurs.",
    price: 24000,
    category: "Véhicules",
    location: "Bordeaux (33)",
    date: "7 mars 2026",
    sellerId: 2,
    views: 215,
    contacts: 11,
    status: "active",
  },
  {
    id: 7,
    title: "Imprimante 3D industrielle Stratasys F370",
    description:
      "Imprimante 3D professionnelle Stratasys F370, technologie FDM. Volume d'impression : 355×254×355 mm. Matériaux compatibles : ABS, ASA, PC-ABS, TPU. Logiciel GrabCAD Print inclus. Faibles heures d'utilisation. Idéale pour prototypage rapide et petites séries.",
    price: 15000,
    category: "Matériel",
    location: "Grenoble (38)",
    date: "6 mars 2026",
    sellerId: 1,
    views: 412,
    contacts: 22,
    status: "active",
  },
  {
    id: 8,
    title: "Lot de 200 m² de rayonnage métallique industriel",
    description:
      "Rayonnage métallique galvanisé, hauteur 3 m, 5 niveaux. Charge par niveau : 300 kg. Lot complet pour équiper 200 m² d'entrepôt. Montage facile sans boulons (système clip). Démontage et enlèvement à la charge de l'acheteur.",
    price: 2400,
    category: "Équipement",
    location: "Lille (59)",
    date: "5 mars 2026",
    sellerId: 3,
    views: 156,
    contacts: 8,
    status: "active",
  },
  {
    id: 9,
    title: "Compresseur à vis 15 CV — Atlas Copco",
    description:
      "Compresseur à vis Atlas Copco GA15, puissance 15 CV / 11 kW. Débit : 2 100 l/min à 8 bar. Sécheur intégré, cuve 500 L. Compteur : 4 500 h. Entretien régulier chez concessionnaire agréé. Idéal atelier mécanique ou carrosserie.",
    price: 5800,
    category: "Matériel",
    location: "Nantes (44)",
    date: "4 mars 2026",
    sellerId: 2,
    views: 203,
    contacts: 14,
    status: "active",
  },
  {
    id: 10,
    title: "Chambre froide positive démontable 12 m³",
    description:
      "Chambre froide positive démontable, volume 12 m³ (3×2×2 m). Panneaux sandwich épaisseur 80 mm. Groupe froid Zanotti inclus, température +2°C à +8°C. Parfait état, utilisée 18 mois. Sol renforcé anti-dérapant. Conforme normes HACCP.",
    price: 3200,
    category: "Équipement",
    location: "Strasbourg (67)",
    date: "3 mars 2026",
    sellerId: 1,
    views: 167,
    contacts: 6,
    status: "active",
  },
  {
    id: 11,
    title: "Mini-pelle Kubota 3,5T avec godet",
    description:
      "Mini-pelle Kubota KX101-3, poids opérationnel 3,5 T. Moteur diesel Kubota V2403. Profondeur de fouille : 3,47 m. Godet 450 mm inclus. Heures : 1 800 h. Chenilles caoutchouc en bon état. Cabine fermée avec chauffage. Transport possible sur porte-engins.",
    price: 28000,
    category: "Véhicules",
    location: "Rennes (35)",
    date: "2 mars 2026",
    sellerId: 2,
    views: 389,
    contacts: 21,
    status: "active",
  },
  {
    id: 12,
    title: "Lot de consommables soudure MIG/MAG",
    description:
      "Lot complet de consommables pour soudure MIG/MAG : 10 bobines fil plein Ø 0,8 mm (15 kg chacune), 50 buses contact, 20 tubes contact, 5 diffuseurs gaz, 10 buses coniques. Marques Lincoln Electric et ESAB. Stock fin de série, prix imbattable.",
    price: 850,
    category: "Fournitures",
    location: "Metz (57)",
    date: "1 mars 2026",
    sellerId: 3,
    views: 94,
    contacts: 3,
    status: "active",
  },
];

export function getAd(id: number): Ad | undefined {
  return ads.find((a) => a.id === id);
}

export function getSeller(id: number): Seller | undefined {
  return sellers.find((s) => s.id === id);
}

export function formatPrice(price: number): string {
  return price.toLocaleString("fr-FR") + " €";
}
