import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

export function Footer() {
  return (
    <footer className="bg-black text-white py-4">
      <div className="max-w-7xl mx-auto w-full px-6 md:px-10">
        <div className="flex flex-col-reverse md:flex-row justify-between items-center md:items-stretch gap-4">

          {/* Copyright Card */}
          <div className="border border-gray-800 rounded-md py-6 px-4 h-[82px] flex items-center justify-center md:justify-start flex-1 w-full">
            <p className="text-gray-400 text-center md:text-left text-sm">
              © 2025, All Rights Reserved. Designed & Built by{' '}
              <a
                href="https://framerxplore.com"
                className="text-blue-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Oluwagboyega
              </a>
            </p>
          </div>

          {/* Social Icon Cards (hover color permanently on mobile) */}
          <div className="w-full md:w-auto flex justify-center md:justify-end flex-wrap gap-2">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[72px] h-[82px] bg-black border border-gray-800 rounded-md flex items-center justify-center transition-colors"
            >
              <FaLinkedin className="text-blue-500 md:text-white md:hover:text-blue-500" size={35} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[72px] h-[82px] bg-black border border-gray-800 rounded-md flex items-center justify-center transition-colors"
            >
              <FaInstagram className="text-pink-500 md:text-white md:hover:text-pink-500" size={35} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[72px] h-[82px] bg-black border border-gray-800 rounded-md flex items-center justify-center transition-colors"
            >
              <FaGithub className="text-gray-400 md:text-white md:hover:text-gray-400" size={35} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[72px] h-[82px] bg-black border border-gray-800 rounded-md flex items-center justify-center transition-colors"
            >
              <FaGithub className="text-gray-400 md:text-white md:hover:text-gray-400" size={35} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
