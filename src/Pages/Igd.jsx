import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Igd = () => {
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

    // Service features
    const services = [
        {
            icon: "🫁",
            title: "Gangguan Fungsi Paru",
            description: "Menangani kasus gawat darurat akibat gangguan fungsi paru seperti sesak napas akut dan kegagalan pernapasan."
        },
        {
            icon: "🚑",
            title: "Kasus Trauma",
            description: "Penanganan trauma dan kecelakaan dengan tenaga medis yang terlatih dan peralatan modern."
        },
        {
            icon: "⚡",
            title: "Respon Cepat",
            description: "Tim medis siap 24 jam dengan respons cepat untuk menangani segala situasi darurat."
        },
        {
            icon: "🏥",
            title: "Peralatan Lengkap",
            description: "Didukung peralatan medis terkini untuk penanganan kegawatdaruratan paru dan umum."
        }
    ];

    // Facilities
    const facilities = [
        "Ruang triage untuk penilaian kegawatdaruratan",
        "Ruang resusitasi dengan peralatan lengkap",
        "Ruang observasi pasien",
        "Monitor multiparameter",
        "Ventilator",
        "Alat pemeriksaan ROTEM (Rotational Thromboelastometry)",
        "Alat pengukur gas darah",
        "Alat defibrilator",
        "Nebulizer"
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
                            Instalasi Gawat Darurat
                        </h1>
                        <p className="text-xl md:text-2xl max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
                            Pelayanan Cepat, Tepat dan Terpercaya 24 Jam
                        </p>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto px-6 py-12 -mt-16">
                <div className="max-w-7xl mx-auto">
                    {/* Intro Card */}
                    <div className="text-center mb-16 bg-white rounded-lg shadow-lg p-8" data-aos="fade-up">
                        <div className="flex items-center justify-center mb-4">
                            <span className="px-4 py-1 bg-red-100 text-red-800 rounded-full text-sm font-semibold">24 JAM</span>
                            <span className="mx-2">•</span>
                            <span className="px-4 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">SIAGA</span>
                            <span className="mx-2">•</span>
                            <span className="px-4 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold">TERLATIH</span>
                        </div>
                        <p className="text-lg text-gray-600">
                            Instalasi Gawat Darurat Rumah Sakit Paru Sumatera Barat siap melayani kondisi kegawatdaruratan 
                            medis dengan tenaga profesional dan peralatan modern, 24 jam sehari.
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
                                onClick={() => setActiveTab('facilities')}
                                className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                                    activeTab === 'facilities' 
                                        ? 'bg-gradient-to-r from-blue-500 to-teal-500 text-white' 
                                        : 'text-gray-700 hover:bg-gray-100'
                                }`}
                            >
                                Fasilitas
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
                                            src="./images/igd.jpeg" 
                                            alt="IGD RS Paru" 
                                            className="h-full w-full object-cover"
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.src = "https://via.placeholder.com/600x400?text=IGD+RS+Paru";
                                            }}
                                        />
                                    </div>
                                    <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                                        <h2 className="text-3xl font-bold text-gray-800 border-b-2 border-teal-500 pb-2 inline-block mb-6">
                                            Tentang IGD
                                        </h2>
                                        <p className="text-lg text-gray-700 leading-relaxed mb-4">
                                            Instalasi Gawat Darurat berada pada sayap kanan gedung Rumah Sakit Paru Sumatera Barat. IGD kami adalah pelayanan untuk mengatasi kegawatdaruratan yang disebabkan oleh gangguan fungsi paru dan pelayanan gawat darurat lainnya, termasuk kasus kecelakaan.
                                        </p>
                                        <p className="text-lg text-gray-700 leading-relaxed">
                                            Dalam hal ini IGD berperan dalam memberikan pelayanan gawat darurat yang cepat dan tepat serta terjangkau bagi kebutuhan masyarakat. Didukung oleh tim medis profesional yang siap 24 jam untuk penanganan kasus gawat darurat.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12 bg-white rounded-xl shadow-lg p-8" data-aos="fade-up" data-aos-delay="100">
                                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Alur Pelayanan IGD</h3>
                                
                                <div className="relative">
                                    {/* Timeline line */}
                                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-blue-500 transform md:translateX(-0.5px)"></div>
                                    
                                    {/* Timeline items */}
                                    <div className="space-y-12">
                                        {/* Item 1 */}
                                        <div className="relative md:ml-0">
                                            <div className="flex flex-col md:flex-row items-center">
                                                <div className="flex items-center justify-center md:w-1/2 md:justify-end md:pr-8">
                                                    <div className="bg-white text-blue-500 border-2 border-blue-500 rounded-full h-8 w-8 flex items-center justify-center font-bold z-10">1</div>
                                                </div>
                                                <div className="pt-4 md:pt-0 md:w-1/2 md:pl-8">
                                                    <h4 className="text-xl font-bold text-gray-800">Pendaftaran Pasien</h4>
                                                    <p className="text-gray-600 mt-2">Pasien atau keluarga melakukan pendaftaran di loket IGD dengan menunjukkan identitas dan kartu asuransi (jika ada).</p>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        {/* Item 2 */}
                                        <div className="relative md:ml-0">
                                            <div className="flex flex-col md:flex-row items-center">
                                                <div className="flex items-center justify-center md:w-1/2 md:justify-end md:pr-8 md:order-1">
                                                    <div className="bg-white text-blue-500 border-2 border-blue-500 rounded-full h-8 w-8 flex items-center justify-center font-bold z-10">2</div>
                                                </div>
                                                <div className="pt-4 md:pt-0 md:w-1/2 md:pr-8 md:text-right">
                                                    <h4 className="text-xl font-bold text-gray-800">Triase</h4>
                                                    <p className="text-gray-600 mt-2">Penilaian awal oleh perawat untuk menentukan tingkat kegawatan pasien dan prioritas penanganan.</p>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        {/* Item 3 */}
                                        <div className="relative md:ml-0">
                                            <div className="flex flex-col md:flex-row items-center">
                                                <div className="flex items-center justify-center md:w-1/2 md:justify-end md:pr-8">
                                                    <div className="bg-white text-blue-500 border-2 border-blue-500 rounded-full h-8 w-8 flex items-center justify-center font-bold z-10">3</div>
                                                </div>
                                                <div className="pt-4 md:pt-0 md:w-1/2 md:pl-8">
                                                    <h4 className="text-xl font-bold text-gray-800">Pemeriksaan Dokter</h4>
                                                    <p className="text-gray-600 mt-2">Dokter jaga segera melakukan pemeriksaan dan memberikan penanganan awal sesuai kondisi pasien.</p>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        {/* Item 4 */}
                                        <div className="relative md:ml-0">
                                            <div className="flex flex-col md:flex-row items-center">
                                                <div className="flex items-center justify-center md:w-1/2 md:justify-end md:pr-8 md:order-1">
                                                    <div className="bg-white text-blue-500 border-2 border-blue-500 rounded-full h-8 w-8 flex items-center justify-center font-bold z-10">4</div>
                                                </div>
                                                <div className="pt-4 md:pt-0 md:w-1/2 md:pr-8 md:text-right">
                                                    <h4 className="text-xl font-bold text-gray-800">Tindakan Medis</h4>
                                                    <p className="text-gray-600 mt-2">Pelaksanaan tindakan medis sesuai kebutuhan pasien, termasuk pemberian obat-obatan atau prosedur darurat.</p>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        {/* Item 5 */}
                                        <div className="relative md:ml-0">
                                            <div className="flex flex-col md:flex-row items-center">
                                                <div className="flex items-center justify-center md:w-1/2 md:justify-end md:pr-8">
                                                    <div className="bg-white text-blue-500 border-2 border-blue-500 rounded-full h-8 w-8 flex items-center justify-center font-bold z-10">5</div>
                                                </div>
                                                <div className="pt-4 md:pt-0 md:w-1/2 md:pl-8">
                                                    <h4 className="text-xl font-bold text-gray-800">Keputusan Medis</h4>
                                                    <p className="text-gray-600 mt-2">Dokter menentukan tindak lanjut: rawat inap, rujukan, observasi, atau pulang dengan obat dan instruksi perawatan.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Facilities Tab Content */}
                    {activeTab === 'facilities' && (
                        <div className="bg-white rounded-xl shadow-lg p-8" data-aos="fade-up">
                            <h2 className="text-3xl font-bold text-gray-800 border-b-2 border-teal-500 pb-2 inline-block mb-8">
                                Fasilitas IGD
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="relative h-full">
                                    <img 
                                        src="./images/igd.jpeg" 
                                        alt="Fasilitas IGD" 
                                        className="w-full h-full object-cover rounded-lg shadow-md"
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = "https://via.placeholder.com/600x400?text=Fasilitas+IGD";
                                        }}
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                                        <h3 className="text-xl font-bold text-white">Peralatan Modern</h3>
                                        <p className="text-white/80">Didukung peralatan medis terkini untuk penanganan kegawatdaruratan</p>
                                    </div>
                                </div>

                                <div className="flex flex-col">
                                    <h3 className="text-xl font-bold text-gray-800 mb-4">Kami Menyediakan:</h3>
                                    <ul className="space-y-4 flex-grow">
                                        {facilities.map((facility, index) => (
                                            <li 
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
                                                <span className="text-gray-700">{facility}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
                                        <p className="text-blue-800 font-medium">
                                            Semua fasilitas dirawat dan diperiksa secara berkala untuk memastikan kesiapan penggunaan dalam situasi darurat.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Services Tab Content */}
                    {activeTab === 'services' && (
                        <div data-aos="fade-up">
                            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                                <h2 className="text-3xl font-bold text-gray-800 border-b-2 border-teal-500 pb-2 inline-block mb-8">
                                    Layanan IGD
                                </h2>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {services.map((service, index) => (
                                        <div 
                                            key={index} 
                                            className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-300"
                                            data-aos="fade-up"
                                            data-aos-delay={index * 100}
                                        >
                                            <div className="text-4xl mb-4">{service.icon}</div>
                                            <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
                                            <p className="text-gray-600">{service.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-gradient-to-r from-blue-500 to-teal-500 rounded-xl shadow-lg p-8 text-white" data-aos="fade-up" data-aos-delay="200">
                                <div className="md:flex items-center">
                                    <div className="md:w-3/4">
                                        <h3 className="text-2xl font-bold mb-4">Layanan Darurat 24 Jam</h3>
                                        <p className="mb-6 md:mb-0">
                                            IGD Rumah Sakit Paru Sumatera Barat siap melayani kondisi gawat darurat setiap saat.
                                            Didukung oleh tim medis profesional dan peralatan modern untuk memberikan pertolongan cepat dan tepat.
                                        </p>
                                    </div>
                                    <div className="md:w-1/4 flex justify-center md:justify-end">
                                        <div className="bg-white text-blue-600 font-bold py-3 px-6 rounded-full text-xl">
                                            Hubungi: 0812-3456-7890
                                        </div>
                                    </div>
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

export default Igd;