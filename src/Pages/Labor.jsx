import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Labor = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [activeCategory, setActiveCategory] = useState('all');

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

    // Laboratory service categories
    const labCategories = [
        {
            id: 'hematologi',
            name: 'Hematologi',
            icon: '🔬',
            description: 'Pemeriksaan sel darah dan komponen darah lainnya',
            tests: [
                'Hemoglobin',
                'Hematokrit',
                'Hitung Leukosit',
                'Hitung Trombosit',
                'Hitung Eritrosit',
                'Indeks Eritrosit',
                'Gambaran Darah Tepi'
            ]
        },
        {
            id: 'kimia-klinik',
            name: 'Kimia Klinik',
            icon: '🧪',
            description: 'Analisis komponen kimia dalam cairan tubuh',
            tests: [
                'Glukosa',
                'Fungsi Ginjal (Ureum & Kreatinin)',
                'Fungsi Hati (SGOT, SGPT, Bilirubin)',
                'Profil Lipid (Kolesterol Total, Trigliserida, HDL, LDL)',
                'Total Protein dan Albumin',
                'Asam Urat',
                'LDH'
            ]
        },
        {
            id: 'cairan-tubuh',
            name: 'Analisa Cairan Tubuh',
            icon: '💧',
            description: 'Pemeriksaan cairan tubuh seperti Pleura, LCS, dan Ascites',
            tests: [
                'Rivalta Test',
                'Analisa Makroskopis',
                'Analisa Mikroskopis',
                'BTA Cairan Pleura',
                'Hitung Sel',
                'Pemeriksaan Bakteri'
            ]
        },
        {
            id: 'mikrobiologi',
            name: 'Mikrobiologi',
            icon: '🦠',
            description: 'Pemeriksaan M.Tb & MOTT',
            tests: [
                'BTA',
                'TCM',
                'Kultur: LJ (Kultur Media Padat)',
                'Resistensi TB',
                'Resistensi Non TB',
                'Kultur Non TB'
            ]
        },
        {
            id: 'imunologi',
            name: 'Imunologi / Serologi',
            icon: '🛡️',
            description: 'Pemeriksaan antibodi dan antigen dalam darah',
            tests: [
                'TSH',
                'HBsAg',
                'HIV',
                'WIDAL'
            ]
        },
        {
            id: 'elektrolit',
            name: 'Elektrolit',
            icon: '⚡',
            description: 'Pemeriksaan elektrolit dalam darah',
            tests: [
                'Natrium (Na)',
                'Kalium (K)',
                'Klorida (Cl)'
            ]
        },
        {
            id: 'analisa-rutin',
            name: 'Analisa Rutin Lengkap',
            icon: '📊',
            description: 'Pemeriksaan rutin menyeluruh',
            tests: [
                'Urinalisis Lengkap',
                'Feses Lengkap',
                'Analisa Sputum',
                'Pemeriksaan Mikroskopis'
            ]
        }
    ];

    const filteredCategories = activeCategory === 'all' 
        ? labCategories 
        : labCategories.filter(category => category.id === activeCategory);

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
                            Laboratorium
                        </h1>
                        <p className="text-xl md:text-2xl max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
                            Layanan Diagnosis dan Pemeriksaan Medis Terpercaya
                        </p>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto px-6 py-12 -mt-16">
                <div className="max-w-7xl mx-auto">
                    {/* Intro Card */}
                    <div className="text-center mb-16 bg-white rounded-lg shadow-lg p-8" data-aos="fade-up">
                        <p className="text-lg text-gray-600">
                            Laboratorium RS Paru Sumatera Barat dilengkapi dengan peralatan modern dan
                            ditangani oleh tenaga profesional yang berpengalaman. Kami menyediakan berbagai
                            jenis pemeriksaan laboratorium untuk diagnosis dan pemantauan penyakit.
                        </p>
                    </div>

                    {/* Main Image */}
                    <div className="mb-16" data-aos="fade-up">
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                            <div className="relative h-80 md:h-96">
                                <img 
                                    src="./images/labor.jpg" 
                                    alt="Laboratorium RS Paru" 
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = "https://via.placeholder.com/1200x500?text=Laboratorium";
                                    }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                                    <div className="p-8 text-white">
                                        <h2 className="text-3xl font-bold mb-2">Laboratorium Modern</h2>
                                        <p className="text-white/90">Didukung teknologi terkini dan tenaga ahli bersertifikasi</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Category Filter */}
                    <div className="mb-8 overflow-x-auto" data-aos="fade-up">
                        <div className="flex space-x-2 min-w-max justify-center pb-2">
                            <button 
                                onClick={() => setActiveCategory('all')}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                                    activeCategory === 'all'
                                        ? 'bg-blue-600 text-white shadow-md'
                                        : 'bg-white text-gray-700 hover:bg-gray-100'
                                }`}
                            >
                                Semua Layanan
                            </button>
                            {labCategories.map(category => (
                                <button
                                    key={category.id}
                                    onClick={() => setActiveCategory(category.id)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center ${
                                        activeCategory === category.id
                                            ? 'bg-blue-600 text-white shadow-md'
                                            : 'bg-white text-gray-700 hover:bg-gray-100'
                                    }`}
                                >
                                    <span className="mr-1">{category.icon}</span>
                                    {category.name}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Category Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-aos="fade-up">
                        {filteredCategories.map((category, index) => (
                            <div 
                                key={category.id} 
                                className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <div className="p-6 bg-gradient-to-r from-blue-600 to-teal-500 text-white">
                                    <div className="flex items-center mb-2">
                                        <div className="text-3xl mr-3">{category.icon}</div>
                                        <h3 className="text-xl font-bold">{category.name}</h3>
                                    </div>
                                    <p className="opacity-90">{category.description}</p>
                                </div>
                                
                                <div className="p-6">
                                    <h4 className="text-md font-semibold text-gray-700 mb-3">Jenis Pemeriksaan:</h4>
                                    <ul className="space-y-2">
                                        {category.tests.map((test, idx) => (
                                            <li key={idx} className="flex items-start">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                <span className="text-gray-600">{test}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Information Section */}
                    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6" data-aos="fade-up">
                        <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-2xl mb-4">
                                🕒
                            </div>
                            <h3 className="text-lg font-semibold text-blue-800 mb-2">Jam Pelayanan</h3>
                            <ul className="space-y-2 text-blue-700">
                                <li className="flex items-start">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span>Senin - Jumat: 08.00 - 15.00 WIB</span>
                                </li>
                                <li className="flex items-start">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span>Sabtu: 08.00 - 13.00 WIB</span>
                                </li>
                                <li className="flex items-start">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span>IGD: 24 jam setiap hari</span>
                                </li>
                            </ul>
                        </div>
                        
                        <div className="bg-green-50 rounded-xl p-6 border border-green-100">
                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-2xl mb-4">
                                📋
                            </div>
                            <h3 className="text-lg font-semibold text-green-800 mb-2">Persyaratan</h3>
                            <ul className="space-y-2 text-green-700">
                                <li className="flex items-start">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span>Membawa surat rujukan/permintaan dokter</span>
                                </li>
                                <li className="flex items-start">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span>Membawa kartu identitas (KTP)</span>
                                </li>
                                <li className="flex items-start">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span>Membawa kartu BPJS (jika ada)</span>
                                </li>
                            </ul>
                        </div>
                        
                        <div className="bg-purple-50 rounded-xl p-6 border border-purple-100">
                            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 text-2xl mb-4">
                                ⏱️
                            </div>
                            <h3 className="text-lg font-semibold text-purple-800 mb-2">Waktu Hasil</h3>
                            <ul className="space-y-2 text-purple-700">
                                <li className="flex items-start">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span>Pemeriksaan rutin: 2-4 jam</span>
                                </li>
                                <li className="flex items-start">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span>Kultur BTA: 6-8 minggu</span>
                                </li>
                                <li className="flex items-start">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span>Tes resistensi: 1-2 minggu</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="mt-12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-xl shadow-lg p-8 text-white" data-aos="fade-up">
                        <div className="md:flex items-center justify-between">
                            <div className="md:w-2/3 mb-6 md:mb-0">
                                <h3 className="text-2xl font-bold mb-2">Dapatkan Informasi Lebih Lanjut</h3>
                                <p className="text-white/90">
                                    Untuk informasi lebih detail tentang layanan laboratorium, tarif, dan persiapan khusus, 
                                    silakan hubungi kami.
                                </p>
                            </div>
                            <div className="md:w-1/3 flex justify-center md:justify-end">
                                <a 
                                    href="/tarif" 
                                    className="bg-white text-blue-600 font-medium py-3 px-6 rounded-full inline-flex items-center hover:bg-gray-100 transition-colors"
                                >
                                    Lihat Tarif Layanan
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
        </div>
    );
};

export default Labor;