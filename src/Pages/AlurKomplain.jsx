import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AlurPenangananKomplain = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [activeMethod, setActiveMethod] = useState('all');

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

    // Process steps for complaint handling
    const complaintSteps = [
        {
            id: 1,
            title: "Penyampaian Komplain",
            description: "Pasien atau pengunjung menyampaikan komplain melalui saluran yang tersedia.",
            details: [
                "Komplain melalui email resmi rumah sakit",
                "Komplain melalui website resmi",
                "Komplain melalui kotak saran",
                "Komplain langsung ke petugas"
            ],
            icon: "📝"
        },
        {
            id: 2,
            title: "Koordinasi dengan PIC Terkait",
            description: "Tim penanganan komplain berkoordinasi dengan penanggung jawab atau unit terkait dengan keluhan.",
            details: [
                "Identifikasi unit atau layanan yang terkait dengan komplain",
                "Penyampaian komplain kepada penanggung jawab unit",
                "Diskusi internal untuk mengevaluasi komplain",
                "Penentuan langkah penanganan yang sesuai"
            ],
            icon: "🔄"
        },
        {
            id: 3,
            title: "Pengumpulan Feedback Unit Terkait",
            description: "Meminta feedback dan klarifikasi dari unit yang terkait dengan komplain untuk mendapatkan informasi lengkap.",
            details: [
                "Unit terkait memberikan penjelasan atau klarifikasi",
                "Evaluasi prosedur yang mungkin perlu diperbaiki",
                "Identifikasi solusi untuk mengatasi keluhan",
                "Penentuan waktu penyelesaian masalah"
            ],
            icon: "🔍"
        },
        {
            id: 4,
            title: "Respons kepada Pengirim Komplain",
            description: "Memberikan balasan kepada pengirim komplain melalui media yang sama atau yang disepakati.",
            details: [
                "Penyampaian respons yang sopan dan profesional",
                "Penjelasan langkah-langkah yang telah dan akan diambil",
                "Klarifikasi jika terdapat kesalahpahaman",
                "Permintaan maaf jika memang terjadi kesalahan di pihak rumah sakit"
            ],
            icon: "✉️"
        },
        {
            id: 5,
            title: "Dokumentasi Komplain",
            description: "Mendokumentasikan seluruh proses penanganan komplain dalam sistem administrasi rumah sakit.",
            details: [
                "Pencatatan detail komplain (tanggal, waktu, isi, pengirim)",
                "Dokumentasi langkah-langkah penanganan yang telah dilakukan",
                "Penyimpanan respons yang telah diberikan",
                "Pengarsipan seluruh komplain untuk evaluasi berkala"
            ],
            icon: "📋"
        },
        {
            id: 6,
            title: "Pembuatan Rekap Bulanan",
            description: "Membuat laporan rekap komplain secara bulanan untuk ditinjau oleh manajemen.",
            details: [
                "Kategorisasi komplain berdasarkan jenis dan unit terkait",
                "Analisis tren dan pola komplain",
                "Identifikasi area yang perlu perbaikan",
                "Penyusunan rekomendasi tindakan pencegahan"
            ],
            icon: "📊"
        },
        {
            id: 7,
            title: "Evaluasi dan Tindak Lanjut",
            description: "Bagian Humas dan Tim Handling Komplain melakukan paparan rekap dan evaluasi tindak lanjut.",
            details: [
                "Presentasi hasil rekap komplain kepada manajemen",
                "Pembahasan langkah perbaikan yang telah dilakukan",
                "Penyusunan rencana perbaikan layanan ke depan",
                "Monitoring pelaksanaan perbaikan di tiap unit"
            ],
            icon: "📈"
        }
    ];

    // Complaint channels
    const complaintChannels = [
        {
            id: 'email',
            name: 'Email',
            icon: '📧',
            address: 'komplain@rsparusumbar.go.id',
            benefits: ['Dokumentasi tertulis', 'Dapat dilampirkan bukti pendukung', 'Respons tertulis yang jelas'],
            instructions: [
                'Kirim email ke komplain@rsparusumbar.go.id',
                'Sertakan identitas Anda (Nama dan Nomor Rekam Medis)',
                'Jelaskan komplain dengan detail',
                'Lampirkan bukti pendukung (jika ada)'
            ]
        },
        {
            id: 'website',
            name: 'Website',
            icon: '🌐',
            address: 'www.rsparusumbar.go.id/komplain',
            benefits: ['Dapat diakses 24 jam', 'Form terstruktur untuk memudahkan pelaporan', 'Memperoleh nomor tiket komplain'],
            instructions: [
                'Kunjungi www.rsparusumbar.go.id/komplain',
                'Isi formulir yang tersedia dengan lengkap',
                'Unggah dokumen pendukung jika diperlukan',
                'Simpan nomor tiket untuk melacak status komplain'
            ]
        },
        {
            id: 'direct',
            name: 'Langsung ke Petugas',
            icon: '👨‍⚕️',
            address: 'Ruang Humas / Customer Service',
            benefits: ['Komunikasi dua arah langsung', 'Penjelasan langsung dari petugas', 'Solusi yang lebih cepat untuk kasus sederhana'],
            instructions: [
                'Datang ke ruang Humas atau Customer Service',
                'Sampaikan komplain Anda dengan jelas',
                'Tunjukkan identitas pasien jika diperlukan',
                'Minta bukti tanda terima komplain'
            ]
        },
        {
            id: 'box',
            name: 'Kotak Saran',
            icon: '📦',
            address: 'Tersedia di berbagai lokasi',
            benefits: ['Dapat disampaikan secara anonim', 'Tersedia di berbagai lokasi strategis', 'Mudah diakses'],
            instructions: [
                'Tulis komplain pada formulir yang tersedia',
                'Masukkan ke dalam kotak saran',
                'Sertakan kontak jika ingin mendapatkan respons langsung',
                'Kotak saran dibuka dan diperiksa setiap hari kerja'
            ]
        }
    ];

    const filteredChannels = activeMethod === 'all' 
        ? complaintChannels 
        : complaintChannels.filter(channel => channel.id === activeMethod);

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
                            Alur Penanganan Komplain
                        </h1>
                        <p className="text-xl md:text-2xl max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
                            Proses Penyelesaian Keluhan di RS Paru Sumatera Barat
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
                            Rumah Sakit Paru Sumatera Barat berkomitmen untuk memberikan pelayanan terbaik. 
                            Setiap keluhan dan saran dari pasien dan pengunjung merupakan masukan berharga 
                            untuk peningkatan kualitas pelayanan kami. Berikut adalah alur penanganan komplain 
                            yang kami terapkan.
                        </p>
                    </div>
                    
                    {/* Process Steps Section */}
                    <div className="mb-16 p-8 bg-white rounded-xl shadow-lg" data-aos="fade-up">
                        <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center border-b-2 border-teal-500 pb-2 inline-block">
                            Proses Penanganan Komplain
                        </h2>

                        <div className="overflow-x-auto">
                            <div className="flex justify-center min-w-max py-6">
                                <div className="relative">
                                    {/* Horizontal Timeline with connection lines */}
                                    <div className="absolute top-[72px] left-0 right-0 h-1 bg-blue-500 hidden md:block"></div>
                                    
                                    {/* Timeline steps */}
                                    <div className="grid grid-cols-1 md:grid-cols-7 gap-8">
                                        {complaintSteps.map((step, index) => (
                                            <div 
                                                key={step.id} 
                                                className="relative flex flex-col items-center" 
                                                data-aos="fade-up" 
                                                data-aos-delay={index * 100}
                                            >
                                                {/* Step number and icon */}
                                                <div className="w-36 h-36 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center text-white text-5xl mb-4 z-10">
                                                    {step.icon}
                                                </div>
                                                
                                                <div className="text-center">
                                                    <div className="bg-blue-100 rounded-full px-4 py-1 text-blue-800 font-bold text-sm mb-3">
                                                        Langkah {step.id}
                                                    </div>
                                                    <h3 className="text-lg font-bold text-gray-800 mb-2">{step.title}</h3>
                                                    <p className="text-gray-600 text-sm mb-3">{step.description}</p>
                                                    
                                                    <div className="mt-2">
                                                        <button 
                                                            className="text-blue-600 text-sm font-medium flex items-center justify-center hover:text-blue-800"
                                                            onClick={() => document.getElementById(`step-details-${step.id}`).classList.toggle('hidden')}
                                                        >
                                                            <span>Lihat Detail</span>
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                            </svg>
                                                        </button>
                                                        
                                                        <div id={`step-details-${step.id}`} className="mt-3 bg-blue-50 p-3 rounded-lg text-left hidden">
                                                            <ul className="space-y-1">
                                                                {step.details.map((detail, idx) => (
                                                                    <li key={idx} className="flex items-start text-xs">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-blue-500 mr-1 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                                        </svg>
                                                                        <span className="text-gray-600">{detail}</span>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Complaint Channels Section */}
                    <div className="mb-16" data-aos="fade-up">
                        <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Cara Menyampaikan Komplain</h2>
                        
                        {/* Filter Tabs */}
                        <div className="mb-8 flex justify-center" data-aos="fade-up">
                            <div className="inline-flex bg-white rounded-lg p-1 shadow-md flex-wrap justify-center">
                                <button 
                                    onClick={() => setActiveMethod('all')}
                                    className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 m-1 ${
                                        activeMethod === 'all' 
                                            ? 'bg-gradient-to-r from-blue-500 to-teal-500 text-white' 
                                            : 'text-gray-700 hover:bg-gray-100'
                                    }`}
                                >
                                    Semua Metode
                                </button>
                                {complaintChannels.map(channel => (
                                    <button 
                                        key={channel.id}
                                        onClick={() => setActiveMethod(channel.id)}
                                        className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 m-1 ${
                                            activeMethod === channel.id 
                                                ? 'bg-gradient-to-r from-blue-500 to-teal-500 text-white' 
                                                : 'text-gray-700 hover:bg-gray-100'
                                        }`}
                                    >
                                        {channel.name}
                                    </button>
                                ))}
                            </div>
                        </div>
                        
                        {/* Channel Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {filteredChannels.map((channel, index) => (
                                <div 
                                    key={channel.id} 
                                    className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                                    data-aos="fade-up"
                                    data-aos-delay={index * 100}
                                >
                                    <div className="p-6 bg-gradient-to-r from-blue-600 to-teal-500 text-white">
                                        <div className="flex items-center">
                                            <div className="text-4xl mr-4">{channel.icon}</div>
                                            <div>
                                                <h3 className="text-xl font-bold">{channel.name}</h3>
                                                <p className="opacity-90">{channel.address}</p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="p-6">
                                        <div className="mb-4">
                                            <h4 className="text-sm font-semibold text-gray-700 mb-2">Kelebihan:</h4>
                                            <ul className="space-y-1">
                                                {channel.benefits.map((benefit, idx) => (
                                                    <li key={idx} className="flex items-start text-sm">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        <span className="text-gray-600">{benefit}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-700 mb-2">Cara Menyampaikan:</h4>
                                            <ol className="space-y-1 list-decimal list-inside">
                                                {channel.instructions.map((instruction, idx) => (
                                                    <li key={idx} className="text-sm text-gray-600">{instruction}</li>
                                                ))}
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Service Commitment */}
                    <div className="bg-white rounded-xl shadow-lg p-8 mb-12" data-aos="fade-up">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Komitmen Kami</h2>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-blue-50 rounded-lg p-6 border border-blue-100 text-center">
                                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                                    ⏱️
                                </div>
                                <h3 className="text-lg font-semibold text-blue-800 mb-2">Respon Cepat</h3>
                                <p className="text-blue-700">
                                    Kami berkomitmen untuk merespon setiap komplain dalam waktu 2x24 jam kerja.
                                </p>
                            </div>
                            
                            <div className="bg-green-50 rounded-lg p-6 border border-green-100 text-center">
                                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                                    🔍
                                </div>
                                <h3 className="text-lg font-semibold text-green-800 mb-2">Investigasi Menyeluruh</h3>
                                <p className="text-green-700">
                                    Setiap komplain akan diinvestigasi secara menyeluruh untuk memastikan penanganan yang tepat.
                                </p>
                            </div>
                            
                            <div className="bg-purple-50 rounded-lg p-6 border border-purple-100 text-center">
                                <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                                    📊
                                </div>
                                <h3 className="text-lg font-semibold text-purple-800 mb-2">Evaluasi Berkala</h3>
                                <p className="text-purple-700">
                                    Kami melakukan evaluasi berkala untuk terus meningkatkan kualitas pelayanan kami.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* FAQ Section */}
                    <div className="bg-white rounded-xl shadow-lg p-8" data-aos="fade-up">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Pertanyaan Umum</h2>
                        
                        <div className="space-y-4">
                            <div className="border border-gray-200 rounded-lg overflow-hidden">
                                <div className="bg-gray-50 px-6 py-4">
                                    <h3 className="text-lg font-semibold text-gray-800">Berapa lama komplain saya akan diproses?</h3>
                                </div>
                                <div className="px-6 py-4">
                                    <p className="text-gray-600">
                                        Kami berkomitmen untuk merespon setiap komplain dalam waktu 2x24 jam kerja. 
                                        Untuk komplain yang memerlukan investigasi lebih lanjut, proses penyelesaian 
                                        dapat memakan waktu hingga 14 hari kerja, tergantung pada kompleksitas masalah.
                                    </p>
                                </div>
                            </div>
                            
                            <div className="border border-gray-200 rounded-lg overflow-hidden">
                                <div className="bg-gray-50 px-6 py-4">
                                    <h3 className="text-lg font-semibold text-gray-800">Apakah saya bisa menyampaikan komplain secara anonim?</h3>
                                </div>
                                <div className="px-6 py-4">
                                    <p className="text-gray-600">
                                        Ya, Anda dapat menyampaikan komplain secara anonim melalui kotak saran yang 
                                        tersedia di berbagai lokasi di rumah sakit. Namun, jika Anda ingin mendapatkan 
                                        respons langsung atas komplain Anda, kami menyarankan untuk menyertakan informasi 
                                        kontak yang dapat dihubungi.
                                    </p>
                                </div>
                            </div>
                            
                            <div className="border border-gray-200 rounded-lg overflow-hidden">
                                <div className="bg-gray-50 px-6 py-4">
                                    <h3 className="text-lg font-semibold text-gray-800">Bagaimana saya bisa melacak status komplain saya?</h3>
                                </div>
                                <div className="px-6 py-4">
                                    <p className="text-gray-600">
                                        Untuk komplain yang disampaikan melalui website, Anda akan mendapatkan nomor 
                                        tiket yang dapat digunakan untuk melacak status komplain Anda di website kami. 
                                        Untuk metode penyampaian lainnya, Anda dapat menghubungi bagian Customer Service 
                                        kami di nomor (0752) 123456 dengan menyebutkan informasi identitas dan waktu 
                                        penyampaian komplain.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default AlurPenangananKomplain;