import React, { useState } from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import Partners from './components/Partners.tsx';
import Categories from './components/Categories.tsx';
import PopularCourses from './components/PopularCourses.tsx';
import About from './components/About.tsx';
import Footer from './components/Footer.tsx';
import SignUpModal from './components/SignUpModal.tsx';

const App: React.FC = () => {
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
