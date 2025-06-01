import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ toggleMenu, isMenuOpen, toggleDropdown, activeDropdown }) => {
  const [scrolled, setScrolled] = useState(false);
  // Track the hovered dropdown for desktop
  const [hoveredDropdown, setHoveredDropdown] = useState(null);

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  // Function to handle mouse enter for dropdowns
  const handleMouseEnter = (dropdownName) => {
    setHoveredDropdown(dropdownName);
  };

  // Function to handle mouse leave for dropdowns
  const handleMouseLeave = () => {
    setHoveredDropdown(null);
  };

  // Determine which dropdown is active (either hovered on desktop or clicked on mobile)
  const getActiveDropdown = (dropdownName) => {
    // Use hovered dropdown for desktop, active dropdown for mobile
    return window.innerWidth >= 1024 ? hoveredDropdown === dropdownName : activeDropdown === dropdownName;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
        }`}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <Link to="/" className="flex items-center">
            {scrolled || isMenuOpen ? (
              // Colored logo when scrolled or mobile menu is open
              <>
                <img src="./images/logo.png" alt="Logo" className="w-10 h-10 mr-2" />
                <span className="text-xl font-bold text-blue-600">RS Paru Sumbar</span>
              </>
            ) : (
              // White logo when at top
              <>
                <img src="./images/logo.png" alt="Logo" className="w-10 h-10 mr-2 brightness-0 invert" />
                <span className="text-xl font-bold text-white">RS Paru Sumbar</span>
              </>
            )}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <Link
              to="/"
              className={`px-3 py-2 rounded-md text-sm font-medium ${scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
                }`}
            >
              Beranda
            </Link>

            {/* Profil Dropdown */}
            <div
              className="relative dropdown"
              onMouseEnter={() => handleMouseEnter("profil")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => toggleDropdown("profil")}
                className={`px-3 py-2 rounded-md text-sm font-medium flex items-center ${scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
                  }`}
              >
                <span>Profil</span>
                <svg
                  className={`w-4 h-4 ml-1 transition-transform duration-200 ${getActiveDropdown("profil") ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {getActiveDropdown("profil") && (
                <div className="absolute left-0 mt-0 w-60 rounded-md shadow-xl bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50 transition-all duration-200 opacity-100 transform-none">
                  <div className="py-1 divide-y divide-gray-100">
                    <Link to="/visi" className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 group">
                      <span className="mr-3 bg-blue-100 text-blue-600 p-1 rounded">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </span>
                      <div>
                        <div className="font-medium group-hover:text-blue-600">Visi dan Misi</div>
                        <div className="text-xs text-gray-500">Arah dan tujuan kami</div>
                      </div>
                    </Link>
                    <Link to="/tugas" className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 group">
                      <span className="mr-3 bg-blue-100 text-blue-600 p-1 rounded">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                      </span>
                      <div>
                        <div className="font-medium group-hover:text-blue-600">Tugas dan Pokok Fungsi</div>
                        <div className="text-xs text-gray-500">Tugas dan fungsi organisasi</div>
                      </div>
                    </Link>
                    <Link to="/sejarah" className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 group">
                      <span className="mr-3 bg-blue-100 text-blue-600 p-1 rounded">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </span>
                      <div>
                        <div className="font-medium group-hover:text-blue-600">Sejarah</div>
                        <div className="text-xs text-gray-500">Perjalanan RS Paru Sumbar</div>
                      </div>
                    </Link>
                    <Link to="/galeri" className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 group">
                      <span className="mr-3 bg-blue-100 text-blue-600 p-1 rounded">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </span>
                      <div>
                        <div className="font-medium group-hover:text-blue-600">Galeri</div>
                        <div className="text-xs text-gray-500">Foto dan video kegiatan</div>
                      </div>
                    </Link>
                    <Link to="/artikel" className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 group">
                      <span className="mr-3 bg-blue-100 text-blue-600 p-1 rounded">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                        </svg>
                      </span>
                      <div>
                        <div className="font-medium group-hover:text-blue-600">Artikel</div>
                        <div className="text-xs text-gray-500">Berita dan informasi</div>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Pelayanan Medis Dropdown */}
            <div
              className="relative dropdown"
              onMouseEnter={() => handleMouseEnter("pelayananMedis")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => toggleDropdown("pelayananMedis")}
                className={`px-3 py-2 rounded-md text-sm font-medium flex items-center ${scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
                  }`}
              >
                <span>Pelayanan Medis</span>
                <svg
                  className={`w-4 h-4 ml-1 transition-transform duration-200 ${getActiveDropdown("pelayananMedis") ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {getActiveDropdown("pelayananMedis") && (
                <div className="absolute left-0 mt-0 w-60 rounded-md shadow-xl bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50 transition-all duration-200 opacity-100 transform-none">
                  <div className="py-1 divide-y divide-gray-100">
                    <Link to="/igd" className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 group">
                      <span className="mr-3 bg-red-100 text-red-600 p-1 rounded">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </span>
                      <div>
                        <div className="font-medium group-hover:text-blue-600">Instalasi Gawat Darurat</div>
                        <div className="text-xs text-gray-500">Pelayanan 24 jam</div>
                      </div>
                    </Link>
                    <Link to="/rawat" className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 group">
                      <span className="mr-3 bg-blue-100 text-blue-600 p-1 rounded">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                      </span>
                      <div>
                        <div className="font-medium group-hover:text-blue-600">Rawat Jalan</div>
                        <div className="text-xs text-gray-500">Konsultasi dan pemeriksaan</div>
                      </div>
                    </Link>
                    <Link to="/inap" className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 group">
                      <span className="mr-3 bg-green-100 text-green-600 p-1 rounded">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </span>
                      <div>
                        <div className="font-medium group-hover:text-blue-600">Rawat Inap</div>
                        <div className="text-xs text-gray-500">Fasilitas perawatan</div>
                      </div>
                    </Link>
                    <div className="px-4 py-2 bg-gray-50">
                      <p className="text-xs font-medium text-gray-500 uppercase">Informasi Lainnya</p>
                    </div>
                    <Link to="/tarif" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                      <span className="w-1 h-1 rounded-full bg-gray-400 mr-2"></span>
                      Tarif Layanan
                    </Link>
                    <Link to="/jadwaldokter" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                      <span className="w-1 h-1 rounded-full bg-gray-400 mr-2"></span>
                      Jadwal Dokter
                    </Link>
                    <Link to="/alurpasien" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                      <span className="w-1 h-1 rounded-full bg-gray-400 mr-2"></span>
                      Alur Pasien
                    </Link>
                    <Link to="/alurkomplain" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                      <span className="w-1 h-1 rounded-full bg-gray-400 mr-2"></span>
                      Alur Komplain
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Penunjang Medis Dropdown */}
            <div
              className="relative dropdown"
              onMouseEnter={() => handleMouseEnter("penunjangMedis")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => toggleDropdown("penunjangMedis")}
                className={`px-3 py-2 rounded-md text-sm font-medium flex items-center ${scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
                  }`}
              >
                <span>Penunjang Medis</span>
                <svg
                  className={`w-4 h-4 ml-1 transition-transform duration-200 ${getActiveDropdown("penunjangMedis") ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {getActiveDropdown("penunjangMedis") && (
                <div className="absolute left-0 mt-0 w-60 rounded-md shadow-xl bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50 transition-all duration-200 opacity-100 transform-none">
                  <div className="py-1 divide-y divide-gray-100">
                    <Link to="/labor" className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 group">
                      <span className="mr-3 bg-purple-100 text-purple-600 p-1 rounded">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                      </span>
                      <div>
                        <div className="font-medium group-hover:text-blue-600">Laboratorium</div>
                        <div className="text-xs text-gray-500">Pemeriksaan diagnostik</div>
                      </div>
                    </Link>
                    <Link to="/radio" className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 group">
                      <span className="mr-3 bg-yellow-100 text-yellow-600 p-1 rounded">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                        </svg>
                      </span>
                      <div>
                        <div className="font-medium group-hover:text-blue-600">Radiologi</div>
                        <div className="text-xs text-gray-500">Pemindaian gambar medis</div>
                      </div>
                    </Link>
                    <Link to="/farmasi" className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 group">
                      <span className="mr-3 bg-green-100 text-green-600 p-1 rounded">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </span>
                      <div>
                        <div className="font-medium group-hover:text-blue-600">Farmasi</div>
                        <div className="text-xs text-gray-500">Layanan obat-obatan</div>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* PPID Dropdown */}
            <div
              className="relative dropdown"
              onMouseEnter={() => handleMouseEnter("PPID")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => toggleDropdown("PPID")}
                className={`px-3 py-2 rounded-md text-sm font-medium flex items-center ${scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
                  }`}
              >
                <span>PPID</span>
                <svg
                  className={`w-4 h-4 ml-1 transition-transform duration-200 ${getActiveDropdown("PPID") ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {getActiveDropdown("PPID") && (
                <div className="absolute left-0 mt-0 w-60 rounded-md shadow-xl bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50 transition-all duration-200 opacity-100 transform-none">
                  <div className="py-1 divide-y divide-gray-100">
                    <Link to="/profilPPID" className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 group">
                      <span className="mr-3 bg-blue-100 text-blue-600 p-1 rounded">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </span>
                      <div>
                        <div className="font-medium group-hover:text-blue-600">Profil PPID</div>
                        <div className="text-xs text-gray-500">Pejabat Pengelola Informasi dan Dokumentasi</div>
                      </div>
                    </Link>
                    <Link to="/informasiBerkala" className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 group">
                      <span className="mr-3 bg-blue-100 text-blue-600 p-1 rounded">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </span>
                      <div>
                        <div className="font-medium group-hover:text-blue-600">Informasi Berkala</div>
                        <div className="text-xs text-gray-500">Informasi yang wajib diumumkan</div>
                      </div>
                    </Link>
                    <Link to="/keberataninformasi" className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 group">
                      <span className="mr-3 bg-blue-100 text-blue-600 p-1 rounded">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                      </span>
                      <div>
                        <div className="font-medium group-hover:text-blue-600">Keberatan Informasi</div>
                        <div className="text-xs text-gray-500">Prosedur pengajuan keberatan</div>
                      </div>
                    </Link>
                    <Link to="/maklumat" className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 group">
                      <span className="mr-3 bg-blue-100 text-blue-600 p-1 rounded">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </span>
                      <div>
                        <div className="font-medium group-hover:text-blue-600">Maklumat</div>
                        <div className="text-xs text-gray-500">Maklumat pelayanan</div>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/unggulan"
              className={`px-3 py-2 rounded-md text-sm font-medium ${scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
                }`}
            >
              Layanan Unggulan
            </Link>
          </div>

          {/* Contact Button & Mobile Menu Button */}
          <div className="flex items-center">
            <Link
              to="/profilPPID"
              className="hidden lg:block bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors ml-4"
            >
              Hubungi Kami
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className={`lg:hidden inline-flex items-center justify-center p-2 rounded-md ${scrolled || isMenuOpen ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-white'
                } focus:outline-none`}
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed */}
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* Icon when menu is open */}
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {/* Mobile menu */}
      <div
        className={`${isMenuOpen ? 'block' : 'hidden'} lg:hidden`}
        id="mobile-menu"
      >
        <div className="bg-white shadow-lg rounded-b-xl mx-4 mt-2 px-2 pt-2 pb-3 space-y-1 divide-y divide-gray-100">
          <Link
            to="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
          >
            Beranda
          </Link>

          {/* Mobile Accordions */}
          <div className="py-1">
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault(); // Prevent any default behavior
                e.stopPropagation(); // Stop event bubbling
                toggleDropdown("profil"); // Toggle the dropdown
              }}
              className="w-full flex justify-between items-center px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 rounded-md focus:outline-none"
            >
              <span>Profil</span>
              <svg
                className={`${activeDropdown === "profil" ? 'transform rotate-180' : ''} w-5 h-5 transition-transform`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {activeDropdown === "profil" && (
              <div className="mt-2 space-y-1 bg-gray-50 rounded-md p-2">
                <Link to="/visi" className="flex items-center px-3 py-2 rounded-md text-sm text-gray-600 hover:bg-gray-100">
                  <span className="w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </span>
                  Visi dan Misi
                </Link>
                <Link to="/tugas" className="flex items-center px-3 py-2 rounded-md text-sm text-gray-600 hover:bg-gray-100">
                  <span className="w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </span>
                  Tugas dan Pokok Fungsi
                </Link>
                <Link to="/sejarah" className="flex items-center px-3 py-2 rounded-md text-sm text-gray-600 hover:bg-gray-100">
                  <span className="w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  Sejarah
                </Link>
                <Link to="/galeri" className="flex items-center px-3 py-2 rounded-md text-sm text-gray-600 hover:bg-gray-100">
                  <span className="w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </span>
                  Galeri
                </Link>
                <Link to="/artikel" className="flex items-center px-3 py-2 rounded-md text-sm text-gray-600 hover:bg-gray-100">
                  <span className="w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                  </span>
                  Artikel
                </Link>
              </div>
            )}
          </div>

          {/* Pelayanan Medis Dropdown */}
          <div className="py-1">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation(); // Prevent event bubbling
                toggleDropdown("pelayananMedis");
              }}
              className="w-full flex justify-between items-center px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 rounded-md focus:outline-none"
            >
              <span>Pelayanan Medis</span>
              <svg
                className={`${activeDropdown === "pelayananMedis" ? 'transform rotate-180' : ''} w-5 h-5 transition-transform`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {activeDropdown === "pelayananMedis" && (
              <div className="mt-2 space-y-1 bg-gray-50 rounded-md p-2">
                <Link to="/igd" className="flex items-center px-3 py-2 rounded-md text-sm text-gray-600 hover:bg-gray-100">
                  <span className="w-8 h-8 flex items-center justify-center bg-red-100 text-red-600 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </span>
                  Instalasi Gawat Darurat
                </Link>
                <Link to="/rawat" className="flex items-center px-3 py-2 rounded-md text-sm text-gray-600 hover:bg-gray-100">
                  <span className="w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </span>
                  Rawat Jalan
                </Link>
                <Link to="/inap" className="flex items-center px-3 py-2 rounded-md text-sm text-gray-600 hover:bg-gray-100">
                  <span className="w-8 h-8 flex items-center justify-center bg-green-100 text-green-600 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </span>
                  Rawat Inap
                </Link>
                <Link to="/tarif" className="flex items-center px-3 py-2 rounded-md text-sm text-gray-600 hover:bg-gray-100">
                  <span className="w-8 h-8 flex items-center justify-center bg-yellow-100 text-yellow-600 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  Tarif Layanan
                </Link>
              </div>
            )}
          </div>

          {/* Penunjang Medis Dropdown */}
          <div className="py-1">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                toggleDropdown("penunjangMedis");
              }}
              className="w-full flex justify-between items-center px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 rounded-md focus:outline-none"
            >
              <span>Penunjang Medis</span>
              <svg
                className={`${activeDropdown === "penunjangMedis" ? 'transform rotate-180' : ''} w-5 h-5 transition-transform`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {activeDropdown === "penunjangMedis" && (
              <div className="mt-2 space-y-1 bg-gray-50 rounded-md p-2">
                <Link to="/labor" className="flex items-center px-3 py-2 rounded-md text-sm text-gray-600 hover:bg-gray-100">
                  <span className="w-8 h-8 flex items-center justify-center bg-purple-100 text-purple-600 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </span>
                  Laboratorium
                </Link>
                <Link to="/radio" className="flex items-center px-3 py-2 rounded-md text-sm text-gray-600 hover:bg-gray-100">
                  <span className="w-8 h-8 flex items-center justify-center bg-yellow-100 text-yellow-600 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                  </span>
                  Radiologi
                </Link>
                <Link to="/farmasi" className="flex items-center px-3 py-2 rounded-md text-sm text-gray-600 hover:bg-gray-100">
                  <span className="w-8 h-8 flex items-center justify-center bg-green-100 text-green-600 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </span>
                  Farmasi
                </Link>
              </div>
            )}
          </div>

          {/* PPID Dropdown */}
          <div className="py-1">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                toggleDropdown("PPID");
              }}
              className="w-full flex justify-between items-center px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 rounded-md focus:outline-none"
            >
              <span>PPID</span>
              <svg
                className={`${activeDropdown === "PPID" ? 'transform rotate-180' : ''} w-5 h-5 transition-transform`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {activeDropdown === "PPID" && (
              <div className="mt-2 space-y-1 bg-gray-50 rounded-md p-2">
                <Link to="/profilPPID" className="flex items-center px-3 py-2 rounded-md text-sm text-gray-600 hover:bg-gray-100">
                  <span className="w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </span>
                  Profil PPID
                </Link>
                <Link to="/informasiBerkala" className="flex items-center px-3 py-2 rounded-md text-sm text-gray-600 hover:bg-gray-100">
                  <span className="w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  Informasi Berkala
                </Link>
                <Link to="/keberataninformasi" className="flex items-center px-3 py-2 rounded-md text-sm text-gray-600 hover:bg-gray-100">
                  <span className="w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </span>
                  Keberatan Informasi
                </Link>
                <Link to="/maklumat" className="flex items-center px-3 py-2 rounded-md text-sm text-gray-600 hover:bg-gray-100">
                  <span className="w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  Maklumat
                </Link>
              </div>
            )}
          </div>

          <div className="py-1">
            <Link
              to="/unggulan"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
            >
              Layanan Unggulan
            </Link>
          </div>

          <div className="pt-4 pb-3">
            <Link
              to="/kontak"
              className="block w-full bg-blue-600 text-center text-white px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700"
            >
              Hubungi Kami
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;