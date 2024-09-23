"use client";
import React, { useState, useEffect } from "react";
import TypingEffect from "react-typing-effect";

const HeroSection = () => {
  const phrases = [
    { text: "CSE Department.", color: "#ff6347" },
    { text: "World Of Innovation.", color: "#8ecae6" },
    { text: "Empowering Minds.", color: "#80ed99" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  
  const handleTypingDone = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length);
  };

  useEffect(() => {
    setCurrentIndex(0);
  }, []);

  return (
    <section
      className="relative w-full pt-40 max-h-full md:h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/cse.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      
      <div
        className="relative z-10 flex flex-col items-start 
                   justify-end h-1/2 md:h-full text-left px-4 lg:px-12 pb-8 md:pb-12"
      >
        <div className="flex items-baseline text-white mb-4">
          <h1 className="text-2xl lg:text-6xl font-bold mr-2">Welcome To</h1>
          <h2 className="text-xl lg:text-5xl font-bold break-words">
            <TypingEffect
              text={phrases.map((phrase) => phrase.text)}
              speed={100}
              eraseSpeed={50}
              typingDelay={200}
              cursor={"|"}
              displayTextRenderer={(text, index) => (
                <span style={{ color: phrases[index % phrases.length].color }}>
                  {text}
                </span>
              )}
              onTypingDone={handleTypingDone}
            />
          </h2>
        </div>
        <p className="text-white hidden md:block text-sm lg:text-lg mb-8">
          Feel free to browse through our course syllabi, academic calendars,
          research publications, and other informative sections.
        </p>
        <a
          href="/about-us"
          className="bg-blue-600 text-white px-2 py-3 md:px-6 md:py-3 rounded-lg text-sm md:text-lg hover:bg-blue-700 transition duration-300"
        >
          About Us
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
