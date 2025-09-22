import React from 'react';

function About() {
  return (
    <section id="about" className="py-20 bg-white text-center px-6 md:px-20">
      <h2 className="text-3xl font-bold text-indigo-700 mb-6">About Me</h2>
      <p className="text-gray-700 max-w-3xl mx-auto mb-8 text-lg">
        I'm Thirumala Susmitha Chowdary, a passionate Computer Science graduate student at Texas A&M University-Commerce. 
        With a strong foundation in full-stack web development, cloud-native architecture, and cybersecurity, I love building things that solve real-world problems. 
        I previously worked at Accenture and contributed to several academic and personal web projects.
      </p>

      <h3 className="text-2xl font-semibold text-indigo-600 mb-4">Technical Skills</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
        <span className="bg-indigo-100 text-indigo-700 py-2 px-4 rounded-lg">Data Structures</span>
        <span className="bg-indigo-100 text-indigo-700 py-2 px-4 rounded-lg">AI Using Python</span>
        <span className="bg-indigo-100 text-indigo-700 py-2 px-4 rounded-lg">Network Security</span>
        <span className="bg-indigo-100 text-indigo-700 py-2 px-4 rounded-lg">Database Management Systems</span>
        <span className="bg-indigo-100 text-indigo-700 py-2 px-4 rounded-lg">React.js</span>
        <span className="bg-indigo-100 text-indigo-700 py-2 px-4 rounded-lg">C language</span>
        <span className="bg-indigo-100 text-indigo-700 py-2 px-4 rounded-lg">UX/UI Design</span>
        <span className="bg-indigo-100 text-indigo-700 py-2 px-4 rounded-lg">Java</span>
        <span className="bg-indigo-100 text-indigo-700 py-2 px-4 rounded-lg">Spring Boot</span>
        <span className="bg-indigo-100 text-indigo-700 py-2 px-4 rounded-lg">Node.js</span>
        <span className="bg-indigo-100 text-indigo-700 py-2 px-4 rounded-lg">HTML/CSS</span>
        <span className="bg-indigo-100 text-indigo-700 py-2 px-4 rounded-lg">Azure</span>
        <span className="bg-indigo-100 text-indigo-700 py-2 px-4 rounded-lg">Docker</span>
        <span className="bg-indigo-100 text-indigo-700 py-2 px-4 rounded-lg">CI/CD Pipelines</span>
        <span className="bg-indigo-100 text-indigo-700 py-2 px-4 rounded-lg">Kubernetes</span>
        <span className="bg-indigo-100 text-indigo-700 py-2 px-4 rounded-lg">Git</span>
        <span className="bg-indigo-100 text-indigo-700 py-2 px-4 rounded-lg">SQL Server</span>
        <span className="bg-indigo-100 text-indigo-700 py-2 px-4 rounded-lg">MongoDb</span>
      </div>
    </section>
  );
}

export default About;
