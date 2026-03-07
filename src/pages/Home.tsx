import React from 'react';
import { Link } from 'react-router-dom';
import { BESTSELLERS } from '../data/constants';

// Home Sections
import Hero from '../components/home/Hero';
import BrandMarquee from '../components/home/BrandMarquee';
import BenefitsSection from '../components/home/BenefitsSection';
import ProductCard from '../components/common/ProductCard';
import AccessoriesSection from '../components/home/AccessoriesSection';
import RepairsSection from '../components/home/RepairsSection';
import PaybillSection from '../components/home/PaybillSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import FAQSection from '../components/home/FAQSection';
import LocationSection from '../components/home/LocationSection';
import FinalCTA from '../components/home/FinalCTA';

const Home: React.FC = () => {
  return (
    <main>
      <Hero />
      <BrandMarquee />
      <BenefitsSection />

      {/* Featured Products Section */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="space-y-4">
            <span className="text-red-600 font-black text-xs uppercase tracking-[0.2em] italic">Stock Inventory</span>
            <h3 className="text-4xl md:text-7xl font-black tracking-tighter uppercase italic">Best Sellers.</h3>
          </div>
          <Link 
            to="/shop" 
            className="text-sm font-black uppercase tracking-widest border-b-2 border-slate-900 pb-1 hover:text-red-600 hover:border-red-600 transition-all"
          >
            View All Products
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {BESTSELLERS.map(item => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </section>
      <AccessoriesSection />

      <RepairsSection />
      <PaybillSection />
      <TestimonialsSection />
      <FAQSection />
      <LocationSection />
      <FinalCTA />
    </main>
  );
};

export default Home;