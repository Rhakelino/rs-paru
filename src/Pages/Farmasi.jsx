import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import HeroBg from '../components/HeroBg';

const Farmasi = () => {
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
                <div className="text-center">
                    <h1 className="text-4xl text-left font-bold text-gray-800 mb-4">Farmasi</h1>
                    <div className="flex justify-center">
                        <HeroBg img="./images/farmasi.jpeg" />

                    </div>
                    <div className="flex flex-col">
                        <h2 className="text-left text-lg font-medium opacity-70">Pelayanan farmasi di Rumah Sakit Paru Sumatera Barat memiliki beberapa keunggulan, seperti:</h2>
                        <p className="mt-4 text-md text-gray-600 text-left font-medium ">1. Pelayanan Resep:
                        </p>
                        <p className='text-gray-600 text-left opacity-70 pl-4'>a. Obat non racik waktu tunggu maksimal 20 menit</p>
                        <p className='text-gray-600 text-left opacity-70 pl-4'>b. Obat racik waktu tunggu maksimal 25 menit</p>
                        <p className="mt-4 text-md text-gray-600 text-left font-medium ">2. Pelayanan obat tidak dipungut biaya (obat gratis)
                        </p>
                        <p className="mt-1 text-md text-gray-600 text-left font-medium ">3. Adanya pelayanan informasi obat dan konsultasi obat kepada pasien oleh Apoteker
                        </p>
                    </div>
                </div>
            </div>
            <Footer />

        </>
    )
}

export default Farmasi;
