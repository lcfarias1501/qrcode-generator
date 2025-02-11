import SelectQRCode from '@/components/qrcodes/SelectQRCode'
import React from 'react'

export default function Generate() {
    return (
        <div className='max-w-6xl flex flex-col items-center mx-auto'>

            <SelectQRCode />

        </div>
    )
}
