import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';

const InformasiBerkala = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [activeFilter, setActiveFilter] = useState('all');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    // Example data - replace with your actual data
    const data = [
        { no: 1, namaInstansi: "RS Paru Sumbar", judul: "Laporan Kinerja Tahunan", tahun: 2023, kategori: "laporan", file: "laporan_kinerja_2023.pdf", ukuran: "2.5 MB" },
        { no: 2, namaInstansi: "RS Paru Sumbar", judul: "Rencana Strategis 2022-2026", tahun: 2022, kategori: "rencana", file: "renstra_2022_2026.pdf", ukuran: "3.1 MB" },
        { no: 3, namaInstansi: "RS Paru Sumbar", judul: "Laporan Keuangan Audited", tahun: 2022, kategori: "keuangan", file: "laporan_keuangan_2022.pdf", ukuran: "4.7 MB" },
        { no: 4, namaInstansi: "RS Paru Sumbar", judul: "Statistik Layanan Pasien", tahun: 2022, kategori: "statistik", file: "statistik_layanan_2022.pdf", ukuran: "1.8 MB" },
        { no: 5, namaInstansi: "RS Paru Sumbar", judul: "Informasi Program Kerja", tahun: 2022, kategori: "program", file: "program_kerja_2022.pdf", ukuran: "2.2 MB" },
        { no: 6, namaInstansi: "RS Paru Sumbar", judul: "Laporan Akses Informasi Publik", tahun: 2022, kategori: "laporan", file: "laporan_akses_2022.pdf", ukuran: "1.5 MB" },
        { no: 7, namaInstansi: "RS Paru Sumbar", judul: "Profil Rumah Sakit", tahun: 2022, kategori: "profil", file: "profil_rs_2022.pdf", ukuran: "3.6 MB" },
        { no: 8, namaInstansi: "RS Paru Sumbar", judul: "Laporan Kinerja Semester I", tahun: 2022, kategori: "laporan", file: "lap_kinerja_sem1_2022.pdf", ukuran: "2.3 MB" },
        { no: 9, namaInstansi: "RS Paru Sumbar", judul: "Laporan Kinerja Semester II", tahun: 2022, kategori: "laporan", file: "lap_kinerja_sem2_2022.pdf", ukuran: "2.4 MB" },
        { no: 10, namaInstansi: "RS Paru Sumbar", judul: "Anggaran Pendapatan dan Belanja", tahun: 2022, kategori: "keuangan", file: "anggaran_2022.pdf", ukuran: "2.9 MB" },
        { no: 11, namaInstansi: "RS Paru Sumbar", judul: "Rencana Kerja Tahunan", tahun: 2021, kategori: "rencana", file: "rencana_kerja_2021.pdf", ukuran: "1.7 MB" },
        { no: 12, namaInstansi: "RS Paru Sumbar", judul: "Laporan Keuangan Audited", tahun: 2021, kategori: "keuangan", file: "laporan_keuangan_2021.pdf", ukuran: "4.5 MB" },
    ];

    // Categories for filtering
    const categories = [
        { id: 'all', name: 'Semua Kategori' },
        { id: 'laporan', name: 'Laporan' },
        { id: 'keuangan', name: 'Keuangan' },
        { id: 'rencana', name: 'Perencanaan' },
        { id: 'statistik', name: 'Statistik' },
        { id: 'profil', name: 'Profil' },
        { id: 'program', name: 'Program' }
    ];

    // Years for filtering
    const years = [...new Set(data.map(item => item.tahun))].sort((a, b) => b - a);

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

    // Reset to first page when filters change
    useEffect(() => {
        setCurrentPage(1);
    }, [searchTerm, activeFilter]);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const toggleDropdown = (dropdownName) => {
        setActiveDropdown((prevDropdown) => (prevDropdown === dropdownName ? null : dropdownName));
    };

    // Filter data based on search term and active filter
    const filteredData = data.filter(item => {
        const matchesSearch = 
            item.judul.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.namaInstansi.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.file.toLowerCase().includes(searchTerm.toLowerCase());
        
        const matchesFilter = activeFilter === 'all' || item.kategori === activeFilter;
        
        return matchesSearch && matchesFilter;
    });

    // Pagination
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Get icon for file type
    const getFileIcon = (fileName) => {
        if (fileName.endsWith('.pdf')) {
            return (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
            );
        } else if (fileName.endsWith('.doc') || fileName.endsWith('.docx')) {
            return (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
            );
        } else if (fileName.endsWith('.xls') || fileName.endsWith('.xlsx')) {
            return (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
            );
        } else {
            return (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
            );
        }
    };

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
                            Informasi Berkala
                        </h1>
                        <p className="text-xl md:text-2xl max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
                            Dokumen dan Informasi yang Wajib Diumumkan Secara Berkala
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
                            Sesuai dengan UU No. 14 Tahun 2008 tentang Keterbukaan Informasi Publik, berikut adalah 
                            informasi dan dokumen yang wajib disediakan dan diumumkan secara berkala oleh 
                            RS Paru Sumatera Barat sebagai bentuk transparansi kepada publik.
                        </p>
                    </div>

                    {/* Search and Filter Section */}
                    <div className="mb-8 bg-white rounded-lg shadow-md p-6" data-aos="fade-up">
                        <div className="md:flex items-center justify-between gap-4">
                            {/* Search Bar */}
                            <div className="w-full md:w-1/3 mb-4 md:mb-0">
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Cari dokumen..."
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

                            {/* Category Filter */}
                            <div className="flex space-x-2 overflow-x-auto pb-2 md:pb-0">
                                {categories.map(category => (
                                    <button
                                        key={category.id}
                                        onClick={() => setActiveFilter(category.id)}
                                        className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                                            activeFilter === category.id
                                                ? 'bg-blue-600 text-white shadow-md'
                                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                        }`}
                                    >
                                        {category.name}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Documents Table */}
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8" data-aos="fade-up">
                        {currentItems.length > 0 ? (
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                No
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Judul
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Instansi
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Tahun
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Kategori
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                File
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {currentItems.map((item, index) => (
                                            <tr 
                                                key={item.no}
                                                className="hover:bg-gray-50 transition-colors"
                                            >
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    {indexOfFirstItem + index + 1}
                                                </td>
                                                <td className="px-6 py-4 text-sm font-medium text-gray-900">
                                                    {item.judul}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    {item.namaInstansi}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    {item.tahun}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full 
                                                        ${item.kategori === 'laporan' ? 'bg-blue-100 text-blue-800' : 
                                                          item.kategori === 'keuangan' ? 'bg-green-100 text-green-800' :
                                                          item.kategori === 'rencana' ? 'bg-purple-100 text-purple-800' :
                                                          item.kategori === 'statistik' ? 'bg-yellow-100 text-yellow-800' :
                                                          item.kategori === 'profil' ? 'bg-pink-100 text-pink-800' :
                                                          'bg-gray-100 text-gray-800'}`}>
                                                        {categories.find(cat => cat.id === item.kategori)?.name || item.kategori}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    <a 
                                                        href={`#${item.file}`}
                                                        className="flex items-center text-blue-600 hover:text-blue-900 hover:underline"
                                                    >
                                                        <span className="mr-2">
                                                            {getFileIcon(item.file)}
                                                        </span>
                                                        <span className="mr-2">{item.file}</span>
                                                        <span className="text-xs text-gray-500">({item.ukuran})</span>
                                                    </a>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        ) : (
                            <div className="text-center py-12">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Tidak ada dokumen yang ditemukan</h3>
                                <p className="text-gray-600 mb-4">Coba ubah filter pencarian Anda</p>
                                <button 
                                    onClick={() => {
                                        setSearchTerm('');
                                        setActiveFilter('all');
                                    }}
                                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                                >
                                    Reset Pencarian
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Pagination */}
                    {filteredData.length > 0 && totalPages > 1 && (
                        <div className="flex justify-center mt-8">
                            <nav className="inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                                <button
                                    onClick={() => paginate(Math.max(1, currentPage - 1))}
                                    disabled={currentPage === 1}
                                    className={`relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium ${
                                        currentPage === 1 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-500 hover:bg-gray-50'
                                    }`}
                                >
                                    <span className="sr-only">Previous</span>
                                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </button>
                                
                                {Array.from({ length: totalPages }, (_, i) => i + 1).map(number => (
                                    <button
                                        key={number}
                                        onClick={() => paginate(number)}
                                        className={`relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium ${
                                            currentPage === number
                                                ? 'z-10 bg-blue-50 border-blue-500 text-blue-600'
                                                : 'bg-white text-gray-500 hover:bg-gray-50'
                                        }`}
                                    >
                                        {number}
                                    </button>
                                ))}
                                
                                <button
                                    onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
                                    disabled={currentPage === totalPages}
                                    className={`relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium ${
                                        currentPage === totalPages ? 'text-gray-300 cursor-not-allowed' : 'text-gray-500 hover:bg-gray-50'
                                    }`}
                                >
                                    <span className="sr-only">Next</span>
                                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </nav>
                        </div>
                    )}

                    {/* Information Card */}
                    <div className="mt-12 bg-blue-50 rounded-lg p-6 border border-blue-100" data-aos="fade-up">
                        <div className="flex items-start">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <div>
                                <h3 className="text-lg font-semibold text-blue-800 mb-2">Tentang Informasi Berkala</h3>
                                <p className="text-blue-700">
                                    Informasi Berkala adalah informasi yang wajib disediakan dan diumumkan secara berkala oleh badan publik 
                                    minimal setiap 6 (enam) bulan sekali, sesuai dengan UU No. 14 Tahun 2008. Informasi ini 
                                    meliputi informasi yang berkaitan dengan badan publik, informasi mengenai kegiatan dan kinerja, 
                                    informasi keuangan, dan informasi lain yang diatur dalam peraturan perundang-undangan.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Section */}
                    <div className="mt-8 bg-gradient-to-r from-blue-500 to-teal-500 rounded-xl shadow-lg p-8 text-white" data-aos="fade-up">
                        <div className="md:flex items-center justify-between">
                            <div className="md:w-2/3 mb-6 md:mb-0">
                                <h3 className="text-2xl font-bold mb-2">Permohonan Informasi Publik</h3>
                                <p className="text-white/90">
                                    Untuk permohonan informasi publik yang tidak tersedia di halaman ini, 
                                    silakan menghubungi PPID RS Paru Sumatera Barat.
                                </p>
                            </div>
                            <div className="md:w-1/3 flex justify-center md:justify-end">
                                <a 
                                    href="/profilPPID" 
                                    className="bg-white text-blue-600 font-medium py-3 px-6 rounded-full inline-flex items-center hover:bg-gray-100 transition-colors"
                                >
                                    Kontak PPID
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

export default InformasiBerkala;