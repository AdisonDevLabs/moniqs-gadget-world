import type { ElementType } from 'react';

// --- NEW: Types for the detailed specifications table ---
export interface SpecItem {
  name: string;
  value: string;
}

export interface SpecCategory {
  category: string;
  items: SpecItem[];
}

// --- NEW: Type for customer reviews ---
export interface Review {
  user: string;
  date: string;
  rating: number;
  comment: string;
}

// --- UPDATED: Product now includes the new optional fields ---
export interface Product {
  id: number;
  name: string;
  brand: string;
  price: string;
  oldPrice: string;
  image: string;
  tag: string;
  specs: string;
  description: string;
  detailedSpecs?: SpecCategory[]; // Optional array of spec tables
  reviews?: Review[];             // Optional array of customer reviews
}

export interface RepairService {
  title: string;
  icon: ElementType;
  desc: string;
}

export interface Benefit {
  icon: ElementType;
  title: string;
  desc: string;
}

export interface FAQItem {
  q: string;
  a: string;
}

export interface CartItem extends Product {
  quantity: number;
}