import { useState,useEffect,useRef} from 'react';
import "./Public.scss";
import {FiArrowRight,FiArrowLeft} from "react-icons/fi"
import { Link } from "react-router-dom";



const Swiper = () => {
  const images= [
    {
        "imgLink" : "https://backend.texnomart.uz/files/global/new-photo/img/special-slider/pilesos.svg",
        "text" : "Chanbyutgichlar"
    },
    {   
        "imgLink" : "https://backend.texnomart.uz/files/global/new-photo/img/special-slider/planshet.svg",
        "text" : "Planshedlar"
    },
    {
        "imgLink" : "https://backend.texnomart.uz/files/global/new-photo/img/special-slider/xolodilnik.svg",
        "text" : "Muzlatgichlar"
    },
    {
        "imgLink" : "https://backend.texnomart.uz/files/global/new-photo/img/special-slider/klimaticheskaya-texnika.svg",
        "text" : "Havo sovutgich"
    },
    {
        "imgLink" : "https://backend.texnomart.uz/files/global/new-photo/img/special-slider/lg.svg",
        "text" : "Televizor"
    },
    {
        "imgLink" : "https://backend.texnomart.uz/files/global/new-photo/img/special-slider/feni.svg",
        "text" : "Fenlar"
    },
    {
        "imgLink" : "https://backend.texnomart.uz/files/global/new-photo/img/special-slider/stiralnaya_mashina.svg",
        "text" : "Kir yuvish mashinasi"
    }  
]       
    const publicWrapperEl = useRef();
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
      publicWrapperEl.current.scrollLeft = currentImage * 202;
    }, [currentImage])
return (
    <div className="public">
      <h2 className='public__heading'> Ommabop kategoriyalar </h2>
        <button data-btn-type='left' className="public__btn" onClick={swipeLeft}> <FiArrowLeft/> </button>
        <div  className="public__wrapper"  ref={ publicWrapperEl}>
        {images.map((publicItem ,index) => (
            <Link to="/" className="public__wrapper--link" key={index}>
                <img
                className="public__item"
                src={ publicItem.imgLink}
                alt=" Public Logo"
                />
                <span swiper__wrapper--link__span>{publicItem.text}</span>
            </Link>
        ))}
        </div>
        <button data-btn-type='right' className="public__btn" onClick={swipeRight}> <FiArrowRight/> </button>
    </div>
);
}
export default Swiper;