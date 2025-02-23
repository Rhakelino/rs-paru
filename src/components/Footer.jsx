import React from 'react'

const Footer = () => {
    return (
        <div className="flex flex-col bg-[#1D232A] text-white md:flex-row gap-10 p-8">
            <div className="flex justify-center">
                <img src="./images/logo.png" className="w-40 md:w-52 object-cover" />
            </div>
            <div className="flex w-full">
                <div className="flex flex-col w-full justify-center items-center">
                    <h1 className="font-medium text-xl mb-3">Kontak Kami</h1>
                    <hr />
                    <p className="opacity-80 mb-1">Telepon</p>
                    <p className="text-sm font-thin mb-2">(0751) 96688</p>
                    <p className="opacity-80 mb-1">Alamat</p>
                    <p className="text-sm font-thin">Jln. Dr. M. Djamil No.110, Lubuk Alung, Kabupaten Padang Pariaman, Sumatera Barat 25582</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
