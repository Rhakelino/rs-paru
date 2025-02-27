import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS
import HeroBg from '../components/HeroBg';

const Igd = () => {
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

    useEffect(() => {
        AOS.init({
            duration: 500,
            once: true,
        });
    }, []);

    // Toggle mobile menu
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    // Toggle dropdown and close others
    const toggleDropdown = (dropdownName) => {
        setActiveDropdown((prevDropdown) => (prevDropdown === dropdownName ? null : dropdownName));
    };

    return (
        <>
            <Navbar
                toggleMenu={toggleMenu}
                isMenuOpen={isMenuOpen}
                toggleDropdown={toggleDropdown}
                activeDropdown={activeDropdown}
            />

            {/* Content Section */}
            <div className="container mx-auto md:px-20 px-10 py-16 mt-10">
                <div className="text-center mb-12">
                    <h1 className="text-4xl text-left font-bold text-gray-800 mb-4">Instalasi Gawat Darurat</h1>
                    <div className="flex justify-center">
                        <HeroBg img="./images/igd.jpeg" />
                    </div>
                    <div className="flex flex-col gap-3" >
                        <p data-aos="fade-right" className='text-justify opacity-60 leading-relaxed'>Instalasi Gawat Darurat berada pada sayap kanan gedung Rumah Sakit Paru Sumatera Barat. IGD Rumah Sakit Paru Sumatera Barat adalah pelayanan untuk mengatasi kegawat daruratan yang disebabkan oleh gangguan fungsi paru dan pelayanan gawat darurat lainnya, termasuk kasus kecelakaan. Dalam hal ini IGD berperan dalam memberikan pelayanan gawat darurat yang cepat dan tepat serta terjangkau bagi kebutuhan masyarakat.</p>
                    </div>

                </div>
            </div>
            <Footer />

        </>
    )
}

export default Igd
