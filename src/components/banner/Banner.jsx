import { useState, useEffect, useRef } from 'react';
import "./Banner.scss";
import images from "../../dummy-banner.json";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi"

const Banner = () => {

    const carouselWrapperEl = useRef();
    const [currentImage, setCurrentImage] = useState(0);
    const swipeRight = () => {
        if (currentImage < images.length - 1) {
            setCurrentImage(currentImage => currentImage + 1)
        }
        else {
            setCurrentImage(0)
        }
    }
    const swipeLeft = () => {
        if (currentImage > 0) {
            setCurrentImage(currentImage => currentImage - 1)
        }
        else {
            setCurrentImage(images.length - 1)
        }
    }
    useEffect(() => {
        carouselWrapperEl.current.scrollLeft = currentImage * carouselWrapperEl.current.offsetWidth;
    }, [currentImage])
    useEffect(() => {
        setInterval(() => {
            setCurrentImage(currentImage => currentImage + 1)
        }, 3000)
    }, [])
    return (
        <div className="carusel">
            <button data-btn-type='left' className="carusel__btn" onClick={swipeLeft}><FiArrowLeft /></button>
            <div className="carusel__wrapper" ref={carouselWrapperEl}>
                {images.map((carouselItem, index) => (
                    <div key={index}>
                        <img
                            className="carusel__item"
                            src={carouselItem}
                            alt="ImagesCarousel"
                        />
                    </div>
                ))}
            </div>
            <div className="dots">
                {
                    images.map((dot, index) =>
                        <div onClick={() => {
                            setCurrentImage(index)
                        }}
                            style={currentImage === index ? { background: "white", transform: "scale(1.5)" } : null}
                            className="dots__dot" key={index}></div>
                    )
                }
            </div>
            <button data-btn-type='right' className="carusel__btn" onClick={swipeRight}> <FiArrowRight /> </button>
        </div>
    );
}
export default Banner;