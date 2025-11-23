import React from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import Categories from './components/Categories.tsx';
import About from './components/About.tsx';
import Footer from './components/Footer.tsx';
import { MetaTags } from './components/MetaTags.tsx';
import { OrganizationSchema } from './components/StructuredData.tsx';

const App: React.FC = () => {
  return (
    <div className="bg-white font-sans text-charcoal">
      {/* SEO Meta Tags */}
      <MetaTags
        title="Eluna Academy - Islamic Learning Platform | Online & Physical Classes"
        description="Comprehensive Islamic education programs including Quranic studies (Try Ngaji), Memorization (Try Hafazan), and Arabic language courses (Try UPKK). Learn online or in-person with experienced instructors."
        image="https://www.elunaacademy.com.my/og-image.jpg"
        url="https://www.elunaacademy.com.my/"
        type="website"
      />
      
      {/* Structured Data for Rich Snippets */}
      <OrganizationSchema />

      <Header />
      <main>
        <Hero />
        <About />
        <Categories />
      </main>
      <Footer />
    </div>
  );
};

export default App;
