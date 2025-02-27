import React, { useState } from 'react';


const Card = ({ title, description, image }) => {
    // State untuk menangani modal gambar
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Fungsi untuk membuka dan menutup modal
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div>
            {/* Card */}
            <div className="relative group overflow-hidden rounded-lg shadow-lg" data-aos="fade-right">
                <img
                    src={image}
                    alt={title}
                    className="w-full md:h-full h-56 object-cover transition-transform duration-300 ease-in-out group-hover:scale-105 cursor-pointer"
                    onClick={toggleModal} // Ketika gambar diklik, buka modal
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                    <div className="text-center">
                        <h3 className="text-xl font-bold">{title}</h3>
                        <p className="text-sm">{description}</p>
                        <button
                            className="mt-3 px-6 py-2 bg-blue-500 rounded-full hover:bg-blue-400 transition-colors duration-300"
                            onClick={toggleModal} // Klik tombol "View" untuk membuka modal
                        >
                            View
                        </button>
                    </div>
                </div>
            </div>

            {/* Modal untuk zoom image */}
            {isModalOpen && (
                <div
                    className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex items-center justify-center z-50"
                    onClick={toggleModal} // Klik di luar modal untuk menutup
                >
                    <div
                        className="relative max-w-4xl w-full p-4 bg-white rounded-lg md:m-0"
                        onClick={(e) => e.stopPropagation()} // Mencegah klik di dalam modal menutupnya
                    >
                        <img
                            src={image}
                            alt={title}
                            className="w-full h-auto object-contain my-9" // Menampilkan gambar zoomed
                        />
                        <button
                            className="absolute top-2 right-2 text-4xl font-bold text-black mr-4"
                            onClick={toggleModal} // Tombol close modal
                        >
                            ×
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Card;
