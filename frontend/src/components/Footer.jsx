import React from "react";

function Footer() {
  return (
    <footer className=" bg-[#181e25] border-t border-gray-800 py-6 px-8">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center mb-2 md:mb-0">
          <span className="bg-cyan-400 rounded-xl p-2 mr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-900"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 0c-4.42 0-8 1.79-8 4v2h16v-2c0-2.21-3.58-4-8-4z"
              />
            </svg>
          </span>
          <span className="text-white font-bold text-lg">WhoIs Pro</span>
        </div>
        <div className="flex items-center space-x-6">
          <span className="text-blue-200 text-sm">
            © 2024 WhoIs Pro. All rights reserved.
          </span>
          <a
            href="mailto:support@whoispro.com"
            className="text-cyan-400 text-sm hover:underline"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
