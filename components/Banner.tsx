import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import { Cursor, useTypewriter } from 'react-simple-typewriter';

const Banner = () => {
    const [text,count] = useTypewriter({
        words:[
          "Analyze.",
          "All in one.",
          "Trade now.",
        ],
        loop: true,
        delaySpeed: 2000,
        });


  return (
    <div className='flex flex-row p-20 relative justify-evenly mx-auto items-center'>
        <div className='flex flex-row p-20'>
            <motion.div 
                initial={{
                    y:-300,
                    opacity: 0,
                }}
                whileInView={{ opacity: 1, y:0 }}
                transition={{ duration: 1.2 }}
            >
                <h1 className='text-4xl font-serif text-center text-[#F2AA4CFF] hover:underline'>{text}</h1>
            </motion.div>
        </div>

        <div className='flex flex-row p-20'>
            <motion.img 
                initial={{
                    y:-300,
                    opacity: 0,
                }}
                whileInView={{ opacity: 1, y:0 }}
                transition={{ duration: 1.2 }}
                src="/trading.png"
                width={700} 
                height={700} 
                alt=''
            />
        </div>
    </div>
  )
}

export default Banner