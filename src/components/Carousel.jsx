"use client"

import { useState } from 'react';

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slides = [
        { text: "First slide" },
        { text: "Second slide" },
        { text: "Third slide" },
    ];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
    };

    return (
        <div className="relative">
            <button className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-500 text-white px-4 py-2 rounded" onClick={prevSlide}>
                Prev
            </button>
            <button className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-500 text-white px-4 py-2 rounded" onClick={nextSlide}>
                Next
            </button>
            <div className="flex">
                {slides.map((slide, index) => (
                    <div key={index} className={`w-full h-10 ${index === currentIndex ? 'block' : 'hidden'}`}>
                        <div className="bg-gray-200  p-4">{slide.text}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
