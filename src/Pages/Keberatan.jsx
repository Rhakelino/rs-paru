import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Keberatan = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [activeTab, setActiveTab] = useState('procedure');

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

    // Objection reasons
    const objectionReasons = [
        {
            id: 1,
            reason: "Permohonan informasi ditolak",
            description: "Badan publik menolak memberikan informasi yang diminta baik sebagian atau seluruhnya"
        },
        {
            id: 2,
            reason: "Informasi tidak disediakan",
            description: "Badan publik tidak menyediakan informasi yang diminta sebagaimana yang dijanjikan"
        },
        {
            id: 3,
            reason: "Permintaan informasi tidak ditanggapi",
            description: "Badan publik tidak menanggapi permintaan informasi yang diajukan"
        },
        {
            id: 4,
            reason: "Permintaan informasi ditanggapi tidak sebagaimana yang diminta",
            description: "Informasi yang diberikan tidak sesuai dengan yang diminta oleh pemohon informasi"
        },
        {
            id: 5,
            reason: "Permohonan informasi tidak dipenuhi",
            description: "Badan publik tidak memenuhi permintaan informasi yang diajukan"
        },
        {
            id: 6,
            reason: "Biaya yang tidak wajar",
            description: "Pengenaan biaya yang tidak wajar terkait dengan permintaan informasi"
        },
        {
            id: 7,
            reason: "Penyampaian informasi melebihi waktu",
            description: "Badan publik menyampaikan informasi melebihi jangka waktu yang ditentukan"
        }
    ];

    // Objection process steps
    const objectionSteps = [
        {
            step: 1,
            title: "Pengajuan Keberatan",
            description: "Pemohon informasi mengajukan keberatan kepada atasan PPID dalam jangka waktu 30 hari kerja setelah ditemukannya alasan keberatan.",
            icon: "📝"
        },
        {
            step: 2,
            title: "Registrasi Keberatan",
            description: "PPID mencatat pengajuan keberatan dalam register keberatan dan memberikan nomor registrasi pengajuan keberatan.",
            icon: "📋"
        },
        {
            step: 3,
            title: "Tanggapan Atasan PPID",
            description: "Atasan PPID memberikan tanggapan atas keberatan yang diajukan pemohon informasi publik dalam jangka waktu 30 hari kerja.",
            icon: "✅"
        },
        {
            step: 4,
            title: "Penyelesaian Keberatan",
            description: "Jika pemohon puas dengan tanggapan atasan PPID, maka keberatan dianggap selesai. Jika tidak, pemohon dapat mengajukan penyelesaian sengketa ke Komisi Informasi.",
            icon: "🔍"
        },
        {
            step: 5,
            title: "Pengajuan ke Komisi Informasi (Opsional)",
            description: "Apabila tanggapan atasan PPID tidak memuaskan, pemohon dapat mengajukan permohonan penyelesaian sengketa informasi ke Komisi Informasi dalam waktu 14 hari kerja.",
            icon: "⚖️"
        }
    ];

    // Form fields
    const formFields = [
        { id: "nama", label: "Nama Lengkap", type: "text", placeholder: "Masukkan nama lengkap Anda" },
        { id: "alamat", label: "Alamat", type: "text", placeholder: "Masukkan alamat lengkap Anda" },
        { id: "telepon", label: "Nomor Telepon", type: "tel", placeholder: "Masukkan nomor telepon Anda" },
        { id: "email", label: "Email", type: "email", placeholder: "Masukkan alamat email Anda" },
        { id: "nomor_permohonan", label: "Nomor Permohonan Informasi", type: "text", placeholder: "Masukkan nomor permohonan informasi (jika ada)" },
        { id: "informasi", label: "Informasi yang Dimohon", type: "text", placeholder: "Sebutkan informasi yang Anda mohon sebelumnya" },
        { id: "alasan", label: "Alasan Keberatan", type: "select", placeholder: "Pilih alasan pengajuan keberatan", options: objectionReasons.map(reason => ({ value: reason.id, label: reason.reason })) },
        { id: "keterangan", label: "Keterangan", type: "textarea", placeholder: "Berikan keterangan tambahan terkait keberatan Anda" }
    ];

    // FAQ items
    const faqItems = [
        {
            question: "Apa itu pengajuan keberatan informasi?",
            answer: "Pengajuan keberatan informasi adalah hak yang dimiliki oleh pemohon informasi untuk mengajukan keberatan atas tanggapan atau tidak ditanggapinya permohonan informasi publik oleh badan publik."
        },
        {
            question: "Berapa lama batas waktu pengajuan keberatan?",
            answer: "Pengajuan keberatan dapat dilakukan dalam jangka waktu paling lambat 30 (tiga puluh) hari kerja setelah ditemukannya alasan keberatan sebagaimana diatur dalam UU No. 14 Tahun 2008 tentang Keterbukaan Informasi Publik."
        },
        {
            question: "Berapa lama proses tanggapan terhadap keberatan?",
            answer: "Atasan PPID harus memberikan tanggapan tertulis atas keberatan yang diajukan pemohon informasi publik dalam jangka waktu paling lambat 30 (tiga puluh) hari kerja sejak keberatan diterima."
        },
        {
            question: "Apa yang dapat dilakukan jika keberatan tidak ditanggapi?",
            answer: "Jika keberatan tidak ditanggapi atau tanggapan tidak memuaskan, pemohon dapat mengajukan permohonan penyelesaian sengketa informasi publik ke Komisi Informasi dalam waktu 14 hari kerja."
        },
        {
            question: "Apakah ada biaya untuk mengajukan keberatan?",
            answer: "Tidak ada biaya untuk mengajukan keberatan informasi kepada atasan PPID. Proses ini dilakukan secara gratis sesuai dengan ketentuan UU Keterbukaan Informasi Publik."
        }
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
                            Keberatan Informasi
                        </h1>
                        <p className="text-xl md:text-2xl max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
                            Prosedur Pengajuan Keberatan atas Permintaan Informasi Publik
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
                            Sesuai dengan UU No. 14 Tahun 2008 tentang Keterbukaan Informasi Publik, setiap pemohon 
                            informasi publik berhak mengajukan keberatan apabila menemui hambatan atau kegagalan dalam 
                            memperoleh informasi publik yang diminta. Halaman ini berisi informasi mengenai prosedur, 
                            alasan, dan tata cara pengajuan keberatan informasi.
                        </p>
                    </div>

                    {/* Main Image */}
                    <div className="mb-16" data-aos="fade-up">
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                            <div className="relative h-80 md:h-96">
                                <img 
                                    src="./images/keberatan.jpg" 
                                    alt="Keberatan Informasi" 
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = "https://via.placeholder.com/1200x500?text=Keberatan+Informasi";
                                    }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                                    <div className="p-8 text-white">
                                        <h2 className="text-3xl font-bold mb-2">Perlindungan Hak Informasi</h2>
                                        <p className="text-white/90">Pengajuan keberatan adalah mekanisme untuk menjamin hak masyarakat atas informasi publik</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Tabs Navigation */}
                    <div className="mb-12 flex justify-center" data-aos="fade-up">
                        <div className="inline-flex bg-white rounded-lg p-1 shadow-md">
                            <button 
                                onClick={() => setActiveTab('procedure')}
                                className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                                    activeTab === 'procedure' 
                                        ? 'bg-gradient-to-r from-blue-500 to-teal-500 text-white' 
                                        : 'text-gray-700 hover:bg-gray-100'
                                }`}
                            >
                                Prosedur
                            </button>
                            <button 
                                onClick={() => setActiveTab('reasons')}
                                className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                                    activeTab === 'reasons' 
                                        ? 'bg-gradient-to-r from-blue-500 to-teal-500 text-white' 
                                        : 'text-gray-700 hover:bg-gray-100'
                                }`}
                            >
                                Alasan Keberatan
                            </button>
                            <button 
                                onClick={() => setActiveTab('form')}
                                className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                                    activeTab === 'form' 
                                        ? 'bg-gradient-to-r from-blue-500 to-teal-500 text-white' 
                                        : 'text-gray-700 hover:bg-gray-100'
                                }`}
                            >
                                Formulir
                            </button>
                            <button 
                                onClick={() => setActiveTab('faq')}
                                className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                                    activeTab === 'faq' 
                                        ? 'bg-gradient-to-r from-blue-500 to-teal-500 text-white' 
                                        : 'text-gray-700 hover:bg-gray-100'
                                }`}
                            >
                                FAQ
                            </button>
                        </div>
                    </div>

                    {/* Procedure Tab Content */}
                    {activeTab === 'procedure' && (
                        <div className="bg-white rounded-xl shadow-lg p-8" data-aos="fade-up">
                            <h2 className="text-3xl font-bold text-gray-800 border-b-2 border-teal-500 pb-2 inline-block mb-8">
                                Prosedur Keberatan Informasi
                            </h2>
                            
                            <div className="flex justify-center mb-12">
                                <div className="relative">
                                    {/* Horizontal Timeline with connection lines */}
                                    <div className="absolute top-[72px] left-0 right-0 h-1 bg-blue-500 hidden md:block"></div>
                                    
                                    {/* Timeline steps */}
                                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                                        {objectionSteps.map((step, index) => (
                                            <div 
                                                key={step.step} 
                                                className="relative flex flex-col items-center" 
                                                data-aos="fade-up" 
                                                data-aos-delay={index * 100}
                                            >
                                                {/* Step number and icon */}
                                                <div className="w-36 h-36 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center text-white text-5xl mb-4 z-10">
                                                    {step.icon}
                                                </div>
                                                
                                                <div className="text-center">
                                                    <div className="bg-blue-100 rounded-full px-4 py-1 text-blue-800 font-bold text-sm mb-3">
                                                        Langkah {step.step}
                                                    </div>
                                                    <h3 className="text-lg font-bold text-gray-800 mb-2">{step.title}</h3>
                                                    <p className="text-gray-600 text-sm">{step.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="bg-blue-50 rounded-lg p-6 border border-blue-100" data-aos="fade-up">
                                <div className="flex items-start">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <div>
                                        <h3 className="text-lg font-semibold text-blue-800 mb-2">Catatan Penting</h3>
                                        <p className="text-blue-700">
                                            Pengajuan keberatan dapat dilakukan dalam jangka waktu paling lambat 30 (tiga puluh) hari 
                                            kerja setelah ditemukannya alasan keberatan. Atasan PPID wajib memberikan tanggapan tertulis 
                                            atas keberatan yang diajukan dalam jangka waktu paling lambat 30 (tiga puluh) hari kerja 
                                            sejak keberatan diterima.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Reasons Tab Content */}
                    {activeTab === 'reasons' && (
                        <div className="bg-white rounded-xl shadow-lg p-8" data-aos="fade-up">
                            <h2 className="text-3xl font-bold text-gray-800 border-b-2 border-teal-500 pb-2 inline-block mb-8">
                                Alasan Pengajuan Keberatan
                            </h2>
                            
                            <p className="text-gray-600 mb-8">
                                Berdasarkan UU No. 14 Tahun 2008 tentang Keterbukaan Informasi Publik, 
                                Pemohon Informasi Publik dapat mengajukan keberatan kepada atasan PPID 
                                berdasarkan alasan berikut:
                            </p>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {objectionReasons.map((reason) => (
                                    <div 
                                        key={reason.id} 
                                        className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow duration-300"
                                        data-aos="fade-up"
                                        data-aos-delay={reason.id * 50}
                                    >
                                        <div className="flex items-start">
                                            <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                                                {reason.id}
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold text-gray-800 mb-2">{reason.reason}</h3>
                                                <p className="text-gray-600">{reason.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            
                            <div className="mt-8 bg-yellow-50 p-4 rounded-lg border border-yellow-100" data-aos="fade-up">
                                <div className="flex items-start">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                    </svg>
                                    <p className="text-yellow-800">
                                        <span className="font-bold">Penting:</span> Pastikan untuk menyertakan alasan keberatan 
                                        dengan jelas saat mengajukan keberatan informasi. Hal ini akan membantu proses 
                                        penanganan keberatan Anda.
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Form Tab Content */}
                    {activeTab === 'form' && (
                        <div className="bg-white rounded-xl shadow-lg p-8" data-aos="fade-up">
                            <h2 className="text-3xl font-bold text-gray-800 border-b-2 border-teal-500 pb-2 inline-block mb-8">
                                Formulir Keberatan Informasi
                            </h2>
                            
                            <div className="max-w-3xl mx-auto">
                                <form className="space-y-6">
                                    {formFields.map((field) => (
                                        <div key={field.id} className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                                            <label htmlFor={field.id} className="block text-sm font-medium text-gray-700 md:text-right md:mt-2">
                                                {field.label}
                                            </label>
                                            {field.type === 'textarea' ? (
                                                <textarea
                                                    id={field.id}
                                                    name={field.id}
                                                    rows={4}
                                                    className="md:col-span-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                                                    placeholder={field.placeholder}
                                                ></textarea>
                                            ) : field.type === 'select' ? (
                                                <select
                                                    id={field.id}
                                                    name={field.id}
                                                    className="md:col-span-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                                                >
                                                    <option value="">-- {field.placeholder} --</option>
                                                    {field.options.map((option) => (
                                                        <option key={option.value} value={option.value}>
                                                            {option.label}
                                                        </option>
                                                    ))}
                                                </select>
                                            ) : (
                                                <input
                                                    type={field.type}
                                                    id={field.id}
                                                    name={field.id}
                                                    className="md:col-span-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                                                    placeholder={field.placeholder}
                                                />
                                            )}
                                        </div>
                                    ))}
                                    
                                    <div className="pt-5">
                                        <div className="flex justify-end">
                                            <button
                                                type="button"
                                                className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                            >
                                                Reset
                                            </button>
                                            <button
                                                type="submit"
                                                className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                            >
                                                Kirim Keberatan
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            
                            <div className="mt-8 bg-gray-50 p-6 rounded-lg border border-gray-200">
                                <h3 className="text-lg font-semibold text-gray-800 mb-4">Catatan Pengajuan Keberatan</h3>
                                <ol className="list-decimal pl-5 space-y-2 text-gray-600">
                                    <li>Isi formulir keberatan dengan lengkap dan benar.</li>
                                    <li>Lampirkan fotokopi identitas diri yang masih berlaku.</li>
                                    <li>Jika ada, lampirkan bukti terkait dengan alasan keberatan.</li>
                                    <li>Simpan nomor registrasi keberatan yang akan diberikan oleh petugas untuk keperluan pelacakan status keberatan.</li>
                                    <li>Keberatan yang telah diajukan tidak dapat dibatalkan, namun dapat dicabut jika Anda merasa permasalahan sudah diselesaikan.</li>
                                </ol>
                            </div>
                        </div>
                    )}

                    {/* FAQ Tab Content */}
                    {activeTab === 'faq' && (
                        <div className="bg-white rounded-xl shadow-lg p-8" data-aos="fade-up">
                            <h2 className="text-3xl font-bold text-gray-800 border-b-2 border-teal-500 pb-2 inline-block mb-8">
                                Pertanyaan Umum
                            </h2>
                            
                            <div className="space-y-4">
                                {faqItems.map((item, index) => (
                                    <div 
                                        key={index} 
                                        className="border border-gray-200 rounded-lg overflow-hidden"
                                        data-aos="fade-up"
                                        data-aos-delay={index * 100}
                                    >
                                        <div className="bg-gray-50 px-6 py-4">
                                            <h3 className="text-lg font-semibold text-gray-800">{item.question}</h3>
                                        </div>
                                        <div className="px-6 py-4">
                                            <p className="text-gray-600">{item.answer}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            
                            <div className="mt-8 bg-blue-50 p-6 rounded-lg border border-blue-100" data-aos="fade-up">
                                <div className="flex items-start">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <div>
                                        <h3 className="text-lg font-semibold text-blue-800 mb-2">Butuh Bantuan Lebih Lanjut?</h3>
                                        <p className="text-blue-700">
                                            Jika Anda memiliki pertanyaan yang tidak tercantum di sini atau memerlukan bantuan lebih lanjut, 
                                            silakan hubungi PPID RS Paru Sumatera Barat melalui telepon (0752) 123456 atau 
                                            email ppid@rsparusumbar.go.id.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Contact Section */}
                    <div className="mt-12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-xl shadow-lg p-8 text-white" data-aos="fade-up">
                        <div className="md:flex items-center justify-between">
                            <div className="md:w-2/3 mb-6 md:mb-0">
                                <h3 className="text-2xl font-bold mb-2">Hubungi PPID RS Paru Sumatera Barat</h3>
                                <p className="text-white/90">
                                    Untuk informasi lebih lanjut tentang prosedur pengajuan keberatan informasi, 
                                    silakan hubungi PPID RS Paru Sumatera Barat.
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

export default Keberatan;