import React from 'react';
import type { Category } from '../types';
import { QuranRecitationIcon, ArabicLanguageIcon, TajweedIcon, IslamicStudiesIcon, KidsQuranIcon, AdultArabicIcon } from './icons/CategoryIcons.tsx';

const categories: Category[] = [
  { icon: QuranRecitationIcon, title: 'Quranic Recitation', courseCount: 8 },
  { icon: ArabicLanguageIcon, title: 'Arabic Language', courseCount: 12 },
  { icon: TajweedIcon, title: 'Tajweed', courseCount: 5 },
  { icon: IslamicStudiesIcon, title: 'Islamic Studies', courseCount: 7 },
  { icon: KidsQuranIcon, title: 'Kids’ Quran Class', courseCount: 4 },
  { icon: AdultArabicIcon, title: 'Adult Arabic Class', courseCount: 6 },
];

const CategoryCard: React.FC<{ category: Category }> = ({ category }) => (
  <div className="bg-gray-50 hover:bg-white border border-gray-200 rounded-xl p-6 text-center flex flex-col items-center justify-center transition-all duration-300 hover:shadow-2xl hover:border-turquoise transform hover:-translate-y-2 cursor-pointer">
    <div className="w-20 h-20 bg-sky-blue/10 rounded-full flex items-center justify-center mb-4">
      <category.icon className="w-10 h-10 text-sky-blue" />
    </div>
    <h4 className="text-lg font-bold text-charcoal mb-1">{category.title}</h4>
    <p className="text-sm text-gray-500">{category.courseCount} Courses</p>
  </div>
);

const Categories: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">Top Categories</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Explore our wide range of courses designed for all ages and levels. Find the perfect path to deepen your knowledge.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category, index) => (
            <CategoryCard key={index} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
