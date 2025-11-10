import React, { useState } from 'react';
import type { Course } from '../types';
import { StarIcon, BookOpenIcon, ClockIcon, UserGroupIcon } from './icons/CourseIcons.tsx';

const courses: Course[] = [
  {
    image: 'https://picsum.photos/seed/course1/400/250',
    title: 'Learn Tajweed Step by Step',
    rating: 4.8,
    reviews: 125,
    lessons: 12,
    duration: 30,
    level: 'Beginner',
    tag: 'SALE',
    category: 'Tajweed',
  },
  {
    image: 'https://picsum.photos/seed/course2/400/250',
    title: 'Arabic for Beginners',
    rating: 4.9,
    reviews: 210,
    lessons: 20,
    duration: 60,
    level: 'All Levels',
    category: 'Arabic',
  },
  {
    image: 'https://picsum.photos/seed/course3/400/250',
    title: 'Master Quranic Vocabulary',
    rating: 4.7,
    reviews: 98,
    lessons: 15,
    duration: 45,
    level: 'Intermediate',
    category: 'Quran',
  },
  {
    image: 'https://picsum.photos/seed/course4/400/250',
    title: 'Interactive Quran Class for Kids',
    rating: 5.0,
    reviews: 302,
    lessons: 25,
    duration: 90,
    level: 'Kids',
    category: 'Kids',
  },
];

const filters = ['All Programs', 'Quran', 'Arabic', 'Tajweed', 'Kids'];

const CourseCard: React.FC<{ course: Course }> = ({ course }) => (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group">
        <div className="relative">
            <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
            {course.tag && (
                <span className="absolute top-4 left-4 bg-soft-gold text-white text-xs font-bold px-2 py-1 rounded">{course.tag}</span>
            )}
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <button className="bg-turquoise text-white font-semibold py-2 px-6 rounded-lg">View Details</button>
            </div>
        </div>
        <div className="p-5">
            <div className="flex items-center mb-2">
                <StarIcon className="w-5 h-5 text-soft-gold" />
                <span className="ml-1 text-sm font-bold text-charcoal">{course.rating}</span>
                <span className="ml-2 text-sm text-gray-500">({course.reviews} reviews)</span>
            </div>
            <h3 className="text-lg font-bold text-charcoal mb-4 h-14">{course.title}</h3>
            <div className="flex justify-between items-center text-sm text-gray-600 border-t pt-4">
                <div className="flex items-center gap-1.5">
                    <BookOpenIcon className="w-4 h-4" />
                    <span>{course.lessons} Lessons</span>
                </div>
                <div className="flex items-center gap-1.5">
                    <ClockIcon className="w-4 h-4" />
                    <span>{course.duration} Days</span>
                </div>
                <div className="flex items-center gap-1.5">
                    <UserGroupIcon className="w-4 h-4" />
                    <span>{course.level}</span>
                </div>
            </div>
        </div>
    </div>
);

const PopularCourses: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState('All Programs');

    const filteredCourses = activeFilter === 'All Programs' 
        ? courses 
        : courses.filter(course => course.category === activeFilter);

    return (
        <section id="courses" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">Our Most Popular Programs</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Join thousands of students in our most sought-after courses for a transformative learning experience.
                    </p>
                </div>
                <div className="flex justify-center flex-wrap gap-2 md:gap-4 mb-12">
                    {filters.map(filter => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`px-5 py-2 text-sm font-semibold rounded-full transition-colors duration-300 ${activeFilter === filter ? 'bg-ocean-blue text-white' : 'bg-white text-charcoal hover:bg-sky-blue/20'}`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {filteredCourses.map((course, index) => (
                        <CourseCard key={index} course={course} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PopularCourses;
