import { useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";

import AnchorLink from 'react-anchor-link-smooth-scroll';
import useMediaQuery from '../hooks/useMediaQuery';
import { MdSegment, MdClear } from "react-icons/md";

import { SlGlobe } from "react-icons/sl";


const Link = ({ page, selectedPage, setSelectedPage}) => {
    const lowerCasePage = page.toLowerCase();
    return (
        <AnchorLink className={`${selectedPage === lowerCasePage ? "text-mettalic-gold font-bold" : ""}
            hover:text-mettalic-gold transition-all`}
            href={`#${lowerCasePage}`}
            onClick={() => setSelectedPage(lowerCasePage)}
            >
                {page}
        </AnchorLink>
    )
}

const Navbar = ({ selectedPage, setSelectedPage, home, about, packages, services, contact}) => {

    const { t, i18n } = useTranslation();

    // Language Dropdown
    const options = ['English', 'عربي'];
    const onOptionChangeHandler = (event) => {
        console.log("User Selected Value - ", event.target.value)
        i18n.changeLanguage(event.target.value)
    }


    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");

    return (
        <nav className={`z-40 w-full  fixed top-0 bg-gradient-to-tl from-coyote to-sheen-gold ${i18n.language === 'Arabic' || 'عربي' ?  'font-reem': 'font-noto'}`}>
            <div className='py-5 flex items-center justify-between mx-auto w-5/6'>
                <img className='w-20 lg:w-20' src="logo.png" alt="Logo" />

                <select onChange={onOptionChangeHandler} className="bg-mettalic-gold p-2 rounded-md text-sm hover:bg-russian-violet" >
                        {options.map((option, index) => {
                            return <option className='p-2' key={index} >
                                {option}
                            </option>
                        })}
                </select>

                {/* Desktop Nav */}
                {isAboveSmallScreens ? (
                    <div className={`flex justify-between gap-16 text-md`}>
                        <AnchorLink className={`${selectedPage === Object.keys({home})[0] ? "text-russian-violet" : ""}
                            hover:text-russian-violet transition-all`}
                            href={`#${Object.keys({home})[0]}`}
                            onClick={() => setSelectedPage(home)}
                            >
                                {home}
                        </AnchorLink>
                        <AnchorLink className={`${selectedPage === Object.keys({about})[0] ? "text-russian-violet" : ""}
                            hover:text-russian-violet transition-all`}
                            href={`#${Object.keys({about})[0]}`}
                            onClick={() => setSelectedPage(about)}
                            >
                                {about}
                        </AnchorLink>
                        <AnchorLink className={`${selectedPage === Object.keys({services})[0] ? "text-russian-violet" : ""}
                            hover:text-russian-violet transition-all`}
                            href={`#${Object.keys({services})[0]}`}
                            onClick={() => setSelectedPage(services)}
                            >
                                {services}
                        </AnchorLink>
                        <AnchorLink className={`${selectedPage === Object.keys({packages})[0] ? "text-russian-violet" : ""}
                            hover:text-russian-violet transition-all`}
                            href={`#${Object.keys({packages})[0]}`}
                            onClick={() => setSelectedPage(packages)}
                            >
                                {packages}
                        </AnchorLink>
                        <AnchorLink className={`${selectedPage === Object.keys({contact})[0] ? "text-russian-violet" : ""}
                            hover:text-russian-violet transition-all`}
                            href={`#${Object.keys({contact})[0]}`}
                            onClick={() => setSelectedPage(contact)}
                            >
                                {contact}
                        </AnchorLink>
                        
                    </div>
                ) : (
                    <button className='rounded-full bg-mettalic-gold p-2'
                            onClick={() => setIsMenuToggled(!isMenuToggled)}
                    >
                        <MdSegment size={30} />
                    </button>
                )}

                {/* Mobile Menu Popup */}
                {!isAboveSmallScreens && isMenuToggled && (
                    <div className={`fixed right-0 bottom-0 h-full bg-tiger-eye w-[300px]`}>
                        {/* Close Icon */}
                        <div className='flex justify-end p-12'>
                            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                                <MdClear size={30} />
                            </button>
                        </div>

                        {/* Menu Items */}
                        <div className='flex flex-col gap-10 ml-[33%] pt-10 text-2xl text-russian-violet'>
                        <AnchorLink className={`${selectedPage === Object.keys({home})[0] ? "text-mettalic-gold" : ""}
                            hover:text-mettalic-gold transition-all`}
                            href={`#${Object.keys({home})[0]}`}
                            onClick={() => setSelectedPage(home)}
                            >
                                {home}
                        </AnchorLink>
                        <AnchorLink className={`${selectedPage === Object.keys({about})[0] ? "text-mettalic-gold" : ""}
                            hover:text-mettalic-gold transition-all`}
                            href={`#${Object.keys({about})[0]}`}
                            onClick={() => setSelectedPage(about)}
                            >
                                {about}
                        </AnchorLink>
                        <AnchorLink className={`${selectedPage === Object.keys({services})[0] ? "text-mettalic-gold" : ""}
                            hover:text-mettalic-gold transition-all`}
                            href={`#${Object.keys({services})[0]}`}
                            onClick={() => setSelectedPage(services)}
                            >
                                {services}
                        </AnchorLink>
                        <AnchorLink className={`${selectedPage === Object.keys({packages})[0] ? "text-mettalic-gold" : ""}
                            hover:text-mettalic-gold transition-all`}
                            href={`#${Object.keys({packages})[0]}`}
                            onClick={() => setSelectedPage(packages)}
                            >
                                {packages}
                        </AnchorLink>
                        <AnchorLink className={`${selectedPage === Object.keys({contact})[0] ? "text-mettalic-gold" : ""}
                            hover:text-mettalic-gold transition-all`}
                            href={`#${Object.keys({contact})[0]}`}
                            onClick={() => setSelectedPage(contact)}
                            >
                                {contact}
                        </AnchorLink>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar;