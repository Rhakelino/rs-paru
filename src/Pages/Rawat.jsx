import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Rawat = () => {
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
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">Rawat Jalan</h1>
                    <div className="flex justify-center">
                        <img src="./images/jalan.jpeg" className='rounded-md md:w-full md:h-60 object-cover object-center overflow-hidden shadow-md mb-4' />
                    </div>
                    <div className="flex flex-col gap-3">
                        <p className='text-justify opacity-60 leading-relaxed'>Saat ini Rumah Sakit Paru Sumatera Barat memiliki 4 ruang Poliklinik Khusus Paru seperti, ruang Lindung Bulan (pasien baru), ruang Cinduo Mato (pasien dengan risiko infeksi), ruang Andam Suri (pasien lama/berulang), ruang Mande Rubiah (kontrol rutin pasien rawat jalan dari Puskesmas), dan Poliklinik DOTS (tempat melayani pasien suspect TB dan suspect TB MDR).</p>

                        <div className="flex md:w-1/2 flex-col md:mx-auto border items-center bg-gray-300 shadow-md rounded-md p-3 overflow-hidden gap-3">
                            <h2 className='text-lg font-bold'>PELAYANAN RAWAT JALAN BUKA SENIN s/d SABTU</h2>
                            <p className='text-md'>Jam Pelayanan Rawat Jalan :</p>
                            <p className='text-md opacity-80'>Senin s/d Kamis jam 08.00 s/d 14..30 (karcis jam 08.00 s/d 12.00)</p>
                            <p className='text-md opacity-80'>Jumat s/d Sabtu jam 08.00 s/d 13.00 (karcis jam 08.00 s/d 11.00)</p>
                            <p className='text-md font-bold italic'>HARI MINGGU DAN LIBUR NASIONAL TUTUP</p>
                            <p className='text-md font-bold italic'>PEMERIKSAAN  DILAKUKAN OLEH DOKTER SPESIALIS </p>
                        </div>
                    </div>


                </div>

            </div>

            <Footer />

        </>
    )
}

export default Rawat
