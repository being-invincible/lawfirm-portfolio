import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next';
import LineGradient from '../components/LineGradient'

const container = {
    hidden: {},
    visible: {
        transition: {staggerChildren: 0.2},
    },
};

const serviceVariant = {
    hidden: { opacity:0, scale: 0.8 },
    visible: { opacity:1, scale: 1 },
};

const Service = ({ title, desp, font }) => {

    
    const projectTitle = title.split(" ").join("-").toLowerCase;
    
    return (
        <motion.div variants={serviceVariant}>
            <div class={`group relative cursor-pointer items-center justify-center overflow-hidden `}>
            <div class="h-72 w-92">
                <img class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-125" src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="about the law firm" />
                <div class="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-gray/10 group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70">
                <div class="absolute inset-0 flex flex-col items-center justify-center px-9 text-center transition-all group-hover:translate-y-0 duration-500">
                    <h1 class="group-hover:hidden block text-2xl font-bold text-russian-violet">{title}</h1>
                    <p class="group-hover:block hidden  mb-3 text-md font-semibold text-justify text-white">{desp}</p>
                </div>
                </div>
            </div>
            </div>
        </motion.div>
    )
}

const Services = ({services, serviceTitle01, serviceTitle02, serviceTitle03, serviceTitle04, serviceTitle05, serviceTitle06, serviceTitle07, serviceTitle08, serviceTitle09, serviceContent01, serviceContent02, serviceContent03, serviceContent04, serviceContent05, serviceContent06, serviceContent07, serviceContent08, serviceContent09, font }) => {

    const { t, i18n } = useTranslation();
  return (
    <section id='services' className='pt-32 pb-32'>
        {/* Heading */}
        <motion.div
                className={`mx-auto text-center ${i18n.language === 'Arabic' || 'عربي' ?  'font-reem': 'font-noto'}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: {opacity:0, y:-50},
                    visible: {opacity:1, y: 0}
                }}
        >
                <div>
                    <h2 className='pb-8 md:mb-0 text-xl font-bold text-center sm:text-left uppercase text-russian-violet'>
                        {services}
                    </h2>
                    {/* <div className=''>
                        <LineGradient width='w-20' />
                    </div> */}
                </div>
                
            </motion.div>

            {/* Services */}
            <div className={`flex justify-center ${i18n.language === 'Arabic' || 'عربي' ?  'font-reem': 'font-noto'}`}>
                <motion.div
                        className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={container}
                >

                    <Service title={serviceTitle01} desp={serviceContent01} img="/public/Legal Advice.jpg" font={font}/>
                    <Service title={serviceTitle02} desp={serviceContent02} img="Legal Advice.jpg" font={font}/>
                    <Service title={serviceTitle03} desp={serviceContent03} img="Legal Advice.jpg" font={font}/>

                    <Service title={serviceTitle04} desp={serviceContent04} img="/public/Legal Advice.jpg" font={font}/>
                    <Service title={serviceTitle05} desp={serviceContent05} img="Legal Advice.jpg" font={font}/>
                    <Service title={serviceTitle06} desp={serviceContent06} img="Legal Advice.jpg" font={font}/>

                    <Service title={serviceTitle07} desp={serviceContent07} img="/public/Legal Advice.jpg" font={font}/>
                    <Service title={serviceTitle08} desp={serviceContent08} img="Legal Advice.jpg" font={font}/>
                    <Service title={serviceTitle09} desp={serviceContent09} img="Legal Advice.jpg" font={font}/>

                    {/* Row 1 
                    <div
                        className="flex justify-center text-center items-center p-10 bg-red
                        max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
                    >
                        BEAUTIFUL USER INTERFACES
                    </div>*/}
                    
                    
                    
                </motion.div>
            </div>
    </section>
  )
}

export default Services