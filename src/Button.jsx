import React from 'react'
import {useTranslation} from 'react-i18next';
import i18n from './i18n';
import './i18n';

const Button = () => {
  const { i18n:i18nHook } = useTranslation();

    function handleTranslate() {
         const nextLanguage = i18n.language === 'en' ? 'uk' : 'en';
    i18n.changeLanguage(nextLanguage);
    }
  return (
    <>
        
            <button 
            className='border-2 h-10 border-blue-500 bg-blue-100 text-blue-500 font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-blue-200 transition-colors duration-300'
            type="submit" 
            onClick={handleTranslate}
            >{i18nHook.language === 'uk' ? 'english' : 'Солов’їна'}</button>

    </>
  )
}

export default Button