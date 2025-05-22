import { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-purple-700 text-white shadow">
     <Link to="/"> <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">🎓 Grade 12 Memories</h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-yellow-300">Home</Link>
          <Link to="/gallery" className="hover:text-yellow-300">Gallery</Link>
          <Link to="/videos" className="hover:text-yellow-300">Videos</Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <HiX className="text-3xl" />
            ) : (
              <HiMenu className="text-3xl" />
            )}
          </button>
        </div>
      </div></Link>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-purple-800 px-4 pb-4 space-y-2">
          <Link to="/" onClick={toggleMenu} className="block hover:text-yellow-300">Home</Link>
          <Link to="/gallery" onClick={toggleMenu} className="block hover:text-yellow-300">Gallery</Link>
          <Link to="/videos" className="hover:text-yellow-300">Videos</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
