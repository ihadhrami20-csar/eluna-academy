import React from 'react';
import { UserIcon, BookOpenIcon, AcademicCapIcon } from './icons/HeroIcons.tsx';

interface HeroProps {
  onJoinClick: () => void;
}
const Hero: React.FC<HeroProps> = ({ onJoinClick }) => {
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
                onClick={onJoinClick}
                className="bg-gradient-button text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Ikuti Kelas Sekarang
              </button>
              <button className="bg-transparent border-2 border-turquoise text-turquoise font-semibold py-3 px-8 rounded-lg hover:bg-turquoise hover:text-white transition-all duration-300" onClick={() => document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' })}>
                Lihat Kursus
              </button>
            </div>
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8 text-gray-300">
              <div className="flex items-center gap-3">
                <UserIcon className="w-8 h-8 text-sky-blue" />
                <span>Lebih dari 50 Pelajar</span>
              </div>
              <div className="flex items-center gap-3">
                <BookOpenIcon className="w-8 h-8 text-sky-blue" />
                <span>3 Kursus Islamik Teras di Eluna Academy</span>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 relative h-96 lg:h-auto">
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full max-w-lg">
                    {/* Floating Cards */}
                    <div className="absolute top-0 right-0 sm:right-10 w-48 sm:w-64 bg-white/10 backdrop-blur-md p-3 rounded-xl shadow-2xl animate-float-slow">
                        <img src="/quran-image.jpg" alt="Islamic Elements with Quran" className="w-full h-auto rounded-lg object-cover"/>
                        <div className="absolute -bottom-4 -left-4 bg-white/20 backdrop-blur-lg p-2 rounded-lg flex items-center gap-2">
                            <img src="https://picsum.photos/seed/student1/40/40" alt="Student" className="w-10 h-10 rounded-full border-2 border-sky-blue"/>
                            <div>
                                <p className="text-white text-sm font-bold">Zakiyyah Room</p>
                                <p className="text-gray-300 text-xs">Quran Tutor</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="absolute bottom-10 left-0 sm:left-5 w-52 sm:w-72 bg-white/10 backdrop-blur-md p-3 rounded-xl shadow-2xl animate-float-fast">
                        <img src="/books-image.jpg" alt="Books and Learning" className="w-full h-auto rounded-lg object-cover"/>
                         <div className="absolute top-1/4 -right-20 bg-white/20 backdrop-blur-lg p-3 rounded-lg flex items-center gap-2">
                             <AcademicCapIcon className="w-8 h-8 text-soft-gold" />
                             <div>
                                <p className="text-white text-sm font-bold">Tahniah!</p>
                                <p className="text-gray-300 text-xs">Bacaan Al-Quran Anda Semakin Baik</p>
                             </div>
                         </div>
                    </div>
                    
                    <div className="absolute top-2/3 -translate-y-1/2 -left-10 sm:-left-16 w-36 bg-white/20 backdrop-blur-lg p-3 rounded-xl shadow-2xl animate-float-medium flex flex-col items-center justify-center">
                        <p className="text-4xl font-extrabold text-soft-gold mb-1">100%</p>
                        <p className="text-sm text-white text-center font-semibold">Tutor Berkualiti</p>
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
