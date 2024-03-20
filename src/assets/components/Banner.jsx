import React, { useState, useEffect } from 'react';
import "./../../assets/css/Banner.css";

function Banner() {
    const images = ['/img/bannerone-img.jpg', '/img/bannertwo-img.jpg'];
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextBanner = () => {
        setCurrentIndex ((previousIndex) => (previousIndex + 1) % images.length);
    };

    const clickToPassImg = () => {
        nextBanner ();
    };

    useEffect (() => {
        const interval = setInterval (nextBanner, 10000);
        return () => clearInterval (interval);
    }, []);

    return (
        
        <div className = "img-banner">
            <img
                src = {images[currentIndex]}
                alt = {`Image ${currentIndex + 1}`}
                onClick = {clickToPassImg}
            />
        </div>
    );
};
export default Banner;