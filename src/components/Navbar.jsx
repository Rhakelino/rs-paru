import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS

const Navbar = ({ toggleMenu, isMenuOpen, toggleDropdown, activeDropdown }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 500,
      once: false,
    });   
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true); // Navbar akan diberi background dan shadow saat scroll
      } else {
        setIsScrolled(false); // Navbar kembali normal ketika scroll di atas
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Bersihkan event listener ketika komponen unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav data-aos="fade-down" className={`fixed m-0 p-0 top-0 left-0 right-0 z-50 transition-all ${isScrolled ? 'bg-[#1D232A] shadow-sm' : 'bg-transparent'} `}>
      {/* Navbar Content */}
      <div className={`flex justify-between items-center p-4 relative z-20`}>
        {/* Logo Section */}
        <Link to="/" className="flex items-center">
          <img src="./images/logo.png" alt="Logo" className="w-10" />
          <div className="text-2xl font-bold text-blue-500">Rs Paru</div>
        </Link>

        {/* Mobile Hamburger Button */}
        <div className="block lg:hidden ml-auto z-30">
          <button onClick={toggleMenu} className="text-gray-700 hover:text-blue-500">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <div className={`hidden lg:flex space-x-6 `}>
          <Link to="/" className={`text-gray-700 text-sm hover:text-blue-500 font-medium ${isScrolled ? 'text-white' : ''}`}>Beranda</Link>
          {/* Profil Dropdown */}
          <div className="relative dropdown">
            <button
              onClick={() => toggleDropdown("profil")}
              className={`text-gray-700 hover:text-blue-500 flex items-center text-sm ${isScrolled ? 'text-white' : ''}`}
              aria-expanded={activeDropdown === "profil"}
              aria-haspopup="true"
            >
              <span className="font-medium">Profil</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 ml-2">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Profil Dropdown Menu Items */}
            {activeDropdown === "profil" && (
              <div className="absolute left-0 mt-2 bg-white border shadow-lg rounded-lg w-48">
                <Link to="/visi" href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Visi dan Misi</Link>
                <Link to="/tugas" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Tugas dan Pokok Fungsi</Link>
                <Link to="/sejarah" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sejarah</Link>
              </div>
            )}
          </div>

          {/* Pelayanan Medis Dropdown */}
          <div className="relative dropdown">
            <button
              onClick={() => toggleDropdown("pelayananMedis")}
              className={`text-gray-700 hover:text-blue-500 flex items-center text-sm ${isScrolled ? 'text-white' : ''}`}
              aria-expanded={activeDropdown === "pelayananMedis"}
              aria-haspopup="true"
            >
              <span className="font-medium">Pelayanan Medis</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 ml-2">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Pelayanan Medis Dropdown Menu Items */}
            {activeDropdown === "pelayananMedis" && (
              <div className="absolute left-0 mt-2 bg-white border shadow-lg rounded-lg w-48">
                <Link to="/igd" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Instalasi Gawat Darurat</Link>
                <Link to="/rawat" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Rawat Jalan</Link>
                <Link to="/inap" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Rawat Inap</Link>
              </div>
            )}
          </div>

          {/* Penunjang Medis Dropdown */}
          <div className="relative dropdown">
            <button
              onClick={() => toggleDropdown("penunjangMedis")}
              className={`text-gray-700 hover:text-blue-500 flex items-center text-sm ${isScrolled ? 'text-white' : ''}`}
              aria-expanded={activeDropdown === "penunjangMedis"}
              aria-haspopup="true"
            >
              <span className="font-medium">Penunjang Medis</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 ml-2">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Penunjang Medis Dropdown Menu Items */}
            {activeDropdown === "penunjangMedis" && (
              <div className="absolute left-0 mt-2 bg-white border shadow-lg rounded-lg w-48">
                <Link to="/labor" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Laboratorium</Link>
                <Link to="/radio" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Radiologi</Link>
                <Link to="/farmasi" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Farmasi</Link>
              </div>
            )}
          </div>
          <Link to="/unggulan" className={`text-gray-700 text-sm hover:text-blue-500 font-medium ${isScrolled ? 'text-white' : ''}`}>Layanan Unggulan</Link>
        </div>
        <div className="hidden lg:block">
          <a href="/get-started" className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-400 z-10">
            Hubungi Kami
          </a>
        </div>

      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden ${isMenuOpen ? "block" : "hidden"} absolute top-16 left-0 right-0 bg-white z-50`}>
        <div className="flex flex-col items-center space-y-4 p-4">
          <a href="/" className="text-gray-700 hover:text-blue-500 flex">Home</a>

          {/* Mobile Dropdowns */}
          <div className="relative dropdown">
            <button
              onClick={() => toggleDropdown("profil")}
              className="text-gray-700 hover:text-blue-500 flex items-center text-sm"
              aria-expanded={activeDropdown === "profil"}
              aria-haspopup="true"
            >
              <span>Profil</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 ml-2">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {activeDropdown === "profil" && (
              <div className="absolute left-0 mt-2 bg-white border shadow-lg rounded-lg w-48 z-40">
                <Link to="/Visi" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Visi dan Misi</Link>
                <Link to="/tugas" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Tugas dan Pokok Fungsi</Link>
                <Link to="/sejarah" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sejarah</Link>
              </div>
            )}
          </div>

          {/* Pelayanan Medis Dropdown */}
          <div className="relative dropdown">
            <button
              onClick={() => toggleDropdown("pelayananMedis")}
              className="text-gray-700 hover:text-blue-500 flex items-center text-sm"
              aria-expanded={activeDropdown === "pelayananMedis"}
              aria-haspopup="true"
            >
              <span>Pelayanan Medis</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 ml-2">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {activeDropdown === "pelayananMedis" && (
              <div className="absolute left-0 mt-2 bg-white border shadow-lg rounded-lg w-48 z-40">
                <Link to="/igd" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Instalasi Gawat Darurat</Link>
                <Link to="/rawat" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Rawat Jalan</Link>
                <Link to="/inap" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Rawat Inap</Link>
              </div>
            )}
          </div>

          {/* Penunjang Medis Dropdown */}
          <div className="relative dropdown">
            <button
              onClick={() => toggleDropdown("penunjangMedis")}
              className="text-gray-700 hover:text-blue-500 flex items-center text-sm"
              aria-expanded={activeDropdown === "penunjangMedis"}
              aria-haspopup="true"
            >
              <span>Penunjang Medis</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 ml-2">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {activeDropdown === "penunjangMedis" && (
              <div className="absolute left-0 mt-2 bg-white border shadow-lg rounded-lg w-48 z-40">
                <Link to="/labor" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Laboratorium</Link>
                <Link to="/radio" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Radiologi</Link>
                <Link to="/farmasi" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Farmasi</Link>
              </div>
            )}
          </div>

          <Link to="/unggulan" className="text-gray-700 text-sm hover:text-blue-500">Layanan Unggulan</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
