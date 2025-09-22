import React from 'react';

function Contact() {
  return (
    <section id="contact" className="py-20 px-6 md:px-20 bg-white text-center">
      <h2 className="text-3xl font-bold text-indigo-700 mb-6">Get in Touch</h2>
      <p className="text-gray-700 text-lg mb-8 max-w-xl mx-auto">
        I'm open to full-time, internship, research, and collaboration opportunities. Feel free to connect with me!
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-6">
        <a
          href="mailto:susmithat50@gmail.com"
          className="text-indigo-600 border border-indigo-600 px-6 py-2 rounded-lg hover:bg-indigo-600 hover:text-white transition"
        >
          Email Me
        </a>
        <a
          href="https://github.com/s3190/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-600 border border-indigo-600 px-6 py-2 rounded-lg hover:bg-indigo-600 hover:text-white transition"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/susmithachowdarythirumala/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-600 border border-indigo-600 px-6 py-2 rounded-lg hover:bg-indigo-600 hover:text-white transition"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}

export default Contact;
