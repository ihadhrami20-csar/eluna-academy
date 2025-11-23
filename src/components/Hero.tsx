import React from 'react';
import { UserIcon, BookOpenIcon } from './icons/HeroIcons.tsx';

interface HeroProps {}
const Hero: React.FC<HeroProps> = () => {
  return (
<section id="home" className="relative bg-ocean-blue text-white pt-32 pb-20 md:pb-32 overflow-hidden">      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
              Selamat Datang ke Eluna Academy
              <svg className="absolute -bottom-1 left-0 w-full h-2" viewBox="0 0 100 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 6.5C21.5 2.5 78.5 2 99 6.5" stroke="#4FB4C6" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </h1>
            <p className="text-2xl md:text-3xl font-semibold text-turquoise mb-6">Mengenal Huruf, Fahami Hikmah</p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <button
                onClick={() => document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-button text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Ikuti Kelas Sekarang
              </button>
              <button className="bg-transparent border-2 border-turquoise text-turquoise font-semibold py-3 px-8 rounded-lg hover:bg-turquoise hover:text-white transition-all duration-300" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Hubungi Kami
              </button>
            </div>
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8 text-gray-300">
              <div className="flex items-center gap-3">
                <UserIcon className="w-8 h-8 text-sky-blue" />
                <span className="font-bold text-soft-gold drop-shadow-lg">Lebih dari 50 Pelajar</span>
              </div>
              <div className="flex items-center gap-3">
                <BookOpenIcon className="w-8 h-8 text-sky-blue" />
                <span className="font-bold text-soft-gold drop-shadow-lg">3 Kursus Islamik Teras di Eluna Academy</span>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 relative h-96 lg:h-auto">
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full max-w-lg flex items-center justify-center">
                    {/* Testimonial Image */}
                    <div className="bg-white/10 backdrop-blur-md p-3 rounded-xl shadow-2xl animate-float-slow">
                        <img src="/testimoni-2.jpg" alt="Student Testimonial" className="h-96 w-auto rounded-lg object-cover"/>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 md:h-48" style={{ zIndex: 1 }}>
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="none">
          <path d="M1440 120H0V0C480 80 960 80 1440 0V120Z" fill="white"/>
        </svg>
      </div>
       <style>{`
          @keyframes float-slow {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-20px); }
          }
          @keyframes float-fast {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-15px); }
          }
          @keyframes float-medium {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-10px); }
          }
          .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
          .animate-float-fast { animation: float-fast 5s ease-in-out infinite; }
          .animate-float-medium { animation: float-medium 7s ease-in-out infinite; }
       `}</style>
    </section>
  );
};

export default Hero;
