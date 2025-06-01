import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Rawat = () => {
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

    // Clinic data
    const clinics = [
        {
            name: "Ruang Lindung Bulan",
            description: "Melayani pasien baru yang memerlukan pemeriksaan awal untuk gangguan paru.",
            icon: "🔍"
        },
        {
            name: "Ruang Cinduo Mato",
            description: "Melayani pasien dengan risiko infeksi yang memerlukan penanganan khusus.",
            icon: "🦠"
        },
        {
            name: "Ruang Andam Suri",
            description: "Melayani pasien lama/berulang yang memerlukan perawatan berkelanjutan.",
            icon: "🔄"
        },
        {
            name: "Ruang Mande Rubiah",
            description: "Melayani kontrol rutin pasien rawat jalan yang dirujuk dari Puskesmas.",
            icon: "📋"
        },
        {
            name: "Poliklinik DOTS",
            description: "Melayani pasien suspect TB dan suspect TB MDR dengan pendekatan khusus.",
            icon: "🫁"
        }
    ];

    // Service hours
    const serviceHours = [
        {
            days: "Senin - Kamis",
            hours: "08.00 - 14.30 WIB",
            registrationHours: "08.00 - 12.00 WIB"
        },
        {
            days: "Jumat - Sabtu",
            hours: "08.00 - 13.00 WIB",
            registrationHours: "08.00 - 11.00 WIB"
        },
        {
            days: "Minggu & Hari Libur",
            hours: "TUTUP",
            registrationHours: "-"
        }
    ];

    // Services
    const services = [
        "Konsultasi dengan dokter spesialis paru",
        "Pemeriksaan kesehatan paru",
        "Spirometri (uji fungsi paru)",
        "Pemeriksaan sputum",
        "Terapi pengobatan TB",
        "Edukasi dan konseling paru",
        "Pemeriksaan radiologi",
        "Pemeriksaan laboratorium"
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
                            Rawat Jalan
                        </h1>
                        <p className="text-xl md:text-2xl max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
                            Pelayanan Poliklinik Khusus Paru
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
                            Rumah Sakit Paru Sumatera Barat menyediakan layanan rawat jalan dengan
                            berbagai poliklinik khusus untuk menangani gangguan kesehatan paru.
                            Ditangani langsung oleh dokter spesialis berpengalaman.
                        </p>
                    </div>

                    {/* Tabs Navigation */}
                    <div className="mb-12 flex justify-center" data-aos="fade-up">
                        <div className="inline-flex bg-white rounded-lg p-1 shadow-md">
                            <button
                                onClick={() => setActiveTab('overview')}
                                className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${activeTab === 'overview'
                                        ? 'bg-gradient-to-r from-blue-500 to-teal-500 text-white'
                                        : 'text-gray-700 hover:bg-gray-100'
                                    }`}
                            >
                                Overview
                            </button>
                            <button
                                onClick={() => setActiveTab('clinics')}
                                className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${activeTab === 'clinics'
                                        ? 'bg-gradient-to-r from-blue-500 to-teal-500 text-white'
                                        : 'text-gray-700 hover:bg-gray-100'
                                    }`}
                            >
                                Poliklinik
                            </button>
                            <button
                                onClick={() => setActiveTab('hours')}
                                className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${activeTab === 'hours'
                                        ? 'bg-gradient-to-r from-blue-500 to-teal-500 text-white'
                                        : 'text-gray-700 hover:bg-gray-100'
                                    }`}
                            >
                                Jam Layanan
                            </button>
                        </div>
                    </div>

                    {/* Overview Tab Content */}
                    {activeTab === 'overview' && (
                        <div data-aos="fade-up">
                            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                                <div className="md:flex">
                                    <div className="md:w-1/2 relative">
                                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-teal-500/20"></div>
                                        <img
                                            src="./images/jalan.jpeg"
                                            alt="Rawat Jalan RS Paru"
                                            className="h-full w-full object-cover"
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.src = "https://via.placeholder.com/600x400?text=Rawat+Jalan";
                                            }}
                                        />
                                    </div>
                                    <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                                        <h2 className="text-3xl font-bold text-gray-800 border-b-2 border-teal-500 pb-2 inline-block mb-6">
                                            Layanan Rawat Jalan
                                        </h2>
                                        <p className="text-lg text-gray-700 leading-relaxed mb-4">
                                            Saat ini Rumah Sakit Paru Sumatera Barat memiliki 5 poliklinik khusus paru yang melayani berbagai kebutuhan pasien dengan gangguan pernapasan dan paru.
                                        </p>
                                        <p className="text-lg text-gray-700 leading-relaxed">
                                            Setiap poliklinik memiliki fokus layanan yang berbeda untuk memastikan pasien mendapatkan penanganan yang tepat sesuai dengan kondisi dan kebutuhan mereka.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12 bg-white rounded-xl shadow-lg p-8" data-aos="fade-up" data-aos-delay="100">
                                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Layanan yang Tersedia</h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {services.map((service, index) => (
                                        <div
                                            key={index}
                                            className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                                            data-aos="fade-up"
                                            data-aos-delay={index * 50}
                                        >
                                            <div className="h-6 w-6 rounded-full bg-blue-500 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <span className="text-gray-700 font-medium">{service}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-xl shadow-lg p-8 text-white" data-aos="fade-up" data-aos-delay="200">
                                <div className="md:flex items-center justify-between">
                                    <div className="md:w-2/3">
                                        <h3 className="text-2xl font-bold mb-4">Konsultasi dengan Dokter Spesialis</h3>
                                        <p className="mb-6 md:mb-0">
                                            Semua pemeriksaan di Poliklinik Rawat Jalan RS Paru Sumatera Barat dilakukan oleh dokter spesialis berpengalaman dalam bidang kesehatan paru.
                                        </p>
                                    </div>
                                    <div className="md:w-1/3 flex justify-center md:justify-end">
                                        <a
                                            href="/jadwaldokter"
                                            className="bg-white text-blue-600 font-medium py-3 px-6 rounded-full inline-flex items-center hover:bg-gray-100 transition-colors"
                                        >
                                            Lihat Jadwal Dokter
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Clinics Tab Content */}
                    {activeTab === 'clinics' && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {clinics.map((clinic, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-xl shadow-lg overflow-hidden"
                                    data-aos="fade-up"
                                    data-aos-delay={index * 100}
                                >
                                    <div className="p-6">
                                        <div className="flex items-center mb-4">
                                            <div className="text-4xl mr-4">{clinic.icon}</div>
                                            <h3 className="text-xl font-bold text-gray-800">{clinic.name}</h3>
                                        </div>
                                        <p className="text-gray-600">{clinic.description}</p>
                                    </div>
                                    <div className="bg-blue-50 px-6 py-4 border-t border-blue-100">
                                        <p className="text-blue-800 text-sm font-medium">
                                            Ditangani oleh dokter spesialis paru berpengalaman
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Hours Tab Content */}
                    {activeTab === 'hours' && (
                        <div className="bg-white rounded-xl shadow-lg p-8" data-aos="fade-up">
                            <h2 className="text-3xl font-bold text-gray-800 border-b-2 border-teal-500 pb-2 inline-block mb-8 text-center">
                                Jam Layanan Poliklinik
                            </h2>

                            <div className="overflow-hidden rounded-lg border border-gray-200 mb-8">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Hari
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Jam Pelayanan
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Pendaftaran
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {serviceHours.map((item, index) => (
                                            <tr key={index} className={index === 2 ? "bg-red-50" : ""}>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                    {item.days}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    {item.hours}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    {item.registrationHours}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-blue-50 rounded-lg p-6 border border-blue-100" data-aos="fade-right">
                                    <h3 className="text-lg font-bold text-blue-800 mb-3">Informasi Penting</h3>
                                    <ul className="space-y-2 text-blue-700">
                                        <li className="flex items-start">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span>Pendaftaran ditutup sesuai dengan jam yang tertera</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span>Pasien dilayani sesuai dengan nomor antrian</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span>Harap membawa kartu identitas dan kartu BPJS (jika ada)</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-green-50 rounded-lg p-6 border border-green-100" data-aos="fade-left">
                                    <h3 className="text-lg font-bold text-green-800 mb-3">Dokter Spesialis</h3>
                                    <p className="text-green-700 mb-4">
                                        Semua pemeriksaan di Poliklinik Rawat Jalan dilakukan oleh dokter spesialis paru yang berpengalaman.
                                    </p>
                                    <div className="flex justify-center mt-2">
                                        <a
                                            href="/jadwaldokter"
                                            className="inline-flex items-center text-green-700 font-medium hover:text-green-800"
                                        >
                                            Lihat Jadwal Dokter
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 bg-yellow-50 p-4 rounded-lg border border-yellow-100 flex items-start" data-aos="fade-up">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                </svg>
                                <p className="text-yellow-800">
                                    <span className="font-bold">Perhatian:</span> Pada hari Minggu dan Libur Nasional,
                                    layanan Poliklinik Rawat Jalan <span className="font-bold">TUTUP</span>.
                                    Untuk kondisi darurat, silakan hubungi Instalasi Gawat Darurat (IGD) yang buka 24 jam.
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Rawat;