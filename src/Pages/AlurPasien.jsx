import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AlurPasien = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [activeTab, setActiveTab] = useState('poliklinik');

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

    // Process steps for poliklinik
    const poliklinikSteps = [
        {
            id: 1,
            title: "Pendaftaran",
            description: "Pasien mengambil nomor antrian dan melakukan pendaftaran di loket atau loket BPJS.",
            details: [
                "Pasien baru: Membawa kartu identitas (KTP) dan kartu BPJS (jika ada)",
                "Pasien lama: Membawa kartu berobat dan kartu BPJS (jika ada)"
            ],
            icon: "📋"
        },
        {
            id: 2,
            title: "Skrining",
            description: "Pemeriksaan awal untuk menentukan arah penanganan pasien.",
            details: [
                "Pemeriksaan tekanan darah, suhu tubuh, dan kondisi umum",
                "Penentuan prioritas penanganan pasien"
            ],
            icon: "🩺"
        },
        {
            id: 3,
            title: "Registrasi/Admisi",
            description: "Pendataan lengkap data pasien dan riwayat penyakit.",
            details: [
                "Pencatatan data administratif pasien",
                "Pembuatan rekam medis untuk pasien baru",
                "Penentuan poli tujuan"
            ],
            icon: "📝"
        },
        {
            id: 4,
            title: "Poliklinik Sesuai Kondisi",
            description: "Pasien diarahkan ke poliklinik sesuai kondisi penyakit.",
            subSteps: [
                {
                    title: "Pasien Baru",
                    paths: [
                        "Lindung Bulan 2 (Asesmen Awal)",
                        "Lindung Bulan 1 (Pemeriksaan Lanjutan)"
                    ]
                },
                {
                    title: "Pasien Lama",
                    paths: [
                        "Andam Suri (Non Infeksi)",
                        "Cindua Mato (Infeksi)"
                    ]
                }
            ],
            icon: "🏥"
        },
        {
            id: 5,
            title: "Pemeriksaan Penunjang",
            description: "Jika diperlukan, pasien akan dirujuk untuk pemeriksaan penunjang.",
            details: [
                "Laboratorium",
                "Radiologi",
                "Spirometri",
                "Pemeriksaan lain sesuai kebutuhan"
            ],
            icon: "🔬"
        },
        {
            id: 6,
            title: "Apotek",
            description: "Pengambilan obat sesuai resep dokter.",
            details: [
                "Penyerahan resep",
                "Pengambilan obat",
                "Konsultasi penggunaan obat"
            ],
            icon: "💊"
        },
        {
            id: 7,
            title: "Tindak Lanjut",
            description: "Keputusan tindak lanjut pengobatan.",
            subSteps: [
                {
                    title: "Keputusan Medis",
                    paths: [
                        "Rawat (Diperlukan rawat inap)",
                        "Pulang (Pengobatan jalan)",
                        "Rujuk (Dirujuk ke fasilitas lain)"
                    ]
                }
            ],
            icon: "🔄"
        }
    ];

    // Process steps for IGD
    const igdSteps = [
        {
            id: 1,
            title: "Kedatangan Pasien",
            description: "Pasien datang ke Instalasi Gawat Darurat RS Paru.",
            details: [
                "Pasien datang sendiri atau diantar ambulans",
                "Kondisi pasien dinilai segera oleh petugas"
            ],
            icon: "🚑"
        },
        {
            id: 2,
            title: "Triase",
            description: "Penilaian cepat untuk menentukan prioritas penanganan.",
            details: [
                "Kode merah: Kondisi gawat darurat, penanganan segera",
                "Kode kuning: Kondisi darurat, penanganan 10-15 menit",
                "Kode hijau: Kondisi tidak gawat, penanganan bisa menunggu"
            ],
            icon: "🔴"
        },
        {
            id: 3,
            title: "Pemeriksaan Awal",
            description: "Dokter jaga IGD melakukan pemeriksaan awal.",
            details: [
                "Pemeriksaan tanda vital (tekanan darah, nadi, pernapasan, suhu)",
                "Anamnesis dan pemeriksaan fisik",
                "Penentuan tindakan awal"
            ],
            icon: "👨‍⚕️"
        },
        {
            id: 4,
            title: "Tindakan Medis",
            description: "Pemberian tindakan medis sesuai kondisi pasien.",
            details: [
                "Pemberian obat-obatan",
                "Tindakan stabilisasi",
                "Pemasangan alat bantu pernapasan jika diperlukan"
            ],
            icon: "💉"
        },
        {
            id: 5,
            title: "Pemeriksaan Penunjang",
            description: "Jika diperlukan, dilakukan pemeriksaan penunjang.",
            details: [
                "Pemeriksaan darah",
                "Radiologi",
                "EKG",
                "Pemeriksaan lain sesuai indikasi"
            ],
            icon: "🔬"
        },
        {
            id: 6,
            title: "Konsultasi Dokter Spesialis",
            description: "Konsultasi dengan dokter spesialis paru jika diperlukan.",
            details: [
                "Evaluasi hasil pemeriksaan",
                "Penentuan diagnosis",
                "Rencana tindak lanjut pengobatan"
            ],
            icon: "👩‍⚕️"
        },
        {
            id: 7,
            title: "Keputusan Medis",
            description: "Keputusan tindak lanjut perawatan pasien.",
            subSteps: [
                {
                    title: "Keputusan",
                    paths: [
                        "Rawat Inap (Diperlukan perawatan intensif)",
                        "Pulang (Kondisi stabil untuk perawatan di rumah)",
                        "Rujuk (Dirujuk ke fasilitas yang lebih lengkap)"
                    ]
                }
            ],
            icon: "🔄"
        }
    ];
    
    // Choose steps based on active tab
    const activeSteps = activeTab === 'poliklinik' ? poliklinikSteps : igdSteps;

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
                            Alur Pasien
                        </h1>
                        <p className="text-xl md:text-2xl max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
                            Panduan Proses Pelayanan untuk Pasien di RS Paru Sumatera Barat
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
                            Berikut adalah alur pelayanan pasien di Rumah Sakit Paru Sumatera Barat.
                            Setiap pasien akan mengikuti proses pelayanan yang terstruktur untuk memastikan
                            setiap pasien mendapatkan pelayanan yang tepat dan efisien.
                        </p>
                    </div>
                    
                    {/* Tab Navigation */}
                    <div className="mb-12 flex justify-center" data-aos="fade-up">
                        <div className="inline-flex bg-white rounded-lg p-1 shadow-md">
                            <button 
                                onClick={() => setActiveTab('poliklinik')}
                                className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                                    activeTab === 'poliklinik' 
                                        ? 'bg-gradient-to-r from-blue-500 to-teal-500 text-white' 
                                        : 'text-gray-700 hover:bg-gray-100'
                                }`}
                            >
                                Poliklinik (Rawat Jalan)
                            </button>
                            <button 
                                onClick={() => setActiveTab('igd')}
                                className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                                    activeTab === 'igd' 
                                        ? 'bg-gradient-to-r from-blue-500 to-teal-500 text-white' 
                                        : 'text-gray-700 hover:bg-gray-100'
                                }`}
                            >
                                Instalasi Gawat Darurat
                            </button>
                        </div>
                    </div>

                    {/* Visual Flow Diagram */}
                    <div className="mb-16 p-8 bg-white rounded-xl shadow-lg" data-aos="fade-up">
                        <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center border-b-2 border-teal-500 pb-2 inline-block">
                            Alur Pasien di {activeTab === 'poliklinik' ? 'Poliklinik' : 'IGD'} RS Paru Sumbar
                        </h2>

                        <div className="overflow-x-auto">
                            <div className="flex justify-center min-w-max py-6">
                                <div className="relative">
                                    {/* Vertical Timeline with connection lines */}
                                    <div className="absolute left-8 top-0 bottom-0 w-1 bg-blue-500 hidden md:block"></div>
                                    
                                    {/* Timeline steps */}
                                    <div className="space-y-12">
                                        {activeSteps.map((step, index) => (
                                            <div 
                                                key={step.id} 
                                                className="relative" 
                                                data-aos="fade-up" 
                                                data-aos-delay={index * 100}
                                            >
                                                <div className="flex flex-col md:flex-row items-start">
                                                    {/* Step number and icon */}
                                                    <div className="flex md:flex-col items-center mb-4 md:mb-0">
                                                        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center text-white text-2xl font-bold z-10">
                                                            {step.icon}
                                                        </div>
                                                        <div className="md:mt-2 ml-3 md:ml-0 md:text-center font-bold text-blue-700">
                                                            Langkah {step.id}
                                                        </div>
                                                    </div>
                                                    
                                                    {/* Step content */}
                                                    <div className="md:ml-8 bg-blue-50 rounded-lg p-6 shadow-sm border border-blue-100 md:w-[600px]">
                                                        <h3 className="text-xl font-bold text-blue-800 mb-3">{step.title}</h3>
                                                        <p className="text-gray-700 mb-4">{step.description}</p>
                                                        
                                                        {step.details && (
                                                            <div className="bg-white rounded-lg p-4 mb-4">
                                                                <p className="text-sm font-medium text-gray-700 mb-2">Rincian:</p>
                                                                <ul className="space-y-1">
                                                                    {step.details.map((detail, idx) => (
                                                                        <li key={idx} className="flex items-start text-sm">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-teal-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                                            </svg>
                                                                            <span className="text-gray-600">{detail}</span>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        )}
                                                        
                                                        {step.subSteps && (
                                                            <div className="mt-4">
                                                                {step.subSteps.map((subStep, idx) => (
                                                                    <div key={idx} className="mb-4">
                                                                        <p className="text-sm font-medium text-gray-700 mb-2">{subStep.title}:</p>
                                                                        <div className="flex flex-wrap gap-2">
                                                                            {subStep.paths.map((path, pathIdx) => (
                                                                                <span 
                                                                                    key={pathIdx} 
                                                                                    className="bg-white px-3 py-1 rounded-full text-sm font-medium text-blue-600 border border-blue-200 shadow-sm"
                                                                                >
                                                                                    {path}
                                                                                </span>
                                                                            ))}
                                                                        </div>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Additional Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12" data-aos="fade-up">
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <div className="flex items-center mb-4">
                                <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800">Hal yang Perlu Diperhatikan</h3>
                            </div>
                            <ul className="space-y-3 text-gray-600">
                                <li className="flex items-start">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span>Datanglah lebih awal untuk menghindari antrean panjang</span>
                                </li>
                                <li className="flex items-start">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span>Bawa dokumen identitas, kartu berobat, dan kartu BPJS (jika ada)</span>
                                </li>
                                <li className="flex items-start">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span>Ikuti prosedur yang diarahkan oleh petugas dengan tertib</span>
                                </li>
                                <li className="flex items-start">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span>Untuk kondisi darurat, segera menuju ke Instalasi Gawat Darurat</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <div className="flex items-center mb-4">
                                <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center mr-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800">Informasi Tambahan</h3>
                            </div>
                            <ul className="space-y-3 text-gray-600">
                                <li className="flex items-start">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span>Pendaftaran rawat jalan dibuka pukul 08.00 - 12.00 WIB (Senin-Kamis) dan 08.00 - 11.00 WIB (Jumat-Sabtu)</span>
                                </li>
                                <li className="flex items-start">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span>Layanan Instalasi Gawat Darurat tersedia 24 jam</span>
                                </li>
                                <li className="flex items-start">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span>Untuk informasi lebih lanjut, hubungi (0752) 123456</span>
                                </li>
                                <li className="flex items-start">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span>Petugas kami siap membantu jika Anda memiliki pertanyaan tentang alur pelayanan</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Frequently Asked Questions */}
                    <div className="bg-white rounded-xl shadow-lg p-8 mb-12" data-aos="fade-up">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Pertanyaan Umum</h2>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-gray-50 rounded-lg p-6">
                                <h3 className="text-lg font-semibold text-gray-800 mb-3">Berapa lama proses pendaftaran?</h3>
                                <p className="text-gray-600">Proses pendaftaran biasanya memakan waktu sekitar 15-30 menit tergantung jumlah antrian. Pasien baru memerlukan waktu lebih lama karena perlu pembuatan rekam medis baru.</p>
                            </div>
                            
                            <div className="bg-gray-50 rounded-lg p-6">
                                <h3 className="text-lg font-semibold text-gray-800 mb-3">Apakah saya perlu membawa hasil pemeriksaan sebelumnya?</h3>
                                <p className="text-gray-600">Ya, sangat disarankan untuk membawa hasil pemeriksaan sebelumnya agar dokter dapat mengevaluasi perkembangan kondisi Anda dengan lebih baik.</p>
                            </div>
                            
                            <div className="bg-gray-50 rounded-lg p-6">
                                <h3 className="text-lg font-semibold text-gray-800 mb-3">Apakah semua jenis asuransi kesehatan diterima?</h3>
                                <p className="text-gray-600">Rumah Sakit Paru Sumatera Barat menerima BPJS Kesehatan dan beberapa asuransi swasta. Silakan konfirmasi ke bagian administrasi untuk informasi lebih lanjut.</p>
                            </div>
                            
                            <div className="bg-gray-50 rounded-lg p-6">
                                <h3 className="text-lg font-semibold text-gray-800 mb-3">Bagaimana jika saya dalam kondisi darurat?</h3>
                                <p className="text-gray-600">Untuk kondisi darurat, Anda dapat langsung menuju ke Instalasi Gawat Darurat yang beroperasi 24 jam. Pendaftaran administratif dapat dilakukan setelah pasien mendapatkan penanganan.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default AlurPasien;