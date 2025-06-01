import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ProfilPPID = () => {
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

    // Legal basis data
    const legalDocuments = [
        {
            id: 1,
            title: "Undang-Undang No 11 Tahun 2008",
            description: "Tentang Informasi dan Transaksi Elektronik",
            icon: "📱"
        },
        {
            id: 2,
            title: "Undang-Undang No 14 Tahun 2008",
            description: "Tentang Keterbukaan Informasi Publik",
            icon: "📊"
        },
        {
            id: 3,
            title: "Peraturan Pemerintah Nomor 61 Tahun 2010",
            description: "Tentang Pelaksanaan Undang-Undang Nomor 14 Tahun 2010 Tentang Keterbukaan Informasi Publik",
            icon: "📖"
        },
        {
            id: 4,
            title: "Peraturan Pemerintah Nomor 35 Tahun 2010",
            description: "Tentang Pedoman Pengelolaan Informasi dan Dokumentasi di Lingkungan Kementrian Dalam Negeri Dan Pemerintah Daerah",
            icon: "📋"
        },
        {
            id: 5,
            title: "Peraturan Komisi Informasi Nomor 1 Tahun 2010",
            description: "Tentang Standar Layanan Informasi Publik",
            icon: "📜"
        },
        {
            id: 6,
            title: "Peraturan Gubernur Sumatera Barat Nomor 6 Tahun 2017",
            description: "Tentang Pedoman Pengelolaan Informasi dan Dokumentasi di Lingkungan Pemerintah Provinsi Sumatera Barat",
            icon: "🏛️"
        }
    ];

    // PPID structure data
    const ppidStructure = {
        leader: {
            position: "Atasan PPID",
            name: "Direktur RS Paru Sumatera Barat",
            role: "Bertanggung jawab atas kebijakan terkait informasi publik"
        },
        main: {
            position: "PPID Utama",
            name: "Kepala Bagian Humas",
            role: "Bertanggung jawab atas pelaksanaan pelayanan informasi publik"
        },
        team: [
            { 
                position: "Bidang Pengolahan Data & Klasifikasi Informasi", 
                name: "Sub Bagian Data & Informasi",
                role: "Bertanggung jawab mengolah dan mengklasifikasi informasi publik"
            },
            { 
                position: "Bidang Pelayanan & Dokumentasi Informasi", 
                name: "Sub Bagian Dokumen & Arsip",
                role: "Bertanggung jawab melayani permohonan informasi dan dokumentasi"
            },
            { 
                position: "Bidang Penyelesaian Sengketa Informasi", 
                name: "Bagian Hukum",
                role: "Bertanggung jawab menangani sengketa informasi publik"
            }
        ]
    };

    // PPID functions
    const ppidFunctions = [
        "Mengkoordinasikan pengumpulan informasi dan dokumentasi dari setiap unit kerja",
        "Menyimpan, mendokumentasikan, menyediakan, dan memberi pelayanan informasi",
        "Melakukan verifikasi bahan informasi publik",
        "Mengklasifikasikan informasi dan/atau pengubahannya",
        "Menetapkan informasi yang dikecualikan yang telah habis jangka waktu pengecualiannya",
        "Menyediakan informasi dan dokumentasi untuk akses publik",
        "Melakukan pengujian konsekuensi",
        "Melakukan pemutakhiran informasi dan dokumentasi",
        "Menyediakan informasi dan dokumentasi untuk diakses oleh masyarakat"
    ];

    // Public information categories
    const infoCategories = [
        {
            type: "Informasi yang Wajib Disediakan dan Diumumkan Secara Berkala",
            examples: [
                "Profil Rumah Sakit",
                "Informasi kinerja Rumah Sakit",
                "Informasi keuangan",
                "Laporan akses informasi publik"
            ]
        },
        {
            type: "Informasi yang Wajib Diumumkan Secara Serta Merta",
            examples: [
                "Informasi tentang bencana alam",
                "Informasi keadaan darurat kesehatan",
                "Informasi yang dapat mengancam hajat hidup orang banyak"
            ]
        },
        {
            type: "Informasi yang Wajib Tersedia Setiap Saat",
            examples: [
                "Daftar informasi publik",
                "Informasi kebijakan Rumah Sakit",
                "Prosedur kerja terkait pelayanan masyarakat",
                "Laporan pelayanan akses informasi"
            ]
        }
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
                            Profil PPID
                        </h1>
                        <p className="text-xl md:text-2xl max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
                            Pejabat Pengelola Informasi dan Dokumentasi RS Paru Sumatera Barat
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
                            Pejabat Pengelola Informasi dan Dokumentasi (PPID) berfungsi sebagai pengelola dan penyampai 
                            dokumen yang dimiliki oleh badan publik sesuai dengan amanat UU 14/2008 tentang Keterbukaan 
                            Informasi Publik. Dengan keberadaan PPID, masyarakat yang akan menyampaikan permohonan 
                            informasi lebih mudah dan tidak berbelit karena dilayani lewat satu pintu.
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
                                Tentang PPID
                            </button>
                            <button 
                                onClick={() => setActiveTab('legal')}
                                className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                                    activeTab === 'legal' 
                                        ? 'bg-gradient-to-r from-blue-500 to-teal-500 text-white' 
                                        : 'text-gray-700 hover:bg-gray-100'
                                }`}
                            >
                                Dasar Hukum
                            </button>
                            <button 
                                onClick={() => setActiveTab('structure')}
                                className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                                    activeTab === 'structure' 
                                        ? 'bg-gradient-to-r from-blue-500 to-teal-500 text-white' 
                                        : 'text-gray-700 hover:bg-gray-100'
                                }`}
                            >
                                Struktur PPID
                            </button>
                        </div>
                    </div>

                    {/* Overview Tab Content */}
                    {activeTab === 'overview' && (
                        <div data-aos="fade-up">
                            <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
                                <h2 className="text-3xl font-bold text-gray-800 border-b-2 border-teal-500 pb-2 inline-block mb-6">
                                    Tentang PPID
                                </h2>
                                
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                                    <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
                                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-2xl mb-4">
                                            🔍
                                        </div>
                                        <h3 className="text-lg font-semibold text-blue-800 mb-2">Definisi</h3>
                                        <p className="text-blue-700">
                                            Pejabat Pengelola Informasi dan Dokumentasi (PPID) adalah pejabat yang bertanggung jawab di bidang penyimpanan, 
                                            pendokumentasian, penyediaan, dan/atau pelayanan informasi di badan publik.
                                        </p>
                                    </div>
                                    
                                    <div className="bg-green-50 rounded-lg p-6 border border-green-100">
                                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-2xl mb-4">
                                            🎯
                                        </div>
                                        <h3 className="text-lg font-semibold text-green-800 mb-2">Tujuan</h3>
                                        <p className="text-green-700">
                                            Mewujudkan pelayanan cepat, tepat, dan sederhana dalam rangka memenuhi kebutuhan pelayanan 
                                            informasi publik serta menjamin hak warga negara untuk mendapatkan akses informasi publik.
                                        </p>
                                    </div>
                                    
                                    <div className="bg-purple-50 rounded-lg p-6 border border-purple-100">
                                        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 text-2xl mb-4">
                                            ⚖️
                                        </div>
                                        <h3 className="text-lg font-semibold text-purple-800 mb-2">Prinsip</h3>
                                        <p className="text-purple-700">
                                            Pelayanan informasi publik dilaksanakan berdasarkan prinsip keterbukaan, ketepatan waktu, 
                                            kemudahan pemerolehan informasi, dan sesuai dengan ketentuan yang berlaku.
                                        </p>
                                    </div>
                                </div>
                                
                                <h3 className="text-xl font-bold text-gray-800 mb-4">Tugas dan Fungsi PPID</h3>
                                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 mb-8">
                                    <ul className="space-y-3">
                                        {ppidFunctions.map((func, index) => (
                                            <li key={index} className="flex items-start">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                <span className="text-gray-700">{func}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                
                                <h3 className="text-xl font-bold text-gray-800 mb-4">Kategori Informasi Publik</h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {infoCategories.map((category, index) => (
                                        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                                            <div className="bg-gradient-to-r from-blue-500 to-teal-500 px-4 py-3">
                                                <h4 className="text-white font-semibold text-sm">{category.type}</h4>
                                            </div>
                                            <div className="p-4">
                                                <ul className="space-y-2">
                                                    {category.examples.map((example, idx) => (
                                                        <li key={idx} className="flex items-start text-sm">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-teal-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                            </svg>
                                                            <span className="text-gray-600">{example}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Legal Basis Tab Content */}
                    {activeTab === 'legal' && (
                        <div className="bg-white rounded-xl shadow-lg p-8" data-aos="fade-up">
                            <h2 className="text-3xl font-bold text-gray-800 border-b-2 border-teal-500 pb-2 inline-block mb-8">
                                Dasar Hukum PPID
                            </h2>
                            
                            <div className="mb-8 bg-blue-50 rounded-lg p-6 border border-blue-100">
                                <div className="flex items-start">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <p className="text-blue-700">
                                        PPID RS Paru Sumatera Barat menjalankan tugas dan fungsinya berdasarkan peraturan 
                                        perundang-undangan yang berlaku terkait keterbukaan informasi publik.
                                    </p>
                                </div>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {legalDocuments.map((doc) => (
                                    <div 
                                        key={doc.id} 
                                        className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow duration-300"
                                        data-aos="fade-up"
                                        data-aos-delay={doc.id * 50}
                                    >
                                        <div className="flex items-start">
                                            <div className="text-3xl mr-4">{doc.icon}</div>
                                            <div>
                                                <h3 className="text-lg font-semibold text-gray-800 mb-2">{doc.title}</h3>
                                                <p className="text-gray-600">{doc.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Structure Tab Content */}
                    {activeTab === 'structure' && (
                        <div className="bg-white rounded-xl shadow-lg p-8" data-aos="fade-up">
                            <h2 className="text-3xl font-bold text-gray-800 border-b-2 border-teal-500 pb-2 inline-block mb-8">
                                Struktur Organisasi PPID
                            </h2>
                            
                            <div className="relative mb-16">
                                <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-500 transform -translate-x-1/2"></div>
                                
                                {/* Leader Box */}
                                <div className="relative z-10 mb-16">
                                    <div className="w-80 mx-auto bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg shadow-lg text-white p-6">
                                        <h3 className="text-xl font-bold mb-2">{ppidStructure.leader.position}</h3>
                                        <p>{ppidStructure.leader.name}</p>
                                        <p className="text-sm mt-2 text-white/80">{ppidStructure.leader.role}</p>
                                    </div>
                                    <div className="absolute bottom-0 left-1/2 w-0.5 h-8 bg-blue-500 transform -translate-x-1/2 translate-y-full"></div>
                                </div>
                                
                                {/* Main PPID Box */}
                                <div className="relative z-10 mb-16">
                                    <div className="w-80 mx-auto bg-gradient-to-r from-teal-500 to-blue-500 rounded-lg shadow-lg text-white p-6">
                                        <h3 className="text-xl font-bold mb-2">{ppidStructure.main.position}</h3>
                                        <p>{ppidStructure.main.name}</p>
                                        <p className="text-sm mt-2 text-white/80">{ppidStructure.main.role}</p>
                                    </div>
                                    <div className="absolute bottom-0 left-1/2 w-0.5 h-8 bg-blue-500 transform -translate-x-1/2 translate-y-full"></div>
                                </div>
                                
                                {/* Team Boxes */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    {ppidStructure.team.map((member, index) => (
                                        <div key={index} className="bg-white rounded-lg border border-blue-200 shadow-md p-6">
                                            <h3 className="text-lg font-semibold text-blue-800 mb-2">{member.position}</h3>
                                            <p className="text-gray-700 mb-2">{member.name}</p>
                                            <p className="text-sm text-gray-600">{member.role}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            
                            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                                <h3 className="text-xl font-bold text-gray-800 mb-4">Mekanisme Permohonan Informasi</h3>
                                <ol className="space-y-4 list-decimal pl-5">
                                    <li className="text-gray-700">
                                        <span className="font-medium">Mengajukan Permohonan</span>
                                        <p className="text-gray-600 mt-1">Pemohon mengisi formulir permohonan informasi yang tersedia di loket PPID atau melalui website.</p>
                                    </li>
                                    <li className="text-gray-700">
                                        <span className="font-medium">Verifikasi Permohonan</span>
                                        <p className="text-gray-600 mt-1">PPID memverifikasi kelengkapan permohonan dan memberikan nomor pendaftaran.</p>
                                    </li>
                                    <li className="text-gray-700">
                                        <span className="font-medium">Penelusuran Informasi</span>
                                        <p className="text-gray-600 mt-1">PPID melakukan penelusuran informasi yang diminta ke unit kerja terkait.</p>
                                    </li>
                                    <li className="text-gray-700">
                                        <span className="font-medium">Penyediaan Informasi</span>
                                        <p className="text-gray-600 mt-1">PPID menyediakan informasi sesuai permohonan dalam waktu 10 hari kerja (dapat diperpanjang 7 hari).</p>
                                    </li>
                                    <li className="text-gray-700">
                                        <span className="font-medium">Penyerahan Informasi</span>
                                        <p className="text-gray-600 mt-1">Informasi diserahkan kepada pemohon sesuai dengan format yang diminta.</p>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    )}

                    {/* Contact Info */}
                    <div className="mt-12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-xl shadow-lg p-8 text-white" data-aos="fade-up">
                        <div className="md:flex items-center justify-between">
                            <div className="md:w-2/3 mb-6 md:mb-0">
                                <h3 className="text-2xl font-bold mb-2">Hubungi PPID RS Paru Sumatera Barat</h3>
                                <p className="text-white/90">
                                    Untuk permohonan informasi publik, silakan hubungi kami melalui kontak berikut
                                    atau datang langsung ke kantor PPID RS Paru Sumatera Barat.
                                </p>
                            </div>
                            <div className="md:w-1/3 flex justify-center md:justify-end">
                                <a 
                                    href="mailto:ppid@rsparusumbar.go.id" 
                                    className="bg-white text-blue-600 font-medium py-3 px-6 rounded-full inline-flex items-center hover:bg-gray-100 transition-colors"
                                >
                                    Ajukan Permohonan
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

export default ProfilPPID;