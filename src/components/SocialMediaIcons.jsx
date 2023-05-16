import React from 'react';
import { SiInstagram, SiTwitter, SiLinkedin } from "react-icons/si";

const SocialMediaIcons = ({align}) => {
  return (
    <div className={`flex place-content-center md:justify-center gap-7`} >
        <a
        className='hover:opacity-50 transition duration-500'
        href='www.instagram.com'
        target="_blank"
        rel='noreferrer'
        >
            <SiInstagram size={20} />
        </a>
        <a 
        className='hover:opacity-50 transition duration-500'
        href='https://twitter.com/AHATTAHLAW'
        target="_blank"
        rel='noreferrer'
        >
            <SiTwitter size={20} />
        </a>
        <a 
        className='hover:opacity-50 transition duration-500'
        href='www.linkedin.com'
        target="_blank"
        rel='noreferrer'
        >
            <SiLinkedin size={20} />
        </a>
    </div>
  )
}

export default SocialMediaIcons