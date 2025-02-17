"use client"

import { SelectQRCode } from '@/components/generate_qrcodes/SelectQRCode'
import { SelectURL } from '@/components/generate_qrcodes/SelectURL'
import ButtonHover from '@/components/ui/ButtonHover'
import { qrcodeTypes } from '@/interfaces/qrcodeTypes'
import React, { memo, useCallback, useState } from 'react'



const Generate = memo(() => {

    const [qrcode, setQrcode] = useState<qrcodeTypes>('default')
    const [url, setUrl] = useState<string>('')
    const [loading, setLoading] = useState(false)

    const handleUrlChange = useCallback((newUrl: string) => {
        setUrl(newUrl)
    }, [])

    const handleQrcodeChange = useCallback((type: qrcodeTypes) => {
        setQrcode(type)
    }, [])

    async function onSubmit() {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }

    return (
        <div className=" py-12 px-4">
            <div className="max-w-3xl mx-auto space-y-6">
                <SelectURL url={url} setUrl={handleUrlChange} />
                <SelectQRCode qrcode={qrcode} setQrcode={handleQrcodeChange} />

                <ButtonHover
                    text='Generate'
                    color='#63b3ed'
                    secundaryColor='#4299e1'
                    props='ml-2'
                    loading={loading}
                    onClick={onSubmit}
                />

            </div>
        </div>
    )
})

Generate.displayName = 'Generate'

export default Generate