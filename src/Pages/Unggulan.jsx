import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Unggulan = () => {
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
                    <h1 className="text-4xl text-left font-bold text-gray-800 mb-4">Layanan Unggulan</h1>
                    <div className="flex justify-center">
                        <img src="./images/unggulan.jpeg" className='rounded-md md:w-full md:h-full object-cover object-left overflow-hidden shadow-md mb-4' />
                    </div>
                    <div className="flex flex-col">
                        <h2 className="text-left text-md font-medium opacity-70">Rumah Sakit Paru Sumatera Barat memiliki layanan unggulan di bidang seperti:</h2>
                        <h3 className='text-left  opacity-70 font-medium'>1. Promosi Kesehatan</h3>
                        <p className='text-left text-sm opacity-50 leading-relaxed'>Penyuluhan kepada pengunjung tentang penyebab, gejala dan perjalanan penyakit serta cara  penyembuhan juga cara minum obat yang benar. Penyuluhan diberikan kepada semua pengunjung, baik kepada penderita TB maupun Non TB. Selain itu juga penyuluhan tentang bahaya rokok, pentingnya mengkonsumsi makanan bergizi dan Prilaku Hidup Bersih dan Sehat di Rumah Tangga. Konseling diberikan tidak saja kepada penderita TB Paru yang baru ditemukan,  tapi  juga diberikan kepada keluarga. </p>
                        <h3 className='text-left  opacity-70 font-medium'>2. Laboratorium</h3>
                        <p className='text-left text-md opacity-50 leading-relaxed'>Pelayanan Laboratorium di Rumah Sakit Paru Sumatera Barat memiliki beberapa keunggulan, seperti:</p>
                        <p className='text-left text-sm opacity-50 pl-4 leading-relaxed'>a. Waktu tunggu untuk pemeriksaan di laboratorium patologi klinik (hematologi, kimia klinik, dan imunologi atau serologi) 1-2 jam.</p>
                        <p className='text-left text-sm opacity-50 pl-4 leading-relaxed'>b. Waktu tunggu untuk pemeriksaan mikroskopis BTA khusus pasien dengan wilayah tempat tinggal yang jauh dari area Rumah Sakit adalah ±1 jam. Hal ini dilakukan guna mengurangi resiko penularan infeksi.</p>
                        <p className='text-left text-sm opacity-50 pl-4 leading-relaxed'>c. Waktu tunggu pemeriksaan kultur MGIT berkisar 6-42 hari. Sedangkan perbandingan waktu tunggu kultur manual (media LJ) adalah 6-8 minggu.</p>
                        <h3 className='text-left  opacity-70 font-medium'>TB MDR</h3>
                        <p className='text-left text-sm opacity-50 leading-relaxed'>Rumah Sakit Paru Sumatera Barat merupakan salah satu dari 3 pelayanan rujukan TB MDR di wilayah Sumatera Barat</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Unggulan;
