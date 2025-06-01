import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Farmasi = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [activeTab, setActiveTab] = useState('overview');

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

    // Pharmacy service features
    const pharmacyFeatures = [
        {
            id: 'prescription',
            title: 'Pelayanan Resep Cepat',
            description: 'Kami berkomitmen memberikan pelayanan resep yang cepat dan akurat.',
            details: [
                'Obat non racik: waktu tunggu maksimal 20 menit',
                'Obat racik: waktu tunggu maksimal 25 menit',
                'Verifikasi resep oleh apoteker profesional',
                'Pengecekan interaksi obat sebelum penyerahan'
            ],
            icon: '💊'
        },
        {
            id: 'free',
            title: 'Pelayanan Obat Gratis',
            description: 'Sebagai bagian dari komitmen kami untuk pelayanan kesehatan yang terjangkau.',
            details: [
                'Obat program pemerintah tersedia gratis',
                'Obat untuk pasien BPJS sesuai dengan ketentuan',
                'Program bantuan obat untuk pasien tidak mampu',
                'Ketersediaan obat generik berkualitas'
            ],
            icon: '🆓'
        },
        {
            id: 'consultation',
            title: 'Konsultasi Obat',
            description: 'Layanan konsultasi obat oleh apoteker berpengalaman.',
            details: [
                'Informasi dosis dan cara penggunaan obat',
                'Penjelasan efek samping obat',
                'Konsultasi interaksi obat',
                'Edukasi kepatuhan penggunaan obat'
            ],
            icon: '👨‍⚕️'
        }
    ];

    // FAQ items
    const faqItems = [
        {
            question: 'Berapa lama waktu tunggu untuk pengambilan obat?',
            answer: 'Waktu tunggu untuk obat non racik maksimal 20 menit, sedangkan untuk obat racik maksimal 25 menit. Namun, dalam kondisi tertentu seperti saat ramai, waktu tunggu mungkin sedikit lebih lama.'
        },
        {
            question: 'Apakah semua obat tersedia gratis?',
            answer: 'Obat program pemerintah seperti obat TB tersedia gratis. Untuk pasien BPJS, obat diberikan sesuai dengan ketentuan BPJS. Untuk obat-obatan di luar tanggungan, pasien perlu membayar sesuai tarif yang berlaku.'
        },
        {
            question: 'Bagaimana jika obat yang diresepkan tidak tersedia?',
            answer: 'Apoteker akan berkoordinasi dengan dokter untuk mendapatkan alternatif obat yang sesuai. Pasien akan diberitahu dan dimintai persetujuan sebelum penggantian obat dilakukan.'
        },
        {
            question: 'Apakah bisa mendapatkan konsultasi obat secara pribadi?',
            answer: 'Ya, kami menyediakan layanan konsultasi obat secara privat dengan apoteker. Anda bisa meminta konsultasi saat mengambil obat atau membuat janji temu terlebih dahulu di loket farmasi.'
        }
    ];

    // Service hours data
    const serviceHours = [
        { day: 'Senin - Kamis', hours: '08.00 - 14.30 WIB' },
        { day: 'Jumat', hours: '08.00 - 13.00 WIB' },
        { day: 'Sabtu', hours: '08.00 - 13.00 WIB' },
        { day: 'Minggu & Hari Libur', hours: 'TUTUP' }
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
                            Farmasi
                        </h1>
                        <p className="text-xl md:text-2xl max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
                            Layanan Kefarmasian Profesional dan Terpercaya
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
                            Instalasi Farmasi RS Paru Sumatera Barat menyediakan layanan kefarmasian yang profesional
                            dan terpercaya. Didukung oleh apoteker berpengalaman, kami berkomitmen untuk memberikan
                            pelayanan obat yang berkualitas dan informasi obat yang akurat.
                        </p>
                    </div>

                    {/* Tabs Navigation */}
                    <div className="mb-12 flex justify-center" data-aos="fade-up">
                        <div className="inline-flex bg-white rounded-lg p-1 shadow-md">
                            <button 
                                onClick={() => setActiveTab('overview')}
                                className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                                    activeTab === 'overview' 
                                        ? 'bg-gradient-to-r from-blue-500 to-teal-500 text-white' 
                                        : 'text-gray-700 hover:bg-gray-100'
                                }`}
                            >
                                Overview
                            </button>
                            <button 
                                onClick={() => setActiveTab('services')}
                                className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                                    activeTab === 'services' 
                                        ? 'bg-gradient-to-r from-blue-500 to-teal-500 text-white' 
                                        : 'text-gray-700 hover:bg-gray-100'
                                }`}
                            >
                                Layanan
                            </button>
                            <button 
                                onClick={() => setActiveTab('faq')}
                                className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                                    activeTab === 'faq' 
                                        ? 'bg-gradient-to-r from-blue-500 to-teal-500 text-white' 
                                        : 'text-gray-700 hover:bg-gray-100'
                                }`}
                            >
                                FAQ
                            </button>
                        </div>
                    </div>

                    {/* Overview Tab Content */}
                    {activeTab === 'overview' && (
                        <div data-aos="fade-up">
                            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
                                <div className="md:flex">
                                    <div className="md:w-1/2 relative">
                                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-teal-500/20"></div>
                                        <img 
                                            src="./images/farmasi.jpeg" 
                                            alt="Farmasi RS Paru" 
                                            className="h-full w-full object-cover"
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.src = "https://via.placeholder.com/600x400?text=Farmasi";
                                            }}
                                        />
                                    </div>
                                    <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                                        <h2 className="text-3xl font-bold text-gray-800 border-b-2 border-teal-500 pb-2 inline-block mb-6">
                                            Tentang Farmasi Kami
                                        </h2>
                                        <p className="text-lg text-gray-700 leading-relaxed mb-4">
                                            Instalasi Farmasi Rumah Sakit Paru Sumatera Barat memiliki beberapa keunggulan dalam 
                                            memberikan pelayanan kepada pasien, seperti waktu tunggu yang singkat, pelayanan obat 
                                            gratis untuk program tertentu, dan konsultasi obat oleh apoteker profesional.
                                        </p>
                                        <p className="text-lg text-gray-700 leading-relaxed">
                                            Kami berkomitmen untuk memberikan pelayanan prima yang mengutamakan keselamatan 
                                            pasien dan kualitas obat yang terjamin.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                                {pharmacyFeatures.map((feature, index) => (
                                    <div 
                                        key={feature.id} 
                                        className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                                        data-aos="fade-up"
                                        data-aos-delay={index * 100}
                                    >
                                        <div className="p-6 bg-gradient-to-r from-blue-600 to-teal-500 text-white">
                                            <div className="flex items-center mb-2">
                                                <div className="text-3xl mr-3">{feature.icon}</div>
                                                <h3 className="text-xl font-bold">{feature.title}</h3>
                                            </div>
                                            <p className="opacity-90">{feature.description}</p>
                                        </div>
                                        
                                        <div className="p-6">
                                            <ul className="space-y-2">
                                                {feature.details.map((detail, idx) => (
                                                    <li key={idx} className="flex items-start">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                        </svg>
                                                        <span className="text-gray-600">{detail}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-blue-50 rounded-xl p-8 border border-blue-100 mb-8" data-aos="fade-up">
                                <div className="md:flex items-start">
                                    <div className="md:w-1/4 mb-4 md:mb-0 md:mr-8">
                                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-3xl mx-auto md:mx-0">
                                            🕒
                                        </div>
                                    </div>
                                    <div className="md:w-3/4">
                                        <h3 className="text-xl font-bold text-blue-800 mb-4">Jam Pelayanan Farmasi</h3>
                                        <div className="overflow-x-auto">
                                            <table className="min-w-full bg-white rounded-lg overflow-hidden">
                                                <thead className="bg-blue-100">
                                                    <tr>
                                                        <th className="py-3 px-4 text-left text-sm font-semibold text-blue-800">Hari</th>
                                                        <th className="py-3 px-4 text-left text-sm font-semibold text-blue-800">Jam Pelayanan</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-blue-50">
                                                    {serviceHours.map((item, index) => (
                                                        <tr key={index} className={index % 2 === 0 ? 'bg-blue-50/30' : 'bg-white'}>
                                                            <td className="py-3 px-4 text-sm text-blue-700">{item.day}</td>
                                                            <td className="py-3 px-4 text-sm text-blue-700">{item.hours}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                        <p className="mt-4 text-blue-700 text-sm">
                                            <span className="font-semibold">Catatan:</span> Untuk keadaan darurat di luar jam pelayanan, 
                                            silakan menghubungi Instalasi Gawat Darurat.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Services Tab Content */}
                    {activeTab === 'services' && (
                        <div className="bg-white rounded-xl shadow-lg p-8" data-aos="fade-up">
                            <h2 className="text-3xl font-bold text-gray-800 border-b-2 border-teal-500 pb-2 inline-block mb-8">
                                Layanan Farmasi
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl p-6 border border-blue-100">
                                    <div className="flex items-center mb-4">
                                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center text-white text-2xl mr-4">
                                            1
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800">Pelayanan Resep</h3>
                                    </div>
                                    <p className="text-gray-600 mb-4">
                                        Kami menyediakan pelayanan resep dengan waktu tunggu yang singkat dan tingkat 
                                        akurasi yang tinggi, didukung oleh sistem informasi manajemen farmasi yang terintegrasi.
                                    </p>
                                    <ul className="space-y-2 border-t border-blue-100 pt-4">
                                        <li className="flex items-start">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span className="text-gray-700">Obat non racik: waktu tunggu maksimal 20 menit</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span className="text-gray-700">Obat racik: waktu tunggu maksimal 25 menit</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl p-6 border border-blue-100">
                                    <div className="flex items-center mb-4">
                                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center text-white text-2xl mr-4">
                                            2
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800">Pelayanan Obat Gratis</h3>
                                    </div>
                                    <p className="text-gray-600 mb-4">
                                        Sesuai dengan program pemerintah, beberapa jenis obat tersedia secara gratis untuk 
                                        pasien tertentu, terutama untuk pengobatan TB dan penyakit paru tertentu.
                                    </p>
                                    <ul className="space-y-2 border-t border-blue-100 pt-4">
                                        <li className="flex items-start">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span className="text-gray-700">Obat program TB disediakan gratis sesuai panduan pemerintah</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span className="text-gray-700">Pasien BPJS mendapatkan obat sesuai dengan tanggungan BPJS</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl p-6 border border-blue-100">
                                    <div className="flex items-center mb-4">
                                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center text-white text-2xl mr-4">
                                            3
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800">Konsultasi Obat</h3>
                                    </div>
                                    <p className="text-gray-600 mb-4">
                                        Apoteker kami siap memberikan konsultasi tentang penggunaan obat yang tepat, 
                                        efek samping, interaksi obat, dan informasi penting lainnya terkait pengobatan Anda.
                                    </p>
                                    <ul className="space-y-2 border-t border-blue-100 pt-4">
                                        <li className="flex items-start">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span className="text-gray-700">Konsultasi cara penggunaan obat yang benar</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span className="text-gray-700">Informasi efek samping dan interaksi obat</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span className="text-gray-700">Edukasi tentang kepatuhan pengobatan</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl p-6 border border-blue-100">
                                    <div className="flex items-center mb-4">
                                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center text-white text-2xl mr-4">
                                            4
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800">Informasi Obat</h3>
                                    </div>
                                    <p className="text-gray-600 mb-4">
                                        Kami menyediakan berbagai materi edukasi dan informasi obat untuk meningkatkan 
                                        pemahaman pasien tentang pengobatan yang sedang dijalani.
                                    </p>
                                    <ul className="space-y-2 border-t border-blue-100 pt-4">
                                        <li className="flex items-start">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span className="text-gray-700">Brosur dan leaflet informasi obat</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span className="text-gray-700">Penyuluhan penggunaan obat yang tepat</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span className="text-gray-700">Informasi penyimpanan obat yang benar</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="relative mt-12">
                                <img 
                                    src="./images/pharmacist.jpg" 
                                    alt="Apoteker RS Paru" 
                                    className="w-full h-64 object-cover rounded-xl shadow-lg"
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = "https://via.placeholder.com/1200x400?text=Apoteker+RS+Paru";
                                    }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-xl flex items-end">
                                    <div className="p-6 text-white">
                                        <h3 className="text-2xl font-bold mb-2">Tim Farmasi Profesional</h3>
                                        <p className="text-white/90">Didukung oleh apoteker dan tenaga teknis kefarmasian yang berpengalaman</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* FAQ Tab Content */}
                    {activeTab === 'faq' && (
                        <div className="bg-white rounded-xl shadow-lg p-8" data-aos="fade-up">
                            <h2 className="text-3xl font-bold text-gray-800 border-b-2 border-teal-500 pb-2 inline-block mb-8">
                                Pertanyaan Umum
                            </h2>
                            
                            <div className="space-y-4">
                                {faqItems.map((item, index) => (
                                    <div 
                                        key={index} 
                                        className="border border-gray-200 rounded-lg overflow-hidden"
                                        data-aos="fade-up"
                                        data-aos-delay={index * 100}
                                    >
                                        <div className="bg-gray-50 px-6 py-4">
                                            <h3 className="text-lg font-semibold text-gray-800">{item.question}</h3>
                                        </div>
                                        <div className="px-6 py-4">
                                            <p className="text-gray-600">{item.answer}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12 bg-blue-50 rounded-lg p-6 border border-blue-100" data-aos="fade-up">
                                <div className="flex items-start">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <div>
                                        <h4 className="text-lg font-semibold text-blue-800 mb-2">Punya pertanyaan lain?</h4>
                                        <p className="text-blue-700">
                                            Jika Anda memiliki pertanyaan yang tidak tercantum di sini, silakan hubungi kami di
                                            (0752) 123456 atau datang langsung ke loket farmasi RS Paru Sumatera Barat.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Call to Action */}
                    <div className="mt-12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-xl shadow-lg p-8 text-white" data-aos="fade-up">
                        <div className="md:flex items-center justify-between">
                            <div className="md:w-2/3 mb-6 md:mb-0">
                                <h3 className="text-2xl font-bold mb-2">Butuh Informasi Lebih Lanjut?</h3>
                                <p className="text-white/90">
                                    Tim farmasi kami siap membantu Anda dengan informasi lebih lanjut mengenai 
                                    layanan farmasi dan penggunaan obat yang tepat.
                                </p>
                            </div>
                            <div className="md:w-1/3 flex justify-center md:justify-end">
                                <a 
                                    href="/contact" 
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
        </div>
    );
};

export default Farmasi;