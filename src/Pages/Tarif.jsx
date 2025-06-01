import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Tarif = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [activeTab, setActiveTab] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');

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

    // Categorized services with IDs
    const serviceCategories = [
        {
            id: 'konsultasi',
            name: 'Konsultasi & Administrasi',
            services: [
                { id: 1, name: "Karcis umum", price: "Rp 20.000" },
                { id: 2, name: "Karcis Pemeriksaan BTA", price: "Rp 7.000" },
                { id: 3, name: "Karcis Konsultasi Obat", price: "Rp 10.000" },
                { id: 4, name: "Karcis Konsultasi Gizi", price: "Rp 10.000" },
            ]
        },
        {
            id: 'laboratorium',
            name: 'Pemeriksaan Laboratorium',
            services: [
                { id: 5, name: "Darah Rutin", price: "Rp 35.000" },
                { id: 6, name: "Darah Lengkap", price: "Rp 50.000" },
                { id: 7, name: "Gula Darah", price: "Rp 15.000" },
                { id: 8, name: "Cholesterol", price: "Rp 15.000" },
                { id: 9, name: "Asam Urat", price: "Rp 15.000" },
                { id: 10, name: "SGPT", price: "Rp 19.000" },
                { id: 11, name: "SGOT", price: "Rp 19.000" },
                { id: 12, name: "Ureum", price: "Rp 17.000" },
                { id: 13, name: "Kreatinin", price: "Rp 17.000" },
            ]
        },
        {
            id: 'mikrobiologi',
            name: 'Mikrobiologi',
            services: [
                { id: 14, name: "Kultur BTA", price: "Rp 50.000" },
                { id: 15, name: "Resistensi TB", price: "Rp 100.000" },
                { id: 16, name: "Resistensi Non TB", price: "Rp 250.000" },
                { id: 17, name: "Kultur Non TB", price: "Rp 40.000" },
                { id: 18, name: "Rivalta Test", price: "Rp 7.000" },
                { id: 19, name: "BTA Cairan Pleura", price: "Rp 10.000" },
            ]
        },
        {
            id: 'diagnostik',
            name: 'Pemeriksaan Diagnostik',
            services: [
                { id: 20, name: "Radiologi", price: "Rp 58.000" },
                { id: 21, name: "EKG", price: "Rp 30.000" },
                { id: 22, name: "Spirometri", price: "Rp 60.000" },
                { id: 23, name: "Mantoux Test", price: "Rp 100.000" },
            ]
        },
        {
            id: 'rawat-inap',
            name: 'Rawat Inap',
            services: [
                { id: 24, name: "Tarif Rawatan Kelas I / hari", price: "Rp 80.000" },
                { id: 25, name: "Tarif Rawatan Kelas II / hari", price: "Rp 60.000" },
                { id: 26, name: "Tarif Rawatan Kelas III / hari", price: "Rp 30.000" },
            ]
        }
    ];

    // Filter services based on active tab and search query
    const filteredServices = serviceCategories
        .filter(category => activeTab === 'all' || category.id === activeTab)
        .flatMap(category => category.services)
        .filter(service =>
            service.name.toLowerCase().includes(searchQuery.toLowerCase())
        );

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
                            Tarif Layanan
                        </h1>
                        <p className="text-xl md:text-2xl max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
                            Informasi Biaya Pelayanan RS Paru Sumatera Barat
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
                            Berikut adalah daftar tarif layanan yang tersedia di Rumah Sakit Paru Sumatera Barat.
                            Tarif dapat berubah sewaktu-waktu. Untuk informasi lebih lanjut, silakan hubungi
                            bagian administrasi kami.
                        </p>
                    </div>

                    {/* Search and Filter Section */}
                    <div className="mb-8" data-aos="fade-up">
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <div className="md:flex justify-between items-center">
                                {/* Category Tabs */}
                                <div className="flex overflow-x-auto py-2 md:py-0 space-x-2 mb-4 md:mb-0">
                                    <button
                                        onClick={() => setActiveTab('all')}
                                        className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${activeTab === 'all'
                                                ? 'bg-blue-600 text-white shadow-md'
                                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                            }`}
                                    >
                                        Semua Layanan
                                    </button>
                                    {serviceCategories.map(category => (
                                        <button
                                            key={category.id}
                                            onClick={() => setActiveTab(category.id)}
                                            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${activeTab === category.id
                                                    ? 'bg-blue-600 text-white shadow-md'
                                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                                }`}
                                        >
                                            {category.name}
                                        </button>
                                    ))}
                                </div>

                                {/* Search */}
                                <div className="relative min-w-[250px]">
                                    <input
                                        type="text"
                                        placeholder="Cari layanan..."
                                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
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
                        </div>
                    </div>

                    {/* Service Categories and Tables */}
                    <div data-aos="fade-up">
                        {activeTab === 'all' ? (
                            // Display all categories
                            serviceCategories.map((category, index) => {
                                const categoryServices = category.services.filter(service =>
                                    service.name.toLowerCase().includes(searchQuery.toLowerCase())
                                );

                                if (categoryServices.length === 0) return null;

                                return (
                                    <div
                                        key={category.id}
                                        className="mb-10"
                                        data-aos="fade-up"
                                        data-aos-delay={index * 100}
                                    >
                                        <h2 className="text-2xl font-bold text-gray-800 mb-4">{category.name}</h2>
                                        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                                            <div className="overflow-x-auto">
                                                <table className="min-w-full divide-y divide-gray-200">
                                                    <thead className="bg-gradient-to-r from-blue-500/80 to-teal-500/90">
                                                        <tr>
                                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                                No
                                                            </th>
                                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                                Layanan
                                                            </th>
                                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                                Tarif
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="bg-white divide-y divide-gray-200">
                                                        {categoryServices.map((service, idx) => (
                                                            <tr
                                                                key={service.id}
                                                                className="hover:bg-gray-50 transition-colors"
                                                            >
                                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                                    {idx + 1}
                                                                </td>
                                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                                    {service.name}
                                                                </td>
                                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                                                                    {service.price || "-"}
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        ) : (
                            // Display single category
                            <div>
                                {serviceCategories
                                    .filter(category => category.id === activeTab)
                                    .map(category => {
                                        const categoryServices = category.services.filter(service =>
                                            service.name.toLowerCase().includes(searchQuery.toLowerCase())
                                        );

                                        if (categoryServices.length === 0) {
                                            return (
                                                <div key={category.id} className="text-center py-12">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Tidak ditemukan</h3>
                                                    <p className="text-gray-600">Tidak ada layanan yang sesuai dengan pencarian Anda.</p>
                                                </div>
                                            );
                                        }

                                        return (
                                            <div key={category.id}>
                                                <h2 className="text-2xl font-bold text-gray-800 mb-4">{category.name}</h2>
                                                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                                                    <div className="overflow-x-auto">
                                                        <table className="min-w-full divide-y divide-gray-200">
                                                            <thead className="bg-gray-50">
                                                                <tr>
                                                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                                        No
                                                                    </th>
                                                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                                        Layanan
                                                                    </th>
                                                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                                        Tarif
                                                                    </th>
                                                                </tr>
                                                            </thead>
                                                            <tbody className="bg-white divide-y divide-gray-200">
                                                                {categoryServices.map((service, idx) => (
                                                                    <tr
                                                                        key={service.id}
                                                                        className="hover:bg-gray-50 transition-colors"
                                                                    >
                                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                                            {idx + 1}
                                                                        </td>
                                                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                                            {service.name}
                                                                        </td>
                                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                                                                            {service.price || "-"}
                                                                        </td>
                                                                    </tr>
                                                                ))}
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                            </div>
                        )}

                        {/* No results */}
                        {filteredServices.length === 0 && (
                            <div className="text-center py-16 bg-white rounded-lg shadow-md">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Tidak ditemukan</h3>
                                <p className="text-gray-600 mb-6">Tidak ada layanan yang sesuai dengan pencarian Anda.</p>
                                <button
                                    onClick={() => {
                                        setSearchQuery('');
                                        setActiveTab('all');
                                    }}
                                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                                >
                                    Reset Pencarian
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Disclaimer */}
                    <div className="mt-12 bg-yellow-50 border border-yellow-100 rounded-lg p-6 flex items-start" data-aos="fade-up">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <div>
                            <h3 className="text-lg font-semibold text-yellow-800 mb-2">Informasi Penting</h3>
                            <p className="text-yellow-700">
                                Tarif di atas dapat berubah sewaktu-waktu tanpa pemberitahuan sebelumnya.
                                Untuk informasi tarif terbaru dan lebih detail, silakan hubungi bagian administrasi
                                Rumah Sakit Paru Sumatera Barat di nomor (0752) 123456 atau datang langsung ke rumah sakit.
                            </p>
                        </div>
                    </div>

                    {/* Payment Options */}
                    <div className="mt-8 bg-white rounded-xl shadow-lg p-8" data-aos="fade-up">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Metode Pembayaran</h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-blue-50 rounded-lg p-6 border border-blue-100 text-center">
                                <div className="h-16 w-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold text-blue-800 mb-2">Tunai</h3>
                                <p className="text-blue-700">
                                    Pembayaran dapat dilakukan secara tunai di kasir rumah sakit.
                                </p>
                            </div>

                            <div className="bg-green-50 rounded-lg p-6 border border-green-100 text-center">
                                <div className="h-16 w-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold text-green-800 mb-2">Kartu Debit/Kredit</h3>
                                <p className="text-green-700">
                                    Menerima pembayaran menggunakan kartu debit atau kredit dari berbagai bank.
                                </p>
                            </div>

                            <div className="bg-purple-50 rounded-lg p-6 border border-purple-100 text-center">
                                <div className="h-16 w-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold text-purple-800 mb-2">BPJS Kesehatan</h3>
                                <p className="text-purple-700">
                                    Melayani pasien pengguna BPJS Kesehatan dengan persyaratan yang berlaku.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Tarif;