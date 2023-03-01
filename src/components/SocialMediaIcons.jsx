import React from 'react';
import { SiInstagram, SiFacebook, SiLinkedin } from "react-icons/si";

const SocialMediaIcons = () => {
  return (
    <div className='flex justify-center md:justify-start my-10 gap-7'>
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
        href='www.facebook.com'
        target="_blank"
        rel='noreferrer'
        >
            <SiFacebook size={20} />
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