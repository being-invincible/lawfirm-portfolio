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

const Service = ({ title, desp, img}) => {

    const projectTitle = title.split(" ").join("-").toLowerCase;
    
    return (
        <motion.div variants={serviceVariant}>
            <div class={`group relative cursor-pointer items-center justify-center overflow-hidden`}>
            <div class="h-80 w-92">
                <img class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-125" src={img} alt="about the law firm" />
                <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent/30 to-gray/10 group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70">
                <div class="absolute inset-0 flex flex-col items-center justify-center px-9 text-center transition-all group-hover:translate-y-0 duration-500">
                    <div class="group-hover:hidden block p-4 bg-black/50 rounded">
                    <h1 class="group-hover:hidden block text-2xl font-bold text-mettalic-gold">{title}</h1>
                    </div>
                    
                    <p class="group-hover:block hidden  mb-3 text-md font-semibold text-center text-white">{desp}</p>
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
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: {opacity:0, x:-50},
                    visible: {opacity:1, x: 0}
                }}
        >
                <div>
                    <h2 className='pb-8 md:mb-0 text-2xl font-bold text-center sm:text-left uppercase text-russian-violet'>
                        {services}
                    </h2>
                    {/* <div className=''>
                        <LineGradient width='w-20' />
                    </div> */}
                </div>
                
            </motion.div>

            {/* Services */}
            <div className={`${i18n.language === 'Arabic' || 'عربي' ?  'font-reem': 'font-noto'}`}>
                <motion.div
                        className='grid grid-cols-1 gap-4 md:grid-cols-2'
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: .1 }}
                        variants={container}
                >
                    
                    <motion.div variants={serviceVariant}>
                        <div class={`group relative cursor-pointer items-center justify-center overflow-hidden`}>
                        <div class="h-80 w-92">
                            <img class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-125" src="legal.jpeg" alt="about the law firm" />
                            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent/30 to-gray/10 group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70">
                            <div class="absolute inset-0 flex flex-col items-center justify-center px-9 transition-all group-hover:translate-y-0 duration-500">
                                <div class="group-hover:hidden block p-4 bg-black/50 rounded">
                                <h1 class="group-hover:hidden block text-2xl font-bold text-mettalic-gold">{serviceTitle01}</h1>
                                </div>
                                {i18n.language === 'عربي' ? (
                                    <><p class="group-hover:block hidden text-center mb-3 md:text-md font-semibold text-white">تمثل الاستشارة القانونية وسيلة وقائية تمنحك الرأي القانوني،  الذي يوضح موقف النظام في المسألة ووجهة النظر القانونية التي تمنحك ميزة المعرفة التامة بالمشكلات والعقبات القانونية التي قد تواجهك قبل وقوعها، باختيارك الخدمة</p><ol style={{ listStyleType: 'decimal' }}>
                                        <li class="group-hover:block hidden text-right font-semibold text-white">.{serviceContent01.split("•")[1].split(".")[0]} •</li>
                                        <li class="group-hover:block hidden text-right font-semibold text-white">.{serviceContent01.split("•")[2].split(".")[0]} •</li>
                                        <li class="group-hover:block hidden text-right font-semibold text-white">.{serviceContent01.split("•")[3].split(".")[0]} •</li>
                                          </ol></>
                                ) : (
                                    <><p class="group-hover:block hidden text-center mb-3 md:text-md md:font-semibold text-white">{serviceContent01.split("•")[0]}</p><ol style={{ listStyleType: 'decimal' }}>
                                        <li class="group-hover:block hidden md:font-semibold text-white">• {serviceContent01.split("•")[1]}</li>
                                        <li class="group-hover:block hidden md:font-semibold text-white">• {serviceContent01.split("•")[2]}</li>
                                        <li class="group-hover:block hidden md:font-semibold text-white">• {serviceContent01.split("•")[3]}</li>
                                    </ol></>
                                )}
                                
                            </div>
                            </div>
                        </div>
                        </div>
                    </motion.div>

                    <Service title={serviceTitle02} desp={serviceContent02} img="representation.jpeg" font={font}/>
                    <Service title={serviceTitle03} desp={serviceContent03} img="establish.jpeg" font={font}/>

                    <Service title={serviceTitle04} desp={serviceContent04} img="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" font={font}/>
                    <Service title={serviceTitle05} desp={serviceContent05} img="compliance.jpeg" font={font}/>
                    <Service title={serviceTitle06} desp={serviceContent06} img="record.jpeg" font={font}/>

                    <Service title={serviceTitle07} desp={serviceContent07} img="comercial.jpeg" font={font}/>
                    <Service title={serviceTitle08} desp={serviceContent08} img="/debt.jpeg" font={font}/>
                    <Service title={serviceTitle09} desp={serviceContent09} img="franchise.jpeg" font={font}/>
                    
                </motion.div>
            </div>
    </section>
  )
}

export default Services