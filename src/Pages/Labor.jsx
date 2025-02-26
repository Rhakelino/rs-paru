import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Labor = () => {
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
            <div className="container mx-auto md:px-20 px-10 py-16 mt-10">
                <div className="text-center mb-12">
                    <h1 className="text-4xl text-left font-bold text-gray-800 mb-4">Laboratorium</h1>
                    <div className="flex justify-center">
                        <img src="./images/labor.jpg" className='rounded-md md:w-full md:h-full object-cover object-left overflow-hidden shadow-md mb-4' />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div>
                            <h1 className="text-lg font-medium text-gray-800 text-left">A. Hermatologi</h1>
                            <p className="mt-4 text-lg text-gray-600 text-left opacity-70"><ul className='list-decimal pl-9'>
                                <li>Hemoglobin</li>
                                <li>Hematokrit</li>
                                <li>Hitung Leukosit</li>
                                <li>Hitung Trombosit</li>
                                <li>Hitung Eritrosit</li>
                                <li>Indeks Eritrosit</li>
                                <li>Gambaran Darah Tepi</li>
                            </ul>.</p>
                        </div>
                        <div>
                            <h1 className="text-lg font-medium text-gray-800 text-left">B. Kimia Klinik</h1>
                            <p className="mt-4 text-md text-gray-600 text-left opacity-70"><ul className='list-decimal pl-9'>
                                <li>Glukosa</li>
                                <li>Fungsi Ginjal :   ( Ureum & Kreatinin )</li>
                                <li>Fungsi Hati  :  ( Sgot,Sgpt, Bilirubin )</li>
                                <li>Profil Lipid  :  ( Kolesterol Total, Trigliserida, Hdl,Ldl)</li>
                                <li>Total Protein dan Albumin</li>
                                <li>Asam Urat</li>
                                <li>LDH</li>
                            </ul>.</p>
                        </div>
                        <div>
                            <h1 className="text-lg font-medium text-gray-800 text-left">C. Analisa Rutin Lengkap</h1>

                        </div>
                        <div>
                            <h1 className="text-lg font-medium text-gray-800 text-left">D. Analisa Cairan Tubuh  (Pleura, LCS, Ascites)</h1>
                        </div>
                        <div className='mt-4'>
                            <h1 className="text-lg font-medium text-gray-800 text-left">E. Mikrobiologi: Pemeriksaan M.Tb & MOTT</h1>
                            <p className="mt-4 text-md text-gray-600 text-left opacity-70"><ul className='list-decimal pl-9'>
                                <li>BTA</li>
                                <li>TCM </li>
                                <li>Kultur: LJ ( Kultur Media Padat )</li>
                            </ul>.</p>
                        </div>
                        <div className='mt-4'>
                            <h1 className="text-lg font-medium text-gray-800 text-left">G. Imunologi / Serologi</h1>
                            <p className="mt-4 text-md text-gray-600 text-left opacity-70"><ul className='list-decimal pl-9'>
                                <li>TSH</li>
                                <li>HBsAg</li>
                                <li>HIV</li>
                                <li>WIDAL</li>
                            </ul>.</p>
                        </div>
                        <div className='mt-4'>
                            <h1 className="text-lg font-medium text-gray-800 text-left">F. Elektrolit (Na, K, Cl)</h1>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />

        </>
    )
}

export default Labor
