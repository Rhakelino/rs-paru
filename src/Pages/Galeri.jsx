import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Galleri from "../components/Galleri";

const Galeri = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest(".dropdown")) {
                setActiveDropdown(null);
            }
        };
        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, []);

    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: 'ease-out-cubic',
            once: true,
        });
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const toggleDropdown = (dropdownName) => {
        setActiveDropdown((prevDropdown) => (prevDropdown === dropdownName ? null : dropdownName));
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Navbar
                toggleMenu={toggleMenu}
                isMenuOpen={isMenuOpen}
                toggleDropdown={toggleDropdown}
                activeDropdown={activeDropdown}
            />

            {/* Hero Section with Background */}
            <div className="relative bg-gradient-to-r from-blue-600 to-teal-500 h-64 md:h-80">
                <div className="absolute inset-0 bg-opacity-50 flex items-center justify-center">
                    <div className="text-center text-white px-6">
                        <h1 className="text-4xl md:text-5xl font-bold mb-2" data-aos="fade-down">
                            Galeri
                        </h1>
                        <p className="text-xl md:text-2xl max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
                            Dokumentasi Fasilitas & Pelayanan Rumah Sakit Paru Sumatera Barat
                        </p>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto px-6 py-12 -mt-16">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 bg-white rounded-lg shadow-lg p-8" data-aos="fade-up">
                        <p className="text-lg text-gray-600">
                            Kenali lebih dekat fasilitas dan pelayanan Rumah Sakit Paru Sumatera Barat 
                            melalui dokumentasi visual berbagai area rumah sakit.
                        </p>
                    </div>

                    <Galleri />
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Galeri;