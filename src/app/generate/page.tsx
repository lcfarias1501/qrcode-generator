"use client"

import QRModal from '@/components/generate_qrcodes/QRModal'
import { SelectQRCode } from '@/components/generate_qrcodes/SelectQRCode'
import { SelectURL } from '@/components/generate_qrcodes/SelectURL'
import ButtonHover from '@/components/ui/ButtonHover'
import { qrcodeTypes } from '@/interfaces/qrcodeTypes'
import React, { memo, useCallback, useState } from 'react'
import { LuQrCode, LuX, LuTriangleAlert, LuExternalLink } from 'react-icons/lu'


const Generate = memo(() => {

    {/* DATA */ }
    const [qrcodeType, setQrcodeType] = useState<qrcodeTypes>('default')
    const [qrcode, setQrcode] = useState<string | null>(null)
    const [url, setUrl] = useState<string>('')

    {/* Loading state */ }
    const [loading, setLoading] = useState(false)

    {/* Feedback messages */ }
    const [err, setErr] = useState<string | null>(null)
    const [success, setSuccess] = useState<string | null>(null)

    {/* MODAL STATE */ }
    const [isOpen, setIsOpen] = useState(false)

    const handleUrlChange = useCallback((newUrl: string) => {
        setUrl(newUrl)
    }, [])

    const handleQrcodeChange = useCallback((type: qrcodeTypes) => {
        setQrcodeType(type)
    }, [])

    async function onSubmit() {
        setLoading(true)
        try {
            const response = await fetch(`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(url)}`)
            if (response.ok) {
                setQrcode(response.url)
                setSuccess('QR Code created!')
                console.log("Response:", response)
            }
            setIsOpen(true)
        } catch (error) {
            setErr('Something went wrong')
            console.error('Error generating QR code:', error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className=" py-12 px-4">
            {/* Limit the size of the content */}
            <div className="max-w-3xl mx-auto space-y-6">
                <SelectURL url={url} setUrl={handleUrlChange} />
                <SelectQRCode qrcode={qrcodeType} setQrcode={handleQrcodeChange} />

                <ButtonHover
                    text='Generate'
                    color='#63b3ed'
                    secundaryColor='#4299e1'
                    props='md:ml-1 w-full sm:w-auto'
                    loading={loading}
                    onClick={onSubmit}
                />

                {/* FEEDBACK MESSAGES */}
                {err &&
                    <div className='bg-rose-400 flex justify-between items-center rounded-md px-4 py-3'>
                        <div className='flex items-center space-x-2'>
                            <LuTriangleAlert color='#ffff' size={20} />
                            <span className='text-white'>{err}</span>
                        </div>
                        <button onClick={() => setErr(null)}>
                            <LuX color='#ffff' />
                        </button>
                    </div>
                }
                {success &&
                    <div className='bg-green-400 flex justify-between items-center rounded-md px-4 py-3'>
                        <div className='flex items-center space-x-2'>
                            <LuQrCode color='#ffff' size={20} />
                            <span className='text-white'>{success}</span>
                        </div>
                        <button
                            onClick={() => setIsOpen(true)}
                            className='text-white'
                        >
                            <span>Open QR</span>
                        </button>
                    </div>
                }


                {qrcode && (
                    <QRModal
                        isOpen={isOpen}
                        onClose={() => setIsOpen(false)}
                        title={url}
                        image={qrcode}
                    />
                )}




            </div>
        </div>
    )
})

Generate.displayName = 'Generate'

export default Generate