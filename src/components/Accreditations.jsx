import React from 'react';

function Accreditations() {
  const items = [
    {
      type: "Certification",
      name: "Microsoft Certified: Azure Fundamentals (AZ-900)",
      authority: "Microsoft",
      date: "Issued: June 2023",
      //link: "https://www.credly.com/badges/your-cert-link" // Replace with actual
    },
    {
      type: "Certification",
      name: "Python Data Structures",
      authority: "Coursera",
      date: "Issued: 2023",
      link: "#"
    },
    {
      type: "Certification",
      name: "Getting Started with AI using IBM Watson",
      authority: "Coursera",
      date: "Issued: 2023",
      link: "#"
    },
    {
      type: "Conference Presentation",
      name: "A Multi-Layered Hybrid Approach for Intrusion Detection System",
      authority: "CSMCS 2022, Manipal Institute of Technology",
      date: "Presented: August 2022",
      link: "#"
    },
    {
      type: "Internship",
      name: "Campus Ambassador Intern",
      authority: "Internmind",
      date: "2022",
      link: "#"
    },
    {
      type: "Volunteering",
      name: "Health Survey Volunteer",
      authority: "Community Outreach",
      date: "2021",
      link: "#"
    }
  ];

  return (
    <section id="accreditations" className="py-20 bg-gray-50 px-6 md:px-20 text-center">
      <h2 className="text-3xl font-bold text-indigo-700 mb-10">Accreditations & Certifications</h2>
      <div className="max-w-4xl mx-auto space-y-6 text-left">
        {items.map((item, index) => (
          <div key={index} className="border p-5 rounded-lg bg-white shadow hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-indigo-700">{item.name}</h3>
            <p className="text-sm text-gray-600">{item.type} – {item.authority}</p>
            <p className="text-sm text-gray-500 mb-1">{item.date}</p>
            {item.link !== "#" && (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-indigo-500 hover:underline"
              >
                
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Accreditations;
