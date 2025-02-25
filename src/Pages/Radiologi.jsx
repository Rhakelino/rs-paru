import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Radiologi = () => {
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
                <div className="text-center">
                    <h1 className="text-4xl text-left font-bold text-gray-800 mb-4">Radiologi</h1>
                    <div className="flex justify-center">
                        <img src="./images/radiologi.jpeg" className='rounded-md md:w-full md:h-full object-cover object-left overflow-hidden shadow-md mb-4' />
                    </div>
                    <div className="flex flex-col">
                        <h2 className="text-left text-md font-medium opacity-70">Pemeriksaan radiologi yang dapat dilakukan di Rumah Sakit Paru Sumatera Barat adalah sebagai berikut:</h2>
                        <p className="mt-4 text-lg text-gray-600 text-left font-medium ">A. Radiografi / X-Ray
                        </p>
                        <p className="mt-4 text-gray-600 text-left opacity-70"><ul className='list-decimal pl-9'>
                            <li>Radiografi Thorak</li>
                            <li>Radiografi Abdomen</li>
                            <li>Radiografi Kepala / Schedel
                            </li>
                            <li>Radiografi Sinus Paranasal</li>
                            <li>Radiografi Mastoid/ Schuller</li>
                            <li>Radiografi TMJ</li>
                            <li>Radiografi Vertebra (Cervical, Torakal, Lumbosacral, Sacrum, Coccygeus)</li>
                            <li>Radiografi Tulang Extremitas</li>
                            <li>Radiografi Pelvic</li>
                        </ul>.</p>
                        <p className="mt-4 text-lg text-gray-600 text-left font-medium ">B. USG
                        </p>
                        <p className="mt-4 text-gray-600 text-left opacity-70"><ul className='list-decimal pl-9'>
                            <li>USG Abdomen Atas</li>
                            <li>USG Abdomen Bawah</li>
                            <li>USG Abdomen (Full)</li>
                            <li>USG Urologi</li>
                            <li>USG Hepar</li>
                            <li>USG Prostat</li>
                            <li>USG Mammae</li>
                            <li>USG Thyroid/ Leher</li>
                            <li>USG Thorak</li>
                            <li>USG Testis</li>
                            <li>USG Guding (Colli, Axilla)</li>
                        </ul>.</p>
                        <p className="mt-4 text-lg text-gray-600 text-left font-medium ">C. USG + Doppler
                        </p>
                        <p className="mt-4 text-gray-600 text-left opacity-70"><ul className='list-decimal pl-9'>
                            <li>USG Abdomen Atas (Doppler)</li>
                            <li>USG Abdomen Bawah (Doppler)</li>
                            <li>USG Abdomen Full (Doppler)</li>
                            <li>USG Mammae (Doppler)</li>
                            <li>USG Thyroid (Doppler)</li>
                            <li> USG Testis (Doppler)</li>
                            <li>USG Carotis (Doppler)</li>
                            <li>USG Extremitas (Doppler)</li>
                        </ul>.</p>
                    </div>
                </div>
            </div>
            <Footer />

        </>
    )
}

export default Radiologi;
