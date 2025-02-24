import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Sejarah = () => {
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
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">SEJARAH</h1>
                    <div className="flex justify-center">
                        <img src="./images/sejarah.jpeg" className='rounded-md md:w-full md:h-60 object-cover overflow-hidden shadow-md mb-4' />
                    </div>
                    <div className="flex flex-col gap-3">
                    <p className='text-justify opacity-60 leading-relaxed'>Rumah Sakit Paru Sumatera Barat merupakan UPTD Dinas Kesehatan Provinsi Sumatera Barat, awalnya dulu adalah Balai Pengobatan Penyakit Paru-Paru (BP4) Lubuk Alung. Balai Pengobatan Penyakit Paru-Paru (BP4) Lubuk Alung, berubah status menjadi Rumah Sakit Paru Sumatera Barat sesuai dengan Peraturan Daerah Provinsi Sumatera Barat Nomor 11 Tahun 2017 tentang Penetapan Status Balai Pengobatan Penyakit Paru-Paru menjadi Rumah Sakit Paru Sumatera Barat.</p>
                    <p className='text-justify opacity-60 leading-relaxed'>Berdirinya BP 4 Lubuk Alung diawali dari hasil rapat kerja pemberantasan penyakit tuberkulosis yang dilaksanakan di Kaliurang, Yogyakarta tahun 1952. Dimana pertemuan tersebut menghasilkan beberapa keputusan. Salah satu keputusan dari rapat tersebut adalah mendirikan Balai Pemberantasan Penyakit Tuberkulosis (BP 4) Pusat di tiap ibukota Provinsi dan mendirikan BP 4 cabang di tiap ibukota Kabupaten/Kotamadya.</p>
                    <p className='text-justify opacity-60 leading-relaxed'>Sebagai tindak lanjut dari keputusan tersebut, propinsi Sumatera Barat yang waktu itu di motori oleh Prof. Ilyas H. Dt. Batoeh (almarhum) mendirikan BP 4 Sumatera Barat, yang didirikan di Bukit tinggi.</p>
                    <p className='text-justify opacity-60 leading-relaxed'>Sejalan dengan Otonomi Daerah tahun 2001 BP4 Lubuk Alung diambil alih oleh Pemerintah Provinsi Sumatera Barat menjadi UPTD Dinas Kesehatan Provinsi Sumatera Barat. Sesuai dengan tuntutan jangkauan dan jaminan mutu pelayanan kesehatan paru masyarakat maka pada tahun 2012 BP4 melaksanakan Study Kelayakan. Berdasarkan rekomendasi dari hasil studi kelayakan tersebut maka BP4 berubah fungsi menjadi Rumah Sakit Paru. Banyak Aspek yang harus dikembangkan dan ditingkatkan untuk menjadi Rumah Sakit Paru antara lain :</p>
                    <p className='text-justify opacity-60 leading-relaxed'>Berdasarkan hasil rekomendasi tersebut dan juga dengan berbagai pertimbangan teknis lainnya, selanjutnya tanggal 30 Maret 2015 Gubernur Sumatera Barat mengeluarkan surat keputusan nomor 445-266-2015 tentang izin operasional Rumah Sakit Paru Kelas B. Selanjutnya berdasarkan Surat Kepala Dinas Kesehatan Provinsi Sumatera Barat tanggal 7 Mei 2015No . PPK.03./928/V/2015 BP4 teregistrasi di Kementerian Kesehatan RI sebagai Rumah Sakit Paru dengan nomor register 1306057.</p>
                    <p className='text-justify opacity-60 leading-relaxed'>Dalam rangka untuk dapat menjalankan fungsi sebagai Rumah Sakit Paru Kelas B, BP 4 Lubuk Alung terus berupaya melengkapi sarana, prasarana dan juga menambah jumlah serta meningkatkan skill sumber daya manusianya baik dengan cara meningkatkan jenjang pendidikan maupun mengikuti pelatihan.</p>
                    <p className='text-justify opacity-60 leading-relaxed'>Berdasarkan keputusan Gubernur Sumatera Barat nomor 445-542-2013 tanggal 24 Juni 2013 diterbitkan izin mendirikan Rumah Sakit Paru Kelas B. Pada tanggal 30 Maret 2015 Gubernur Sumatera Barat mengeluarkan surat keputusan nomor 445-266-2015 tentang izin operasional Rumah Sakit Paru Kelas B. Selanjutnya berdasarkan Surat Kepala Dinas Kesehatan Provinsi Sumatera Barat tanggal 7 Mei 2015 No . PPK.03./928/V/2015 BP4 teregistrasi di Kementerian Kesehatan RI sebagai Rumah Sakit Paru dengan nomor register 1306057.</p>
                    </div>

                </div>

            </div>

            <Footer />

        </>
    )
}

export default Sejarah
