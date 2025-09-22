import React from 'react';

function Experience() {
  const experiences = [
    {
      company: "Accenture",
      role: "Application Development Associate",
      duration: "Aug 2022 – Oct 2023",
      description:
        "Designed and deployed microservices like CatalogService and OrderManagementService using Java, Spring Boot, Node.js, and MongoDB to enhance scalability. Built RESTful APIs, automated workflows with Azure Functions, and improved business logic with custom validations. Containerized applications using Docker and implemented CI/CD pipelines with Jenkins and Azure DevOps for efficient delivery. Managed code with Git and orchestrated services using Kubernetes to ensure stability and smooth deployment workflows.",
      tech: ["Java","Spring Boot", "Kubernetes", "Docker", "Azure", "CI/CD", "Agile"]
    },
    {
      company: "Web Development Internship",
      role: "Intern",
      duration: "Jan 2022 – May 2022",
      description:
        "Built responsive websites with HTML, CSS, and JavaScript. Contributed to back-end logic and database integration for dynamic web apps.",
      tech: ["HTML", "CSS", "React.js", "JavaScript", "Python","PHP", "MySQL"]
    },
    {
      company: "Research Assistant",
      role: "Graduate Researcher",
      duration: "Jan 2024 – Present",
      description:
        "Conducted a data-driven research project focused on early identification of students at risk of dropping out. Leveraged machine learning techniques with Python, Pandas, and Scikit-learn to analyze datasets from university records and Kaggle. The study explored key factors such as academic performance, attendance, and socio-economic background. The resulting predictive model achieved 98% accuracy, offering valuable insights for developing proactive student retention strategies.",
      tech: ["Python", "Random Neural Networks", "SHAP", "RFE", "K-Means"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 px-6 md:px-20 text-center">
      <h2 className="text-3xl font-bold text-indigo-700 mb-10">Experience</h2>
      <div className="max-w-5xl mx-auto space-y-10 text-left">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 border hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-indigo-600">{exp.role} <span className="text-gray-600">– {exp.company}</span></h3>
            <p className="text-sm text-gray-500 mb-2">{exp.duration}</p>
            <p className="text-gray-700 mb-3">{exp.description}</p>
            <div className="flex flex-wrap gap-2">
              {exp.tech.map((skill, i) => (
                <span key={i} className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded-md">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
