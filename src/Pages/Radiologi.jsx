import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Radiologi = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [activeTab, setActiveTab] = useState('xray');

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

    // Radiology service categories
    const radiologyServices = {
        xray: {
            name: 'Radiografi / X-Ray',
            icon: '📷',
            description: 'Pemeriksaan radiografi menggunakan sinar-X untuk memvisualisasikan bagian dalam tubuh',
            services: [
                'Radiografi Thorak',
                'Radiografi Abdomen',
                'Radiografi Kepala / Schedel',
                'Radiografi Sinus Paranasal',
                'Radiografi Mastoid/ Schuller',
                'Radiografi TMJ',
                'Radiografi Vertebra (Cervical, Torakal, Lumbosacral, Sacrum, Coccygeus)',
                'Radiografi Tulang Extremitas',
                'Radiografi Pelvic'
            ],
            image: './images/labor1.jpg',
            preparations: [
                'Lepaskan semua benda logam di area yang akan diperiksa',
                'Kenakan pakaian yang nyaman dan mudah dilepas',
                'Beritahu petugas jika Anda sedang hamil',
                'Tidak perlu puasa kecuali ada instruksi khusus'
            ]
        },
        usg: {
            name: 'USG (Ultrasonografi)',
            icon: '🔊',
            description: 'Pemeriksaan menggunakan gelombang suara untuk memvisualisasikan organ dan jaringan lunak',
            services: [
                'USG Abdomen Atas',
                'USG Abdomen Bawah',
                'USG Abdomen (Full)',
                'USG Urologi',
                'USG Hepar',
                'USG Prostat',
                'USG Mammae',
                'USG Thyroid/ Leher',
                'USG Thorak',
                'USG Testis',
                'USG Guding (Colli, Axilla)'
            ],
            image: './images/usg.jpg',
            preparations: [
                'Puasa 6-8 jam untuk USG abdomen',
                'Kandung kemih penuh untuk USG pelvis',
                'Kenakan pakaian yang nyaman dan mudah dilepas',
                'Tidak perlu persiapan khusus untuk USG lainnya kecuali ada instruksi'
            ]
        },
        doppler: {
            name: 'USG + Doppler',
            icon: '📡',
            description: 'Pemeriksaan ultrasonografi yang juga memeriksa aliran darah dalam pembuluh darah',
            services: [
                'USG Abdomen Atas (Doppler)',
                'USG Abdomen Bawah (Doppler)',
                'USG Abdomen Full (Doppler)',
                'USG Mammae (Doppler)',
                'USG Thyroid (Doppler)',
                'USG Testis (Doppler)',
                'USG Carotis (Doppler)',
                'USG Extremitas (Doppler)'
            ],
            image: './images/doppler.jpg',
            preparations: [
                'Puasa 6-8 jam untuk USG Doppler abdomen',
                'Tidak merokok sebelum pemeriksaan',
                'Tidak menggunakan lotion atau minyak pada area yang akan diperiksa',
                'Ikuti instruksi khusus yang diberikan oleh dokter'
            ]
        }
    };

    // Get active service
    const activeService = radiologyServices[activeTab];

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
                            Radiologi
                        </h1>
                        <p className="text-xl md:text-2xl max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
                            Layanan Pemeriksaan Radiologi dengan Teknologi Modern
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
                            Instalasi Radiologi RS Paru Sumatera Barat dilengkapi dengan peralatan canggih dan 
                            didukung oleh tenaga ahli berpengalaman. Kami menyediakan berbagai layanan pemeriksaan 
                            radiologi untuk membantu dokter dalam diagnosis dan perencanaan pengobatan.
                        </p>
                    </div>

                    {/* Main Image */}
                    <div className="mb-16" data-aos="fade-up">
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                            <div className="relative h-80 md:h-96">
                                <img 
                                    src="./images/radiologi.jpeg" 
                                    alt="Radiologi RS Paru" 
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = "https://via.placeholder.com/1200x500?text=Radiologi";
                                    }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                                    <div className="p-8 text-white">
                                        <h2 className="text-3xl font-bold mb-2">Teknologi Diagnostik Terkini</h2>
                                        <p className="text-white/90">Pemeriksaan radiologi untuk diagnosis yang lebih akurat</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Service Tabs */}
                    <div className="mb-8 flex justify-center" data-aos="fade-up">
                        <div className="inline-flex bg-white rounded-lg p-1 shadow-md">
                            {Object.keys(radiologyServices).map(key => (
                                <button 
                                    key={key}
                                    onClick={() => setActiveTab(key)}
                                    className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center ${
                                        activeTab === key 
                                            ? 'bg-gradient-to-r from-blue-500 to-teal-500 text-white' 
                                            : 'text-gray-700 hover:bg-gray-100'
                                    }`}
                                >
                                    <span className="mr-2">{radiologyServices[key].icon}</span>
                                    {radiologyServices[key].name}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Service Content */}
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-16" data-aos="fade-up">
                        <div className="md:flex">
                            <div className="md:w-1/2 p-8 md:p-12">
                                <div className="flex items-center mb-6">
                                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center text-white text-2xl mr-4">
                                        {activeService.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-800">{activeService.name}</h3>
                                </div>
                                
                                <p className="text-gray-600 mb-6">{activeService.description}</p>
                                
                                <h4 className="text-lg font-semibold text-gray-800 mb-4">Jenis Pemeriksaan:</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-8">
                                    {activeService.services.map((service, idx) => (
                                        <div key={idx} className="flex items-start">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span className="text-gray-600 text-sm">{service}</span>
                                        </div>
                                    ))}
                                </div>
                                
                                <h4 className="text-lg font-semibold text-gray-800 mb-4">Persiapan:</h4>
                                <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                                    <ul className="space-y-2">
                                        {activeService.preparations.map((prep, idx) => (
                                            <li key={idx} className="flex items-start">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                <span className="text-blue-700 text-sm">{prep}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            
                            <div className="md:w-1/2 relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-teal-500/20"></div>
                                <img 
                                    src={activeService.image} 
                                    alt={activeService.name} 
                                    className="h-64 md:h-full w-full object-cover"
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = `https://via.placeholder.com/600x400?text=${encodeURIComponent(activeService.name)}`;
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Information Section */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12" data-aos="fade-up">
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
                            <h3 className="text-lg font-semibold text-green-800 mb-2">Prosedur Pemeriksaan</h3>
                            <ol className="space-y-2 text-green-700 list-decimal pl-5">
                                <li className="text-sm">Daftar di loket pendaftaran</li>
                                <li className="text-sm">Lakukan pembayaran di kasir</li>
                                <li className="text-sm">Datang ke bagian radiologi dengan membawa bukti pembayaran</li>
                                <li className="text-sm">Tunggu giliran pemeriksaan</li>
                                <li className="text-sm">Lakukan pemeriksaan sesuai instruksi petugas</li>
                                <li className="text-sm">Ambil hasil sesuai jadwal yang ditentukan</li>
                            </ol>
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
                                    <span>Radiografi: 30 menit - 1 jam</span>
                                </li>
                                <li className="flex items-start">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span>USG: Hasil langsung</span>
                                </li>
                                <li className="flex items-start">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span>Hasil bacaan dokter spesialis: 1-2 hari</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="bg-gradient-to-r from-blue-500 to-teal-500 rounded-xl shadow-lg p-8 text-white" data-aos="fade-up">
                        <div className="md:flex items-center justify-between">
                            <div className="md:w-2/3 mb-6 md:mb-0">
                                <h3 className="text-2xl font-bold mb-2">Dapatkan Informasi Lebih Lanjut</h3>
                                <p className="text-white/90">
                                    Untuk informasi lebih detail tentang layanan radiologi, tarif, dan persiapan khusus, 
                                    silakan hubungi kami di (0752) 123456 atau kunjungi bagian informasi di rumah sakit.
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

export default Radiologi;