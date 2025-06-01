import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS

const Sejarah = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

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

    const historyParagraphs = [
        "Rumah Sakit Paru Sumatera Barat merupakan UPTD Dinas Kesehatan Provinsi Sumatera Barat, awalnya dulu adalah Balai Pengobatan Penyakit Paru-Paru (BP4) Lubuk Alung. Balai Pengobatan Penyakit Paru-Paru (BP4) Lubuk Alung, berubah status menjadi Rumah Sakit Paru Sumatera Barat sesuai dengan Peraturan Daerah Provinsi Sumatera Barat Nomor 11 Tahun 2017 tentang Penetapan Status Balai Pengobatan Penyakit Paru-Paru menjadi Rumah Sakit Paru Sumatera Barat.",
        
        "Berdirinya BP 4 Lubuk Alung diawali dari hasil rapat kerja pemberantasan penyakit tuberkulosis yang dilaksanakan di Kaliurang, Yogyakarta tahun 1952. Dimana pertemuan tersebut menghasilkan beberapa keputusan. Salah satu keputusan dari rapat tersebut adalah mendirikan Balai Pemberantasan Penyakit Tuberkulosis (BP 4) Pusat di tiap ibukota Provinsi dan mendirikan BP 4 cabang di tiap ibukota Kabupaten/Kotamadya.",
        
        "Sebagai tindak lanjut dari keputusan tersebut, propinsi Sumatera Barat yang waktu itu di motori oleh Prof. Ilyas H. Dt. Batoeh (almarhum) mendirikan BP 4 Sumatera Barat, yang didirikan di Bukit tinggi.",
        
        "Sejalan dengan Otonomi Daerah tahun 2001 BP4 Lubuk Alung diambil alih oleh Pemerintah Provinsi Sumatera Barat menjadi UPTD Dinas Kesehatan Provinsi Sumatera Barat. Sesuai dengan tuntutan jangkauan dan jaminan mutu pelayanan kesehatan paru masyarakat maka pada tahun 2012 BP4 melaksanakan Study Kelayakan. Berdasarkan rekomendasi dari hasil studi kelayakan tersebut maka BP4 berubah fungsi menjadi Rumah Sakit Paru.",
        
        "Berdasarkan hasil rekomendasi tersebut dan juga dengan berbagai pertimbangan teknis lainnya, selanjutnya tanggal 30 Maret 2015 Gubernur Sumatera Barat mengeluarkan surat keputusan nomor 445-266-2015 tentang izin operasional Rumah Sakit Paru Kelas B. Selanjutnya berdasarkan Surat Kepala Dinas Kesehatan Provinsi Sumatera Barat tanggal 7 Mei 2015 No. PPK.03./928/V/2015 BP4 teregistrasi di Kementerian Kesehatan RI sebagai Rumah Sakit Paru dengan nomor register 1306057.",
        
        "Dalam rangka untuk dapat menjalankan fungsi sebagai Rumah Sakit Paru Kelas B, BP 4 Lubuk Alung terus berupaya melengkapi sarana, prasarana dan juga menambah jumlah serta meningkatkan skill sumber daya manusianya baik dengan cara meningkatkan jenjang pendidikan maupun mengikuti pelatihan."
    ];

    const timelineEvents = [
        { year: "1952", event: "Rapat pemberantasan TB di Kaliurang, Yogyakarta" },
        { year: "1960-an", event: "Pendirian BP4 Sumatera Barat di Bukittinggi" },
        { year: "2001", event: "BP4 Lubuk Alung diambil alih oleh Pemerintah Provinsi Sumatera Barat" },
        { year: "2012", event: "BP4 melaksanakan Study Kelayakan untuk berubah fungsi" },
        { year: "2013", event: "Izin mendirikan Rumah Sakit Paru Kelas B" },
        { year: "2015", event: "Izin operasional Rumah Sakit Paru Kelas B" },
        { year: "2017", event: "Perubahan status resmi menjadi Rumah Sakit Paru Sumatera Barat" }
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
                            Sejarah
                        </h1>
                        <p className="text-xl md:text-2xl max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
                            Perjalanan Rumah Sakit Paru Sumatera Barat
                        </p>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto px-6 py-12 -mt-16">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16 bg-white rounded-lg shadow-lg p-8" data-aos="fade-up">
                        <p className="text-lg text-gray-600">
                            Perjalanan panjang Rumah Sakit Paru Sumatera Barat dari awal berdiri sebagai Balai Pengobatan
                            hingga menjadi Rumah Sakit Paru yang melayani masyarakat Sumatera Barat.
                        </p>
                    </div>

                    {/* Featured Image Section */}
                    <div className="mb-16" data-aos="fade-up" data-aos-delay="100">
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                            <div className="relative h-80 md:h-96">
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40"></div>
                                <img 
                                    src="./images/sejarah.jpeg" 
                                    alt="Sejarah RS Paru" 
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = "https://via.placeholder.com/1200x600?text=Sejarah+RS+Paru";
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        {/* Left Column - History Text */}
                        <div className="md:col-span-2" data-aos="fade-right">
                            <div className="bg-white rounded-xl shadow-lg p-8">
                                <h2 className="text-3xl font-bold text-gray-800 border-b-2 border-teal-500 pb-2 inline-block mb-6">
                                    Perjalanan Sejarah
                                </h2>
                                
                                <div className="space-y-6">
                                    {historyParagraphs.map((paragraph, index) => (
                                        <p 
                                            key={index} 
                                            className="text-gray-700 leading-relaxed"
                                            data-aos="fade-up" 
                                            data-aos-delay={100 + (index * 50)}
                                        >
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>
                        
                        {/* Right Column - Timeline */}
                        <div className="md:col-span-1" data-aos="fade-left">
                            <div className="bg-white rounded-xl shadow-lg p-8">
                                <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-teal-500 pb-2 inline-block mb-6">
                                    Linimasa
                                </h2>
                                
                                <div className="relative border-l-2 border-blue-500 pl-6 pb-6 ml-3 mt-8">
                                    {timelineEvents.map((event, index) => (
                                        <div 
                                            key={index} 
                                            className="mb-8 relative"
                                            data-aos="fade-up" 
                                            data-aos-delay={100 + (index * 100)}
                                        >
                                            <div className="absolute -left-10 top-1 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-teal-500 flex items-center justify-center">
                                                <div className="w-3 h-3 bg-white rounded-full"></div>
                                            </div>
                                            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500 hover:shadow-md transition-shadow">
                                                <h3 className="text-lg font-bold text-blue-700">{event.year}</h3>
                                                <p className="text-gray-700">{event.event}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Certificate Gallery */}
                    <div data-aos="fade-up">
                        <div className="bg-white rounded-xl shadow-lg p-8">
                            <h2 className="text-3xl font-bold text-gray-800 border-b-2 border-teal-500 pb-2 inline-block mb-6">
                                Sertifikasi & Legalitas
                            </h2>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                                <div className="bg-blue-50 p-6 rounded-lg border border-blue-100" data-aos="fade-up" data-aos-delay="100">
                                    <h3 className="font-semibold text-blue-800 mb-2">Surat Keputusan Gubernur</h3>
                                    <p className="text-gray-700">No. 445-266-2015 tentang izin operasional Rumah Sakit Paru Kelas B</p>
                                    <p className="text-sm text-gray-500 mt-2">Diterbitkan pada 30 Maret 2015</p>
                                </div>
                                
                                <div className="bg-teal-50 p-6 rounded-lg border border-teal-100" data-aos="fade-up" data-aos-delay="200">
                                    <h3 className="font-semibold text-teal-800 mb-2">Registrasi Kementerian Kesehatan</h3>
                                    <p className="text-gray-700">No. PPK.03./928/V/2015 sebagai Rumah Sakit Paru</p>
                                    <p className="text-sm text-gray-500 mt-2">Nomor register: 1306057</p>
                                </div>
                                
                                <div className="bg-green-50 p-6 rounded-lg border border-green-100" data-aos="fade-up" data-aos-delay="300">
                                    <h3 className="font-semibold text-green-800 mb-2">Peraturan Daerah Provinsi Sumatera Barat</h3>
                                    <p className="text-gray-700">No. 11 Tahun 2017 tentang Penetapan Status Balai Pengobatan Penyakit Paru-Paru menjadi Rumah Sakit Paru Sumatera Barat</p>
                                </div>
                                
                                <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-100" data-aos="fade-up" data-aos-delay="400">
                                    <h3 className="font-semibold text-indigo-800 mb-2">Izin Mendirikan Rumah Sakit</h3>
                                    <p className="text-gray-700">Keputusan Gubernur Sumatera Barat No. 445-542-2013</p>
                                    <p className="text-sm text-gray-500 mt-2">Diterbitkan pada 24 Juni 2013</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Sejarah