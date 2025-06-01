import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Note: You'd need to install this package

const data = [
    { 
        title: 'RS Paru Sumatera Barat', 
        description: 'Gedung utama Rumah Sakit Paru Sumatera Barat dengan arsitektur modern', 
        image: './images/bg-hero.jpeg',
        category: 'fasilitas'
    },
    { 
        title: 'Pelayanan Farmasi', 
        description: 'Pelayanan farmasi lengkap dengan staff profesional', 
        image: './images/farmasi.jpeg',
        category: 'layanan'
    },
    { 
        title: 'Pelayanan IGD', 
        description: 'Instalasi Gawat Darurat 24 jam siap melayani pasien', 
        image: './images/igd.jpeg',
        category: 'layanan'
    },
    { 
        title: 'Pelayanan Rawat Inap', 
        description: 'Ruang rawat inap dengan fasilitas nyaman dan modern', 
        image: './images/inap.jpeg',
        category: 'fasilitas'
    },
    { 
        title: 'Laboratorium Rs Paru', 
        description: 'Laboratorium dengan peralatan diagnostik terkini', 
        image: './images/labor.jpg',
        category: 'fasilitas'
    },
    { 
        title: 'Pelayanan Radiologi', 
        description: 'Layanan radiologi dengan teknologi canggih', 
        image: './images/radiologi.jpeg',
        category: 'layanan'
    },
];

const Galleri = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [filter, setFilter] = useState('all');
    
    const filteredData = filter === 'all' 
        ? data 
        : data.filter(item => item.category === filter);

    return (
        <div>
            {/* Filter Buttons */}
            <div className="flex justify-center mb-8" data-aos="fade-up">
                <div className="inline-flex bg-white rounded-lg p-1 shadow-md">
                    <button 
                        onClick={() => setFilter('all')}
                        className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                            filter === 'all' 
                                ? 'bg-gradient-to-r from-blue-500 to-teal-500 text-white' 
                                : 'text-gray-700 hover:bg-gray-100'
                        }`}
                    >
                        Semua
                    </button>
                    <button 
                        onClick={() => setFilter('fasilitas')}
                        className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                            filter === 'fasilitas' 
                                ? 'bg-gradient-to-r from-blue-500 to-teal-500 text-white' 
                                : 'text-gray-700 hover:bg-gray-100'
                        }`}
                    >
                        Fasilitas
                    </button>
                    <button 
                        onClick={() => setFilter('layanan')}
                        className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                            filter === 'layanan' 
                                ? 'bg-gradient-to-r from-blue-500 to-teal-500 text-white' 
                                : 'text-gray-700 hover:bg-gray-100'
                        }`}
                    >
                        Layanan
                    </button>
                </div>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredData.map((item, index) => (
                    <div 
                        key={index} 
                        className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                        onClick={() => setSelectedImage(item)}
                        data-aos="fade-up"
                        data-aos-delay={index * 100}
                    >
                        <div className="relative h-56 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = `https://via.placeholder.com/400x300?text=${encodeURIComponent(item.title)}`;
                                }}
                            />
                            <div className="absolute bottom-0 left-0 right-0 text-white p-4 z-20">
                                <h3 className="text-lg font-bold">{item.title}</h3>
                            </div>
                        </div>
                        <div className="p-4">
                            <p className="text-gray-600">{item.description}</p>
                            <div className="mt-4 flex justify-between items-center">
                                <span className={`px-3 py-1 text-xs rounded-full ${
                                    item.category === 'fasilitas' 
                                        ? 'bg-blue-100 text-blue-800' 
                                        : 'bg-teal-100 text-teal-800'
                                }`}>
                                    {item.category === 'fasilitas' ? 'Fasilitas' : 'Layanan'}
                                </span>
                                <button 
                                    className="text-sm text-blue-500 hover:text-blue-700 font-medium"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setSelectedImage(item);
                                    }}
                                >
                                    Lihat Detail
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal for Image Detail */}
            {selectedImage && (
                <div 
                    className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <div 
                        className="bg-white rounded-lg max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl flex flex-col md:flex-row"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="md:w-2/3 relative">
                            <img 
                                src={selectedImage.image} 
                                alt={selectedImage.title} 
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = `https://via.placeholder.com/800x600?text=${encodeURIComponent(selectedImage.title)}`;
                                }}
                            />
                            <button 
                                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70"
                                onClick={() => setSelectedImage(null)}
                            >
                                &times;
                            </button>
                        </div>
                        <div className="md:w-1/3 p-6 flex flex-col">
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">{selectedImage.title}</h3>
                            <span className={`self-start px-3 py-1 text-xs rounded-full mb-4 ${
                                selectedImage.category === 'fasilitas' 
                                    ? 'bg-blue-100 text-blue-800' 
                                    : 'bg-teal-100 text-teal-800'
                            }`}>
                                {selectedImage.category === 'fasilitas' ? 'Fasilitas' : 'Layanan'}
                            </span>
                            <p className="text-gray-600 flex-grow">{selectedImage.description}</p>
                            <button 
                                className="mt-6 px-4 py-2 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-lg hover:opacity-90 transition-opacity"
                                onClick={() => setSelectedImage(null)}
                            >
                                Tutup
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Galleri;