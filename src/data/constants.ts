import { SmartphoneIcon, Zap, Laptop, Wrench, ShieldCheck, Truck } from 'lucide-react';
import type { Product, RepairService, Benefit, FAQItem } from '../types';

export const SHOP_PHONE = "254703994759";

export const BRANDS: string[] = [
  "iPhone", "Samsung", "Nokia", "Infinix", "Tecno", "itel", 
  "Vivo", "Xiaomi", "Oppo", "OnePlus", "Google", "Realme", 
  "Elimu Tab", "Huawei", "Nothing Phone"
];

// --- CENTRALIZED MOCK DATABASE ---
export const ALL_PRODUCTS: Product[] = [
  { 
    id: 1, 
    name: "Samsung Galaxy S25 Ultra", 
    brand: "Samsung", 
    price: "165,000", 
    oldPrice: "185,000", 
    image: "/images/samsung-galaxy-s25-ultra.jpg", 
    tag: "Pre-Order Discount", 
    specs: "12GB RAM | 512GB Storage",
    description: "The ultimate Android powerhouse. Featuring the revolutionary Snapdragon 8 Elite chip, a 200MP pro-grade camera system, and the built-in S-Pen. Built with a Titanium frame and Gorilla Armor, it handles heavy gaming or professional photography flawlessly.",
    
    // --- INJECTED WORDPRESS SPECS ---
    detailedSpecs: [
      {
        category: "Platform & Memory",
        items: [
          { name: "OS", value: "Android 15, One UI 7" },
          { name: "Chipset", value: "Qualcomm Snapdragon 8 Elite (3 nm)" },
          { name: "CPU", value: "Octa-core (2x4.47 GHz + 6x3.53 GHz)" },
          { name: "Storage", value: "512GB UFS 4.0" },
          { name: "RAM", value: "12GB RAM" }
        ]
      },
      {
        category: "Display & Body",
        items: [
          { name: "Type", value: "Dynamic LTPO AMOLED 2X, 120Hz, 2600 nits" },
          { name: "Size", value: "6.9 inches (~92.5% screen-to-body ratio)" },
          { name: "Resolution", value: "1440 x 3120 pixels" },
          { name: "Protection", value: "Corning Gorilla Armor 2 (Titanium Frame)" },
          { name: "Resistance", value: "IP68 dust/water resistant" }
        ]
      },
      {
        category: "Cameras",
        items: [
          { name: "Main", value: "200 MP (wide) + 50 MP (periscope 5x) + 10 MP (telephoto 3x) + 50 MP (ultrawide)" },
          { name: "Video", value: "8K@30fps, 4K@120fps, HDR10+" },
          { name: "Selfie", value: "12 MP, f/2.2, 26mm (wide) Dual Pixel PDAF" }
        ]
      },
      {
        category: "Battery & Features",
        items: [
          { name: "Capacity", value: "Li-Ion 5000 mAh" },
          { name: "Charging", value: "45W wired, 15W wireless (Qi2)" },
          { name: "Sensors", value: "Fingerprint (ultrasonic), gyro, compass" },
          { name: "Network", value: "5G, Wi-Fi 7, Bluetooth 5.4, NFC" }
        ]
      }
    ],
    // --- INJECTED WORDPRESS REVIEWS ---
    reviews: [
      { user: "Alex", date: "Jan 15, 2025", rating: 5, comment: "Moniqs Gadget world offers Genuine, High quality, friendly pricing and top notch customer care!" },
      { user: "MY IT", date: "Feb 03, 2025", rating: 5, comment: "Excellent and simple smartphone process. Best Galaxy yet." }
    ]
  },
  { 
    id: 2, name: "iPhone 15 Pro Max", brand: "Apple", price: "172,000", oldPrice: "190,000", image: "/images/iPhone-16-pro-max.jpg", tag: "Bestseller", specs: "Titanium Case | 256GB",
    description: "Forged in aerospace-grade titanium, making it the lightest and strongest Pro Max ever. Experience console-level gaming with the A17 Pro chip and capture cinematic masterpieces with the advanced 5x optical zoom camera."
  },
  { 
    id: 3, name: "Oraimo FreePods 4", brand: "Oraimo", price: "4,500", oldPrice: "6,500", image: "/images/oraimo-freepods-4.webp", tag: "40% OFF", specs: "ANC Support",
    description: "Block out the noise and immerse yourself in pure bass. The FreePods 4 feature Active Noise Cancellation, transparent mode, and up to 35.5 hours of total playtime. The perfect companion for commutes and workouts."
  },
  { 
    id: 4, name: "Redmi Note 13 Pro", brand: "Xiaomi", price: "44,500", oldPrice: "48,000", image: "/images/redmi-note-14-pro.jpg", tag: "New Arrival", specs: "200MP Camera",
    description: "Flagship-level photography at a mid-range price. The Note 13 Pro boasts an ultra-clear 200MP main camera with OIS, paired with a buttery-smooth 120Hz AMOLED display and blazing-fast 67W turbo charging."
  },
  { 
    id: 5, name: "iPhone 13 Pro", brand: "Apple", price: "95,000", oldPrice: "110,000", image: "/images/iphone-13-pro.webp", tag: "Refurbished", specs: "128GB | Sierra Blue",
    description: "An incredible value for iOS lovers. The iPhone 13 Pro delivers stunning ProMotion 120Hz visuals, incredible low-light photography, and all-day battery life. Certified and tested to function like brand new."
  },
  { 
    id: 6, name: "Samsung Galaxy A55", brand: "Samsung", price: "48,500", oldPrice: "52,000", image: "/images/samsung-a55.jpg", tag: "Value Pick", specs: "8GB RAM | 256GB Storage",
    description: "The king of the mid-range. The Galaxy A54 brings a premium glass finish, IP67 water resistance, and an awesome Nightography camera. A reliable, long-lasting device that looks and feels like a flagship."
  },
  { 
    id: 7, name: "Tecno Camon 40", brand: "Tecno", price: "32,000", oldPrice: "35,000", image: "/images/tecno-camon-40.jpg", tag: "Popular", specs: "8GB RAM | 256GB Storage",
    description: "Stand out with the Camon 40's unique, award-winning geometric design. It features a brilliant AMOLED screen and a highly optimized 64MP night-portrait camera, making it perfect for social media creators on a budget."
  },
  { 
    id: 8, name: "Infinix Note 40 Pro", brand: "Infinix", price: "45,000", oldPrice: "49,000", image: "/images/infinix-note-40-pro.jpg", tag: "New", specs: "12GB RAM | 256GB Storage",
    description: "Experience VIP charging speeds. With 68W wired and 50W wireless fast charging, you're never tethered to a wall for long. Paired with 12GB of RAM, this device is a multitasking and gaming monster."
  },
  { 
    id: 9, name: "Oraimo Watch 2 Pro", brand: "Oraimo", price: "7,500", oldPrice: "9,000", image: "/images/oraimo-watch-2.webp", tag: "Accessory", specs: "Bluetooth Calling | IP68",
    description: "Stay connected without touching your phone. The Watch 2 Pro supports crystal-clear Bluetooth calling, 24/7 heart rate monitoring, and over 120 sports modes. Features a bright, responsive HD touchscreen."
  }
];

// Dynamically grab the first 4 items to display on the Home Page
export const BESTSELLERS: Product[] = ALL_PRODUCTS.slice(0, 4);

export const REPAIR_SERVICES: RepairService[] = [
  { title: "Screen Replacement", icon: SmartphoneIcon, desc: "Original screens for all major brands with warranty." },
  { title: "Battery Health", icon: Zap, desc: "Fast battery replacements to restore your phone's life." },
  { title: "System Flash", icon: Laptop, desc: "Software updates, unlocking, and data recovery." },
  { title: "Motherboard Repair", icon: Wrench, desc: "Advanced soldering and technical component fixes." }
];

export const BENEFITS: Benefit[] = [
  { icon: ShieldCheck, title: "100% Genuine Tech", desc: "No counterfeits. Every device comes with a verified manufacturer's warranty." },
  { icon: Truck, title: "Fast Delivery", desc: "Get your new gadget delivered to your doorstep within Nakuru CBD instantly." },
  { icon: Wrench, title: "After-Sales Support", desc: "We don't just sell and vanish. Enjoy free setup and discounted repair services." }
];

export const FAQS: FAQItem[] = [
  { q: "Do you offer warranties on your phones?", a: "Yes! All brand new phones come with a standard 12-to-24-month manufacturer warranty." },
  { q: "How long do repairs usually take?", a: "Most standard repairs, like screen or battery replacements, are completed within 30 to 60 minutes while you wait in our shop." },
  { q: "Can I pay on delivery?", a: "Yes, we accept payment on delivery for orders within Nakuru." },
  { q: "Are the accessories original?", a: "Absolutely. We stock certified accessories from brands like Oraimo, Apple, and Samsung to protect your device's battery health." }
];