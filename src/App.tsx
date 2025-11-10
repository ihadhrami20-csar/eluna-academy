import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import Partners from './components/Partners.tsx';
import Categories from './components/Categories.tsx';
import PopularCourses from './components/PopularCourses.tsx';
import About from './components/About.tsx';
import Footer from './components/Footer.tsx';
import SignUpModal from './components/SignUpModal.tsx';
import { EMAILJS_CONFIG } from './config/emailjs.ts';

const App: React.FC = () => {
  useEffect(() => {
    // Initialize EmailJS
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
  }, []);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="bg-white font-sans text-charcoal">
      <Header onSignUpClick={openModal} />
      <main>
        <Hero onJoinClick={openModal} />
        <Partners />
        <Categories />
        <PopularCourses />
        <About />
      </main>
      <Footer />
      {isModalOpen && <SignUpModal onClose={closeModal} />}
    </div>
  );
};

export default App;
