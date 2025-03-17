'use client'

import React from 'react'
import Quotes from '@/components/Quotes';

const page = () => {
    return (
        <div className='bg-[#E8E8E8] min-h-screen flex flex-col justify-center items-center'>
            <Quotes />
        </div>
    )
}

export default page