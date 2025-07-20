import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#6a4c93] text-white py-4 px-6 shadow-md rounded-t-l">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
        {/* Left: Tagline */}
        <p className="text-sm text-center md:text-left">
  Built with <span className="text-red-900">❤️</span> by Nidhi · Open to SDE Internships | 2026
</p>


        {/* Right: Links */}
        <div className="flex gap-4 text-sm">
          <a
            href="https://github.com/nidhi22-11/CompareKart"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/nidhi-mailbox"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            LinkedIn
          </a>
          <a
            href="mailto:nidhi.7mailbox@gmail.com"
            className="hover:underline"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
