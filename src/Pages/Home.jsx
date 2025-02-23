import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import NewsCard from "../components/NewsCard";
import Footer from "../components/Footer";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle mobile menu
  const [activeDropdown, setActiveDropdown] = useState(null); // Track the active dropdown

  // Close dropdowns when clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown")) {
        setActiveDropdown(null); // Close all dropdowns
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Toggle dropdown and close others
  const toggleDropdown = (dropdownName) => {
    setActiveDropdown((prevDropdown) => (prevDropdown === dropdownName ? null : dropdownName));
  };

  // Data Berita
  const newsData = [
    {
      image: "./images/news1.jpeg",
      title: "hasil ujian calon pegawai kontrak blud rs paru sumatera barat",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique eveniet minus reprehenderit facere mollitia accusamus tempora...",
      time: "5 menit yang lalu",
    },
    {
      image: "./images/news2.jpeg",
      title: "rekrutmen pegawai non asn (kontrak) blud tahun 2025 rs paru",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique eveniet minus reprehenderit facere mollitia accusamus tempora...",
      time: "10 menit yang lalu",
    }
  ];

  return (
    <div className="bg-gray-100">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: 'url("./images/bg-hero.jpeg")' }}></div>
      <div className="absolute inset-0 flex justify-center items-center z-20 pt-48 sm:pt-24 lg:pt-32">
        <div className="text-center font-medium px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold">Rumah Sakit Paru Sumatera Barat</h1>
          <p className="mt-4 text-lg">Layanan 24 Jam, Siap Membantu Anda</p>
          <p className="mt-2 text-sm">Memberikan Pelayanan Kesehatan Paru dan Pernafasan secara berkualitas, Profesional dan Paripurna.</p>
        </div>
      </div>
      <div className="min-h-screen relative">
        <Navbar
          toggleMenu={toggleMenu}
          isMenuOpen={isMenuOpen}
          toggleDropdown={toggleDropdown}
          activeDropdown={activeDropdown}
        />
      </div>
      {/* End Navbar */}

      {/* Berita */}
      <div className="mb-10">  {/* Tambahkan margin atau padding setelah navbar */}
        <div className="container mx-auto px-6 pt-6 text-center">
          <h2 className="text-3xl font-bold text-blue-500">Berita Terbaru</h2>
        </div>
        {/* News Grid */}
        <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 h-full gap-8 mt-12">
          {newsData.map((news, index) => (
            <NewsCard
              key={index}
              image={news.image}
              title={news.title}
              description={news.description}
              time={news.time}
            />
          ))}
        </div>
      </div>
      {/* End Berita */}

      {/* Footer */}
      <Footer />
      {/* End Footer */}
    </div>
  );
};

export default Home;
