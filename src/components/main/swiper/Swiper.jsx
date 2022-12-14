import { useState,useEffect,useRef} from 'react';
import "./Swiper.scss";
import {FiArrowRight,FiArrowLeft} from "react-icons/fi"
import { Link } from "react-router-dom";



const Swiper = () => {
    const images= [
                "https://backend.texnomart.uz//images/brands/2022101404154940058.webp",
                "https://backend.texnomart.uz//images/brands/2022101404501355729.webp",
                "https://backend.texnomart.uz//images/brands/2022101404542676301.webp",   
                "https://backend.texnomart.uz//images/brands/2022101404481916020.webp",
                "https://backend.texnomart.uz//images/brands/2022101405315369098.webp",
                "https://backend.texnomart.uz//images/brands/2022101404183539183.webp",
                "https://backend.texnomart.uz//images/brands/2022101404450190315.webp",
                "https://backend.texnomart.uz//images/brands/2022101404474125545.webp",
                "https://backend.texnomart.uz//images/brands/2022101404461797247.webp",   
                "https://backend.texnomart.uz//images/brands/2022101404240931733.webp"  
            
    ]       
    const swiperWrapperEl = useRef();
    const [currentImage,setCurrentImage] = useState(0);
    const swipeRight = () => {
        if(currentImage < images.length - 1){
            setCurrentImage(currentImage =>  currentImage + 1)
        }
        else{
            setCurrentImage(0)
        }
    }
    const swipeLeft = () => {
        if(currentImage > 0){
            setCurrentImage(currentImage => currentImage - 1)
        }
        else{
            setCurrentImage(images.length -1)
        }
    }
    useEffect(() => {
      swiperWrapperEl.current.scrollLeft = currentImage * 143;
    }, [currentImage])
return (
    <div className="swiper">
        <button data-btn-type='left' className="swiper__btn" onClick={swipeLeft}> <FiArrowLeft/> </button>
        <div  className="swiper__wrapper"  ref={ swiperWrapperEl}>
        {
            images.map(( swiperItem ,index) => (
                <Link to="/" className="swiper__wrapper--link" key={index}>
                    <img
                    className="swiper__item"
                    src={ swiperItem }
                    alt=" Swiper Logo"
                    />
                </Link>
        ))}
        </div>
        <button data-btn-type='right' className="swiper__btn" onClick={swipeRight}> <FiArrowRight/> </button>
    </div>
);
}
export default Swiper;