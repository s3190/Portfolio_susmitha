import React from 'react';

function Footer() {
  return (
    <footer className="bg-white text-gray-600 py-6 text-center border-t">
      <p className="text-sm">
        © {new Date().getFullYear()} T. Susmitha Chowdary. Built with 💻 using React js & Tailwind CSS.
      </p>
    </footer>
  );
}

export default Footer;
