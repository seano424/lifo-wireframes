import { UrgentItem } from '../types'

// Helper to generate a date X days from now
const daysFromNow = (days: number): string => {
  const date = new Date()
  date.setDate(date.getDate() + days)
  return date.toISOString().split('T')[0]
}

// Helper to generate a deterministic SKU based on product id
const generateSKU = (prefix: string, size: string, id: number): string => {
  const paddedId = id.toString().padStart(3, '0')
  return `${prefix}-${size}-${paddedId}`
}

export const mockProducts: UrgentItem[] = [
  // URGENT ITEMS (5 packaged products expiring in 2 days)
  {
    id: 1,
    name: 'Corn Flakes',
    brand: "Kellogg's",
    packageSize: '500g',
    sku: generateSKU('KF', '500', 1),
    expires: '2 days',
    stock: 12,
    score: 1,
    action: '50% OFF',
    color: 'red',
    thumbnail: '🌽',
    cost: '$4.99',
    totalValue: '$59.88',
    category: 'Packaged Goods'
  },
  {
    id: 2,
    name: 'Canned Tomatoes',
    brand: "Hunt's",
    packageSize: '400g',
    sku: generateSKU('HT', '400', 2),
    expires: '2 days',
    stock: 8,
    score: 1,
    action: 'DONATE',
    color: 'red',
    thumbnail: '🥫',
    cost: '$2.99',
    totalValue: '$23.92',
    category: 'Canned Goods'
  },
  {
    id: 3,
    name: 'Pasta Spaghetti',
    brand: 'Barilla',
    packageSize: '500g',
    sku: generateSKU('BS', '500', 3),
    expires: '2 days',
    stock: 15,
    score: 2,
    action: '40% OFF',
    color: 'red',
    thumbnail: '🍝',
    cost: '$3.49',
    totalValue: '$52.35',
    category: 'Packaged Goods'
  },
  {
    id: 4,
    name: 'Rice Cakes',
    brand: 'Quaker',
    packageSize: '200g',
    sku: generateSKU('QR', '200', 4),
    expires: '2 days',
    stock: 20,
    score: 1,
    action: '30% OFF',
    color: 'red',
    thumbnail: '🍘',
    cost: '$2.49',
    totalValue: '$49.80',
    category: 'Snacks'
  },
  {
    id: 5,
    name: 'Crackers',
    brand: 'Ritz',
    packageSize: '300g',
    sku: generateSKU('RC', '300', 5),
    expires: '2 days',
    stock: 10,
    score: 2,
    action: '25% OFF',
    color: 'red',
    thumbnail: '🍘',
    cost: '$3.99',
    totalValue: '$39.90',
    category: 'Snacks'
  },

  // WATCH LIST ITEMS (12 packaged products expiring this week)
  {
    id: 6,
    name: 'Bottled Water',
    brand: 'Aquafina',
    packageSize: '500ml',
    sku: generateSKU('AQ', '500', 6),
    expires: '3 days',
    stock: 24,
    score: 3,
    action: 'FRONT',
    color: 'yellow',
    thumbnail: '💧',
    cost: '$1.99',
    totalValue: '$47.76',
    category: 'Beverages'
  },
  {
    id: 7,
    name: 'Frozen Pizza',
    brand: 'DiGiorno',
    packageSize: '300g',
    sku: generateSKU('DG', '300', 7),
    expires: '4 days',
    stock: 15,
    score: 4,
    action: '25% OFF',
    color: 'yellow',
    thumbnail: '🍕',
    cost: '$6.99',
    totalValue: '$104.85',
    category: 'Frozen Foods'
  },
  {
    id: 8,
    name: 'Cereal Bars',
    brand: 'Nature Valley',
    packageSize: '200g',
    sku: generateSKU('NV', '200', 8),
    expires: '5 days',
    stock: 18,
    score: 3,
    action: 'FRONT',
    color: 'yellow',
    thumbnail: '🍪',
    cost: '$3.49',
    totalValue: '$62.82',
    category: 'Snacks'
  },
  {
    id: 9,
    name: 'Canned Soup',
    brand: 'Campbell\'s',
    packageSize: '400g',
    sku: generateSKU('CS', '400', 9),
    expires: '6 days',
    stock: 12,
    score: 4,
    action: '20% OFF',
    color: 'yellow',
    thumbnail: '🥫',
    cost: '$2.99',
    totalValue: '$35.88',
    category: 'Canned Goods'
  },
  {
    id: 10,
    name: 'Pasta Sauce',
    brand: 'Prego',
    packageSize: '500g',
    sku: generateSKU('PS', '500', 10),
    expires: '7 days',
    stock: 8,
    score: 3,
    action: 'FRONT',
    color: 'yellow',
    thumbnail: '🥫',
    cost: '$3.99',
    totalValue: '$31.92',
    category: 'Canned Goods'
  },
  {
    id: 11,
    name: 'Crackers',
    brand: 'Triscuit',
    packageSize: '250g',
    sku: generateSKU('TC', '250', 11),
    expires: '4 days',
    stock: 14,
    score: 4,
    action: '15% OFF',
    color: 'yellow',
    thumbnail: '🍘',
    cost: '$3.49',
    totalValue: '$48.86',
    category: 'Snacks'
  },
  {
    id: 12,
    name: 'Granola Bars',
    brand: 'Kind',
    packageSize: '180g',
    sku: generateSKU('KB', '180', 12),
    expires: '5 days',
    stock: 20,
    score: 3,
    action: 'FRONT',
    color: 'yellow',
    thumbnail: '🍪',
    cost: '$4.99',
    totalValue: '$99.80',
    category: 'Snacks'
  },
  {
    id: 13,
    name: 'Canned Beans',
    brand: 'Bush\'s',
    packageSize: '400g',
    sku: generateSKU('BB', '400', 13),
    expires: '6 days',
    stock: 16,
    score: 4,
    action: '10% OFF',
    color: 'yellow',
    thumbnail: '🥫',
    cost: '$2.49',
    totalValue: '$39.84',
    category: 'Canned Goods'
  },
  {
    id: 14,
    name: 'Chips',
    brand: 'Lay\'s',
    packageSize: '200g',
    sku: generateSKU('LC', '200', 14),
    expires: '7 days',
    stock: 24,
    score: 3,
    action: 'FRONT',
    color: 'yellow',
    thumbnail: '🥔',
    cost: '$2.99',
    totalValue: '$71.76',
    category: 'Snacks'
  },
  {
    id: 15,
    name: 'Cereal',
    brand: 'Cheerios',
    packageSize: '500g',
    sku: generateSKU('CC', '500', 15),
    expires: '4 days',
    stock: 10,
    score: 4,
    action: '20% OFF',
    color: 'yellow',
    thumbnail: '🌾',
    cost: '$4.49',
    totalValue: '$44.90',
    category: 'Packaged Goods'
  },
  {
    id: 16,
    name: 'Crackers',
    brand: 'Wheat Thins',
    packageSize: '250g',
    sku: generateSKU('WT', '250', 16),
    expires: '5 days',
    stock: 12,
    score: 3,
    action: 'FRONT',
    color: 'yellow',
    thumbnail: '🍘',
    cost: '$3.29',
    totalValue: '$39.48',
    category: 'Snacks'
  },
  {
    id: 17,
    name: 'Canned Tuna',
    brand: 'Starkist',
    packageSize: '150g',
    sku: generateSKU('ST', '150', 17),
    expires: '6 days',
    stock: 15,
    score: 4,
    action: '15% OFF',
    color: 'yellow',
    thumbnail: '🐟',
    cost: '$2.99',
    totalValue: '$44.85',
    category: 'Canned Goods'
  },

  // HEALTHY ITEMS (48 packaged products in good condition)
  {
    id: 18,
    name: 'Pasta',
    brand: 'Barilla',
    packageSize: '500g',
    sku: generateSKU('BP', '500', 18),
    expires: '30 days',
    stock: 25,
    score: 8,
    action: 'NONE',
    color: 'green',
    thumbnail: '🍝',
    cost: '$2.99',
    totalValue: '$74.75',
    category: 'Packaged Goods'
  },
  {
    id: 19,
    name: 'Cereal',
    brand: 'Special K',
    packageSize: '500g',
    sku: generateSKU('SK', '500', 19),
    expires: '45 days',
    stock: 20,
    score: 9,
    action: 'NONE',
    color: 'green',
    thumbnail: '🌾',
    cost: '$4.99',
    totalValue: '$99.80',
    category: 'Packaged Goods'
  },
  {
    id: 20,
    name: 'Crackers',
    brand: 'Saltines',
    packageSize: '400g',
    sku: generateSKU('SC', '400', 20),
    expires: '60 days',
    stock: 30,
    score: 8,
    action: 'NONE',
    color: 'green',
    thumbnail: '🍘',
    cost: '$2.49',
    totalValue: '$74.70',
    category: 'Snacks'
  },
  {
    id: 21,
    name: 'Rice',
    brand: 'Uncle Ben\'s',
    packageSize: '1kg',
    sku: generateSKU('UB', '1000', 21),
    expires: '90 days',
    stock: 40,
    score: 9,
    action: 'NONE',
    color: 'green',
    thumbnail: '🍚',
    cost: '$5.99',
    totalValue: '$239.60',
    category: 'Packaged Goods'
  },
  {
    id: 22,
    name: 'Canned Corn',
    brand: 'Green Giant',
    packageSize: '400g',
    sku: generateSKU('GC', '400', 22),
    expires: '365 days',
    stock: 50,
    score: 9,
    action: 'NONE',
    color: 'green',
    thumbnail: '🌽',
    cost: '$1.99',
    totalValue: '$99.50',
    category: 'Canned Goods'
  },
  {
    id: 23,
    name: 'Pasta Sauce',
    brand: 'Ragu',
    packageSize: '500g',
    sku: generateSKU('RS', '500', 23),
    expires: '180 days',
    stock: 35,
    score: 8,
    action: 'NONE',
    color: 'green',
    thumbnail: '🥫',
    cost: '$3.49',
    totalValue: '$122.15',
    category: 'Canned Goods'
  },
  {
    id: 24,
    name: 'Cereal',
    brand: 'Cheerios',
    packageSize: '500g',
    sku: generateSKU('CC', '500', 24),
    expires: '120 days',
    stock: 45,
    score: 9,
    action: 'NONE',
    color: 'green',
    thumbnail: '🌾',
    cost: '$4.49',
    totalValue: '$202.05',
    category: 'Packaged Goods'
  },
  {
    id: 25,
    name: 'Crackers',
    brand: 'Ritz',
    packageSize: '300g',
    sku: generateSKU('RC', '300', 25),
    expires: '150 days',
    stock: 60,
    score: 8,
    action: 'NONE',
    color: 'green',
    thumbnail: '🍘',
    cost: '$3.99',
    totalValue: '$239.40',
    category: 'Snacks'
  },
  {
    id: 26,
    name: 'Canned Tuna',
    brand: 'Bumble Bee',
    packageSize: '150g',
    sku: generateSKU('BT', '150', 26),
    expires: '365 days',
    stock: 75,
    score: 9,
    action: 'NONE',
    color: 'green',
    thumbnail: '🐟',
    cost: '$2.49',
    totalValue: '$186.75',
    category: 'Canned Goods'
  },
  {
    id: 27,
    name: 'Pasta',
    brand: 'De Cecco',
    packageSize: '500g',
    sku: generateSKU('DP', '500', 27),
    expires: '180 days',
    stock: 55,
    score: 8,
    action: 'NONE',
    color: 'green',
    thumbnail: '🍝',
    cost: '$3.29',
    totalValue: '$180.95',
    category: 'Packaged Goods'
  },
  {
    id: 28,
    name: 'Cereal',
    brand: 'Frosted Flakes',
    packageSize: '500g',
    sku: generateSKU('FF', '500', 28),
    expires: '120 days',
    stock: 40,
    score: 9,
    action: 'NONE',
    color: 'green',
    thumbnail: '🌾',
    cost: '$4.99',
    totalValue: '$199.60',
    category: 'Packaged Goods'
  },
  {
    id: 29,
    name: 'Crackers',
    brand: 'Wheat Thins',
    packageSize: '250g',
    sku: generateSKU('WT', '250', 29),
    expires: '150 days',
    stock: 65,
    score: 8,
    action: 'NONE',
    color: 'green',
    thumbnail: '🍘',
    cost: '$3.29',
    totalValue: '$213.85',
    category: 'Snacks'
  },
  {
    id: 30,
    name: 'Canned Beans',
    brand: 'Bush\'s',
    packageSize: '400g',
    sku: generateSKU('BB', '400', 30),
    expires: '365 days',
    stock: 80,
    score: 9,
    action: 'NONE',
    color: 'green',
    thumbnail: '🥫',
    cost: '$2.49',
    totalValue: '$199.20',
    category: 'Canned Goods'
  },
  {
    id: 31,
    name: 'Pasta',
    brand: 'Mueller\'s',
    packageSize: '500g',
    sku: generateSKU('MP', '500', 31),
    expires: '180 days',
    stock: 70,
    score: 8,
    action: 'NONE',
    color: 'green',
    thumbnail: '🍝',
    cost: '$2.99',
    totalValue: '$209.30',
    category: 'Packaged Goods'
  },
  {
    id: 32,
    name: 'Cereal',
    brand: 'Raisin Bran',
    packageSize: '500g',
    sku: generateSKU('RB', '500', 32),
    expires: '120 days',
    stock: 45,
    score: 9,
    action: 'NONE',
    color: 'green',
    thumbnail: '🌾',
    cost: '$4.49',
    totalValue: '$202.05',
    category: 'Packaged Goods'
  },
  {
    id: 33,
    name: 'Crackers',
    brand: 'Triscuit',
    packageSize: '250g',
    sku: generateSKU('TC', '250', 33),
    expires: '150 days',
    stock: 55,
    score: 8,
    action: 'NONE',
    color: 'green',
    thumbnail: '🍘',
    cost: '$3.49',
    totalValue: '$191.95',
    category: 'Snacks'
  },
  {
    id: 34,
    name: 'Canned Soup',
    brand: 'Progresso',
    packageSize: '400g',
    sku: generateSKU('PS', '400', 34),
    expires: '365 days',
    stock: 90,
    score: 9,
    action: 'NONE',
    color: 'green',
    thumbnail: '🥫',
    cost: '$2.99',
    totalValue: '$269.10',
    category: 'Canned Goods'
  },
  {
    id: 35,
    name: 'Pasta',
    brand: 'San Giorgio',
    packageSize: '500g',
    sku: generateSKU('SP', '500', 35),
    expires: '180 days',
    stock: 60,
    score: 8,
    action: 'NONE',
    color: 'green',
    thumbnail: '🍝',
    cost: '$2.79',
    totalValue: '$167.40',
    category: 'Packaged Goods'
  },
  {
    id: 36,
    name: 'Cereal',
    brand: 'Honey Nut Cheerios',
    packageSize: '500g',
    sku: generateSKU('HC', '500', 36),
    expires: '120 days',
    stock: 50,
    score: 9,
    action: 'NONE',
    color: 'green',
    thumbnail: '🌾',
    cost: '$4.99',
    totalValue: '$249.50',
    category: 'Packaged Goods'
  },
  {
    id: 37,
    name: 'Crackers',
    brand: 'Goldfish',
    packageSize: '200g',
    sku: generateSKU('GF', '200', 37),
    expires: '150 days',
    stock: 85,
    score: 8,
    action: 'NONE',
    color: 'green',
    thumbnail: '🍘',
    cost: '$2.99',
    totalValue: '$254.15',
    category: 'Snacks'
  },
  {
    id: 38,
    name: 'Canned Vegetables',
    brand: 'Del Monte',
    packageSize: '400g',
    sku: generateSKU('DV', '400', 38),
    expires: '365 days',
    stock: 95,
    score: 9,
    action: 'NONE',
    color: 'green',
    thumbnail: '🥫',
    cost: '$1.99',
    totalValue: '$189.05',
    category: 'Canned Goods'
  },
  {
    id: 39,
    name: 'Pasta',
    brand: 'Ronzoni',
    packageSize: '500g',
    sku: generateSKU('RP', '500', 39),
    expires: '180 days',
    stock: 75,
    score: 8,
    action: 'NONE',
    color: 'green',
    thumbnail: '🍝',
    cost: '$2.69',
    totalValue: '$201.75',
    category: 'Packaged Goods'
  },
  {
    id: 40,
    name: 'Cereal',
    brand: 'Cinnamon Toast Crunch',
    packageSize: '500g',
    sku: generateSKU('CT', '500', 40),
    expires: '120 days',
    stock: 55,
    score: 9,
    action: 'NONE',
    color: 'green',
    thumbnail: '🌾',
    cost: '$4.99',
    totalValue: '$274.45',
    category: 'Packaged Goods'
  },
  {
    id: 41,
    name: 'Crackers',
    brand: 'Cheez-It',
    packageSize: '250g',
    sku: generateSKU('CI', '250', 41),
    expires: '150 days',
    stock: 70,
    score: 8,
    action: 'NONE',
    color: 'green',
    thumbnail: '🍘',
    cost: '$3.29',
    totalValue: '$230.30',
    category: 'Snacks'
  },
  {
    id: 42,
    name: 'Canned Fruit',
    brand: 'Dole',
    packageSize: '400g',
    sku: generateSKU('DF', '400', 42),
    expires: '365 days',
    stock: 100,
    score: 9,
    action: 'NONE',
    color: 'green',
    thumbnail: '🥫',
    cost: '$2.49',
    totalValue: '$249.00',
    category: 'Canned Goods'
  },
  {
    id: 43,
    name: 'Pasta',
    brand: 'Colavita',
    packageSize: '500g',
    sku: generateSKU('CP', '500', 43),
    expires: '180 days',
    stock: 80,
    score: 8,
    action: 'NONE',
    color: 'green',
    thumbnail: '🍝',
    cost: '$2.89',
    totalValue: '$231.20',
    category: 'Packaged Goods'
  },
  {
    id: 44,
    name: 'Cereal',
    brand: 'Fruit Loops',
    packageSize: '500g',
    sku: generateSKU('FL', '500', 44),
    expires: '120 days',
    stock: 60,
    score: 9,
    action: 'NONE',
    color: 'green',
    thumbnail: '🌾',
    cost: '$4.99',
    totalValue: '$299.40',
    category: 'Packaged Goods'
  },
  {
    id: 45,
    name: 'Crackers',
    brand: 'Triscuit',
    packageSize: '250g',
    sku: generateSKU('TT', '250', 45),
    expires: '150 days',
    stock: 75,
    score: 8,
    action: 'NONE',
    color: 'green',
    thumbnail: '🍘',
    cost: '$3.49',
    totalValue: '$261.75',
    category: 'Snacks'
  },
  {
    id: 46,
    name: 'Canned Soup',
    brand: 'Campbell\'s',
    packageSize: '400g',
    sku: generateSKU('CS', '400', 46),
    expires: '365 days',
    stock: 110,
    score: 9,
    action: 'NONE',
    color: 'green',
    thumbnail: '🥫',
    cost: '$2.99',
    totalValue: '$328.90',
    category: 'Canned Goods'
  },
  {
    id: 47,
    name: 'Pasta',
    brand: 'Rummo',
    packageSize: '500g',
    sku: generateSKU('RP', '500', 47),
    expires: '180 days',
    stock: 85,
    score: 8,
    action: 'NONE',
    color: 'green',
    thumbnail: '🍝',
    cost: '$2.99',
    totalValue: '$254.15',
    category: 'Packaged Goods'
  },
  {
    id: 48,
    name: 'Cereal',
    brand: 'Lucky Charms',
    packageSize: '500g',
    sku: generateSKU('LC', '500', 48),
    expires: '120 days',
    stock: 65,
    score: 9,
    action: 'NONE',
    color: 'green',
    thumbnail: '🌾',
    cost: '$4.99',
    totalValue: '$324.35',
    category: 'Packaged Goods'
  },
  // Add some fresh items
  {
    id: 49,
    name: 'Greek Yogurt',
    brand: 'Chobani',
    packageSize: '600g',
    sku: generateSKU('CY', '600', 49),
    expires: '7 days',
    stock: 15,
    score: 3,
    action: 'FRONT',
    color: 'yellow',
    thumbnail: '🥛',
    cost: '$4.99',
    totalValue: '$74.85',
    category: 'Dairy'
  },
  {
    id: 50,
    name: 'White Bread',
    brand: 'Local Bakery',
    packageSize: '400g',
    sku: generateSKU('LB', '400', 50),
    expires: '5 days',
    stock: 8,
    score: 4,
    action: 'FRONT',
    color: 'yellow',
    thumbnail: '🍞',
    cost: '$3.50',
    totalValue: '$28.00',
    category: 'Bakery Fresh'
  },
  {
    id: 51,
    name: 'Chicken Breast',
    brand: 'Tyson',
    packageSize: '500g',
    sku: generateSKU('TC', '500', 51),
    expires: '3 days',
    stock: 10,
    score: 2,
    action: '30% OFF',
    color: 'red',
    thumbnail: '🍗',
    cost: '$8.99',
    totalValue: '$89.90',
    category: 'Meat & Seafood'
  },
  {
    id: 52,
    name: 'Organic Bananas',
    brand: 'Dole',
    packageSize: '1kg',
    sku: generateSKU('DB', '1000', 52),
    expires: '5 days',
    stock: 20,
    score: 4,
    action: 'FRONT',
    color: 'yellow',
    thumbnail: '🍌',
    cost: '$2.99',
    totalValue: '$59.80',
    category: 'Fresh Produce'
  },
  {
    id: 53,
    name: 'Whole Milk',
    brand: 'Horizon',
    packageSize: '1L',
    sku: generateSKU('HM', '1000', 53),
    expires: '7 days',
    stock: 12,
    score: 3,
    action: 'FRONT',
    color: 'yellow',
    thumbnail: '🥛',
    cost: '$3.99',
    totalValue: '$47.88',
    category: 'Dairy'
  },
  {
    id: 54,
    name: 'Salmon Fillet',
    brand: 'Wild Caught',
    packageSize: '300g',
    sku: generateSKU('WS', '300', 54),
    expires: '2 days',
    stock: 5,
    score: 1,
    action: '50% OFF',
    color: 'red',
    thumbnail: '🐟',
    cost: '$12.99',
    totalValue: '$64.95',
    category: 'Meat & Seafood'
  },
  {
    id: 55,
    name: 'Fresh Spinach',
    brand: 'Organic Farms',
    packageSize: '200g',
    sku: generateSKU('FS', '200', 55),
    expires: '4 days',
    stock: 15,
    score: 3,
    action: 'FRONT',
    color: 'yellow',
    thumbnail: '🥬',
    cost: '$3.49',
    totalValue: '$52.35',
    category: 'Fresh Produce'
  },
  {
    id: 56,
    name: 'Sourdough Bread',
    brand: 'Local Bakery',
    packageSize: '400g',
    sku: generateSKU('LS', '400', 56),
    expires: '5 days',
    stock: 6,
    score: 4,
    action: 'FRONT',
    color: 'yellow',
    thumbnail: '🍞',
    cost: '$4.50',
    totalValue: '$27.00',
    category: 'Bakery Fresh'
  },
  {
    id: 57,
    name: 'Ground Beef',
    brand: 'Angus',
    packageSize: '500g',
    sku: generateSKU('AG', '500', 57),
    expires: '3 days',
    stock: 8,
    score: 2,
    action: '40% OFF',
    color: 'red',
    thumbnail: '🥩',
    cost: '$7.99',
    totalValue: '$63.92',
    category: 'Meat & Seafood'
  },
  {
    id: 58,
    name: 'Organic Apples',
    brand: 'Local Farms',
    packageSize: '1kg',
    sku: generateSKU('LA', '1000', 58),
    expires: '7 days',
    stock: 25,
    score: 4,
    action: 'FRONT',
    color: 'yellow',
    thumbnail: '🍎',
    cost: '$4.99',
    totalValue: '$124.75',
    category: 'Fresh Produce'
  },
  {
    id: 59,
    name: 'Cheddar Cheese',
    brand: 'Tillamook',
    packageSize: '400g',
    sku: generateSKU('TC', '400', 59),
    expires: '14 days',
    stock: 10,
    score: 5,
    action: 'NONE',
    color: 'green',
    thumbnail: '🧀',
    cost: '$5.99',
    totalValue: '$59.90',
    category: 'Dairy'
  },
  {
    id: 60,
    name: 'Fresh Mozzarella',
    brand: 'BelGioioso',
    packageSize: '200g',
    sku: generateSKU('BM', '200', 60),
    expires: '5 days',
    stock: 12,
    score: 3,
    action: 'FRONT',
    color: 'yellow',
    thumbnail: '🧀',
    cost: '$4.49',
    totalValue: '$53.88',
    category: 'Dairy'
  }
]

// Helper functions to get filtered items
export const getUrgentItems = () => mockProducts.filter(item => item.color === 'red')
export const getWatchListItems = () => mockProducts.filter(item => item.color === 'yellow')
export const getHealthyItems = () => mockProducts.filter(item => item.color === 'green')
export const getAllItems = () => mockProducts 