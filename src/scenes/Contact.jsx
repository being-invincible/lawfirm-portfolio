import React from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next';
import useMediaQuery from '../hooks/useMediaQuery';

import { motion } from 'framer-motion'
import { SiWhatsapp } from "react-icons/si";
import { SlCallOut, SlLocationPin } from "react-icons/sl"

const Contact = ({contact, contactContent, or, name, email, phone, selectPackage, submit, location, whatsapp}) => {

    const { t, i18n } = useTranslation();
    

    const {
        register,
        trigger,
        formState: {errors}
    } = useForm();

    const onSubmit = async (e) => {
        const isValid = await trigger();
        if (!isValid) {
            e.preventDefault();
        }
    }

  return (
    <section id='contact' className={`py-10 ${i18n.language === 'Arabic' || 'عربي' ?  'font-reem': 'font-noto'}`}>

    <div className={`mt-24 px-5 md:px-10 py-10 bg-metalic-grey/80 w-full rounded-lg`}>
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.2 }}
            variants={{
                hidden: {opacity:0, x:-50},
                visible: {opacity:1, x: 0}
            }}
        >
            <h2 className='text-mettalic-gold text-2xl font-bold z-10 text-center uppercase'>
                {contact}
            </h2>
            
            <p className='mt-5 mb-8 text-md text-center font-medium'>
                {contactContent}
            </p>

            <form 
                target="_blank"
                onSubmit={onSubmit}
                action=""
                method="POST"
            >
                <div className='flex flex-col justify-center md:flex-row md:space-x-3'>
                    <input
                        className='w-full rounded mb-3 md:rounded-none md:mb-0 md:rounded-l-lg bg-white text-sm font-normal placeholder-olive/75 px-5 py-2'
                        type='text'
                        placeholder={name}
                        {...register("name",{
                            required: true,
                            maxLength: 20,
                        })}
                    />
                    <input
                        className='w-full rounded mb-3 md:rounded-none md:mb-0 bg-white text-sm font-normal placeholder-olive/75 px-5 py-2'
                        type='text'
                        placeholder={email}
                        {...register("email",{
                            required: true,
                            maxLength: 20,
                        })}
                    />
                    <input
                        className='w-full rounded mb-3 md:rounded-none md:mb-0 bg-white text-sm font-normal placeholder-olive/75 px-5 py-2'
                        type='text'
                        placeholder={phone}
                        {...register("phone",{
                            required: true,
                            maxLength: 20,
                        })}
                    />
                    <input
                        className='w-full rounded mb-3 md:rounded-none md:mb-0 bg-white text-sm font-normal placeholder-olive/75 px-5 py-2'
                        type='text'
                        placeholder={selectPackage}
                        {...register("name",{
                            required: true,
                            maxLength: 20,
                        })}
                    />
                    
                    <button className='rounded mb-3 md:rounded-none md:mb-0 md:rounded-r-lg bg-mettalic-gold px-8 py-1.5'>{submit}</button>
                </div>
            </form>
        </motion.div>
        
    </div>
    {/* <h2 className='text-xl mt-10 font-bold z-10 text-center uppercase'>
        {or}
    </h2> */}
    <motion.div class="mt-8 md:mt-16 flex flex-wrap md:flex-nowrap gap-4 text-center items-center justify-between"
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
                    href="tel:+966508188743"
                    class="w-full rounded bg-white lg:px-10 py-3 text-sm font-bold text-russian-violet shadow hover:bg-mettalic-gold focus:outline-none focus:ring active:text-indigo-900 sm:w-auto"
                    >
                        <SlCallOut className='inline mr-5' />
                    +966508188743
                    </a>
                    
                    <a
                    href="tel:+966594161652"
                    class="w-full rounded bg-white px-10 py-3 text-sm font-bold text-russian-violet shadow hover:bg-mettalic-gold focus:outline-none focus:ring active:text-indigo-900 sm:w-auto"
                    >
                        <SlCallOut className='inline mr-5' />
                    +966594161652
                    </a>

                    <a
                    href="https://wa.me/966508188743"
                    class="w-full rounded bg-white px-[60px] py-3 text-sm font-bold text-russian-violet shadow hover:bg-mettalic-gold focus:outline-none focus:ring active:bg-indigo-900 sm:w-auto"
                    >
                        <SiWhatsapp className='inline mr-5' />
                    {whatsapp}
                    </a>

                    <a
                    href="https://www.google.com/maps/place/24%C2%B040'35.9%22N+46%C2%B043'48.5%22E/@24.6766472,46.7279444,17z/data=!3m1!4b1!4m4!3m3!8m2!3d24.6766472!4d46.7301331?hl=en"
                    class="w-full rounded bg-white px-[60px] py-3 text-sm font-bold text-russian-violet shadow hover:bg-mettalic-gold focus:outline-none focus:ring active:text-indigo-900 sm:w-auto"
                    >
                        <SlLocationPin className='inline mr-5' />
                    {location}
                    </a>
            </motion.div>
    </section>
  )
}

export default Contact