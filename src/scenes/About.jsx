import React from 'react'
import useMediaQuery from "../hooks/useMediaQuery";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { motion } from 'framer-motion';
import SocialMediaIcons from '../components/SocialMediaIcons'
import LineGradient from '../components/LineGradient';
import { useTranslation } from 'react-i18next';

const About = ({setSelectedPage, aboutTitle, aboutContent, button02, button03, font}) => {

    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    const { t, i18n } = useTranslation();

    return (
        <section
            id='about'
            className='md:flex md:justify-between md:items-center md:h-full gap-16 py-10 md:py-20'
        >

        {/* Image Section */}
        <motion.div className='md:order-2 flex justify-center basis-4/5 z-10 mt-16 md:mt-24'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: {opacity:0},
                        visible: {opacity:1}
                    }}
        >
            {isAboveMediumScreens ? (
                
                <div className='overflow-hidden cursor-pointer rounded-sm relative group z-0 before:absolute before:w-full before:max-w-[500px] before:h-full'>
                    <img
                    className='object-cover group-hover:scale-110 transition duration-500 ease-in-out z-10 w-full max-w-[450px] md:max-w-[550px]'
                    alt='Library of Scholars' src='about01.jpeg' />
                </div>
                
            ) : (
                <div>
                    <img
                    className='group-hover:scale-110 transition duration-500 ease-in-out z-10 w-full max-w-[450px] md:max-w-[550px]'
                    alt='Library of Scholars' src='about01.jpeg' />
                </div>
            )}
        </motion.div>

        {/* About Section */}
        <div className={`z-30 basis-4/5 ${i18n.language === 'Arabic' || 'عربي' ?  'font-reem': 'font-noto'} mt-12 md:mt-32`}>
            <motion.div
                className=''
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: {opacity:0, x:-50},
                    visible: {opacity:1, x:0}
                }}
            >
                <h2 className='text-2xl font-bold z-10 text-center md:text-right uppercase text-mettalic-gold'>
                    {aboutTitle}
                </h2>
                {/* <div className=''>
                    <LineGradient width='w-40' />
                </div> */}
                <p className='mt-5 mb-8 text-md text-center md:text-right font-normal'>
                    {aboutContent}
                </p>
            </motion.div>

            {/*<motion.div
                className='flex justify-center md:justify-start gap-5'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                transition={{ delay:0.2, duration: 0.5 }}
                variants={{
                    hidden: {opacity:0, x:-50},
                    visible: {opacity:1, x:0}
                }}
            >
                <AnchorLink
                    className='bg-gradient-rainblue text-mettalic-gold rounded-md py-3 px-7 font-montserrat font-semibold
                    hover:text-white transition-all duration-500'
                    onClick={() => setSelectedPage("services")}
                >
                    Services
                </AnchorLink>
                <AnchorLink
                    className='bg-gradient-rainbow text-mettalic-gold rounded-md py-3 px-7 font-montserrat font-semibold
                    hover:text-white transition-all duration-500'
                    onClick={() => setSelectedPage("services")}
                >
                    Packages
                </AnchorLink>
            </motion.div>*/}
            <motion.div class="mt-8 flex flex-wrap gap-4 text-center place-content-end"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 0.75 }}
                    variants={{
                        hidden: {opacity:0, x:-50},
                        visible: {opacity:1, x:0}
                    }}
            >
                    <a
                    href="#packages"
                    class="block w-full rounded bg-russian-violet px-12 py-3 text-sm font-semibold text-white shadow hover:bg-mettalic-gold focus:outline-none focus:ring sm:w-auto"
                    >
                    {button03}
                    </a>

                    <a
                    href="#services"
                    class="block w-full rounded bg-white px-12 py-3 text-sm font-semibold text-russian-violet shadow hover:text-black focus:outline-none focus:ring sm:w-auto"
                    >
                    {button02}
                    </a>
            </motion.div>

            <motion.div className=""
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                transition={{ delay:0.3, duration: 0.5 }}
                variants={{
                    hidden: {opacity:0, x:-50},
                    visible: {opacity:1, x:0}
                }}
            >
            <SocialMediaIcons align = "place-content-end" />
            </motion.div>
            

        </div>
        </section>
    )
}

export default About