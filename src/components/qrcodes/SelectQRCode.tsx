"use client"

import React, { useState } from 'react'
import {} from 'react-icons/fa6'
import { RiQrCodeLine } from 'react-icons/ri'

type qrcodeTypes = 'default' | 'insta' | 'facebook' 

export default function SelectQRCode() {

    const [qrcode, setQrcode] = useState<qrcodeTypes>('default')

    return (
        <div>

            

        </div>
    )
}
