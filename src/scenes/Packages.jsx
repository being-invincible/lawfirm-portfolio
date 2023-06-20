import React from 'react'
import { Link,Route, BrowserRouter as Router } from 'react-router-dom';
import useMediaQuery from "../hooks/useMediaQuery";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { motion } from 'framer-motion';
import LineGradient from '../components/LineGradient';
import { useTranslation } from 'react-i18next';
import Package from '../pages/Package01';

// json data
import ar from "../lng/ar.json"
import en from "../lng/en.json"
import { MdCheckCircle } from 'react-icons/md';

const serviceVariant = {
    hidden: { opacity:0, scale: 0.8 },
    visible: { opacity:1, scale: 1 },
};

const Packag = ({ title, price, desp, currency, points, link }) => {
    const { t, i18n } = useTranslation();

    return (
        <div className='w-full group h-88 p-8 mb-5 bg-gradient-to-tr from-coyote to-arylide-yellow rounded-lg hover:drop-shadow-lg hover:border-russian-violet hover:border-2 hover:bg-gradient-to-tr hover:to-sheen-gold hover:from-ecru hover:scale-110 transition-all'>
        
        {i18n.language === 'عربي' ? (
            <motion.div variants={serviceVariant} className={`text-right group-hover:text-russian-violet grid h-full place-content-between`}>
            <div>
            <p className='font-normal text-lg mb-0'>{desp}</p>
            <div className='flex flex-row-reverse items-baseline'>
                <p className='pr-4 py-5 order-2 text-lg'>{currency}</p>
                <h1 className='py-5 font-bold text-5xl'>{price}</h1>
            </div>

            <ul className='flex flex-col text-md gap-y-1'>
            {points.map((s, i) =>
                <li className='grid grid-cols-6 items-baseline align-text-top'>
                    <h2 className='col-span-5'>{points[i]}</h2>
                    <div className='col-span-1 flex flex-row-reverse w-full'>
                    <MdCheckCircle/>
                    </div>
                    
                </li>
            )}
            </ul>
            </div>
            <div class="mt-3 sm:mt-4 w-full flex items-stretch">
                <Link to={link}>
                    <button
                    class="block w-full rounded-lg bg-russian-violet text-mettalic-gold border-2 border-mettalic-gold px-8 py-3 text-sm text-center font-semibold  shadow hover:bg-mettalic-gold hover:text-russian-violet hover:border-russian-violet focus:outline-none focus:ring sm:w-[17.5rem] transition duration-500"
                    >
                    {t("button04")}
                    </button>
                </Link>
              </div>
            
        </motion.div>

        ) : (
            <motion.div variants={serviceVariant} className={`text-left grid h-full place-content-between`}>
            <div>
            <p className='font-normal text-md group-hover:text-russian-violet'>{desp}</p>
            <div className='flex flex-row my-5 items-baseline group-hover:text-russian-violet'>
                <p className='ml-4 order-2 text-lg'>{currency}</p>
                <h1 className='font-bold text-5xl'>{price}</h1>
            </div>

            <ul className='flex flex-col text-md gap-y-1'>
            {points.map((s, i) =>
                <li className='grid grid-cols-6 items-baseline align-text-top group-hover:text-russian-violet'>
                    <div className='col-span-1 flex flex-row w-full'>
                    <MdCheckCircle/>
                    </div>
                    <h2 className='col-span-5'>{points[i]}</h2>
                </li>
            )}
            </ul>
            </div>
            
            <div class="w-full mt-5 flex items-stretch">
            <Link to={link}>
                <button
                  class=" self-end block w-full rounded-lg bg-transparent text-russian-violet border-2 border-russian-violet px-8 py-3 text-sm text-center font-semibold  shadow hover:bg-mettalic-gold hover:text-russian-violet hover:border-russian-violet focus:outline-none focus:ring sm:w-[17.5rem] transition duration-500"
                >
                  {t("button04")}
                </button>
            </Link>
            </div>
            
        </motion.div>
        )}
        
        </div>
    )
}

const Packages = ({packages}) => {

    const { t, i18n } = useTranslation();

    const points01 = i18n.language === 'عربي' ? ar['package'].package01.points : en['package'].package01.points;
    const points02 = i18n.language === 'عربي' ? ar['package'].package02.points : en['package'].package02.points;
    const points03 = i18n.language === 'عربي' ? ar['package'].package03.points : en['package'].package03.points;

  return (
    <section data-section id="packages" className={`pt-10 pb-10 ${i18n.language === 'Arabic' || 'عربي' ?  'font-reem': 'font-noto'}`}>
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
                     </div>
                ) : (
                    <div>
                    <h2 className='text-mettalic-gold text-2xl font-bold font-montserrat z-10 text-center md:text-start uppercase'>
                        {packages}
                    </h2>
                    {/* <p className='mt-5 mb-8 text-md text-center md:text-start font-montserrat font-medium'>
                        Explore our packages which is carefully build upon the cases.
                    </p> */}
                    </div>
                )}
               
            </motion.div>
        </div>
        {/* Packages */}
        {i18n.language === 'عربي' ? (
        <div className='flex flex-col-reverse md:flex-row md:justify-between mt-10 gap-12'>

            <Packag title = {(t(`${"package"}.package03.id`))} currency = {t(`${"package"}.package03.currency`)} price = {t(`${"package"}.package03.price`)} desp = {t(`${"package"}.package03.title`)} points={points03} link="/package03" />
            <Packag title = {(t(`${"package"}.package02.id`))} currency = {t(`${"package"}.package02.currency`)} price = {t(`${"package"}.package02.price`)} desp = {t(`${"package"}.package02.title`)} points={points02} link="/package02" />
            
            <Packag title = {(t(`${"package"}.package01.id`))} currency = {t(`${"package"}.package01.currency`)} price = {t(`${"package"}.package01.price`)} desp = {t(`${"package"}.package01.title`)} points={points01} link="/package01" />
            
        </div>
        ) : (
            <div className='md:flex md:justify-between mt-10 gap-12'>
            
            <Packag title = {(t(`${"package"}.package01.id`))} currency = {t(`${"package"}.package01.currency`)} price = {t(`${"package"}.package01.price`)} desp = {t(`${"package"}.package01.title`)} points={points01} link="/package01" />
            
            <Packag title = {(t(`${"package"}.package02.id`))} currency = {t(`${"package"}.package02.currency`)} price = {t(`${"package"}.package02.price`)} desp = {t(`${"package"}.package02.title`)} points={points02} link="/package02" />
            <Packag title = {(t(`${"package"}.package03.id`))} currency = {t(`${"package"}.package03.currency`)} price = {t(`${"package"}.package03.price`)} desp = {t(`${"package"}.package03.title`)} points={points03} link="/package03" />
            </div>
        )}
    </section>
  )
}

export default Packages