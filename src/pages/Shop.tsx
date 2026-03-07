import React, { useState, useMemo, useEffect } from 'react';
import { Search, SlidersHorizontal, X, ArrowDownAZ, ArrowUpZA } from 'lucide-react';
import ProductCard from '../components/common/ProductCard';
import { BRANDS, ALL_PRODUCTS } from '../data/constants'; // <-- Now importing ALL_PRODUCTS directly from constants

// Helper function to convert formatted strings ("165,000") to actual numbers (165000) for sorting
const parsePrice = (priceStr: string) => parseInt(priceStr.replace(/,/g, ''), 10);

const Shop: React.FC = () => {
  // --- STATE MANAGEMENT ---
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high'>('featured');
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState<boolean>(false);

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // --- FILTER & SORT ENGINE ---
  const filteredProducts = useMemo(() => {
    let result = ALL_PRODUCTS;

    // 1. Search Filter
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        product => 
          product.name.toLowerCase().includes(query) || 
          product.brand.toLowerCase().includes(query)
      );
    }

    // 2. Brand Filter
    if (selectedBrands.length > 0) {
      result = result.filter(product => selectedBrands.includes(product.brand));
    }

    // 3. Sorting Logic
    if (sortBy === 'price-low') {
      result = [...result].sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
    } else if (sortBy === 'price-high') {
      result = [...result].sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
    }

    return result;
  }, [searchQuery, selectedBrands, sortBy]);

  // Handle toggling brand checkboxes
  const toggleBrand = (brand: string) => {
    setSelectedBrands(prev => 
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    );
  };

  // Clear all filters
  const clearFilters = () => {
    setSelectedBrands([]);
    setSearchQuery('');
  };

  return (
    <main className="pt-32 pb-24 px-4 max-w-7xl mx-auto min-h-screen">
      
      {/* Header & Search Bar */}
      <div className="mb-8 border-b border-slate-200 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic mb-2">Inventory.</h1>
          <p className="text-slate-500 font-medium">Browse our complete collection of genuine devices.</p>
        </div>
        
        {/* Search Input */}
        <div className="relative w-full md:w-96">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
          <input 
            type="text" 
            placeholder="Search phones, accessories..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white border border-slate-200 rounded-2xl py-4 pl-12 pr-4 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all shadow-sm"
          />
        </div>
      </div>

      {/* Mobile Toolbar (Filters & Sort Toggle) */}
      <div className="md:hidden flex items-center justify-between mb-8 gap-4">
        <button 
          onClick={() => setIsMobileFiltersOpen(true)}
          className="flex-1 bg-white border border-slate-200 py-3 rounded-xl flex items-center justify-center gap-2 font-bold text-sm shadow-sm"
        >
          <SlidersHorizontal size={16} /> Filters {selectedBrands.length > 0 && `(${selectedBrands.length})`}
        </button>
        <select 
          className="flex-1 bg-white border border-slate-200 py-3 rounded-xl font-bold text-sm px-4 shadow-sm outline-none focus:ring-2 focus:ring-green-500"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as any)}
        >
          <option value="featured">Featured</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
        </select>
      </div>
      
      <div className="flex flex-col md:flex-row gap-10">
        
        {/* --- DESKTOP SIDEBAR FILTER --- */}
        <aside className="hidden md:block w-64 shrink-0 space-y-8">
          
          {/* Desktop Sort */}
          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
            <h4 className="font-black uppercase tracking-widest text-xs mb-4 text-slate-400">Sort By</h4>
            <div className="space-y-3">
              <label className="flex items-center gap-3 cursor-pointer group">
                <input type="radio" name="sort" value="featured" checked={sortBy === 'featured'} onChange={() => setSortBy('featured')} className="w-4 h-4 text-green-600 focus:ring-green-500 border-slate-300" />
                <span className="text-sm font-bold text-slate-700 group-hover:text-green-600 transition-colors">Featured</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input type="radio" name="sort" value="price-low" checked={sortBy === 'price-low'} onChange={() => setSortBy('price-low')} className="w-4 h-4 text-green-600 focus:ring-green-500 border-slate-300" />
                <span className="text-sm font-bold text-slate-700 group-hover:text-green-600 transition-colors flex items-center gap-1"><ArrowUpZA size={14}/> Price: Low to High</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input type="radio" name="sort" value="price-high" checked={sortBy === 'price-high'} onChange={() => setSortBy('price-high')} className="w-4 h-4 text-green-600 focus:ring-green-500 border-slate-300" />
                <span className="text-sm font-bold text-slate-700 group-hover:text-green-600 transition-colors flex items-center gap-1"><ArrowDownAZ size={14}/> Price: High to Low</span>
              </label>
            </div>
          </div>

          {/* Desktop Brands */}
          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h4 className="font-black uppercase tracking-widest text-xs text-slate-400">Brands</h4>
              {selectedBrands.length > 0 && (
                <button onClick={clearFilters} className="text-[10px] font-bold text-slate-900 hover:underline uppercase tracking-widest">Clear</button>
              )}
            </div>
            <ul className="space-y-3 max-h-96 overflow-y-auto pr-2 custom-scrollbar">
              {BRANDS.map((brand) => {
                const count = ALL_PRODUCTS.filter(p => p.brand === brand).length;
                if (count === 0) return null;

                return (
                  <li key={brand} className="flex justify-between items-center group cursor-pointer" onClick={() => toggleBrand(brand)}>
                    <label className="flex items-center gap-3 cursor-pointer pointer-events-none">
                      <input 
                        type="checkbox" 
                        checked={selectedBrands.includes(brand)}
                        readOnly
                        className="w-4 h-4 rounded text-green-600 focus:ring-green-500 border-slate-300" 
                      />
                      <span className={`text-sm font-bold transition-colors ${selectedBrands.includes(brand) ? 'text-green-600' : 'text-slate-700 group-hover:text-green-600'}`}>
                        {brand}
                      </span>
                    </label>
                    <span className="text-xs font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">{count}</span>
                  </li>
                )
              })}
            </ul>
          </div>
        </aside>

        {/* --- MAIN PRODUCT GRID --- */}
        <div className="flex-1">
          {/* Active Filters Display */}
          {(selectedBrands.length > 0 || searchQuery) && (
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mr-2">Active Filters:</span>
              {searchQuery && (
                <span className="bg-slate-900 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-2">
                  "{searchQuery}" <button onClick={() => setSearchQuery('')}><X size={12} className="hover:text-red-500"/></button>
                </span>
              )}
              {selectedBrands.map(brand => (
                <span key={brand} className="bg-green-50 text-green-700 border border-green-200 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-2">
                  {brand} <button onClick={() => toggleBrand(brand)}><X size={12} className="hover:text-green-900"/></button>
                </span>
              ))}
            </div>
          )}

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((item) => (
                <ProductCard key={item.id} item={item} />
              ))
            ) : (
              /* EMPTY STATE UI */
              <div className="col-span-full py-20 text-center bg-white rounded-[3rem] border border-dashed border-slate-200">
                <Search size={48} className="mx-auto text-slate-200 mb-4" />
                <h3 className="text-2xl font-black italic uppercase mb-2">No gadgets found</h3>
                <p className="text-slate-500 font-medium mb-6">We couldn't find any products matching your current filters.</p>
                <button 
                  onClick={clearFilters}
                  className="bg-slate-900 text-white px-8 py-3 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-green-600 transition-all shadow-lg"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* --- MOBILE FILTERS DRAWER --- */}
      {isMobileFiltersOpen && (
        <div className="fixed inset-0 z-[300] md:hidden">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setIsMobileFiltersOpen(false)}></div>
          
          {/* Drawer sliding up from bottom */}
          <div className="absolute bottom-0 left-0 w-full bg-white rounded-t-[2.5rem] p-6 animate-in slide-in-from-bottom duration-300">
            <div className="flex justify-between items-center mb-6 border-b border-slate-100 pb-4">
              <h3 className="text-xl font-black uppercase italic">Filters</h3>
              <button onClick={() => setIsMobileFiltersOpen(false)} className="p-2 bg-slate-100 rounded-full"><X size={20}/></button>
            </div>
            
            <h4 className="font-black uppercase tracking-widest text-xs text-slate-400 mb-4">Brands</h4>
            <div className="grid grid-cols-2 gap-3 mb-8 max-h-60 overflow-y-auto">
              {BRANDS.map(brand => {
                const count = ALL_PRODUCTS.filter(p => p.brand === brand).length;
                if (count === 0) return null;
                const isActive = selectedBrands.includes(brand);
                return (
                  <button 
                    key={brand}
                    onClick={() => toggleBrand(brand)}
                    className={`p-3 rounded-xl border text-sm font-bold text-left transition-all ${isActive ? 'bg-green-50 border-green-200 text-green-700 shadow-sm' : 'bg-white border-slate-200 text-slate-600'}`}
                  >
                    {brand} <span className="text-[10px] text-slate-400 ml-1">({count})</span>
                  </button>
                )
              })}
            </div>

            <div className="flex gap-4">
              <button onClick={clearFilters} className="flex-1 py-4 border border-slate-200 rounded-2xl font-black text-xs uppercase tracking-widest text-slate-600">Clear</button>
              <button onClick={() => setIsMobileFiltersOpen(false)} className="flex-[2] bg-slate-900 text-white py-4 rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl shadow-slate-200">View {filteredProducts.length} Items</button>
            </div>
          </div>
        </div>
      )}

      {/* Custom Scrollbar CSS for Desktop Sidebar */}
      <style dangerouslySetInnerHTML={{ __html: `
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: #f1f5f9; border-radius: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #94a3b8; }
      `}} />
    </main>
  );
};

export default Shop;