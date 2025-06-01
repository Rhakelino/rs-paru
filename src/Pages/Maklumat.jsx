import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Maklumat = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle mobile menu
    const [activeDropdown, setActiveDropdown] = useState(null); // Track the active dropdown
    const [activeTab, setActiveTab] = useState('maklumat');

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

    // Initialize AOS animation library
    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: 'ease-out-cubic',
            once: true,
        });
    }, []);

    // Toggle mobile menu
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    // Toggle dropdown and close others
    const toggleDropdown = (dropdownName) => {
        setActiveDropdown((prevDropdown) => (prevDropdown === dropdownName ? null : dropdownName));
    };

    // Maklumat content
    const maklumatItems = [
        {
            id: 1,
            title: "Pelayanan Tepat Waktu",
            description: "Kami berkomitmen untuk memberikan pelayanan kesehatan tepat waktu sesuai dengan standar waktu yang telah ditetapkan.",
            icon: "⏱️"
        },
        {
            id: 2,
            title: "Pelayanan Profesional",
            description: "Seluruh tenaga medis dan non-medis bekerja secara profesional sesuai dengan kompetensi dan etika profesi.",
            icon: "👨‍⚕️"
        },
        {
            id: 3,
            title: "Informasi Jelas dan Akurat",
            description: "Memberikan informasi yang jelas, akurat, dan mudah dimengerti terkait dengan pelayanan kesehatan kepada pasien dan keluarga.",
            icon: "📋"
        },
        {
            id: 4,
            title: "Biaya Pelayanan Transparan",
            description: "Informasi biaya pelayanan disampaikan secara transparan dan terinci kepada pasien dan keluarga sebelum pelayanan diberikan.",
            icon: "💰"
        },
        {
            id: 5,
            title: "Penanganan Keluhan Responsif",
            description: "Setiap keluhan ditangani dengan cepat, responsif, dan ditindaklanjuti sesuai dengan prosedur yang berlaku.",
            icon: "🔄"
        }
    ];

    // Standar pelayanan
    const standardItems = [
        {
            id: 1,
            title: "Pelayanan Rawat Jalan",
            hours: "08.00 - 14.00 WIB (Senin - Kamis)",
            additional: "08.00 - 11.30 WIB (Jumat)",
            icon: "👨‍⚕️"
        },
        {
            id: 2,
            title: "Pelayanan Gawat Darurat",
            hours: "24 Jam Setiap Hari",
            additional: "Termasuk Hari Libur Nasional",
            icon: "🚑"
        },
        {
            id: 3,
            title: "Pelayanan Rawat Inap",
            hours: "24 Jam Setiap Hari",
            additional: "Jam Besuk: 10.00-12.00 & 16.00-18.00 WIB",
            icon: "🛏️"
        },
        {
            id: 4,
            title: "Pelayanan Farmasi",
            hours: "08.00 - 21.00 WIB (Senin - Sabtu)",
            additional: "08.00 - 15.00 WIB (Minggu & Hari Libur)",
            icon: "💊"
        },
        {
            id: 5,
            title: "Pelayanan Laboratorium",
            hours: "08.00 - 16.00 WIB (Senin - Jumat)",
            additional: "08.00 - 13.00 WIB (Sabtu)",
            icon: "🔬"
        },
        {
            id: 6,
            title: "Pelayanan Radiologi",
            hours: "08.00 - 15.00 WIB (Senin - Jumat)",
            additional: "08.00 - 13.00 WIB (Sabtu)",
            icon: "📡"
        }
    ];

    // Maklumat timeline
    const maklumatTimeline = [
        {
            year: "2018",
            title: "Pembentukan Maklumat Pelayanan",
            description: "Penetapan Surat Keputusan Direktur tentang Maklumat Pelayanan RS Paru Sumatera Barat"
        },
        {
            year: "2019",
            title: "Revisi Maklumat Pelayanan",
            description: "Penyempurnaan maklumat pelayanan berdasarkan masukan dari masyarakat dan hasil evaluasi internal"
        },
        {
            year: "2021",
            title: "Penerapan Maklumat Digital",
            description: "Publikasi maklumat pelayanan melalui media digital dan sosialisasi kepada masyarakat pengguna layanan"
        },
        {
            year: "2023",
            title: "Pembaruan Komitmen Pelayanan",
            description: "Penambahan poin komitmen pelayanan terkait dengan transparansi dan keterbukaan informasi publik"
        },
        {
            year: "2024",
            title: "Evaluasi dan Pengembangan",
            description: "Evaluasi menyeluruh dan pengembangan maklumat pelayanan untuk meningkatkan kualitas pelayanan publik"
        }
    ];

    return (
        <>
            <Navbar
                toggleMenu={toggleMenu}
                isMenuOpen={isMenuOpen}
                toggleDropdown={toggleDropdown}
                activeDropdown={activeDropdown}
            />

            {/* Hero Section with Background */}
            <div className="relative bg-gradient-to-r from-blue-600 to-teal-500 py-16">
                <div className="container mx-auto px-6 py-16 text-center">
                    <h1 className="text-5xl font-bold text-white mb-4" data-aos="fade-down">
                        Maklumat Pelayanan
                    </h1>
                    <p className="text-xl text-white max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
                        Dokumen dan Komitmen Pelayanan RS Paru Sumatera Barat
                    </p>
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto md:px-20 px-10 py-16 -mt-16">
                {/* White Content Box */}
                <div className="bg-white rounded-xl shadow-lg p-8" data-aos="fade-up">
                    {/* Introduction Card */}
                    <div className="mb-12" data-aos="fade-up">
                        <p className="text-lg text-gray-600">
                            Maklumat Pelayanan adalah pernyataan tertulis yang berisi keseluruhan rincian kewajiban dan janji 
                            yang terdapat dalam standar pelayanan. Maklumat pelayanan ini merupakan komitmen RS Paru Sumatera Barat 
                            dalam memberikan pelayanan berkualitas kepada masyarakat sesuai dengan standar yang telah ditetapkan.
                        </p>
                    </div>

                    {/* Tabs Navigation */}
                    <div className="mb-12 flex justify-center" data-aos="fade-up">
                        <div className="inline-flex bg-gray-100 rounded-lg p-1 shadow-md">
                            <button 
                                onClick={() => setActiveTab('maklumat')}
                                className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                                    activeTab === 'maklumat' 
                                        ? 'bg-gradient-to-r from-blue-500 to-teal-500 text-white' 
                                        : 'text-gray-700 hover:bg-gray-200'
                                }`}
                            >
                                Maklumat Pelayanan
                            </button>
                            <button 
                                onClick={() => setActiveTab('standar')}
                                className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                                    activeTab === 'standar' 
                                        ? 'bg-gradient-to-r from-blue-500 to-teal-500 text-white' 
                                        : 'text-gray-700 hover:bg-gray-200'
                                }`}
                            >
                                Standar Pelayanan
                            </button>
                            <button 
                                onClick={() => setActiveTab('timeline')}
                                className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                                    activeTab === 'timeline' 
                                        ? 'bg-gradient-to-r from-blue-500 to-teal-500 text-white' 
                                        : 'text-gray-700 hover:bg-gray-200'
                                }`}
                            >
                                Sejarah Maklumat
                            </button>
                        </div>
                    </div>

                    {/* Maklumat Pelayanan Tab Content */}
                    {activeTab === 'maklumat' && (
                        <div data-aos="fade-up">
                            <h2 className="text-3xl font-bold text-gray-800 border-b-2 border-teal-500 pb-2 inline-block mb-8">
                                Maklumat Pelayanan
                            </h2>

                            {/* Main Maklumat Box */}
                            <div className="bg-gradient-to-r from-blue-600 to-teal-500 text-white p-8 rounded-lg mb-12" data-aos="fade-up">
                                <h3 className="text-2xl font-bold mb-4 text-center">DENGAN INI, KAMI MENYATAKAN SANGGUP</h3>
                                <div className="text-xl font-semibold text-center">
                                    <p className="mb-4">
                                        "Memberikan pelayanan kesehatan paru dan pernapasan sesuai dengan standar pelayanan 
                                        yang telah ditetapkan secara profesional, terjangkau, adil, dan merata kepada seluruh 
                                        lapisan masyarakat. Apabila kami tidak menepati janji ini, kami siap menerima sanksi 
                                        sesuai dengan peraturan perundang-undangan yang berlaku."
                                    </p>
                                    <p className="font-bold mt-6">
                                        DIREKTUR RS PARU SUMATERA BARAT
                                    </p>
                                </div>
                            </div>

                            {/* Komitmen Pelayanan */}
                            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Komitmen Pelayanan Kami</h3>
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                                {maklumatItems.map((item, index) => (
                                    <div 
                                        key={item.id} 
                                        className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300"
                                        data-aos="fade-up"
                                        data-aos-delay={index * 100}
                                    >
                                        <div className="text-center mb-4">
                                            <div className="w-20 h-20 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-4xl mx-auto">
                                                {item.icon}
                                            </div>
                                        </div>
                                        <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">{item.title}</h3>
                                        <p className="text-gray-600 text-center">{item.description}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Note Box */}
                            <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-100" data-aos="fade-up">
                                <div className="flex items-start">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                    </svg>
                                    <div>
                                        <h3 className="text-lg font-semibold text-yellow-800 mb-2">Penting Diketahui</h3>
                                        <p className="text-yellow-700">
                                            Maklumat pelayanan ini ditempel di seluruh area pelayanan RS Paru Sumatera Barat 
                                            sebagai bentuk komitmen kami dalam memberikan pelayanan terbaik untuk masyarakat. 
                                            Kritik dan saran terhadap pelayanan kami dapat disampaikan melalui kotak saran, 
                                            layanan pengaduan, atau melalui website resmi RS Paru Sumatera Barat.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Standar Pelayanan Tab Content */}
                    {activeTab === 'standar' && (
                        <div data-aos="fade-up">
                            <h2 className="text-3xl font-bold text-gray-800 border-b-2 border-teal-500 pb-2 inline-block mb-8">
                                Standar Pelayanan
                            </h2>
                            
                            <p className="text-gray-600 mb-8">
                                Standar Pelayanan adalah tolok ukur yang dipergunakan sebagai pedoman penyelenggaraan pelayanan 
                                dan acuan penilaian kualitas pelayanan sebagai kewajiban dan janji penyelenggara kepada masyarakat 
                                dalam rangka pelayanan yang berkualitas, cepat, mudah, terjangkau, dan terukur.
                            </p>
                            
                            {/* Jam Pelayanan */}
                            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Jam Pelayanan</h3>
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                                {standardItems.map((item, index) => (
                                    <div 
                                        key={item.id} 
                                        className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300"
                                        data-aos="fade-up"
                                        data-aos-delay={index * 100}
                                    >
                                        <div className="text-center mb-4">
                                            <div className="w-20 h-20 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-4xl mx-auto">
                                                {item.icon}
                                            </div>
                                        </div>
                                        <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">{item.title}</h3>
                                        <p className="text-blue-600 font-semibold text-center mb-1">{item.hours}</p>
                                        <p className="text-gray-600 text-center text-sm">{item.additional}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Alur Pelayanan */}
                            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Alur Pelayanan</h3>
                            
                            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200 mb-8" data-aos="fade-up">
                                <div className="relative">
                                    {/* Horizontal Timeline line */}
                                    <div className="absolute top-20 left-0 right-0 h-1 bg-blue-500 hidden md:block"></div>
                                    
                                    {/* Alur steps */}
                                    <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                                        {['Pendaftaran', 'Pemeriksaan', 'Tindakan', 'Farmasi', 'Kasir'].map((step, index) => (
                                            <div 
                                                key={index} 
                                                className="relative flex flex-col items-center" 
                                                data-aos="fade-up" 
                                                data-aos-delay={index * 100}
                                            >
                                                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center text-white text-3xl mb-4 z-10">
                                                    {index + 1}
                                                </div>
                                                <p className="text-lg font-semibold text-center">{step}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Biaya Pelayanan */}
                            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Biaya Pelayanan</h3>
                            
                            <div className="bg-blue-50 rounded-lg p-6 border border-blue-100" data-aos="fade-up">
                                <div className="flex items-start">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <div>
                                        <h3 className="text-lg font-semibold text-blue-800 mb-2">Informasi Biaya</h3>
                                        <p className="text-blue-700 mb-4">
                                            Biaya pelayanan kesehatan di RS Paru Sumatera Barat mengacu pada Peraturan Gubernur 
                                            Sumatera Barat tentang Tarif Layanan Kesehatan. Informasi lengkap terkait biaya 
                                            pelayanan dapat dilihat pada papan informasi atau menghubungi petugas informasi.
                                        </p>
                                        <p className="text-blue-700">
                                            RS Paru Sumatera Barat melayani pasien dengan jaminan kesehatan (BPJS, Jamkesda, Asuransi) 
                                            dan pasien umum. Konsultasikan dengan petugas untuk informasi lebih lanjut.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Timeline Tab Content */}
                    {activeTab === 'timeline' && (
                        <div data-aos="fade-up">
                            <h2 className="text-3xl font-bold text-gray-800 border-b-2 border-teal-500 pb-2 inline-block mb-8">
                                Sejarah Maklumat Pelayanan
                            </h2>
                            
                            <p className="text-gray-600 mb-8">
                                Maklumat Pelayanan RS Paru Sumatera Barat telah mengalami perkembangan sejak pertama kali 
                                dibentuk. Berikut adalah sejarah pengembangan maklumat pelayanan kami:
                            </p>
                            
                            {/* Timeline */}
                            <div className="relative border-l-4 border-blue-500 ml-6 pl-8 mb-12">
                                {maklumatTimeline.map((item, index) => (
                                    <div 
                                        key={index} 
                                        className="mb-10 relative"
                                        data-aos="fade-up"
                                        data-aos-delay={index * 100}
                                    >
                                        <div className="absolute -left-14 bg-gradient-to-r from-blue-500 to-teal-500 text-white font-bold rounded-lg py-1 px-3">
                                            {item.year}
                                        </div>
                                        <div className="absolute -left-14 w-3 h-3 bg-white border-4 border-blue-500 rounded-full mt-2"></div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                                        <p className="text-gray-600">{item.description}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Dasar Hukum */}
                            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200" data-aos="fade-up">
                                <h3 className="text-lg font-semibold text-gray-800 mb-4">Dasar Hukum Maklumat Pelayanan</h3>
                                <ol className="list-decimal pl-5 space-y-2 text-gray-600">
                                    <li>UU No. 25 Tahun 2009 tentang Pelayanan Publik</li>
                                    <li>UU No. 36 Tahun 2009 tentang Kesehatan</li>
                                    <li>UU No. 44 Tahun 2009 tentang Rumah Sakit</li>
                                    <li>Peraturan Pemerintah No. 96 Tahun 2012 tentang Pelaksanaan UU No. 25 Tahun 2009</li>
                                    <li>Peraturan Menteri Kesehatan tentang Standar Pelayanan Minimal Rumah Sakit</li>
                                    <li>Peraturan Daerah Provinsi Sumatera Barat tentang Pelayanan Publik</li>
                                </ol>
                            </div>
                        </div>
                    )}

                    {/* Contact Section */}
                    <div className="mt-12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-xl shadow-lg p-8 text-white" data-aos="fade-up">
                        <div className="md:flex items-center justify-between">
                            <div className="md:w-2/3 mb-6 md:mb-0">
                                <h3 className="text-2xl font-bold mb-2">Hubungi Kami</h3>
                                <p className="text-white/90">
                                    Untuk informasi lebih lanjut tentang pelayanan RS Paru Sumatera Barat, 
                                    silakan hubungi kami melalui telepon atau email.
                                </p>
                            </div>
                            <div className="md:w-1/3 flex justify-center md:justify-end">
                                <a 
                                    href="/kontak" 
                                    className="bg-white text-blue-600 font-medium py-3 px-6 rounded-full inline-flex items-center hover:bg-gray-100 transition-colors"
                                >
                                    Hubungi Kami
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Maklumat;