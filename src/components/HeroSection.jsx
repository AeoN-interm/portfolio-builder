import React, { useState, useEffect } from 'react';

const images = [
  "https://via.placeholder.com/1200x600/ff7f7f/333333?text=First+Image",
  "https://via.placeholder.com/1200x600/7f7fff/333333?text=Second+Image",
  "https://via.placeholder.com/1200x600/7fff7f/333333?text=Third+Image",
];

function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // 5 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <section className="relative w-full h-screen bg-gray-900 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center transition-all duration-1000"
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      ></div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
      
      {/* Main Content */}
      <div className="relative z-10 flex justify-center items-center w-full h-full text-white text-center">
        <div className="animate__animated animate__fadeIn">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight">
            Welcome to My Portfolio
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-80">
            I am a passionate web developer. Let's create something amazing together.
          </p>
          
          {/* CTA Button */}
          <a
            href="#portfolio"
            className="bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300 transform hover:scale-105"
          >
            View Portfolio
          </a>
        </div>
      </div>
      
      {/* Image Fade Effect */}
      <style jsx>{`
        .animate__fadeIn {
          animation: fadeIn 2s ease-in-out;
        }
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
      `}</style>
    </section>
  );
}

export default HeroSection;
