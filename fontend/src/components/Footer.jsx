const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6 md:px-10">
      <div className="max-w-7xl mx-auto w-full border-t border-neutral-800 pt-6">
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-neutral-400 gap-4">
          <p>&copy; {new Date().getFullYear()} Samkeet Mehta. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="https://linkedin.com" className="hover:text-white">LinkedIn</a>
            <a href="https://github.com" className="hover:text-white">GitHub</a>
            <a href="mailto:samkeetm@gmail.com" className="hover:text-white">Email</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
