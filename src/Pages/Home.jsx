import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Galleri from "../components/Galleri";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Initialize AOS and handle loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      AOS.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: true,
      });
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  // Handle dropdown closing
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown")) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // Toggle functions
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = (dropdownName) => {
    setActiveDropdown((prevDropdown) => (prevDropdown === dropdownName ? null : dropdownName));
  };

  // Loading screen
  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Memuat halaman...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden w-full">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background with Gradient Overlay */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: "url('./images/bg-hero.jpeg')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-teal-700/30"></div>
        </div>

        {/* Navbar */}
        <Navbar
          toggleMenu={toggleMenu}
          isMenuOpen={isMenuOpen}
          toggleDropdown={toggleDropdown}
          activeDropdown={activeDropdown}
        />

        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-center h-full px-4 w-full">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-4" data-aos="fade-down" data-aos-delay="100">
              Rumah Sakit Paru<br />Sumatera Barat
            </h1>
            <p className="text-xl md:text-2xl font-medium mb-4" data-aos="fade-up" data-aos-delay="200">
              Layanan 24 Jam, Siap Membantu Anda
            </p>
            <p className="text-base md:text-lg mb-8 text-white/90 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="300">
              Memberikan Pelayanan Kesehatan Paru dan Pernapasan secara Berkualitas, Profesional dan Paripurna.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="400">
              <Link to="/igd" className="bg-white text-blue-700 hover:bg-gray-100 py-3 px-8 rounded-lg font-medium transition-colors">
                Layanan Kami
              </Link>
              <Link to="/profilPPID" className="border border-white text-white hover:bg-white/10 py-3 px-8 rounded-lg font-medium transition-colors">
                Hubungi Kami
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce" data-aos="fade-up" data-aos-delay="600">
          <a href="#services" className="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white w-full">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4" data-aos="fade-up">
              Layanan Unggulan Kami
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
              RS Paru Sumatera Barat menyediakan berbagai layanan unggulan untuk kesehatan paru dan pernapasan Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Service cards... */}
            {/* Service 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow" data-aos="fade-up" data-aos-delay="100">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center text-3xl mb-4">
                🫁
              </div>
              <h3 className="text-xl font-bold mb-2">Pelayanan Paru</h3>
              <p className="text-gray-600 mb-4">Pelayanan diagnostik dan terapi untuk berbagai penyakit paru.</p>
              <Link to="/unggulan" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
                Selengkapnya
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow" data-aos="fade-up" data-aos-delay="200">
              <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center text-3xl mb-4">
                🧬
              </div>
              <h3 className="text-xl font-bold mb-2">Laboratorium TB-MDR</h3>
              <p className="text-gray-600 mb-4">Diagnosis dan pengobatan untuk kasus TB Multi-Drug Resistant.</p>
              <Link to="/unggulan" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
                Selengkapnya
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow" data-aos="fade-up" data-aos-delay="300">
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center text-3xl mb-4">
                📊
              </div>
              <h3 className="text-xl font-bold mb-2">Spirometri</h3>
              <p className="text-gray-600 mb-4">Pengujian fungsi paru dengan peralatan modern dan akurat.</p>
              <Link to="/unggulan" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
                Selengkapnya
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Service 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow" data-aos="fade-up" data-aos-delay="400">
              <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center text-3xl mb-4">
                🏥
              </div>
              <h3 className="text-xl font-bold mb-2">Rawat Inap & Gawat Darurat</h3>
              <p className="text-gray-600 mb-4">Pelayanan rawat inap dan gawat darurat 24 jam.</p>
              <Link to="/unggulan" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
                Selengkapnya
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-teal-500 w-full">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Stats... */}
            <div className="text-center text-white" data-aos="fade-up" data-aos-delay="100">
              <div className="text-4xl md:text-5xl font-bold mb-2">24</div>
              <div className="text-sm uppercase tracking-wider opacity-90">Jam Pelayanan</div>
            </div>

            <div className="text-center text-white" data-aos="fade-up" data-aos-delay="200">
              <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
              <div className="text-sm uppercase tracking-wider opacity-90">Tenaga Medis</div>
            </div>

            <div className="text-center text-white" data-aos="fade-up" data-aos-delay="300">
              <div className="text-4xl md:text-5xl font-bold mb-2">100+</div>
              <div className="text-sm uppercase tracking-wider opacity-90">Pasien per Hari</div>
            </div>

            <div className="text-center text-white" data-aos="fade-up" data-aos-delay="400">
              <div className="text-4xl md:text-5xl font-bold mb-2">25+</div>
              <div className="text-sm uppercase tracking-wider opacity-90">Tahun Pengalaman</div>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 bg-gray-50 w-full">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4" data-aos="fade-up">
              Berita Terbaru
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
              Ikuti informasi dan kegiatan terbaru dari RS Paru Sumatera Barat
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* News cards... */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md" data-aos="fade-up" data-aos-delay="100">
              <img
                src="./images/news1.jpeg"
                alt="Hasil Ujian"
                className="w-full h-48 object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://via.placeholder.com/400x200?text=RS+Paru";
                }}
              />
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">5 hari yang lalu</div>
                <h3 className="text-xl font-bold mb-2 line-clamp-2">Hasil Ujian Calon Pegawai Kontrak BLUD</h3>
                <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                  Pengumuman hasil seleksi dan tahapan selanjutnya untuk calon pegawai kontrak BLUD RS Paru Sumatera Barat.
                </p>
                <Link to="/berita" className="text-blue-600 hover:text-blue-800 font-medium">Baca Selengkapnya</Link>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md" data-aos="fade-up" data-aos-delay="200">
              <img
                src="./images/news2.jpeg"
                alt="Rekrutmen Pegawai"
                className="w-full h-48 object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://via.placeholder.com/400x200?text=RS+Paru";
                }}
              />
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">2 minggu yang lalu</div>
                <h3 className="text-xl font-bold mb-2 line-clamp-2">Rekrutmen Pegawai Non ASN (Kontrak) BLUD</h3>
                <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                  RS Paru Sumatera Barat membuka lowongan untuk posisi Dokter Spesialis, Perawat, dan Teknisi Laboratorium.
                </p>
                <Link to="/berita" className="text-blue-600 hover:text-blue-800 font-medium">Baca Selengkapnya</Link>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md" data-aos="fade-up" data-aos-delay="300">
              <img
                src="https://picsum.photos/800/450?random=1"
                alt="Bakti Sosial"
                className="w-full h-48 object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://via.placeholder.com/400x200?text=RS+Paru";
                }}
              />
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">1 bulan yang lalu</div>
                <h3 className="text-xl font-bold mb-2 line-clamp-2">Kegiatan Bakti Sosial dalam Rangka HUT</h3>
                <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                  RS Paru Sumatera Barat mengadakan kegiatan bakti sosial pemeriksaan kesehatan gratis untuk masyarakat sekitar.
                </p>
                <Link to="/berita" className="text-blue-600 hover:text-blue-800 font-medium">Baca Selengkapnya</Link>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md" data-aos="fade-up" data-aos-delay="400">
              <img
                src="https://picsum.photos/800/450?random=2"
                alt="Seminar Kesehatan"
                className="w-full h-48 object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://via.placeholder.com/400x200?text=RS+Paru";
                }}
              />
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">1 bulan yang lalu</div>
                <h3 className="text-xl font-bold mb-2 line-clamp-2">Seminar Kesehatan Paru dan Pernafasan</h3>
                <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                  RS Paru Sumatera Barat menyelenggarakan seminar kesehatan dengan tema 'Menjaga Kesehatan Paru di Era Modern'.
                </p>
                <Link to="/berita" className="text-blue-600 hover:text-blue-800 font-medium">Baca Selengkapnya</Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-12" data-aos="fade-up">
            <Link to="/artikel" className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-lg font-medium inline-block">
              Lihat Semua Berita
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white w-full">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4" data-aos="fade-up">
              Galeri RS Paru Sumatera Barat
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
              Lihat koleksi foto fasilitas dan kegiatan di RS Paru Sumatera Barat
            </p>
          </div>

          <div className="overflow-hidden w-full">
            <Galleri />
          </div>

          <div className="text-center mt-8" data-aos="fade-up">
            <Link to="/galeri" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
              Lihat Lebih Banyak Foto
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-teal-500 w-full">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="md:flex md:items-center md:justify-between">
            <div className="mb-8 md:mb-0 md:w-2/3" data-aos="fade-right">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Butuh Bantuan atau Informasi?</h2>
              <p className="text-white/90">
                Tim kami siap membantu Anda 24 jam setiap hari. Hubungi kami untuk informasi lebih lanjut.
              </p>
            </div>
            <div className="md:w-1/3 text-center md:text-right" data-aos="fade-left">
              <Link to="/kontak" className="bg-white text-blue-600 py-3 px-8 rounded-lg font-medium inline-block hover:bg-gray-100 transition-colors">
                Hubungi Kami
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;