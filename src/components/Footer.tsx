import React from 'react';
import { Mail, Phone, MapPin, ArrowUpRight, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Constants from your existing setup
  const CONTACT_INFO = {
    brandName: 'Eluna Academy',
    email: 'elunaacademy@gmail.com',
    phone: '+601111676050',
    address: 'Malaysia',
    copyrightYear: 2025,
  };

  return (
    <footer id="contact" className="relative bg-slate-950 text-slate-300 overflow-hidden border-t border-slate-800">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-900/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-6 pt-16 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <img src="/eluna-logo.jpg" alt="Eluna Academy Logo" className="h-12 w-auto object-contain" />
              <h3 className="text-2xl font-bold text-white tracking-tight">
                {CONTACT_INFO.brandName}
              </h3>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              “Mengaji jadi indah. Hafazan jadi mudah. Bahasa Arab jadi lancar. Eluna Academy — Tempat anak anda jatuh cinta dengan Al-Quran dan agama.”
            </p>
            <div className="flex gap-4 pt-2">
              {/* Facebook Icon */}
              <a
                href="https://www.facebook.com/share/1EEbqJjNfr/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-500 transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
                title="Facebook"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              {/* Instagram Icon */}
              <a
                href="https://www.instagram.com/eluna.academy?igsh=MWV1bG0wNDRqNjI4Mg=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600 hover:text-pink-500 transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
                title="Instagram"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.117.6c-.794.272-1.473.646-2.157 1.33-.684.684-1.075 1.393-1.332 2.186-.266.788-.472 1.659-.54 2.937C.038 8.328 0 8.74 0 12s.015 3.677.072 4.947c.06 1.277.261 2.148.528 2.936.277.813.648 1.5 1.332 2.184.684.684 1.379 1.064 2.166 1.332.787.26 1.659.463 2.937.528C8.333 23.988 8.74 24 12 24s3.677-.015 4.947-.072c1.277-.06 2.148-.26 2.936-.527.813-.278 1.5-.649 2.184-1.333.684-.684 1.064-1.379 1.332-2.166.26-.787.463-1.659.528-2.937.04-1.27.072-1.677.072-4.947s-.015-3.677-.072-4.947c-.06-1.277-.26-2.148-.527-2.936-.278-.813-.649-1.5-1.333-2.184-.684-.684-1.379-1.064-2.166-1.332-.787-.26-1.659-.463-2.937-.528C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.009 4.849.07 1.171.054 1.805.244 2.227.408.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.354 1.057.408 2.227.061 1.264.07 1.646.07 4.849s-.009 3.585-.07 4.849c-.054 1.171-.244 1.805-.408 2.227-.217.562-.477.96-.896 1.382-.42.419-.819.679-1.381.896-.422.164-1.057.354-2.227.408-1.264.061-1.646.07-4.849.07s-3.585-.009-4.849-.07c-1.171-.054-1.805-.244-2.227-.408-.562-.217-.96-.477-1.382-.896-.419-.42-.679-.819-.896-1.381-.164-.422-.354-1.057-.408-2.227-.061-1.264-.07-1.646-.07-4.849s.009-3.585.07-4.849c.054-1.171.244-1.805.408-2.227.217-.562.477-.96.896-1.382.42-.419.819-.679 1.381-.896.422-.164 1.057-.354 2.227-.408 1.264-.061 1.646-.07 4.849-.07zm0 3.68c-3.405 0-6.16 2.754-6.16 6.16s2.754 6.16 6.16 6.16 6.16-2.754 6.16-6.16c0-3.405-2.755-6.16-6.16-6.16zm0 10.16c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm4.408-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.44 1.44c.795 0 1.44-.645 1.44-1.44-.001-.795-.645-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* TikTok Icon */}
              <a
                href="https://www.tiktok.com/@eluna.academy?_t=ZS-90aXXkzh3Mu&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black dark:text-white hover:text-gray-600 transition-all duration-300 hover:scale-110"
                aria-label="TikTok"
                title="TikTok"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.1 1.82 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-.96-.1z"/>
                </svg>
              </a>

              {/* WhatsApp Icon */}
              <a
                href="https://wa.me/601111676050"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 hover:text-green-400 transition-all duration-300 hover:scale-110"
                aria-label="WhatsApp"
                title="WhatsApp"
              >
                <MessageCircle className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Contact & Support */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 relative inline-block">
              Contact & Support
              <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-purple-500"></span>
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-slate-400 group">
                <Mail className="w-5 h-5 text-slate-500 group-hover:text-cyan-400 transition-colors flex-shrink-0" />
                <span>{CONTACT_INFO.email}</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-400 group">
                <Phone className="w-5 h-5 text-slate-500 group-hover:text-cyan-400 transition-colors flex-shrink-0" />
                <span>{CONTACT_INFO.phone}</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-400 group">
                <MapPin className="w-5 h-5 text-slate-500 group-hover:text-cyan-400 transition-colors flex-shrink-0" />
                <span>{CONTACT_INFO.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">
            &copy; {CONTACT_INFO.copyrightYear} {CONTACT_INFO.brandName}. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6 text-xs text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Settings</a>
            <button 
              onClick={scrollToTop}
              className="flex items-center gap-1 text-cyan-500 hover:text-cyan-400 transition-colors ml-4"
            >
              Top <ArrowUpRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
