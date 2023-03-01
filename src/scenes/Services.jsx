import React from 'react'
import { motion } from 'framer-motion'
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

const Service = ({ title }) => {
    const projectTitle = title.split(" ").join("-").toLowerCase;
    
    return (
        <motion.div variants={serviceVariant}>
            <div class="group relative cursor-pointer items-center justify-center overflow-hidden">
            <div class="h-72 w-92">
                <img class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-125" src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="card image" />
                <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70">
                <div class="absolute inset-0 flex translate-y-[55%] flex-col items-center justify-center px-9 text-center transition-all group-hover:translate-y-0 duration-500">
                    <h1 class="text-3xl font-bold text-white py-3">Legal Advice</h1>
                    <p class="mb-3 text-lg italic text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">Loren ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
                </div>
                </div>
            </div>
            </div>
        </motion.div>
    )
}

const Services = () => {
  return (
    <section id='services' className='pt-32 pb-32'>
        {/* Heading */}
        <motion.div
                className='mx-auto text-center'
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
                    <h2 className='text-xl font-bold font-montserrat text-center sm:text-left'>
                        Services
                    </h2>
                    <div className='mt-5 mb-8'>
                        <LineGradient width='w-20' />
                    </div>
                </div>
                
            </motion.div>

            {/* Services */}
            <div className='flex justify-center'>
                <motion.div
                        className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={container}
                >
                    
                    <Service title="Legal Advice" img="/public/Legal Advice.jpg" />
                    <Service title="Legal Advice" img="Legal Advice.jpg" />
                    <Service title="Legal Advice" img="Legal Advice.jpg" />

                    <Service title="Legal Advice" img="/public/Legal Advice.jpg" />
                    <Service title="Legal Advice" img="Legal Advice.jpg" />
                    <Service title="Legal Advice" img="Legal Advice.jpg" />

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