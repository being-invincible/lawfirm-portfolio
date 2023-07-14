import React from 'react'
import { useForm } from 'react-hook-form'
import Navbar02 from '../components/Navbar02';
import Footer from '../components/Footer';
import { useTranslation } from 'react-i18next';
import Dropdown from '../components/Dropdown';
import { useNavigate } from 'react-router-dom';
import { MdArrowBackIos } from 'react-icons/md'
import Selector2 from '../components/Selector2';
import Selector from '../components/Selector';

const Contact = ({ val, isDisabled }) => {

    let navigate = useNavigate();

    const { t, i18n } = useTranslation();

    const {
        register,
        trigger,
        formState: { errors }
    } = useForm();

    const onSubmit = async (e) => {
        const isValid = await trigger();
        if (!isValid) {
            e.preventDefault();
        }
    }


    return (
        <>

            <div id='contact' className={`min-h-screen grid grid-cols-1 lg:grid-cols-2 py-[50px] gap-10 bg-olive px-10 pt-28 md:px-[100px] md:pt-[125px] md:pb-[50px] ${i18n.language === 'Arabic' || 'عربي' ? 'font-reem' : 'font-noto'}`}>

                <div className={`${i18n.language === 'Arabic' || 'عربي' ? 'md:order-2' : 'order-1'}`}>

                    <button
                        className="md:hidden mb-5 top-28 left-10 text-magic-potion hover:text-toddy-gold transition-all flex flex-wrap flex-col font-montserrat text-md font-semibold gap-2"
                        onClick={() => navigate(-1)}
                    >
                        <MdArrowBackIos size={30} className='fill-mettalic-gold bg-russian-violet hover:fill-mettalic-gold hover:bg-russian-violet active:fill-mettalic-gold pl-2 border-mettalic-gold border-2 rounded-lg' />

                    </button>

                    <div>
                        <h1 className={`sm:text-3xl text-2xl font-bold title-font mb-4 text-mettalic-gold uppercase ${i18n.language === 'عربي' ? 'text-right' : 'text-left'}`}>{t("contact02")}</h1>
                        {/* <div class="h-1 w-20 bg-mettalic-gold"></div> */}

                        <p className={`lg:w-full w-full text-md leading-relaxed text-white my-5 ${i18n.language === 'عربي' ? 'text-right' : 'text-left'}`}>{t("contDescription")}</p>

                    </div>

                    <form 
                target="_blank"
                onSubmit={onSubmit}
                action=""
                method="POST"
            >
                {i18n.language === 'عربي' ? (
                    <div className='flex justify-center flex-col-reverse space-y-5 text-russian-violet'>
                    <button className='mt-5 rounded mb-3 md:mb-0 bg-mettalic-gold px-8 py-1.5'>{t("submit")}</button>
                    {/* <input
                        className='w-full rounded mb-3 md:rounded-none md:mb-0 bg-white text-sm font-normal placeholder-olive/75 px-5 py-2 text-right'
                        type='text'
                        placeholder={selectPackage}
                        {...register("name",{
                            required: true,
                            maxLength: 20,
                        })}
                    /> */}
                    <Selector2 val={val} />
                    {/* <Dropdownv2/> */}
                    
                    <input
                        className='w-full rounded mb-3 md:mb-0 bg-white text-sm font-normal placeholder-olive/75 px-5 py-2 text-right'
                        type='text'
                        placeholder={t("email")}
                        {...register("email",{
                            required: true,
                            maxLength: 20,
                        })}
                    />
                    <input
                        className='w-full rounded mb-3 md:mb-0 bg-white text-sm font-normal placeholder-olive/75 px-5 py-2 text-right'
                        type='text'
                        placeholder={t("phone")}
                        {...register("phone",{
                            required: true,
                            maxLength: 20,
                        })}
                    />
                    <input
                        className='w-full rounded bg-white text-sm font-normal placeholder-olive/75 px-5 py-2 text-right'
                        type='text'
                        placeholder={t("name")}
                        {...register("name",{
                            required: true,
                            maxLength: 20,
                        })}
                    />
                </div>
                ) : (
                <div className='flex flex-col justify-center space-y-5 text-russian-violet'>
                    <input
                        className='w-full rounded mt-5 md:mb-0 bg-white text-sm font-normal placeholder-olive/75 px-5 py-2'
                        type='text'
                        placeholder={t("name")}
                        {...register("name",{
                            required: true,
                            maxLength: 20,
                        })}
                    />
                    <input
                        className='w-full rounded mb-3  md:mb-0 bg-white text-sm font-normal placeholder-olive/75 px-5 py-2'
                        type='text'
                        placeholder={t("email")}
                        {...register("email",{
                            required: true,
                            maxLength: 20,
                        })}
                    />
                    <input
                        className='w-full rounded mb-3 md:mb-0 bg-white text-sm font-normal placeholder-olive/75 px-5 py-2'
                        type='text'
                        placeholder={t("phone")}
                        {...register("phone",{
                            required: true,
                            maxLength: 20,
                        })}
                    />
                    <Selector2 val={val} />
                    {/* <Dropdownv2/> */}
                    {/* <input
                        className='w-full rounded mb-3 md:rounded-none md:mb-0 bg-white text-sm font-normal placeholder-olive/75 px-5 py-2'
                        type='text'
                        placeholder={selectPackage}
                        {...register("name",{
                            required: true,
                            maxLength: 20,
                        })}
                    /> */}
                    
                    <button className='mt-5 md:mt-0 rounded mb-3 md:mb-0 md:rounded-r-lg bg-mettalic-gold px-8 py-1.5'>{t("submit")}</button>
                </div>
                )}
            </form>
                </div>
                <div className={`${i18n.language === 'Arabic' || 'عربي' ? 'order-1' : 'order-2'}`}>
                    <div class={`bg-mettalic-gold/80 p-2.5`}>
                        <div
                            class="overflow-hidden cursor-pointer rounded-sm relative group z-0 before:absolute before:w-full before:max-w-[600px] h-full md:h-[480px]"
                        >
                            <img
                                alt="First Product"
                                class="object-cover group-hover:scale-110 transition duration-500 ease-in-out z-10 w-full max-w-full md:max-w-[550px]"
                                src="balance.jpeg"
                            />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Contact