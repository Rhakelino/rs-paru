import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Unggulan = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle mobile menu
    const [activeDropdown, setActiveDropdown] = useState(null); // Track the active dropdown
    const [activeTab, setActiveTab] = useState('promosi');

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

    // Featured services content
    const layananItems = [
        {
            id: 'promosi',
            title: "Promosi Kesehatan",
            description: "Penyuluhan kepada pengunjung tentang penyebab, gejala dan perjalanan penyakit serta cara penyembuhan juga cara minum obat yang benar.",
            icon: "📣",
            details: [
                "Penyuluhan diberikan kepada semua pengunjung, baik kepada penderita TB maupun Non TB.",
                "Penyuluhan tentang bahaya rokok, pentingnya mengkonsumsi makanan bergizi dan Prilaku Hidup Bersih dan Sehat di Rumah Tangga.",
                "Konseling diberikan tidak saja kepada penderita TB Paru yang baru ditemukan, tapi juga diberikan kepada keluarga."
            ],
            image: "./images/promosi-kesehatan.jpg"
        },
        {
            id: 'laboratorium',
            title: "Laboratorium",
            description: "Pelayanan Laboratorium di Rumah Sakit Paru Sumatera Barat memiliki beberapa keunggulan dalam kecepatan dan akurasi pemeriksaan.",
            icon: "🔬",
            details: [
                "Waktu tunggu untuk pemeriksaan di laboratorium patologi klinik (hematologi, kimia klinik, dan imunologi atau serologi) 1-2 jam.",
                "Waktu tunggu untuk pemeriksaan mikroskopis BTA khusus pasien dengan wilayah tempat tinggal yang jauh dari area Rumah Sakit adalah ±1 jam. Hal ini dilakukan guna mengurangi resiko penularan infeksi.",
                "Waktu tunggu pemeriksaan kultur MGIT berkisar 6-42 hari. Sedangkan perbandingan waktu tunggu kultur manual (media LJ) adalah 6-8 minggu."
            ],
            image: "./images/labor1.jpg"
        },
        {
            id: 'tb-mdr',
            title: "TB MDR",
            description: "Rumah Sakit Paru Sumatera Barat merupakan salah satu dari 3 pelayanan rujukan TB MDR di wilayah Sumatera Barat.",
            icon: "🏥",
            details: [
                "Fasilitas penanganan TB MDR (Multi-Drug Resistant Tuberculosis) lengkap.",
                "Tim dokter spesialis dan tenaga medis yang kompeten dalam penanganan TB MDR.",
                "Pelayanan konsultasi dan tindak lanjut untuk pasien TB MDR.", 
                "Kerjasama dengan fasilitas kesehatan di berbagai kabupaten/kota untuk penanganan TB MDR."
            ],
            image: "./images/tb-mdr.jpg"
        },
        {
            id: 'bronkoskopi',
            title: "Bronkoskopi",
            description: "Prosedur bronkoskopi dengan peralatan modern dan tim medis berpengalaman untuk diagnosis dan terapi gangguan saluran napas.",
            icon: "🫁",
            details: [
                "Tindakan bronkoskopi untuk diagnosis kelainan pada bronkus.",
                "Pengambilan spesimen untuk pemeriksaan mikrobiologi, sitologi, dan histopatologi.",
                "Penanganan benda asing di saluran pernapasan.",
                "Terapi pada kasus obstruksi saluran napas."
            ],
            image: "./images/bronkoskopi.jpg"
        },
        {
            id: 'spirometri',
            title: "Spirometri & Uji Fungsi Paru",
            description: "Pemeriksaan fungsi paru lengkap untuk mendiagnosis berbagai gangguan pernapasan dan penyakit paru.",
            icon: "📊",
            details: [
                "Pemeriksaan kapasitas vital paru.",
                "Tes fungsi paru lengkap untuk evaluasi asma, PPOK, dan penyakit paru restriktif.",
                "Interpretasi hasil oleh dokter spesialis paru berpengalaman.",
                "Tindak lanjut dan penanganan berdasarkan hasil pemeriksaan."
            ],
            image: "./images/spirometri.jpg"
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
                        Layanan Unggulan
                    </h1>
                    <p className="text-xl text-white max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
                        Keunggulan Pelayanan RS Paru Sumatera Barat
                    </p>
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto md:px-20 px-10 py-16 -mt-16">
                {/* White Content Box */}
                <div className="bg-white rounded-xl shadow-lg p-8" data-aos="fade-up">
                    {/* Introduction */}
                    <div className="mb-12" data-aos="fade-up">
                        <p className="text-lg text-gray-600">
                            Rumah Sakit Paru Sumatera Barat memiliki berbagai layanan unggulan di bidang kesehatan paru 
                            dan pernapasan. Dengan fasilitas modern dan tenaga medis yang kompeten, kami berkomitmen 
                            memberikan pelayanan terbaik untuk masyarakat Sumatera Barat dan sekitarnya.
                        </p>
                    </div>

                    {/* Service Tabs Navigation */}
                    <div className="mb-12 flex justify-center overflow-x-auto" data-aos="fade-up">
                        <div className="inline-flex bg-gray-100 rounded-lg p-1 shadow-md">
                            {layananItems.map(item => (
                                <button 
                                    key={item.id}
                                    onClick={() => setActiveTab(item.id)}
                                    className={`px-4 py-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-200 ${
                                        activeTab === item.id 
                                            ? 'bg-gradient-to-r from-blue-500 to-teal-500 text-white' 
                                            : 'text-gray-700 hover:bg-gray-200'
                                    }`}
                                >
                                    {item.title}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Service Content */}
                    {layananItems.map(item => (
                        activeTab === item.id && (
                            <div key={item.id} className="mb-8" data-aos="fade-up">
                                <div className="flex flex-col lg:flex-row gap-8 mb-8">
                                    <div className="lg:w-1/2">
                                        <div className="bg-gray-100 rounded-lg overflow-hidden h-full">
                                            <img 
                                                src={item.image} 
                                                alt={item.title} 
                                                className="w-full h-full object-cover"
                                                onError={(e) => {
                                                    e.target.onerror = null;
                                                    e.target.src = "https://via.placeholder.com/600x400?text=" + item.title;
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="lg:w-1/2">
                                        <div className="flex items-center mb-4">
                                            <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-4xl mr-4">
                                                {item.icon}
                                            </div>
                                            <h2 className="text-3xl font-bold text-gray-800">{item.title}</h2>
                                        </div>
                                        <p className="text-lg text-gray-600 mb-6">{item.description}</p>
                                        <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
                                            <h3 className="text-xl font-semibold text-blue-800 mb-4">Keunggulan Layanan</h3>
                                            <ul className="space-y-3">
                                                {item.details.map((detail, index) => (
                                                    <li key={index} className="flex items-start">
                                                        <svg className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        <span className="text-gray-700">{detail}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    ))}

                    {/* Additional Info */}
                    <div className="mt-12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-xl shadow-lg p-8 text-white" data-aos="fade-up">
                        <div className="md:flex items-center justify-between">
                            <div className="md:w-2/3 mb-6 md:mb-0">
                                <h3 className="text-2xl font-bold mb-2">Konsultasi Layanan Unggulan</h3>
                                <p className="text-white/90">
                                    Untuk informasi lebih lanjut mengenai layanan unggulan kami, 
                                    silakan konsultasikan dengan dokter spesialis kami atau hubungi pusat informasi RS Paru Sumatera Barat.
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

export default Unggulan;