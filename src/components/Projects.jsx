import React from 'react';

function Projects() {
  const projectList = [
    {
      title: 'Banking System Website',
      description: 'A secure and responsive banking portal built with HTML, CSS, JavaScript, and PHP. Features include user login, transaction history, and account management.',
      tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      link: 'https://github.com/s3190/Basic-Banking-System-Website'
    },
    {
      title: 'Photo Sharing App',
      description: 'A dynamic web app where users can upload, view, and comment on photos. Built with Node.js, MongoDB, and Express.',
      tech: ['Node.js', 'MongoDB', 'Express', 'EJS'],
      link: 'https://github.com/s3190/Photo_Sharing_App'
    },
    {
      title: 'Cloud Native Microservices',
      description: 'A real-time travel service project at Accenture. Built and deployed cloud-native microservices using Java, Spring Boot, Node.js, Docker and Kubernetes.',
      tech: ['Java', 'Spring Boot', 'Rest APIs', 'Node.js', 'Kubernetes', 'Docker', 'Azure'],
      
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 px-6 md:px-20">
      <h2 className="text-3xl font-bold text-center text-indigo-700 mb-10">Projects</h2>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {projectList.map((project, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6 border hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">{project.title}</h3>
            <p className="text-gray-700 text-sm mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, idx) => (
                <span key={idx} className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded-md">{tech}</span>
              ))}
            </div>
            {project.link !== '#' && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-indigo-500 hover:underline"
              >
                View on GitHub →
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
