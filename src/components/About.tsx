import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-ocean-blue mb-8 text-center">Siapa Eluna Academy?</h2>
          
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Eluna Academy ialah sebuah platform pembelajaran Islam moden yang menawarkan pelbagai program secara online dan fizikal, berfokus kepada pengajian <strong>Al-Quran, Hafazan, dan Bahasa Arab</strong>.
          </p>

          <p className="text-lg text-gray-700 mb-12 leading-relaxed">
            Kami percaya setiap individu berhak mendapat peluang untuk belajar dan mendekatkan diri kepada ilmu Islam tidak kira umur, tahap atau lokasi.
          </p>

          {/* Program Utama */}
          <div className="bg-gradient-to-r from-sky-blue/10 to-turquoise/10 p-8 rounded-xl mb-12">
            <h3 className="text-2xl font-bold text-ocean-blue mb-6">Program Utama Eluna Academy:</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-turquoise font-bold text-xl mt-1">•</span>
                <span className="text-gray-700 text-lg"><strong>Try Ngaji</strong> – Kelas Mengaji Al-Quran (Fizikal & Online)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-turquoise font-bold text-xl mt-1">•</span>
                <span className="text-gray-700 text-lg"><strong>Try Hafazan</strong> – Kelas Hafazan dan Tasmik (Fizikal & Online)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-turquoise font-bold text-xl mt-1">•</span>
                <span className="text-gray-700 text-lg"><strong>Try UPKK</strong> – Tuisyen Ulangkaji Bahasa Arab UPKK (Online)</span>
              </li>
            </ul>
          </div>

          {/* Misi dan Visi */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Misi */}
            <div className="bg-ocean-blue/5 p-8 rounded-xl border-l-4 border-ocean-blue">
              <h3 className="text-2xl font-bold text-ocean-blue mb-4">Misi Kami</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                Memberi peluang pembelajaran Islam yang fleksibel, mudah difahami, dan mampu milik untuk semua peringkat umur.
              </p>
            </div>

            {/* Visi */}
            <div className="bg-turquoise/5 p-8 rounded-xl border-l-4 border-turquoise">
              <h3 className="text-2xl font-bold text-turquoise mb-4">Visi Kami</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                Menjadi platform pendidikan Islam pilihan utama dalam membina generasi yang celik Al-Quran, fasih berbahasa Arab, dan berakhlak tinggi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
