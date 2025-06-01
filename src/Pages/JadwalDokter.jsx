import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';

const JadwalDokter = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [activeTab, setActiveTab] = useState('rawatJalan');

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

    // Doctor info with additional details
    const doctors = [
        {
            id: 1,
            name: "dr. Rizki Amalia Hardi, Sp.P",
            specialty: "Spesialis Paru",
            photo: "./images/doctor1.jpg", // Replace with actual image path
            education: "Universitas Indonesia",
            experience: "5+ tahun",
            description: "Spesialis dalam penanganan penyakit paru dan saluran pernapasan."
        },
        {
            id: 2,
            name: "dr. Norfiyani, Sp.P",
            specialty: "Spesialis Paru",
            photo: "./images/doctor2.jpg", // Replace with actual image path
            education: "Universitas Airlangga",
            experience: "7+ tahun",
            description: "Berpengalaman dalam penanganan TBC, asma, dan penyakit paru lainnya."
        }
    ];

    // Schedule data
    const rawatJalanSchedule = [
        { 
            week: "Minggu I", 
            doctor: "dr. Rizki Amalia Hardi, Sp.P",
            doctorId: 1,
            time: "08.00 - 14.30 WIB",
            days: "Senin - Sabtu"
        },
        { 
            week: "Minggu II", 
            doctor: "dr. Rizki Amalia Hardi, Sp.P",
            doctorId: 1,
            time: "08.00 - 14.30 WIB",
            days: "Senin - Sabtu"
        },
        { 
            week: "Minggu III", 
            doctor: "dr. Norfiyani, Sp.P",
            doctorId: 2,
            time: "08.00 - 14.30 WIB",
            days: "Senin - Sabtu"
        },
        { 
            week: "Minggu IV", 
            doctor: "dr. Norfiyani, Sp.P",
            doctorId: 2,
            time: "08.00 - 14.30 WIB",
            days: "Senin - Sabtu"
        }
    ];

    const konsulGawatDaruratSchedule = [
        { day: "Senin", doctor: "dr. Norfiyani, Sp.P", doctorId: 2, time: "24 Jam" },
        { day: "Selasa", doctor: "dr. Rizki Amalia Hardi, Sp.P", doctorId: 1, time: "24 Jam" },
        { day: "Rabu", doctor: "dr. Rizki Amalia Hardi, Sp.P", doctorId: 1, time: "24 Jam" },
        { day: "Kamis", doctor: "dr. Rizki Amalia Hardi, Sp.P", doctorId: 1, time: "24 Jam" },
        { day: "Jumat", doctor: "dr. Norfiyani, Sp.P", doctorId: 2, time: "24 Jam" },
        { day: "Sabtu", doctor: "dr. Norfiyani, Sp.P", doctorId: 2, time: "24 Jam" },
        { day: "Minggu ke-1", doctor: "dr. Rizki Amalia Hardi, Sp.P", doctorId: 1, time: "24 Jam" },
        { day: "Minggu ke-2", doctor: "dr. Norfiyani, Sp.P", doctorId: 2, time: "24 Jam" },
        { day: "Minggu ke-3", doctor: "dr. Rizki Amalia Hardi, Sp.P", doctorId: 1, time: "24 Jam" },
        { day: "Minggu ke-4", doctor: "dr. Norfiyani, Sp.P", doctorId: 2, time: "24 Jam" },
        { day: "Minggu ke-5", doctor: "dr. Rizki Amalia Hardi, Sp.P", doctorId: 1, time: "24 Jam" }
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
                            Jadwal Dokter
                        </h1>
                        <p className="text-xl md:text-2xl max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
                            Informasi Jadwal Praktik Dokter Spesialis Paru
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
                            Berikut adalah jadwal praktik dokter spesialis di Rumah Sakit Paru Sumatera Barat.
                            Untuk informasi lebih lanjut atau pendaftaran, silakan hubungi bagian pendaftaran
                            kami di nomor (0752) 123456.
                        </p>
                    </div>

                    {/* Doctor Profiles */}
                    <div className="mb-16" data-aos="fade-up">
                        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Tim Dokter Spesialis Kami</h2>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {doctors.map((doctor) => (
                                <div 
                                    key={doctor.id} 
                                    className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                                    data-aos="fade-up"
                                    data-aos-delay={doctor.id * 100}
                                >
                                    <div className="md:flex">
                                        <div className="md:w-1/3">
                                            <div className="h-64 md:h-full relative">
                                                <img 
                                                    src={doctor.photo} 
                                                    alt={doctor.name} 
                                                    className="h-full w-full object-cover"
                                                    onError={(e) => {
                                                        e.target.onerror = null;
                                                        e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(doctor.name)}&background=0D8ABC&color=fff&size=300`;
                                                    }}
                                                />
                                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 md:hidden">
                                                    <h3 className="text-white text-lg font-bold">{doctor.name}</h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="md:w-2/3 p-6">
                                            <div className="hidden md:block">
                                                <h3 className="text-xl font-bold text-gray-800 mb-1">{doctor.name}</h3>
                                                <p className="text-blue-600 font-medium mb-4">{doctor.specialty}</p>
                                            </div>
                                            
                                            <div className="grid grid-cols-2 gap-4 mb-4">
                                                <div>
                                                    <p className="text-sm text-gray-500">Pendidikan:</p>
                                                    <p className="text-gray-800">{doctor.education}</p>
                                                </div>
                                                <div>
                                                    <p className="text-sm text-gray-500">Pengalaman:</p>
                                                    <p className="text-gray-800">{doctor.experience}</p>
                                                </div>
                                            </div>
                                            
                                            <p className="text-gray-600">{doctor.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Schedule Tabs */}
                    <div className="mb-8 flex justify-center" data-aos="fade-up">
                        <div className="inline-flex bg-white rounded-lg p-1 shadow-md">
                            <button 
                                onClick={() => setActiveTab('rawatJalan')}
                                className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                                    activeTab === 'rawatJalan' 
                                        ? 'bg-gradient-to-r from-blue-500 to-teal-500 text-white' 
                                        : 'text-gray-700 hover:bg-gray-100'
                                }`}
                            >
                                Rawat Jalan
                            </button>
                            <button 
                                onClick={() => setActiveTab('igd')}
                                className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                                    activeTab === 'igd' 
                                        ? 'bg-gradient-to-r from-blue-500 to-teal-500 text-white' 
                                        : 'text-gray-700 hover:bg-gray-100'
                                }`}
                            >
                                Instalasi Gawat Darurat
                            </button>
                        </div>
                    </div>

                    {/* Schedule Content */}
                    {activeTab === 'rawatJalan' ? (
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden" data-aos="fade-up">
                            <div className="p-6 bg-gradient-to-r from-blue-600 to-teal-500">
                                <h2 className="text-2xl font-bold text-white">Jadwal Dokter di Rawat Jalan</h2>
                                <p className="text-white/80 mt-2">
                                    Jadwal praktik dokter spesialis di poliklinik rawat jalan
                                </p>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Minggu
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Dokter
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Hari
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Jam Praktik
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {rawatJalanSchedule.map((schedule, index) => {
                                            const doctor = doctors.find(d => d.id === schedule.doctorId);
                                            
                                            return (
                                                <tr 
                                                    key={index}
                                                    className="hover:bg-gray-50 transition-colors"
                                                >
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                                                            {schedule.week}
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="flex items-center">
                                                            <div className="flex-shrink-0 h-10 w-10">
                                                                <img 
                                                                    className="h-10 w-10 rounded-full" 
                                                                    src={doctor?.photo} 
                                                                    alt=""
                                                                    onError={(e) => {
                                                                        e.target.onerror = null;
                                                                        e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(schedule.doctor)}&background=0D8ABC&color=fff`;
                                                                    }}
                                                                />
                                                            </div>
                                                            <div className="ml-4">
                                                                <div className="text-sm font-medium text-gray-900">
                                                                    {schedule.doctor}
                                                                </div>
                                                                <div className="text-sm text-gray-500">
                                                                    {doctor?.specialty}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                        {schedule.days}
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                        {schedule.time}
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                            <div className="p-6 bg-blue-50 border-t border-blue-100">
                                <div className="flex items-start">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <p className="text-blue-700 text-sm">
                                        <span className="font-semibold">Catatan:</span> Pendaftaran pasien rawat jalan dibuka pada pukul 08.00 - 12.00 WIB (Senin-Kamis) dan 08.00 - 11.00 WIB (Jumat-Sabtu).
                                    </p>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden" data-aos="fade-up">
                            <div className="p-6 bg-gradient-to-r from-red-600 to-orange-500">
                                <h2 className="text-2xl font-bold text-white">Jadwal Dokter Konsultasi di Instalasi Gawat Darurat</h2>
                                <p className="text-white/80 mt-2">
                                    Jadwal jaga dokter spesialis di IGD untuk pelayanan 24 jam
                                </p>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Hari
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Dokter Jaga
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Jam Pelayanan
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {konsulGawatDaruratSchedule.map((schedule, index) => {
                                            const doctor = doctors.find(d => d.id === schedule.doctorId);
                                            const isWeekend = schedule.day.includes("Minggu");
                                            
                                            return (
                                                <tr 
                                                    key={index}
                                                    className={`hover:bg-gray-50 transition-colors ${isWeekend ? 'bg-gray-50' : ''}`}
                                                >
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                                            isWeekend 
                                                                ? 'bg-purple-100 text-purple-800' 
                                                                : 'bg-green-100 text-green-800'
                                                        }`}>
                                                            {schedule.day}
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="flex items-center">
                                                            <div className="flex-shrink-0 h-10 w-10">
                                                                <img 
                                                                    className="h-10 w-10 rounded-full" 
                                                                    src={doctor?.photo} 
                                                                    alt=""
                                                                    onError={(e) => {
                                                                        e.target.onerror = null;
                                                                        e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(schedule.doctor)}&background=0D8ABC&color=fff`;
                                                                    }}
                                                                />
                                                            </div>
                                                            <div className="ml-4">
                                                                <div className="text-sm font-medium text-gray-900">
                                                                    {schedule.doctor}
                                                                </div>
                                                                <div className="text-sm text-gray-500">
                                                                    {doctor?.specialty}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                                                            {schedule.time}
                                                        </span>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                            <div className="p-6 bg-red-50 border-t border-red-100">
                                <div className="flex items-start">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <p className="text-red-700 text-sm">
                                        <span className="font-semibold">Penting:</span> Instalasi Gawat Darurat (IGD) selalu buka 24 jam termasuk hari libur. Dokter spesialis paru dapat dihubungi untuk konsultasi sesuai jadwal jaga.
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Registration Info */}
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8" data-aos="fade-up">
                        <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
                            <h3 className="text-lg font-semibold text-blue-800 mb-3">Informasi Pendaftaran</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span className="text-blue-700">Pendaftaran dibuka setiap hari Senin - Sabtu</span>
                                </li>
                                <li className="flex items-start">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                    </svg>
                                    <span className="text-blue-700">Pendaftaran dapat dilakukan langsung di loket pendaftaran atau melalui telepon</span>
                                </li>
                                <li className="flex items-start">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                    <span className="text-blue-700">Harap membawa kartu identitas dan kartu BPJS (jika ada)</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-green-50 rounded-lg p-6 border border-green-100">
                            <h3 className="text-lg font-semibold text-green-800 mb-3">Hubungi Kami</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    <span className="text-green-700">Telepon: (0752) 123456</span>
                                </li>
                                <li className="flex items-start">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                    </svg>
                                    <span className="text-green-700">Email: info@rsparusumbar.go.id</span>
                                </li>
                                <li className="flex items-start">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <span className="text-green-700">Alamat: Jl. Dr. Mohammad Hatta, Lubuk Alung, Padang Pariaman, Sumatera Barat</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default JadwalDokter;