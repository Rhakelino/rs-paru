import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS

const Tugas = () => {
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
        AOS.refresh();
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    
    const toggleDropdown = (dropdownName) => {
        setActiveDropdown((prevDropdown) => (prevDropdown === dropdownName ? null : dropdownName));
    };

    const fungsiItems = [
        "Penyelenggaraan pelayanan medis",
        "Penyelenggaraan pelayanan penunjang medis",
        "Penyelenggaraan pelayanan keperawatan",
        "Penyelenggaraan pelayanan rujukan",
        "Penyelenggaraan pendidikan dan pelatihan",
        "Penyelenggaraan penelitian dan pengembangan",
        "Penyelenggaraan administrasi umum dan keuangan."
    ];

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
                            Tugas Pokok dan Fungsi
                        </h1>
                        <p className="text-xl md:text-2xl max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
                            Rumah Sakit Paru Sumatera Barat
                        </p>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto px-6 py-12 -mt-16">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16 bg-white rounded-lg shadow-lg p-8" data-aos="fade-up">
                        <p className="text-lg text-gray-600">
                            Tugas Pokok dan Fungsi dibuat sebagai landasan dan arahan dalam menjalankan pelayanan 
                            di Rumah Sakit Paru Sumatera Barat.
                        </p>
                    </div>

                    {/* Tugas Pokok Section */}
                    <div className="mb-20" data-aos="fade-up" data-aos-delay="100">
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                            <div className="md:flex">
                                <div className="md:w-1/2 relative">
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-teal-500/20"></div>
                                    <img 
                                        src="./images/bg-hero.jpeg" 
                                        alt="Tugas Pokok"
                                        className="h-full w-full object-cover"
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = "https://via.placeholder.com/600x400?text=Tugas+Pokok";
                                        }}
                                    />
                                </div>
                                <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                                    <h2 className="text-3xl font-bold text-gray-800 border-b-2 border-teal-500 pb-2 inline-block mb-6">TUGAS POKOK</h2>
                                    <p className="text-lg text-gray-700 leading-relaxed">
                                        Rumah Sakit Paru Sumatera Barat mempunyai tugas pokok melaksanakan upaya kesehatan secara berdayaguna dan berhasilguna dengan mengutamakan upaya penyembuhan (kuratif) dan pemulihan (rehabilitatif) yang dilaksanakan secara serasi dan terpadu dengan upaya peningkatan dan pencegahan serta melaksanakan upaya rujukan penyakit paru-paru serta pendidikan dan pelatihan, tanpa mengabaikan upaya pencegahan (preventif) dan penyuluhan (promotif).
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Fungsi Section */}
                    <div data-aos="fade-up" data-aos-delay="200">
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                            <div className="md:flex flex-row-reverse">
                                <div className="md:w-1/2 relative">
                                    <div className="absolute inset-0 bg-gradient-to-bl from-blue-500/20 to-teal-500/20"></div>
                                    <img 
                                        src="./images/sejarah.jpeg" 
                                        alt="Fungsi"
                                        className="h-full w-full object-cover"
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = "https://via.placeholder.com/600x400?text=Fungsi";
                                        }}
                                    />
                                </div>
                                <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                                    <h2 className="text-3xl font-bold text-gray-800 border-b-2 border-teal-500 pb-2 inline-block mb-6">FUNGSI</h2>
                                    
                                    <ul className="space-y-3 mt-4">
                                        {fungsiItems.map((item, index) => (
                                            <li key={index} className="flex items-start">
                                                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-full mr-3 mt-0.5">
                                                    <span className="font-semibold">{index + 1}</span>
                                                </div>
                                                <span className="text-gray-700">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Tugas