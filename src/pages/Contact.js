import React from 'react'
import { useForm } from 'react-hook-form'
import Navbar02 from '../components/Navbar02';
import Footer from '../components/Footer';
import { useTranslation } from 'react-i18next';
import Dropdown from '../components/Dropdown';

const Contact = ({val}) => {

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
    <>
    
    <div id='contact' className='min-h-screen grid grid-cols-1 lg:grid-cols-2 py-[50px] gap-10 bg-olive px-10 pt-28 md:px-[100px] md:pt-[125px] md:pb-[50px]'>
        <div className=''>
            <h1 className='sm:text-3xl text-2xl font-medium title-font mb-4 text-mettalic-gold'>{t("contact02")}</h1>
            <div class="h-1 w-20 bg-mettalic-gold"></div>

            <p className='lg:w-full w-full leading-relaxed text-white my-5'>{t("contDescription")}</p>

        <form 
                target="_blank"
                onSubmit={onSubmit}
                action=""
                method="POST"
            >
                {i18n.language === 'عربي' ? (
                    <div className='flex flex-col gap-y-8 justify-center font-montserrat mt-10 text-russian-violet'>
                    {/* <label className='text-gray-500 font-semibold'>Name : */}
                    <input
                        className='w-full rounded md:rounded-lg bg-gray-100 text-sm font-normal placeholder-olive/75 px-5 py-2 text-right'
                        type='text'
                        name='Name'
                        placeholder={t('name')}
                        {...register("name",{
                            required: true,
                            maxLength: 20,
                        })}
                    />
                    {/* </label> */}
                    {/* <label className='text-gray-500 font-semibold'>Email ID : */}
                    <input
                        className='w-full rounded md:rounded-lg bg-gray-100 text-sm font-normal placeholder-olive/75 px-5 py-2 text-right'
                        type='text'
                        placeholder={t("email")}
                        {...register("email",{
                            required: true,
                            maxLength: 20,
                        })}
                    />
                    {/* </label> */}
                    {/* <label className='text-gray-500 font-semibold'>Phone No. : */}
                    <input
                        className='w-full rounded md:rounded-lg bg-gray-100 text-sm font-normal placeholder-olive/75 px-5 py-2 text-right'
                        type='text'
                        placeholder={t("phone")}
                        {...register("phone",{
                            required: true,
                            maxLength: 20,
                        })}
                    />
                    {/* </label> */}

                    <Dropdown val={val}/>


                    {/* <label className='text-gray-500 font-semibold'>Query : */}
                    {/* <textarea
                        className='w-full rounded md:rounded-lg bg-gray-100 text-sm font-normal placeholder-olive/75 px-5 py-2 text-right'
                        type='text'
                        placeholder={t("selectPackage")}
                        {...register("name",{
                            required: true,
                            maxLength: 20,
                        })}
                    /> */}
                    {/* </label>     */}
                    <button className='rounded border-2 border-russian-violet md:rounded-full text-russian-violet bg-white px-8 py-1.5 hover:bg-mettalic-gold transition-all'>{t("submit")}</button>
                </div>
                ) : (
                    <div className='flex flex-col gap-y-8 justify-center font-montserrat mt-10 text-russian-violet'>
                    {/* <label className='text-gray-500 font-semibold'>Name : */}
                    <input
                        className='w-full rounded md:rounded-lg bg-gray-100 text-sm font-normal placeholder-olive/75 px-5 py-2'
                        type='text'
                        name='Name'
                        placeholder={t('name')}
                        {...register("name",{
                            required: true,
                            maxLength: 20,
                        })}
                    />
                    {/* </label> */}
                    {/* <label className='text-gray-500 font-semibold'>Email ID : */}
                    <input
                        className='w-full rounded md:rounded-lg bg-gray-100 text-sm font-normal placeholder-olive/75 px-5 py-2'
                        type='text'
                        placeholder={t("email")}
                        {...register("email",{
                            required: true,
                            maxLength: 20,
                        })}
                    />
                    {/* </label> */}
                    {/* <label className='text-gray-500 font-semibold'>Phone No. : */}
                    <input
                        className='w-full rounded md:rounded-lg bg-gray-100 text-sm font-normal placeholder-olive/75 px-5 py-2'
                        type='text'
                        placeholder={t("phone")}
                        {...register("phone",{
                            required: true,
                            maxLength: 20,
                        })}
                    />
                    {/* </label> */}
                    {/* <label className='text-gray-500 font-semibold'>Query : */}
                    {/* <textarea
                        className='w-full rounded md:rounded-lg bg-gray-100 text-sm font-normal placeholder-olive/75 px-5 py-2'
                        type='text'
                        placeholder={t("selectPackage")}
                        {...register("name",{
                            required: true,
                            maxLength: 20,
                        })}
                    /> */}
                    <Dropdown val={val}/>
                    {/* </label>     */}
                    <button className='rounded border-2 border-russian-violet md:rounded-full text-russian-violet bg-white px-8 py-1.5 hover:bg-mettalic-gold transition-all'>{t("submit")}</button>
                </div>
                )}
                
            </form>
        </div>
        <div className=''>
        <div class="bg-mettalic-gold/80 p-2.5">
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