import React from 'react'
import { Link,Route, BrowserRouter as Router } from 'react-router-dom';
import useMediaQuery from "../hooks/useMediaQuery";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { motion } from 'framer-motion';
import LineGradient from '../components/LineGradient';
import { useTranslation } from 'react-i18next';
import Package from '../pages/Package';

const serviceVariant = {
    hidden: { opacity:0, scale: 0.8 },
    visible: { opacity:1, scale: 1 },
};


const tickMessage = () => {
    return (
        <div>

        </div>
    )
}

const Packag = ({ title, price, desp, list1, list2, list3, font }) => {
    
    return (
        <motion.div variants={serviceVariant} className={`w-full h-80 p-8 mb-5  bg-gradient-to-tr from-ecru to-sheen-gold rounded-lg hover:drop-shadow-lg hover:bg-gradient-to-tr hover:to-arylide-yellow hover:from-coyote`}>
            <h1 className='font-normal text-sm'>{title}</h1>
            <h1 className='py-5 font-bold text-5xl'>{price}</h1>
            <p className='font-normal text-lg mb-5'>{desp}</p>
            <ul className='flex flex-col text-md gap-y-2'>
                <li className='flex items-center'>
                    <img src='/tick-and-circle.svg' alt='tick icon' width={20} />
                    <h2 className='ml-3'>{list1}</h2>
                </li>
                <li className='flex items-center'>
                    <img src='/tick-and-circle.svg' alt='tick icon' width={20} />
                    <h2 className='ml-3'>{list2}</h2>
                </li>
                <li className='flex items-center'>
                    <img src='/tick-and-circle.svg' alt='tick icon' width={20} />
                    <h2 className='ml-3'>{list3}</h2>
                </li>
            </ul>
        </motion.div>
    )
}

const Packages = ({packages}) => {

    const { t, i18n } = useTranslation();

  return (
    <section id="packages" className={`pt-10 pb-10 ${i18n.language === 'Arabic' || 'عربي' ?  'font-reem': 'font-noto'}`}>
        {/* Header */}
        <div className='basis-4/5 mt-16 mb:10 md:mt-24'>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.2 }}
                variants={{
                    hidden: {opacity:0, x:-50},
                    visible: {opacity:1, x: 0}
                }}
            >
                {i18n.language === 'عربي' ? (
                     <div>
                     <h2 className='text-mettalic-gold text-2xl font-bold font-montserrat z-10 text-center md:text-end uppercase'>
                         {packages}
                     </h2>
                     <p className='mt-5 mb-8 text-md text-center md:text-end font-montserrat font-medium'>
                         Explore our packages which is carefully build upon the cases.
                     </p>
                     </div>
                ) : (
                    <div>
                    <h2 className='text-mettalic-gold text-2xl font-bold font-montserrat z-10 text-center md:text-start uppercase'>
                        {packages}
                    </h2>
                    <p className='mt-5 mb-8 text-md text-center md:text-start font-montserrat font-medium'>
                        Explore our packages which is carefully build upon the cases.
                    </p>
                    </div>
                )}
               
            </motion.div>
        </div>
        {/* Packages */}
        <div className='md:flex md:justify-between mt-10 gap-16'>
            <Packag title = "Package 01" price = "$ 100" desp = "Basic plan" list1 = "Point 1" list2 = "Point 2" list3 = "Point 3" />
            
            <Packag title = "Package 02" price = "$ 300" desp = "Advanced plan" list1 = "Point 1" list2 = "Point 2" list3 = "Point 3" />
            <Packag title = "Package 03" price = "$ 900" desp = "Custom build plan" list1 = "Point 1" list2 = "Point 2" list3 = "Point 3" />
        </div>
    </section>
  )
}

export default Packages