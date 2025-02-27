import React, { useEffect } from 'react'
import Card from './Card'


const data = [
    { title: 'RS Paru Sumatera Barat', description: 'Lorem ipsum dolor sit amet', image: './images/bg-hero.jpeg' },
    { title: 'Pelayanan Farmasi', description: 'Lorem ipsum dolor sit amet', image: './images/farmasi.jpeg' },
    { title: 'Pelayanan IGD', description: 'Lorem ipsum dolor sit amet', image: './images/igd.jpeg' },
    { title: 'Pelayanan Rawat Inap', description: 'Lorem ipsum dolor sit amet', image: './images/inap.jpeg' },
    { title: 'Laboratorium Rs Paru', description: 'Lorem ipsum dolor sit amet', image: './images/labor.jpg' },
    { title: 'Pelayanan Radiologi', description: 'Lorem ipsum dolor sit amet', image: './images/radiologi.jpeg' },
];


const Galleri = () => {
    return (
        <div className="container mx-auto px-6 py-12">
            <h2 className="text-3xl font-bold text-center mb-8">GALERI </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.map((item, index) => (
                    <Card
                        key={index}
                        title={item.title}
                        description={item.description}
                        image={item.image}
                    />
                ))}
            </div>
        </div>
    )
}

export default Galleri
