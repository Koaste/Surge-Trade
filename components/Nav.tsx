import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion"
import React, { useState } from 'react'
import Image from 'next/image';
import Modals from './Modals';
import Link from 'next/link'

type Props = {
}

export default function Header({ }: Props) {
    const [showModal, setShowModal] = useState(false)


  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-slate-800 shadow-md py-5 px-5 '>
        <div className='relative flex items-center h-10 my-auto p-7 mx-10'>
            <Image
                  src="/SurgeTradev2.png"
                  layout="fill"
                  objectFit='contain'
                  objectPosition='left' 
                  alt={''}            
            />
        </div>
        <div>
        </div>
        <div className='relative flex items-center h-10 justify-between cursor-pointer my-auto'>
            <Link href="/">
                <button className='px-4 py-2'>
                    Home
                </button>
            </Link>
            <Link href="/market">
                <button className='px-4 py-2'>
                    Stock Market
                </button>
            </Link>
            <Link href="/web3">
                <button className='px-4 py-2'>Crypto Market</button>                
            </Link>            

            <button className='px-4 py-2'>Analysis</button>
            <button onClick={() => setShowModal(true)} className='rounded-md bg-white px-4 py-2 text-xs font-bold text-black lg:px-5 lg:py-3 lg:text-base'>Sign In</button>
            <Modals isVisible={showModal} onClose={() => setShowModal(false)}/>
        </div>
    </header>
  )
}