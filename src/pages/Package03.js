import React from 'react'
import { useTranslation } from 'react-i18next';

// json data
import ar from "../lng/ar.json"
import en from "../lng/en.json"
import Navbar02 from '../components/Navbar02';
import Footer from '../components/Footer';

import { MdCheckCircle } from 'react-icons/md';
import Contact from './Contact';

const Package03 = () => {
  const { t, i18n } = useTranslation();

  const points01 = i18n.language === 'عربي' ? ar['package'].package03.points : en['package'].package03.points;
  const explain01 = i18n.language === 'عربي' ? ar['package'].package03.explain : en['package'].package03.explain;

  return (
    <div>
      <Navbar02 />
      <section
        class="overflow-hidden bg-[url(https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80)] bg-cover bg-center bg-no-repeat"
      >
        {i18n.language === 'عربي' ? (
          <div class="bg-metalic-grey/40 px-8 pb-8 pt-28 md:p-12 lg:px-16 lg:pb-24 lg:pt-36">
            <div class="text-center md:text-right ltr:sm:text-left rtl:sm:text-right lg:mr-[50px]">
              {/* <h2 className='mb-5 w-20 bg-mettalic-gold text-center p-2 font-semibold text-md sm:text-lg md:text-xl'>{t(`${"package"}.package01.id`)}</h2> */}
              {/* <Packag title = {(t(`${"package"}.package01.id`))} currency = {t(`${"package"}.package01.currency`)} price = {t(`${"package"}.package01.price`)} desp = {t(`${"package"}.package01.title`)} points={points01} link="/package01" /> */}

              <div className='w-full justify-center col-span-1 flex flex-row-reverse items-center my-2 lg:my-3 lg:float-right'>
                <p className='pr-2 lg:pr-5 py-5 order-2 text-xl sm:text-3xl'>{t(`${"package"}.package03.currency`)}</p>
                <h1 className='font-semibold text-3xl sm:text-3xl md:text-[100px]'>{t(`${"package"}.package03.price`)}</h1>
              </div>

              <h1 className='lg:ml-10 mb-8 text-xl font-bold sm:text-xl md:text-3xl'>{t(`${"package"}.package03.title`)}</h1>

              <div class="mt-3 sm:mt-4 w-full flex flex-row-reverse">
                <a
                  href="https://wa.me/966594161652"
                  class="block w-full rounded-lg bg-russian-violet text-mettalic-gold border-2 border-mettalic-gold px-8 py-3 text-sm text-center font-semibold  shadow hover:bg-mettalic-gold hover:text-russian-violet hover:border-russian-violet focus:outline-none focus:ring sm:w-60 transition duration-500"
                >
                  {t("button01")}
                </a>
              </div>
            </div>
          </div>
        ) : (
          <div class="bg-metalic-grey/40 px-8 pb-8 pt-28 md:p-12 lg:px-16 lg:pb-24 lg:pt-36">
            <div class="text-center md:text-left ltr:sm:text-left rtl:sm:text-right">
              {/* <h2 className='mb-5 w-20 bg-mettalic-gold text-center p-2 font-semibold text-md sm:text-lg md:text-xl'>{t(`${"package"}.package03.id`)}</h2> */}
              {/* <Packag title = {(t(`${"package"}.package03.id`))} currency = {t(`${"package"}.package03.currency`)} price = {t(`${"package"}.package03.price`)} desp = {t(`${"package"}.package03.title`)} points={points01} link="/package03" /> */}

              <div className='w-full justify-center md:ml-10 col-span-1 flex flex-row items-baseline lg:p-3 lg:w-[18rem]'>
                <p className='pl-2 md:pl-5 py-5 order-2 text-xl sm:text-3xl'>{t(`${"package"}.package03.currency`)}</p>
                <h1 className='font-semibold text-xl sm:text-3xl md:text-[100px]'>{t(`${"package"}.package03.price`)}</h1>
              </div>

              <h1 className='md:ml-10 mb-8 text-lg font-bold sm:text-xl md:text-3xl'>{t(`${"package"}.package03.title`)}</h1>

              <div class="mt-3 sm:mt-4 md:ml-10">
                <a
                  href="https://wa.me/966594161652"
                  class="block w-full rounded-lg bg-russian-violet text-mettalic-gold border-2 border-mettalic-gold px-8 py-3 text-sm text-center font-semibold  shadow hover:bg-mettalic-gold hover:text-russian-violet hover:border-russian-violet focus:outline-none focus:ring sm:w-60 transition duration-500"
                >
                  {t("button01")}
                </a>
              </div>
            </div>
          </div>
        )}

      </section>
      <section className='px-10 lg:px-[100px] py-8 bg-olive'>
        {i18n.language === 'عربي' ? (
          <div>
            <p
              class="text-white md:my-5 md:block md:text-lg md:leading-relaxed text-right"
            >
              {t(`${"package"}.package03.description`)}
            </p>
            <div className='mt-10 mb-5'>
              <ul className='grid grid-cols-1 md:grid-cols-2 text-md gap-y-2 lg:gap-y-5 lg:gap-x-10'>
                {points01.map((s, i) =>
                  <li className='grid grid-cols-6 items-baseline align-text-top text-right'>

                    <h2 className='text-lg font-semibold col-span-5 text-mettalic-gold'>{points01[i]}</h2>
                    <div className='w-full flex flex-row-reverse'>
                    <MdCheckCircle className='col-span-1 fill-mettalic-gold' />
                    </div>
                    <p className='mt-2 col-span-5 text-white'>{explain01[i]}</p>
                    <p className='col-span-1'></p>
                  </li>
                )}
              </ul>
            </div>
          </div>
        ) : (
          <div>
            <p
              class="text-white md:my-5 md:block md:text-lg md:leading-relaxed"
            >
              {t(`${"package"}.package03.description`)}
            </p>
            <div className='mt-10 mb-5'>
              <ul className='grid grid-cols-1 md:grid-cols-2 text-md gap-y-2 lg:gap-y-5 lg:gap-x-10'>
                {points01.map((s, i) =>
                  <li className='grid grid-cols-6 items-baseline align-text-top'>
                    <MdCheckCircle className='col-span-1 fill-mettalic-gold' />

                    <h2 className='text-lg font-semibold col-span-5 text-mettalic-gold'>{points01[i]}</h2>
                    <p className='col-span-1'></p>
                    <p className='mt-2 col-span-5 text-white'>{explain01[i]}</p>
                  </li>
                )}
              </ul>
            </div>
          </div>
        )}

      </section>

      <Contact />
      <div className="bg-gradient-to-tl from-coyote to-sheen-gold md:justify-between md:items-center">
        <div className="w-5/6 mx-auto">
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Package03