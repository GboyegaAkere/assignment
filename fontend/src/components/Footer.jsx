// components/Footer.jsx
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

export function Footer() {
  return (
    <footer className="bg-black text-white px-6 py-4 text-sm">
      <div className="max-w-7xl mx-auto w-full border border-gray-800 rounded-md py-6 px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-400">
          © 2024, All Rights Reserved. Designed & Built by{' '}
          <a
            href="https://framerxplore.com"
            className="text-blue-400 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            FramerXplore
          </a>
        </p>
        <div className="flex space-x-4">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-white hover:text-blue-500" size={18} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-white hover:text-pink-500" size={18} />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-white hover:text-gray-400" size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
