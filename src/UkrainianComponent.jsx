import React from 'react'
import { useTranslation } from 'react-i18next'

import './i18n'


const UkrainianComponent = () => {
    const {t,ready}=useTranslation()
    if (!ready) return <div>Loading...</div>

    const items=t('items', { returnObjects: true })


  return (
    <div className='bg-blue-100 p-4 rounded-lg shadow-md w-1/2 mx-auto mt-10'>
         {items.map((item,index)=>(
              <div key={index} className='mb-2 p-2 border-b border-blue-300 last:border-b-0'>
                 <h3 className='text-lg font-semibold'>{item.title}</h3>
                 <p className='text-gray-700'>{item.text}</p>
              </div>
         )

         )}


    </div>
  )
}

export default UkrainianComponent