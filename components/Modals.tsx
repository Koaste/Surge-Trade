import Image from 'next/image';
import React, { useState } from 'react'

const Modals = ({ isVisible, onClose }: any) => {
    if ( !isVisible ) return null;

    const handleClose = (e: any) => {
        if (e.target.id === 'wrapper') onClose();
    }
  
    return (
        <div className='fixed inset-0 bg-black bg-opacity-50 background-blur-sm flex justify-center items-center' id ='wrapper' onClick={handleClose}>
            <div className='w-[600px] flex flex-col'>
                <button className='text-black text-xl place-self-end' onClick={() => onClose()}>X</button>
                <div className='bg-white p-2 rounded'>
                    <div className='p-6 text-black relative flex items-center h-10 justify-between'>
                        <button className='text-bold cursor-pointer'>
                            <h1>Google</h1>
                        </button>
                        <button className='text-bold cursor-pointer'>
                            <h1>MetaMask</h1>
                        </button>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Modals