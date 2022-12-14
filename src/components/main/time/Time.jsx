import React from "react";
import "./Time.scss";
import { Link} from "react-router-dom";


const Time =()=>{
    const card= [
      {
        "linkImg" : " https://texnomart.uz/_nuxt/img/installment-1.da8d77c.svg",
        "heading" : " Muddatli to'lovga sotib olish",
        "text" : " Texnomart maishiy texnika maxsulotlari uchun qulay onlayn to'lov"
      },
      {
        "linkImg" : "https://texnomart.uz/_nuxt/img/installment-2.de0c0ae.svg",
        "heading" : " Bepul yetkazib berish",
        "text" : " Texnomart tavarlarini yetkazib berish shartlari"
      },
      {
        "linkImg" : "https://texnomart.uz/_nuxt/img/installment-3.575d98a.svg",
        "heading" : " Mahsulotlar uchun kafolat",
        "text" : "Texnomartdan mahsulotning kafolati va qaytarilishi haqidagi hama ma`lumotlar"
      },
      {
        "linkImg" : "https://texnomart.uz/_nuxt/img/installment-4.4086694.svg",
        "heading" : "Bonus tizimi",
        "text" : "Yordam tizimi"
      },
      {
        "linkImg" : "https://texnomart.uz/_nuxt/img/installment-5.513f513.svg",
        "heading" : "Yordam",
        "text" : "Ko'p beriladigan savollar"
      }
    ]
  return(
    <div className="time">
      <h2 className="time__heading">
        Telefonlar va maishiy texnikalarni muddatli to'lovga
      </h2>
      <div className="time__bottom">
        {
          card.map((item, index )=>
              <>
                <Link className="time__bottom--link" key={index}>
                <div className="time__bottom--wrapper">
                  <img  src={ item.linkImg} alt="img" />
                </div>
                <h3 className="time__bottom--heading"> { item.heading} </h3>
                <p className="time__bottom--text"> { item.text} </p>
                </Link>
              </>
            )
        }
      </div>
    </div>
  );
}
export default Time;
