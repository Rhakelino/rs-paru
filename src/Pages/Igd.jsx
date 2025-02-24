import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

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
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">Instalasi Gawat Darurat</h1>
                    <div className="flex justify-center">
                        <img src="./images/igd.jpeg" className='rounded-md md:w-full md:h-60 object-cover object-right-bottom overflow-hidden shadow-md mb-4' />
                    </div>
                    <div className="flex flex-col gap-3">
                    <p className='text-justify opacity-60 leading-relaxed'>Instalasi Gawat Darurat berada pada sayap kanan gedung Rumah Sakit Paru Sumatera Barat. IGD Rumah Sakit Paru Sumatera Barat adalah pelayanan untuk mengatasi kegawat daruratan yang disebabkan oleh gangguan fungsi paru dan pelayanan gawat darurat lainnya, termasuk kasus kecelakaan. Dalam hal ini IGD berperan dalam memberikan pelayanan gawat darurat yang cepat dan tepat serta terjangkau bagi kebutuhan masyarakat.</p>
                    </div>

                </div>

            </div>

            <Footer />

        </>
    )
}

export default Igd
