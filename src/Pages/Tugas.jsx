import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS


const Tugas = () => {
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
        AOS.refresh(); // Menyegarkan AOS setelah data dimuat
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
                <div className="text-center mb-12" data-aos="fade-left">
                    <h1 className="text-4xl font-bold text-gray-800">Tugas Pokok dan Fungsi</h1>
                    <p className="mt-4 text-lg text-gray-600 text-left font-medium ">1. Tugas Pokok Rumah Sakit Paru Sumatera Barat
                    </p>
                    <p className="mt-4 text-lg text-gray-600 text-justify md:text-left opacity-70">Rumah Sakit Paru Sumatera Barat mempunyai tugas pokok melaksanakan upaya kesehatan secara berdayaguna dan berhasilguna dengan mengutamakan upaya penyembuhan (kuratif) dan pemulihan (rehabilitatif) yang dilaksanakan secara serasi dan terpadu dengan upaya peningkatan dan pencegahan serta melaksanakan upaya rujukan penyakit paru-paru serta pendidikan dan pelatihan, tanpa mengabaikan upaya pencegahan (preventif) dan penyuluhan (promotif).</p>
                    <p className="mt-4 text-lg text-gray-600 text-left font-medium">2.  Fungsi Rumah Sakit Paru Sumatera Barat
                    </p>
                    <p className="mt-4 text-lg text-gray-600 text-left opacity-70"><ul className='list-decimal pl-9'>
                        <li>Penyelenggaraan pelayanan medis</li>
                        <li>Penyelenggaraan pelayanan penunjang medis</li>
                        <li>Penyelenggaraan pelayanan keperawatan</li>
                        <li>Penyelenggaraan pelayanan rujukan</li>
                        <li>Penyelenggaraan pendidikan dan pelatihan</li>
                        <li>Penyelenggaraan pendidikan dan pelatihan</li>
                        <li>Penyelenggaraan administrasi umum dan keuangan.</li>
                    </ul></p>
                </div>

            </div>

            <Footer />

        </>
    )
}

export default Tugas
