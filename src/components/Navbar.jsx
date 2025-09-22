import React, { useState } from 'react';

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-indigo-600">Susmitha.dev</h1>

        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} className="focus:outline-none">
            <svg className="w-6 h-6 text-indigo-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        <ul className={`md:flex md:space-x-6 font-medium text-gray-700 ${open ? "block" : "hidden"} md:block`}>
          <li className="py-2 md:py-0"><a href="#about" className="hover:text-indigo-500">About</a></li>
          <li className="py-2 md:py-0"><a href="#projects" className="hover:text-indigo-500">Projects</a></li>
          <li className="py-2 md:py-0"><a href="#experience" className="hover:text-indigo-500">Experience</a></li>
          <li className="py-2 md:py-0"><a href="#contact" className="hover:text-indigo-500">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
