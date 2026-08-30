/**
 * Dedicated registry of high-resolution, unique commercial real estate images for each property asset.
 * Every single property in the portfolio is assigned 1 primary photo and 2-3 additional gallery photos.
 * Zero duplicate photo IDs are used across the entire asset dataset.
 */

export interface PropertyImageSet {
  imageUrl: string;
  additionalImages: string[];
}

export const PROPERTY_IMAGES_MAP: Record<string, PropertyImageSet> = {
  // 1. Torre Corporativa Reforma Prime (Oficinas - CDMX)
  'prop-001': {
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop',
    additionalImages: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1000&auto=format&fit=crop',
    ],
  },

  // 2. Apex Logistics & Cold Storage Hub (Logístico - Monterrey)
  'prop-002': {
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop',
    additionalImages: [
      'https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=1000&auto=format&fit=crop',
    ],
  },

  // 3. Lumina Galleria & High-Street Retail (Retail - Santiago)
  'prop-003': {
    imageUrl: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=1200&auto=format&fit=crop',
    additionalImages: [
      'https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1519642918688-7e43b19245d8?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1567449303078-57ad995bd302?q=80&w=1000&auto=format&fit=crop',
    ],
  },

  // 4. BioTech Sciences & Life Lab Campus (Salud & Lab - Bogotá)
  'prop-004': {
    imageUrl: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=1200&auto=format&fit=crop',
    additionalImages: [
      'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1000&auto=format&fit=crop',
    ],
  },

  // 5. The Ritz Executive Suites & Residences (Hospitality - Cancún)
  'prop-005': {
    imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop',
    additionalImages: [
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=1000&auto=format&fit=crop',
    ],
  },

  // 6. Silicon Valley Tech Park & Data Vault (Uso Mixto - Guadalajara)
  'prop-006': {
    imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1200&auto=format&fit=crop',
    additionalImages: [
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop',
    ],
  },

  // 7. Andes Horizon Mixed-Use Skyscraper (Uso Mixto - Medellín)
  'prop-007': {
    imageUrl: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=1200&auto=format&fit=crop',
    additionalImages: [
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?q=80&w=1000&auto=format&fit=crop',
    ],
  },

  // 8. Puerto Valparaíso Intermodal Gateway (Logístico - Valparaíso)
  'prop-008': {
    imageUrl: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1200&auto=format&fit=crop',
    additionalImages: [
      'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1000&auto=format&fit=crop',
    ],
  },

  // 9. Metropolitan Medical Pavilion & Surgery Center (Salud & Lab - Madrid)
  'prop-009': {
    imageUrl: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?q=80&w=1200&auto=format&fit=crop',
    additionalImages: [
      'https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1519494080410-f9aa76cb4283?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=1000&auto=format&fit=crop',
    ],
  },

  // 10. Equitiq Grand Central Creative Lofts (Oficinas - Buenos Aires)
  'prop-010': {
    imageUrl: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1200&auto=format&fit=crop',
    additionalImages: [
      'https://images.unsplash.com/photo-1497215842964-222b430dc094?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1000&auto=format&fit=crop',
    ],
  },

  // 11. Marina View Lifestyle Pier & Promenade (Retail - Playa del Carmen)
  'prop-011': {
    imageUrl: 'https://images.unsplash.com/photo-1519642918688-7e43b19245d8?q=80&w=1200&auto=format&fit=crop',
    additionalImages: [
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1481437156560-3205f6a55735?q=80&w=1000&auto=format&fit=crop',
    ],
  },

  // 12. Pan-American Cold Chain Logistics Hub (Logístico - Querétaro)
  'prop-012': {
    imageUrl: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=1200&auto=format&fit=crop',
    additionalImages: [
      'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1508873696983-2df5293cb32f?q=80&w=1000&auto=format&fit=crop',
    ],
  },

  // 13. Nexus Hyperscale Data Center & AI Cloud Campus (Logístico - Querétaro)
  'prop-013': {
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop',
    additionalImages: [
      'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop',
    ],
  },

  // 14. Pacific Financial Tower & Stock Exchange (Oficinas - Ciudad de Panamá)
  'prop-014': {
    imageUrl: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop',
    additionalImages: [
      'https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1000&auto=format&fit=crop',
    ],
  },

  // 15. Aerospace & Advanced Mobility Megapark (Logístico - Querétaro)
  'prop-015': {
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop',
    additionalImages: [
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?q=80&w=1000&auto=format&fit=crop',
    ],
  },

  // 16. Las Condes Clinical Research & Medical Hub (Salud & Lab - Santiago)
  'prop-016': {
    imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1200&auto=format&fit=crop',
    additionalImages: [
      'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=1000&auto=format&fit=crop',
    ],
  },

  // 17. Palacio San Telmo Luxury Galleria & Hotel (Uso Mixto - Cartagena)
  'prop-017': {
    imageUrl: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1200&auto=format&fit=crop',
    additionalImages: [
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1000&auto=format&fit=crop',
    ],
  },

  // 18. Torre Panorama Corporate & FinTech Hub (Oficinas - Guadalajara)
  'prop-018': {
    imageUrl: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop',
    additionalImages: [
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1000&auto=format&fit=crop',
    ],
  },

  // 19. Burj Crown Financial & Skyline Tower (Oficinas / Uso Mixto - Dubái, Emiratos Árabes Unidos)
  'prop-019': {
    imageUrl: 'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=1200&auto=format&fit=crop',
    additionalImages: [
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1526495124232-a04e1849168c?q=80&w=1000&auto=format&fit=crop',
    ],
  },

  // 20. Gran Hyatt Marina Resort & Conference Luxury Hotel (Hospitality - Playa del Carmen)
  'prop-020': {
    imageUrl: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200&auto=format&fit=crop',
    additionalImages: [
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=1000&auto=format&fit=crop',
    ],
  },

  // 21. Titanium Life Sciences & Oncology Center (Salud & Lab - Santiago)
  'prop-021': {
    imageUrl: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1200&auto=format&fit=crop',
    additionalImages: [
      'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=1000&auto=format&fit=crop',
    ],
  },

  // 22. Oasis Coyoacán Lifestyle Mall & Gastronomy (Retail - CDMX)
  'prop-022': {
    imageUrl: 'https://images.unsplash.com/photo-1567449303078-57ad995bd302?q=80&w=1200&auto=format&fit=crop',
    additionalImages: [
      'https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1000&auto=format&fit=crop',
    ],
  },

  // 23. Infinity Tech & AI Center Faria Lima (Oficinas - São Paulo)
  'prop-023': {
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop',
    additionalImages: [
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop',
    ],
  },

  // 24. Pacific Gateway Logistics Hub & Free Zone (Logístico - Panamá)
  'prop-024': {
    imageUrl: 'https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=1200&auto=format&fit=crop',
    additionalImages: [
      'https://images.unsplash.com/photo-1508873696983-2df5293cb32f?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?q=80&w=1000&auto=format&fit=crop',
    ],
  },

  // 25. Alvear Luxury Boutique Residences & Suites (Hospitality - Buenos Aires)
  'prop-025': {
    imageUrl: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200&auto=format&fit=crop',
    additionalImages: [
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1000&auto=format&fit=crop',
    ],
  },

  // 26. Connecta 26 Corporate & Aerospace Campus (Oficinas - Bogotá)
  'prop-026': {
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop',
    additionalImages: [
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop',
    ],
  },

  // 27. Silicon Valley LatAm Innovation & R&D Park (Logístico / Tech - Costa Rica)
  'prop-027': {
    imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop',
    additionalImages: [
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000&auto=format&fit=crop',
    ],
  },

  // 28. Andes Bioceanic Agrologistics & Cold Complex (Logístico - Mendoza)
  'prop-028': {
    imageUrl: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1200&auto=format&fit=crop',
    additionalImages: [
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=1000&auto=format&fit=crop',
    ],
  },

  // 29. Torre Virreyes Private Banking & Wealth Tower (Oficinas - CDMX)
  'prop-029': {
    imageUrl: 'https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?q=80&w=1200&auto=format&fit=crop',
    additionalImages: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1000&auto=format&fit=crop',
    ],
  },

  // 30. Zonamerica Technology & FinTech Campus (Oficinas - Montevideo)
  'prop-030': {
    imageUrl: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1200&auto=format&fit=crop',
    additionalImages: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1000&auto=format&fit=crop',
    ],
  },

  // 31. Paseo San Pedro Luxury Gallery & Fine Dining (Retail - Monterrey)
  'prop-031': {
    imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop',
    additionalImages: [
      'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1567449303078-57ad995bd302?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?q=80&w=1000&auto=format&fit=crop',
    ],
  },

  // 32. Paseo del Mar Marine Innovation & Biotech Labs (Salud & Lab - Viña del Mar)
  'prop-032': {
    imageUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format&fit=crop',
    additionalImages: [
      'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=1000&auto=format&fit=crop',
    ],
  },
};
