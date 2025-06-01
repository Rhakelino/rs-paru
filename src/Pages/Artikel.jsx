import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Artikel = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [activeTab, setActiveTab] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');

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

    // Example articles data with categories
    const articles = [
        {
            id: 1,
            title: "INFORMASI PENGHAPUSAN AKUN APLIKASI RUMAH SAKIT PARU SUMATERA BARAT",
            summary: "Pentingnya Informasi tentang Penghapusan Akun Aplikasi",
            description: "APLIKASI RUMAH SAKIT PARU SUMATERA BARAT Pentingnya Informasi tentang Penghapusan Akun Aplikasi dan Langkah-langkah yang Perlu Dilakukan untuk Menjaga Keamanan Data Pasien.",
            date: "10 Agustus 2023",
            image: "https://picsum.photos/800/450?random=1",
            category: "pengumuman",
            readTime: "5 menit"
        },
        {
            id: 2,
            title: "Kebijakan Privasi Aplikasi Rumah Sakit Paru Sumbar",
            summary: "Penjelasan mengenai kebijakan privasi dalam penggunaan aplikasi",
            description: "Tanggal Term of Privacy Dibuat: 5 Agustus 2023. Pengantar Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, mengungkapkan, dan melindungi informasi pribadi Anda.",
            date: "06 Agustus 2023",
            image: "https://picsum.photos/800/450?random=2",
            category: "kebijakan",
            readTime: "8 menit"
        },
        {
            id: 3,
            title: "Inovasi SAHABAT PARU Satu Hari Diagnosa TBC Tuntas di RS Paru",
            summary: "Layanan diagnosis TBC cepat dan akurat dalam satu hari",
            description: "Melalui layanan inovasi SAHABAT PARU, pasien bisa mendapatkan diagnosis TBC dengan cepat dan akurat hanya dalam satu hari. Prosedur ini menggabungkan teknologi mutakhir dengan pendekatan efisien.",
            date: "30 Juni 2023",
            image: "https://picsum.photos/800/450?random=3",
            category: "inovasi",
            readTime: "6 menit"
        },
        {
            id: 4,
            title: "RS Paru Sumbar Mengucapkan Selamat Hari Raya Idul Adha 1444H",
            summary: "Ucapan selamat dan informasi layanan selama Idul Adha",
            description: "Selamat Hari Raya Idul Adha, semoga membawa berkah dan kesehatan bagi kita semua. RS Paru Sumatera Barat tetap berkomitmen memberikan layanan terbaik selama liburan Idul Adha.",
            date: "28 Juni 2023",
            image: "https://picsum.photos/800/450?random=4",
            category: "pengumuman",
            readTime: "3 menit"
        },
        {
            id: 5,
            title: "Pentingnya Skrining TBC pada Kelompok Berisiko",
            summary: "Langkah preventif untuk deteksi dini kasus TBC",
            description: "Skrining TBC pada kelompok berisiko merupakan langkah preventif yang sangat penting untuk mendeteksi kasus TBC lebih awal. Artikel ini membahas siapa saja yang termasuk kelompok berisiko dan mengapa skrining rutin diperlukan.",
            date: "15 Juni 2023",
            image: "https://picsum.photos/800/450?random=5",
            category: "edukasi",
            readTime: "7 menit"
        },
        {
            id: 6,
            title: "Teknologi Terbaru untuk Diagnosis Penyakit Paru di RS Paru Sumbar",
            summary: "Peralatan dan metode mutakhir untuk diagnosis paru",
            description: "RS Paru Sumatera Barat terus meningkatkan pelayanan dengan mengadopsi teknologi terbaru untuk diagnosis penyakit paru. Kenali berbagai peralatan dan metode mutakhir yang kini tersedia di rumah sakit kami.",
            date: "02 Juni 2023",
            image: "https://picsum.photos/800/450?random=6",
            category: "teknologi",
            readTime: "9 menit"
        }
    ];

    // Filter articles based on active tab and search term
    const filteredArticles = articles.filter(article => {
        const matchesCategory = activeTab === 'all' || article.category === activeTab;
        const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                             article.description.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    // Tabs for filtering
    const tabs = [
        { id: 'all', label: 'Semua' },
        { id: 'pengumuman', label: 'Pengumuman' },
        { id: 'kebijakan', label: 'Kebijakan' },
        { id: 'inovasi', label: 'Inovasi' },
        { id: 'edukasi', label: 'Edukasi' },
        { id: 'teknologi', label: 'Teknologi' }
    ];

    return (
        <div className="bg-gray-50 min-h-screen">
            <Navbar
                toggleMenu={toggleMenu}
                isMenuOpen={isMenuOpen}
                toggleDropdown={toggleDropdown}
                activeDropdown={activeDropdown}
            />

            {/* Header Section */}
            <div className="pt-24 pb-12 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">Artikel & Berita</h1>
                        <p className="text-xl text-gray-600">
                            Temukan informasi terbaru seputar pelayanan dan edukasi kesehatan paru
                            dari Rumah Sakit Paru Sumatera Barat
                        </p>
                    </div>
                </div>
            </div>

            {/* Search & Filter Bar */}
            <div className="sticky top-16 z-20 bg-white shadow-md py-4">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        {/* Search Bar */}
                        <div className="w-full md:w-1/3">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Cari artikel..."
                                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" 
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                        </div>

                        {/* Category Tabs */}
                        <div className="w-full md:w-2/3 overflow-x-auto">
                            <div className="flex space-x-2 min-w-max">
                                {tabs.map(tab => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                                            activeTab === tab.id
                                                ? 'bg-blue-600 text-white shadow-md'
                                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                        }`}
                                    >
                                        {tab.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-12">
                {/* Featured Article */}
                {filteredArticles.length > 0 && (
                    <div className="mb-16" data-aos="fade-up">
                        <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="md:flex">
                                <div className="md:w-3/5 relative">
                                    <img 
                                        src={filteredArticles[0].image} 
                                        alt={filteredArticles[0].title} 
                                        className="w-full h-64 md:h-full object-cover"
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = "https://via.placeholder.com/800x450?text=Artikel";
                                        }}
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase">
                                            {filteredArticles[0].category}
                                        </span>
                                    </div>
                                </div>
                                <div className="md:w-2/5 p-6 md:p-8 flex flex-col justify-center">
                                    <div className="flex items-center text-sm text-gray-500 mb-4">
                                        <span>{filteredArticles[0].date}</span>
                                        <span className="mx-2">•</span>
                                        <span>{filteredArticles[0].readTime} membaca</span>
                                    </div>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-4">{filteredArticles[0].title}</h2>
                                    <p className="text-gray-600 mb-6">{filteredArticles[0].description}</p>
                                    
                                    <a 
                                        href={`/artikel/${filteredArticles[0].id}`} 
                                        className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors self-start"
                                    >
                                        Baca Selengkapnya
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Article List */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredArticles.slice(1).map((article, index) => (
                        <div 
                            key={article.id}
                            className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition-shadow duration-300"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <a href={`/artikel/${article.id}`} className="block">
                                <div className="relative">
                                    <img 
                                        src={article.image} 
                                        alt={article.title} 
                                        className="w-full h-48 object-cover"
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = "https://via.placeholder.com/800x450?text=Artikel";
                                        }}
                                    />
                                    <div className="absolute top-3 right-3">
                                        <span className="bg-white text-blue-600 px-3 py-1 rounded-full text-xs font-semibold shadow-md">
                                            {article.category}
                                        </span>
                                    </div>
                                </div>
                                
                                <div className="p-6">
                                    <div className="flex items-center text-sm text-gray-500 mb-2">
                                        <span>{article.date}</span>
                                        <span className="mx-2">•</span>
                                        <span>{article.readTime} membaca</span>
                                    </div>
                                    
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{article.title}</h3>
                                    <p className="text-gray-600 mb-4">{article.summary}</p>
                                    
                                    <div className="flex justify-end">
                                        <span className="text-blue-600 font-medium hover:text-blue-800 inline-flex items-center">
                                            Selengkapnya
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>

                {/* No Results */}
                {filteredArticles.length === 0 && (
                    <div className="bg-white rounded-xl shadow-md p-12 text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                        </svg>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Tidak ada artikel ditemukan</h3>
                        <p className="text-gray-600 mb-6">Coba gunakan kata kunci pencarian lain atau pilih kategori yang berbeda.</p>
                        <button 
                            onClick={() => {
                                setSearchTerm('');
                                setActiveTab('all');
                            }}
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            Reset Filter
                        </button>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default Artikel;