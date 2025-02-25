import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Inap = () => {
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
                    <h1 className="text-4xl text-left font-bold text-gray-800 mb-4">Rawat Inap</h1>
                    <div className="flex justify-center">
                        <img src="./images/inap.jpeg" className='rounded-md md:w-full md:h-full object-cover object-center overflow-hidden shadow-md mb-4' />
                    </div>
                    <div className="flex flex-col gap-3">
                        <p className='text-justify opacity-60 leading-relaxed'>Saat ini Rumah Sakit Paru Sumatera Barat memiliki 2 tempat tidur untuk pasien TB MDR, 4 tempat tidur untuk pasien infeksi, dan 17 tempat tidur untuk pasien non infeksi. Pilihan ruang rawat inap Rumah Sakit Paru Sumatera Barat memiliki pilihan kelas 3 (satu ruang dengan tujuh tempat tidur), kelas 2 (tiga ruang dengan sembilan tempat tidur), dan kelas 1 (satu ruang dengan satu tempat tidur). Namun saat ini Rumah Sakit Paru Sumatera Barat masih dalam tahap perbaikan ruang rawatan, sehingga tidak menutup kemungkinan untuk penambahan pilihan ruang rawatan, seperti kelas VIP atau kelas VVIP.</p>

                    </div>


                </div>

            </div>

            <Footer />

        </>
    )
}

export default Inap
