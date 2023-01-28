import React from 'react';
import { MdOutlineMarkEmailRead } from 'react-icons/md';
import { BiPhoneCall } from 'react-icons/bi';
import { TiSocialTwitter } from 'react-icons/ti';
import { TiSocialFacebook } from 'react-icons/ti';
import { TiSocialLinkedin } from 'react-icons/ti';
import { TbBrandInstagram } from 'react-icons/tb';

const Header = () => {
    return (
        <header className="bg-secondary font-pop text-white border-b-[3px] border-solid border-yellowBorder">
            <div className='max-w-container mx-auto sml:flex px-2.5 md:px-0'>
                <div className='sml:w-3/5 sml:flex gap-14'>
                    <div className='text-xs relative after:absolute after:bg-[#5C6A92] after:h-4 after:w-0.5 after:top-4 after:right-[-28px]'>
                        <MdOutlineMarkEmailRead className='absolute top-[13px] sml:top-[14px] text-xl' />
                        <p className='ml-6 pt-4 sml:py-4'>
                            mail@yourcompany.com
                        </p>
                    </div>
                    <div className='text-xs relative'>
                        <BiPhoneCall className='absolute top-[13px] sml:top-[14px] text-xl' />
                        <p className='ml-6 pt-4 sml:py-4'>
                            +896 120 5889 (Toll free)
                        </p>
                    </div>

                </div>
                <div className='sml:w-2/5 py-2.5 sml:py-0 flex sml:justify-end items-center gap-5 text-[20px] sml:text-[22px]'>
                    <a href='#'> <TiSocialFacebook className='linear duration-300 hover:text-primary' /></a>
                    <a href='#'> <TiSocialTwitter className='linear duration-300 hover:text-primary' /></a>
                    <a href='#'> <TiSocialLinkedin className='linear duration-300 hover:text-primary' /></a>
                    <a href='#'> <TbBrandInstagram className='linear duration-300 hover:text-primary' /></a>
                </div>
            </div>
        </header>
    )
}

export default Header