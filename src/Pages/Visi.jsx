import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaHeartbeat, FaNetworkWired, FaGraduationCap, FaMicroscope } from 'react-icons/fa';

function Visi() {
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

    const missionItems = [
        {
            icon: <FaHeartbeat size={28} className="text-teal-500" />,
            text: "Memberikan Pelayanan Kesehatan Paru dan Pernafasan secara berkualitas, Profesional dan Paripurna."
        },
        {
            icon: <FaNetworkWired size={28} className="text-teal-500" />,
            text: "Membentuk Jejaring Pelaksanaan Rujukan dan Kerjasama dengan Lembaga dan Institusi terkait, Khususnya dalam Penanganan Penyakit Paru dan Saluran Pernafasan."
        },
        {
            icon: <FaGraduationCap size={28} className="text-teal-500" />,
            text: "Jejaring Pendidikan, Penelitian, Pelatihan, Pengembangan Ilmu dan Kualitas SDM di Bidang Kesehatan Paru dan Saluran Pernafasan."
        },
        {
            icon: <FaMicroscope size={28} className="text-teal-500" />,
            text: "Mengembangkan Teknologi Kesehatan khususnya dalam Penanganan Penyakit Paru dan Saluran Pernafasan."
        }
    ];

    const nilaiItems = [
        { letter: "I", meaning: "Integritas" },
        { letter: "M", meaning: "Melayani dengan Ikhlas" },
        { letter: "A", meaning: "Amanah" },
        { letter: "N", meaning: "Nyaman" }
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
                            Visi & Misi
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
                            Dalam membangun Rumah Sakit Paru Provinsi Sumatra Barat yang lebih baik lagi, diperlukan visi dan misi.
                            Visi dan Misi Rumah Sakit Paru Sumatera Barat yaitu:
                        </p>
                    </div>

                    {/* Visi Section */}
                    <div className="mb-20" data-aos="fade-up" data-aos-delay="100">
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                            <div className="md:flex">
                                <div className="md:w-1/2 relative">
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-teal-500/20"></div>
                                    <img 
                                        src="./images/visi.jpg" 
                                        alt="Visi" 
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                                <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                                    <h2 className="text-3xl font-bold text-gray-800 border-b-2 border-teal-500 pb-2 inline-block mb-6">VISI</h2>
                                    <p className="text-xl text-gray-700 italic leading-relaxed">
                                        "Menjadi Pusat Rujukan Penyakit Paru dan Saluran Pernafasan di Regional Sumatera Tengah Tahun 2025"
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Misi Section */}
                    <div className="mb-20" data-aos="fade-up" data-aos-delay="200">
                        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
                            <h2 className="text-3xl font-bold text-gray-800 border-b-2 border-teal-500 pb-2 inline-block mb-10">MISI</h2>
                            
                            <div className="grid md:grid-cols-2 gap-6">
                                {missionItems.map((item, index) => (
                                    <div 
                                        key={index} 
                                        className="flex items-start p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
                                        data-aos="fade-up" 
                                        data-aos-delay={100 + (index * 100)}
                                    >
                                        <div className="mr-4 mt-1">
                                            {item.icon}
                                        </div>
                                        <p className="text-gray-700 leading-relaxed">{item.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Nilai Section */}
                    <div data-aos="fade-up" data-aos-delay="300">
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                            <div className="md:flex flex-row-reverse">
                                <div className="md:w-1/2 relative">
                                    <div className="absolute inset-0 bg-gradient-to-bl from-blue-500/20 to-teal-500/20"></div>
                                    <img 
                                        src="./images/nilai.jpg" 
                                        alt="Nilai" 
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                                <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                                    <h2 className="text-3xl font-bold text-gray-800 border-b-2 border-teal-500 pb-2 inline-block mb-8">NILAI</h2>
                                    
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {nilaiItems.map((item, index) => (
                                            <div key={index} className="flex items-center rounded-lg bg-gray-50 p-4 transition-all hover:bg-gray-100">
                                                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-full mr-4">
                                                    <span className="text-xl font-bold">{item.letter}</span>
                                                </div>
                                                <div>
                                                    <span className="block text-gray-700">{item.meaning}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Visi;