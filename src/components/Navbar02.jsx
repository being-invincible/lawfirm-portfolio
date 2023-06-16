import { useState, useEffect, useRef } from 'react';
import { useTranslation } from "react-i18next";

import AnchorLink from 'react-anchor-link-smooth-scroll';
import useMediaQuery from '../hooks/useMediaQuery';
import { MdSegment, MdClear } from "react-icons/md";
import i18next from 'i18next';

import { SlGlobe } from "react-icons/sl";


const Link = ({ page, selectedPage, setSelectedPage }) => {
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

const Navbar02 = ({ selectedPage, setSelectedPage, home, about, packages, services, contact }) => {

    const { t, i18n } = useTranslation();

    const [activeSection, setActiveSection] = useState(null);
    const sections = useRef([]);

    const handleScroll = () => {
        const pageYOffset = window.pageYOffset;
        let newActiveSection = null;

        sections.current.forEach((section) => {
            const sectionOffsetTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (pageYOffset >= sectionOffsetTop - 20 && pageYOffset < sectionOffsetTop + sectionHeight) {
                console.log(section.id)
                newActiveSection = section.id;
            }
        });
        console.log(newActiveSection)
        setSelectedPage(newActiveSection)
        setActiveSection(newActiveSection);
    };

    useEffect(() => {
        sections.current = document.querySelectorAll('[data-section]');
        console.log(sections.current)
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const activeStyle = "text-mettalic-gold"

    // Language Dropdown
    const options = ['English', 'عربي'];
    const onOptionChangeHandler = (event) => {
        // console.log("User Selected Value - ", event.target.value)
        i18n.changeLanguage(event.target.value)
    }


    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");

    return (
        <nav className={`z-40 w-full  fixed top-0 bg-gradient-to-tl from-coyote to-sheen-gold ${i18n.language === 'Arabic' || 'عربي' ? 'font-reem' : 'font-noto'}`}>

            {/* Desktop Nav */}
            {isAboveSmallScreens ? (

                <div>

                    {i18n.language === 'عربي' ? (
                        <div className='py-5 flex items-center justify-between mx-auto w-5/6'>
                            <select value={options[1]} onChange={onOptionChangeHandler} className="bg-mettalic-gold p-2 rounded-md text-sm hover:bg-russian-violet" >
                                {options.map((option, index) => {
                                    return <option className='p-2' key={index} >
                                        {option}
                                    </option>
                                })}
                            </select>
                            
                            <a href='/'><img className='w-20 lg:w-20' src="logo.png" alt="Logo" /></a>
                        </div>
                    ) :
                        (
                            <div className='py-5 flex items-center justify-between mx-auto w-5/6'>
                                <a href='/'><img className='w-20 lg:w-20' src="logo.png" alt="Logo" /></a>
                                

                                <select onChange={onOptionChangeHandler} className="bg-mettalic-gold p-2 rounded-md text-sm hover:bg-russian-violet" >
                                    {options.map((option, index) => {
                                        return <option className='p-2' key={index} >
                                            {option}
                                        </option>
                                    })}
                                </select>
                            </div>
                        )
                    }
                </div>

            ) : (
                <div className='py-5 flex items-center justify-between mx-auto w-5/6'>
                    <img className='w-20 lg:w-20' src="logo.png" alt="Logo" />

                    <select onChange={onOptionChangeHandler} className="bg-mettalic-gold p-2 rounded-md text-sm hover:bg-russian-violet" >
                        {options.map((option, index) => {
                            return <option className='p-2' key={index} >
                                {option}
                            </option>
                        })}
                    </select>
                    <button className='rounded-full bg-mettalic-gold/75 p-2'
                        onClick={() => setIsMenuToggled(!isMenuToggled)}
                    >
                        <MdSegment size={30} />
                    </button>
                </div>
            )}

            {/* Mobile Menu Popup */}
            {!isAboveSmallScreens && isMenuToggled && (
                <div className={`fixed right-0 bottom-0 h-full bg-gradient-to-tl from-coyote to-sheen-gold w-[300px]`}>
                    {/* Close Icon */}
                    <div className='flex justify-end py-6 pr-10'>
                        <button className='rounded-full bg-mettalic-gold/75 p-2'
                            onClick={() => setIsMenuToggled(!isMenuToggled)}>
                            <MdClear size={30} />
                        </button>
                    </div>

                    {/* Menu Items */}
                    <div className='flex flex-col gap-10 ml-[33%] pt-10 text-2xl text-russian-violet'>
                        <AnchorLink className={`${selectedPage === Object.keys({ home })[0] ? "text-mettalic-gold" : ""}
                            hover:text-mettalic-gold transition-all`}
                            href={`#${Object.keys({ home })[0]}`}
                            onClick={() => { setSelectedPage('home'); setIsMenuToggled(!isMenuToggled) }}
                        >
                            {home}
                        </AnchorLink>
                        <AnchorLink className={`${selectedPage === Object.keys({ about })[0] ? "text-mettalic-gold" : ""}
                            hover:text-mettalic-gold transition-all`}
                            href={`#${Object.keys({ about })[0]}`}
                            onClick={() => { setSelectedPage('about'); setIsMenuToggled(!isMenuToggled) }}
                        >
                            {about}
                        </AnchorLink>
                        <AnchorLink className={`${selectedPage === Object.keys({ services })[0] ? "text-mettalic-gold" : ""}
                            hover:text-mettalic-gold transition-all`}
                            href={`#${Object.keys({ services })[0]}`}
                            onClick={() => { setSelectedPage('services'); setIsMenuToggled(!isMenuToggled) }}
                        >
                            {services}
                        </AnchorLink>
                        <AnchorLink className={`${selectedPage === Object.keys({ packages })[0] ? "text-mettalic-gold" : ""}
                            hover:text-mettalic-gold transition-all`}
                            href={`#${Object.keys({ packages })[0]}`}
                            onClick={() => { setSelectedPage('packages'); setIsMenuToggled(!isMenuToggled) }}
                        >
                            {packages}
                        </AnchorLink>
                        <AnchorLink className={`${selectedPage === Object.keys({ contact })[0] ? "text-mettalic-gold" : ""}
                            hover:text-mettalic-gold transition-all`}
                            href={`#${Object.keys({ contact })[0]}`}
                            onClick={() => { setSelectedPage('contact'); setIsMenuToggled(!isMenuToggled) }}
                        >
                            {contact}
                        </AnchorLink>
                    </div>
                </div>
            )}

        </nav >
    )
}

export default Navbar02;