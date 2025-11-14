import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG, GOOGLE_APPS_SCRIPT_CONFIG } from '../config/emailjs.ts';

interface SignUpModalProps {
  onClose: () => void;
}

const SignUpModal: React.FC<SignUpModalProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', courseType: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.courseType) {
      alert('Please fill in all fields');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      alert('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Send email using EmailJS
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          to_email: formData.email,
          name: formData.name,
          title: 'Eluna Academy Application',
          email: formData.email,
          phone: formData.phone,
          courseType: formData.courseType,
        }
      );

      // Send data to Google Sheets
      const response = await fetch(GOOGLE_APPS_SCRIPT_CONFIG.DEPLOYMENT_URL, {
        method: 'POST',
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          courseType: formData.courseType,
        }),
      });

      if (!response.ok) {
        console.error('Google Sheets error:', response.statusText);
        // Don't fail the entire process if Google Sheets has an issue
        // Email was already sent successfully
      }
      
      // Success
      setSuccessMessage('Welcome! Check your email for next steps.');
      setFormData({ name: '', email: '', phone: '', courseType: '' });
      
      setTimeout(() => {
        onClose();
        setSuccessMessage('');
      }, 2000);
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 animate-fade-in" onClick={onClose}>
      <div 
        className="bg-white rounded-xl shadow-2xl w-full max-w-md p-8 relative transform transition-all duration-300 animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
        <h2 className="text-2xl font-bold text-ocean-blue text-center mb-2">Daftar Kelas Bersama Kami</h2>
        <p className="text-center text-gray-500 mb-6">Mulakan Perjalanan Ilmu Anda Bersama Kami!</p>
        
        {successMessage ? (
          <div className="text-center py-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
              <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
            </div>
            <p className="text-green-600 font-semibold">{successMessage}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nama Penuh</label>
              <input 
                type="text" 
                id="name" 
                placeholder="Masukkan nama penuh anda" 
                value={formData.name}
                onChange={handleChange}
                disabled={isSubmitting}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-blue focus:border-sky-blue transition disabled:bg-gray-100 disabled:cursor-not-allowed" 
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Alamat Emel</label>
              <input 
                type="email" 
                id="email" 
                placeholder="Masukkan emel anda" 
                value={formData.email}
                onChange={handleChange}
                disabled={isSubmitting}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-blue focus:border-sky-blue transition disabled:bg-gray-100 disabled:cursor-not-allowed" 
              />
            </div>
            <div className="mb-6">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Nombor Telefon</label>
              <input 
                type="tel" 
                id="phone" 
                placeholder="Masukkan nombor telefon anda" 
                value={formData.phone}
                onChange={handleChange}
                disabled={isSubmitting}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-blue focus:border-sky-blue transition disabled:bg-gray-100 disabled:cursor-not-allowed" 
              />
            </div>
            <div className="mb-6">
              <label htmlFor="courseType" className="block text-sm font-medium text-gray-700 mb-1">Jenis Kursus yang Dipilih</label>
              <select 
                id="courseType" 
                value={formData.courseType}
                onChange={handleChange}
                disabled={isSubmitting}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-blue focus:border-sky-blue transition disabled:bg-gray-100 disabled:cursor-not-allowed"
              >
                <option value="">-- Pilih Kursus --</option>
                <option value="Try Ngaji">Try Ngaji - Kelas Mengaji Al-Quran</option>
                <option value="Try Hafazan">Try Hafazan - Kelas Hafazan dan Tasmik</option>
                <option value="Try UPKK">Try UPKK - Tuisyen Ulangkaji Bahasa Arab</option>
              </select>
            </div>
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-gradient-button text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Creating Account...' : 'Hantar'}
            </button>
          </form>
        )}
        <p className="text-xs text-gray-400 text-center mt-4">
          By signing up, you agree to our Terms of Service.
        </p>
      </div>
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in { animation: fade-in 0.3s ease-out forwards; }

        @keyframes slide-up {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-slide-up { animation: slide-up 0.4s ease-out forwards; }
      `}</style>
    </div>
  );
};

export default SignUpModal;
