import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS

const NewsCard = ({ image, title, description, time }) => {
  useEffect(() => {
    AOS.init({
      duration: 500, // durasi animasi dalam milidetik
      once: false, // animasi hanya dijalankan sekali
    });
  }, []);
  return (
    <div className="bg-white text-gray-900 shadow-sm rounded-lg overflow-hidden" data-aos="fade-up">
      <img src={image} alt={title} className="object-cover bg-center w-full h-48" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{time}</p>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <a href="#" className="text-blue-500 hover:underline">Read More</a>
      </div>
    </div>
  );
};

export default NewsCard;
