import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Inap = () => {
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

    // Room types and capacity
    const roomTypes = [
        {
            class: "Kelas 1",
            capacity: "1 ruang dengan 1 tempat tidur",
            features: ["Kamar pribadi", "AC", "TV", "Kamar mandi dalam", "Sofa untuk penunggu"],
            icon: "🌟",
            color: "from-yellow-500 to-amber-500"
        },
        {
            class: "Kelas 2",
            capacity: "3 ruang dengan 9 tempat tidur",
            features: ["2-3 tempat tidur per ruang", "AC", "Kamar mandi bersama", "Kursi untuk penunggu"],
            icon: "⭐",
            color: "from-blue-500 to-cyan-500"
        },
        {
            class: "Kelas 3",
            capacity: "1 ruang dengan 7 tempat tidur",
            features: ["Ruang bersama", "Kipas angin", "Kamar mandi bersama"],
            icon: "✨",
            color: "from-green-500 to-teal-500"
        }
    ];

    // Special care units
    const specialCare = [
        {
            name: "Ruang Isolasi TB MDR",
            beds: 2,
            description: "Ruang isolasi khusus untuk pasien dengan Tuberculosis Multi-Drug Resistant (TB MDR)",
            features: ["Sistem ventilasi khusus", "Tekanan negatif", "Perlengkapan keselamatan medis"]
        },
        {
            name: "Ruang Pasien Infeksi",
            beds: 4,
            description: "Ruang khusus untuk pasien dengan penyakit infeksi paru yang memerlukan isolasi",
            features: ["Protokol pencegahan infeksi", "Pemantauan khusus", "Peralatan pelindung lengkap"]
        },
        {
            name: "Ruang Non-Infeksi",
            beds: 17,
            description: "Ruang untuk pasien dengan kondisi paru non-infeksi yang memerlukan perawatan intensif",
            features: ["Berbagai kelas perawatan", "Pemantauan kondisi pasien", "Terapi oksigen jika diperlukan"]
        }
    ];

    // Services
    const services = [
        "Perawatan penyakit paru intensif",
        "Perawatan TBC & TB MDR",
        "Terapi oksigen",
        "Pemantauan kondisi pasien 24 jam",
        "Konsultasi dokter spesialis",
        "Fisioterapi pernapasan",
        "Dukungan nutrisi klinis",
        "Edukasi pasien dan keluarga"
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
                            Rawat Inap
                        </h1>
                        <p className="text-xl md:text-2xl max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
                            Pelayanan Perawatan Intensif untuk Kesehatan Paru
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
                            Rumah Sakit Paru Sumatera Barat menyediakan fasilitas rawat inap dengan berbagai pilihan ruangan 
                            yang disesuaikan dengan kebutuhan pasien. Ditangani oleh tim medis profesional 
                            yang siap memberikan perawatan 24 jam.
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
                                onClick={() => setActiveTab('rooms')}
                                className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                                    activeTab === 'rooms' 
                                        ? 'bg-gradient-to-r from-blue-500 to-teal-500 text-white' 
                                        : 'text-gray-700 hover:bg-gray-100'
                                }`}
                            >
                                Tipe Ruangan
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
                                            src="./images/inap.jpeg" 
                                            alt="Rawat Inap RS Paru" 
                                            className="h-full w-full object-cover"
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.src = "https://via.placeholder.com/600x400?text=Rawat+Inap";
                                            }}
                                        />
                                    </div>
                                    <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                                        <h2 className="text-3xl font-bold text-gray-800 border-b-2 border-teal-500 pb-2 inline-block mb-6">
                                            Fasilitas Rawat Inap
                                        </h2>
                                        <p className="text-lg text-gray-700 leading-relaxed mb-4">
                                            Saat ini Rumah Sakit Paru Sumatera Barat memiliki total 23 tempat tidur yang terdiri dari 2 tempat tidur untuk pasien TB MDR, 4 tempat tidur untuk pasien infeksi, dan 17 tempat tidur untuk pasien non infeksi.
                                        </p>
                                        <p className="text-lg text-gray-700 leading-relaxed">
                                            Dalam upaya meningkatkan kualitas pelayanan, Rumah Sakit Paru Sumatera Barat sedang dalam tahap perbaikan ruang rawatan, sehingga ke depannya akan dilakukan penambahan pilihan ruang rawatan, seperti kelas VIP atau kelas VVIP.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12" data-aos="fade-up" data-aos-delay="100">
                                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Ruang Perawatan Khusus</h3>
                                
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {specialCare.map((unit, index) => (
                                        <div 
                                            key={index} 
                                            className="bg-white rounded-xl shadow-lg overflow-hidden"
                                            data-aos="fade-up"
                                            data-aos-delay={index * 100}
                                        >
                                            <div className="bg-gradient-to-r from-blue-600 to-teal-500 p-4 text-white">
                                                <h4 className="text-lg font-bold">{unit.name}</h4>
                                                <div className="flex items-center mt-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                                    </svg>
                                                    <span>Kapasitas: {unit.beds} tempat tidur</span>
                                                </div>
                                            </div>
                                            <div className="p-6">
                                                <p className="text-gray-600 mb-4">{unit.description}</p>
                                                <h5 className="text-sm font-semibold text-gray-700 mb-2">Fitur:</h5>
                                                <ul className="space-y-1">
                                                    {unit.features.map((feature, idx) => (
                                                        <li key={idx} className="flex items-start text-sm text-gray-600">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-teal-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                            </svg>
                                                            {feature}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-xl shadow-lg p-8 text-white" data-aos="fade-up" data-aos-delay="200">
                                <div className="md:flex items-center justify-between">
                                    <div className="md:w-2/3">
                                        <h3 className="text-2xl font-bold mb-4">Perawatan 24 Jam oleh Tim Profesional</h3>
                                        <p className="mb-6 md:mb-0">
                                            Semua pasien rawat inap mendapatkan perawatan dan pemantauan 24 jam oleh tim medis profesional yang terdiri dari dokter spesialis, perawat terlatih, dan tenaga medis lainnya.
                                        </p>
                                    </div>
                                    <div className="md:w-1/3 flex justify-center md:justify-end">
                                        <a 
                                            href="/tarif" 
                                            className="bg-white text-blue-600 font-medium py-3 px-6 rounded-full inline-flex items-center hover:bg-gray-100 transition-colors"
                                        >
                                            Lihat Informasi Tarif
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Rooms Tab Content */}
                    {activeTab === 'rooms' && (
                        <div data-aos="fade-up">
                            <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Pilihan Ruang Rawat Inap</h2>
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {roomTypes.map((room, index) => (
                                    <div 
                                        key={index} 
                                        className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                                        data-aos="fade-up"
                                        data-aos-delay={index * 100}
                                    >
                                        <div className={`bg-gradient-to-r ${room.color} text-white p-6 relative`}>
                                            <div className="text-3xl absolute top-4 right-4">{room.icon}</div>
                                            <h3 className="text-2xl font-bold mb-1">{room.class}</h3>
                                            <p className="opacity-90">{room.capacity}</p>
                                        </div>
                                        <div className="p-6">
                                            <h4 className="text-gray-700 font-medium mb-3">Fasilitas:</h4>
                                            <ul className="space-y-2">
                                                {room.features.map((feature, idx) => (
                                                    <li key={idx} className="flex items-start">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        <span className="text-gray-600">{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12 bg-blue-50 rounded-lg border border-blue-100 p-6" data-aos="fade-up" data-aos-delay="300">
                                <div className="flex items-start">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <div>
                                        <h4 className="text-lg font-semibold text-blue-800 mb-2">Informasi Pengembangan</h4>
                                        <p className="text-blue-700">
                                            Rumah Sakit Paru Sumatera Barat saat ini sedang dalam tahap perbaikan ruang rawatan. 
                                            Ke depannya akan dilakukan penambahan pilihan ruang rawatan, seperti kelas VIP atau kelas VVIP
                                            untuk memberikan layanan yang lebih nyaman dan eksklusif.
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
                                Layanan Rawat Inap
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                <div className="relative h-full">
                                    <img 
                                        src="./images/inap.jpeg" 
                                        alt="Layanan Rawat Inap" 
                                        className="w-full h-full object-cover rounded-lg shadow-md"
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = "https://via.placeholder.com/600x400?text=Layanan+Rawat+Inap";
                                        }}
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                                        <h3 className="text-xl font-bold text-white">Perawatan Intensif</h3>
                                        <p className="text-white/80">Perawatan menyeluruh untuk kesehatan paru Anda</p>
                                    </div>
                                </div>

                                <div className="flex flex-col">
                                    <h3 className="text-xl font-bold text-gray-800 mb-4">Kami Menyediakan:</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {services.map((service, index) => (
                                            <div 
                                                key={index} 
                                                className="flex items-start gap-3"
                                                data-aos="fade-left"
                                                data-aos-delay={index * 50}
                                            >
                                                <div className="h-6 w-6 rounded-full bg-blue-500 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                </div>
                                                <span className="text-gray-700">{service}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                                <div className="bg-blue-50 rounded-lg p-6 border border-blue-100" data-aos="fade-up" data-aos-delay="100">
                                    <div className="text-blue-500 mb-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-semibold text-blue-800 mb-2">Protokol Keamanan</h3>
                                    <p className="text-blue-700">
                                        Kami menerapkan protokol keamanan dan pencegahan infeksi yang ketat untuk melindungi kesehatan pasien dan staf.
                                    </p>
                                </div>

                                <div className="bg-green-50 rounded-lg p-6 border border-green-100" data-aos="fade-up" data-aos-delay="200">
                                    <div className="text-green-500 mb-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-semibold text-green-800 mb-2">Tim Profesional</h3>
                                    <p className="text-green-700">
                                        Tim dokter spesialis dan perawat berpengalaman memberikan perawatan terbaik selama 24 jam.
                                    </p>
                                </div>

                                <div className="bg-purple-50 rounded-lg p-6 border border-purple-100" data-aos="fade-up" data-aos-delay="300">
                                    <div className="text-purple-500 mb-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-semibold text-purple-800 mb-2">Fasilitas Modern</h3>
                                    <p className="text-purple-700">
                                        Dilengkapi peralatan medis modern untuk diagnosis dan terapi penyakit paru.
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Inap;