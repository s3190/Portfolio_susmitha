import React from 'react';
function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100 pt-20 text-center px-4 md:px-20 py-16">
      <h1 className="text-5xl font-extrabold text-indigo-800 mb-4 animate-fade-in-down">Hi, I'm Susmitha Chowdary 👋</h1>
      <p className="text-lg text-gray-700 max-w-xl animate-fade-in-up">
        A passionate Computer Science grad student specializing in full-stack development, cloud-native technologies, and research.
      </p>
      <a href="public/resume.pdf" target="_blank" rel="noopener noreferrer">
        <button className="mt-6 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-300">
          View Resume
        </button>
      </a>
    </section>
  );
}

export default Hero;
