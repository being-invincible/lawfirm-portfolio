import { Fragment, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { BsChevronExpand } from 'react-icons/bs'

import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

import ar from '../lng/ar.json'
import en from '../lng/en.json'

const Selector = () => {

    const { t, i18n } = useTranslation();

    const [isOpen, setIsOpen] = useState(false);
    const [isSelected, setIsSelected] = useState("Select Package");
   

    // Data
    let def = i18n.language === 'عربي' ? "اختر الباقة" : "Select Package";
    let packT1 = i18n.language === 'عربي' ? ar.package.package01.title : en.package.package01.title;
    let packT2 = i18n.language === 'عربي' ? ar.package.package02.title : en.package.package02.title;
    let packT3 = i18n.language === 'عربي' ? ar.package.package03.title : en.package.package03.title;
    let packT4 = i18n.language === 'عربي' ? ar.package.package04.title : en.package.package04.title;

    let people = [{ name: packT1 }, { name: packT2 }, { name: packT3 }, { name: packT4 }]
    let options = [packT1, packT2, packT3, packT4]
    let def_arr = {name:def}

    // const [selected, setSelected] = useState(def_arr)
    const [selected, setSelected] = useState(def_arr)

    return (
        // <div className={`w-full md:w-[1250px] h-full ${i18n.language === 'Arabic' || 'عربي' ? 'font-reem' : 'font-noto'}`}>
        //     {i18n.language === 'عربي' ? (
        //         <button
        //             onClick={() => setIsOpen((prev) => !prev)}
        //             className='rounded mb-3 md:rounded-none md:mb-0 bg-white text-sm font-normal text-olive/75 px-5 py-2 text-right flex flex-row w-full items-center justify-between border-2 border-transparent active:border-russian-violet'
        //         >
        //             <BsChevronExpand size={20} />
        //             اختار الباقة
        //         </button>
        //     ) : (
        //         <button
        //             onClick={() => setIsOpen((prev) => !prev)}
        //             className='rounded mb-3 md:rounded-none md:mb-0 bg-white text-sm font-normal text-olive/75 px-5 py-2 text-left flex flex-row w-full items-center justify-between border-2 border-transparent active:border-russian-violet'
        //         >
        //             {isSelected}
        //             <BsChevronExpand size={20} />
        //         </button>
        //     )}

        //     {isOpen && (
        //         <div>
        //             {i18n.language === 'عربي' ? (
        //                 <div className={`absolute bg-white text-right text-sm w-[350px] md:w-[228px] rounded-b-lg p-2`}>
        //                     {options.map((option, index) => {
        //                         return <div className={`py-2 px-5 hover:bg-russian-violet hover:text-mettalic-gold cursor-pointer`} key={index} onClick={() => { setIsSelected(option) }
        //                         }>
        //                             {console.log(isSelected)}
        //                             {option}
        //                         </div>
        //                     })}
        //                 </div>
        //             ) : (
        //                 <div className={`absolute bg-white text-left text-sm w-[350px] md:w-[225px] rounded-b-lg p-2`}>
        //                     {options.map((option, index) => {
        //                         return <div className={`py-2 px-5 hover:bg-russian-violet hover:text-mettalic-gold cursor-pointer`} key={index} >
        //                             {option}
        //                         </div>
        //                     })}
        //                 </div>
        //             )}
        //         </div>
        //     )}

        // </div>
        <div className={`w-full md:w-[1200px] ${i18n.language === 'Arabic' || 'عربي' ? 'font-reem' : 'font-noto'}`}>
          <Listbox value={selected} onChange={setSelected}>
            <div className="relative h-full flex">
              <Listbox.Button className={`relative w-full cursor-default rounded md:rounded-none bg-white py-2 pl-5 pr-5 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 text-sm ${i18n.language === 'عربي' ? 'text-right' : 'text-left'}`}>
              <span className={`pointer-events-none absolute inset-y-0 ${i18n.language === 'عربي' ? 'left-0' : 'right-0'} flex items-center p-2`}>
                  <ChevronUpDownIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              <span className={`block truncate text-[1rem]`}>{selected.name}</span>
                
                {/* <span className={`block truncate ${i18n.language === 'عربي' ? 'hidden' : 'block'}`}>{selected.name}</span> */}
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className={`absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-sm ${i18n.language === 'عربي' ? 'text-right' : 'text-left'}`}>
                  {people.map((person, personIdx) => (
                    <Listbox.Option
                      key={personIdx}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-5 pr-4 ${
                          active ? 'bg-mettalic-gold text-russian-violet' : 'text-gray-900'
                        }`
                      }
                      value={person}
                    >
                      {({ selected }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selected ? 'font-medium' : 'font-normal'
                            }`}
                          >
                            {person.name}
                          </span>
                          {selected ? (
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                              <CheckIcon className="h-5 w-5" aria-hidden="true" />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
        </div>
    )
}

export default Selector
