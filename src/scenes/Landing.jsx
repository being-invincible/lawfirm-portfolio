import React from 'react';
import useMediaQuery from "../hooks/useMediaQuery";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { motion } from 'framer-motion';


const Landing = ({setselectedPage, companyName, slogan, button01, button02}) => {

    const isAboveMediumScreens = useMediaQuery("(min-width: 1060p)");

    return (

        <section id='home'
            class="min-h-screen relative bg-hero-image bg-cover bg-center bg-no-repeat"
            >
              
            <div
                class="absolute inset-0 bg-transparent sm:bg-black/25"
            ></div>

            <div
                class="relative mx-auto max-w-screen-xl pt-60 sm:px-6 lg:flex min-h-screen lg:items-center lg:px-8"
            >
                <div class="px-10  font-montserrat text-center sm:text-left">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.3 }}
                    variants={{
                        hidden: {opacity:0, x:-50},
                        visible: {opacity:1, x:0}
                    }}
                >
                    <h1 class="text-4xl font-extrabold sm:text-5xl">
                        <strong class="block font-extrabold text-white">
                        {companyName}
                        </strong>
                    </h1>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: {opacity:0, x:-50},
                        visible: {opacity:1, x:0}
                    }}
                >

                    <p class="mt-4 font-semibold text-lg sm:text-2xl sm:leading-relaxed">
                    {slogan}
                    </p>
                </motion.div>

                <motion.div class="mt-8 flex flex-wrap gap-4 text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.75 }}
                    variants={{
                        hidden: {opacity:0, x:-50},
                        visible: {opacity:1, x:0}
                    }}
                >
                    <a
                    href="https://wa.me/966594161652"
                    class="block w-full rounded bg-russian-violet px-5 py-3 text-sm font-medium text-white shadow hover:bg-mettalic-gold focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                    >
                    {button01}
                    </a>

                    <a
                    href="#services"
                    class="block w-full rounded bg-white px-5 py-3 text-sm font-medium text-russian-violet shadow hover:text-black focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                    >
                    {button02}
                    </a>
                </motion.div>
                </div>
            </div>
        </section>

    )
}

export default Landing