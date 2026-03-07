import React from 'react';
import { FAQS } from '../../data/constants';

const FAQSection: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900 mb-4 uppercase italic">
            Common Questions.
          </h3>
          <p className="text-slate-500 font-medium">Everything you need to know before making a purchase.</p>
        </div>
        <div className="space-y-4">
          {FAQS.map((faq, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <h5 className="text-lg font-black text-slate-900 mb-2">{faq.q}</h5>
              <p className="text-slate-500 font-medium leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;