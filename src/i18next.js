import i18n from "i18next";
import { useTranslation, initReactI18next} from "react-i18next";
import { LanguageDetector } from 'i18next-browser-languagedetector';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
   
    resources: {
      uz: {
        translation: {
          "Kalt": "salom"
        }
      },
      ru: {
        translation: {
          "Kalt": "салом"
        }
      }
    },
    fallbackLng: "en",
    detection : {
      order : [ 'htmlTag' , 'cookie' , 'localStorage', 'path', 'subdomine' ],
      caches : [ 'cookie']
    },
    interpolation: {
      escapeValue: false 
    }
  });
  function I18next(){
    const { t } = useTranslation();
    return <h2>{t('Kalt')}</h2>;
  }
  export default I18next;

