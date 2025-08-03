export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600 tracking-wide">
          Founders
        </h1>

        {/* Menu */}
        <ul className="flex space-x-6 text-gray-700 font-medium text-base">
          <li>
            <a href="#home" className="hover:text-blue-600 transition-colors duration-200">
              Home
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-blue-600 transition-colors duration-200">
              Services
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-600 transition-colors duration-200">
              Contact Us
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-blue-600 transition-colors duration-200">
              About Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
