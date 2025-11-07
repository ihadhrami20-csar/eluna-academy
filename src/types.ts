
import React from 'react';

export interface Category {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  courseCount: number;
}

export interface Course {
  image: string;
  title: string;
  rating: number;
  reviews: number;
  lessons: number;
  duration: number; // in days
  level: string;
  tag?: string;
  category: 'Quran' | 'Arabic' | 'Tajweed' | 'Kids';
}
