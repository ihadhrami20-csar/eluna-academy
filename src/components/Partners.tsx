import React from 'react';

const Partners: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto text-center">
        <p className="text-gray-500">Trusted by over 10,000 students worldwide</p>
        <div className="flex justify-center items-center space-x-8 mt-4 grayscale opacity-60">
          {/* Placeholder logos */}
          <div className="text-2xl font-bold">Logo1</div>
          <div className="text-2xl font-bold">Logo2</div>
          <div className="text-2xl font-bold">Logo3</div>
          <div className="text-2xl font-bold">Logo4</div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
