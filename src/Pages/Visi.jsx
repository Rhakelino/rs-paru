import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Visi() {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle mobile menu
    const [activeDropdown, setActiveDropdown] = useState(null); // Track the active dropdown

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

    // Toggle mobile menu
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    // Toggle dropdown and close others
    const toggleDropdown = (dropdownName) => {
        setActiveDropdown((prevDropdown) => (prevDropdown === dropdownName ? null : dropdownName));
    };

    return (
        <>
            <Navbar
                toggleMenu={toggleMenu}
                isMenuOpen={isMenuOpen}
                toggleDropdown={toggleDropdown}
                activeDropdown={activeDropdown}
            />

            {/* Content Section */}
            <div className="container mx-auto md:px-20 px-10 py-16 mt-14">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-800">Visi Misi Rumah Sakit Paru Sumatera Barat</h1>
                    <p className="mt-4 text-lg text-gray-600">Dalam membangun Rumah Sakit Paru Provinsi Sumatra Barat yang lebih baik lagi, diperluakan visi dan misi. Visi dan Misi Rumah Sakit Paru Sumatera Barat yaitu :</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="relative">
                        <img src="./images/visi.jpg" alt="Health Services" />
                    </div>

                    <div className="flex flex-col justify-center">
                        <h2 className="text-3xl font-semibold text-gray-800">VISI</h2>
                        <p className="mt-4 text-lg text-gray-600 italic">“Menjadi Pusat Rujukan Penyakit Paru dan Saluran Pernafasan di Regional Sumatera Tengah Tahun 2025”</p>
                    </div>
                </div>
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col justify-center">
                        <h2 className="text-3xl font-semibold text-gray-800">MISI</h2>
                        <p className="mt-4 text-lg text-gray-600"><ol className='list-decimal pl-5 text-opacity-80 leading-loose italic'>
                            <li>Memberikan Pelayanan Kesehatan Paru dan Pernafasan secara berkualitas, Profesional dan Paripurna.</li>
                            <li>Membentuk Jejaring Pelaksanaan Rujukan dan Kerjasama dengan Lembaga dan Institusi terkait, Khususnya dalam Penanganan Penyakit Paru dan Saluran Pernafasan.</li>
                            <li>Jejaring Pendidikan, Penelitian, Pelatihan, Pengembangan Ilmu dan Kualitas SDM di Bidang Kesehatan Paru dan Saluran Pernafasan.</li>
                            <li>Mengembangkan Teknologi Kesehatan khususnya dalam Penanganan Penyakit Paru dan Saluran Pernafasan.</li>
                        </ol></p>
                    </div>
                    <div className="relative justify-end flex">
                        <img src="./images/misi.jpg" alt="Chronic Disease Management" />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="relative">
                        <img src="./images/nilai.jpg" alt="Health Services" />
                    </div>

                    <div className="flex flex-col justify-center">
                        <h2 className="text-3xl font-semibold text-gray-800">NILAI</h2>
                        <div className="flex flex-col justify-center">
                            <p className="mt-4 text-lg text-gray-600"><ol className='list-decimal pl-5 text-opacity-80 leading-loose italic'>
                                <li>I = Integritas</li>
                                <li>M   = Melayani dengan Ikhlas</li>
                                <li>A    = Amanah</li>
                                <li>N    = Nyaman.</li>
                            </ol></p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />

        </>
    );
}

export default Visi;
