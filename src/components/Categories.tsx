import React from 'react';
import type { Category } from '../types';
import { QuranRecitationIcon, ArabicLanguageIcon, TajweedIcon } from './icons/CategoryIcons.tsx';

const categories: Category[] = [
  { icon: QuranRecitationIcon, title: 'Try Ngaji' },
  { icon: TajweedIcon, title: 'Try Hafazan' },
  { icon: ArabicLanguageIcon, title: 'Try UPKK' },
];

const CategoryCard: React.FC<{ category: Category }> = ({ category }) => (
  <div className="bg-white border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:border-turquoise transform hover:-translate-y-2 cursor-pointer flex flex-col h-full">
    <div className="relative w-full h-80 bg-gray-100">
      {category.title === 'Try Hafazan' ? (
        <img src="/try-hafazan.png" alt="Try Hafazan Course" className="w-full h-full object-cover" />
      ) : category.title === 'Try Ngaji' ? (
        <img src="/try-ngaji.png" alt="Try Ngaji Course" className="w-full h-full object-cover" />
      ) : category.title === 'Try UPKK' ? (
        <img src="/try-upkk.png" alt="Try UPKK Course" className="w-full h-full object-cover" />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-sky-blue/10">
          <category.icon className="w-24 h-24 text-sky-blue" />
        </div>
      )}
    </div>
    <div className="p-6 flex flex-col items-center justify-center flex-grow">
      <h4 className="text-lg font-bold text-charcoal mb-1">{category.title}</h4>
      {category.title === 'Try Ngaji' && (
        <a 
          href="https://forms.gle/HovvZB58MyqQdntY9" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-gradient-button text-white font-semibold py-2 px-6 rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
        >
          Daftar Sekarang
        </a>
      )}
      {category.title === 'Try Hafazan' && (
        <a 
          href="https://forms.gle/q8qt5BD5XTaDsQUE7" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-gradient-button text-white font-semibold py-2 px-6 rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
        >
          Daftar Sekarang
        </a>
      )}
      {category.title === 'Try UPKK' && (
        <a 
          href="https://forms.gle/qSriCZMn4Z1xjMsQA" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-gradient-button text-white font-semibold py-2 px-6 rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
        >
          Daftar Sekarang
        </a>
      )}
    </div>
  </div>
);

const Categories: React.FC = () => {
  return (
    <section id="categories" className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">Kursus Terbaik di Eluna Academy</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Teroka 3 kursus terbaik kami yang direka khas untuk semua peringkat umur dan tahap. Selami laluan terbaik untuk anak anda mendalami ilmu Al-Quran serta bahasa Arab dengan penuh keyakinan.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {categories.map((category, index) => (
            <CategoryCard key={index} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
