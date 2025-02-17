"use client"

import { LuQrCode, LuCaseSensitive, LuFlaskConical } from 'react-icons/lu'
import { qrcodeTypes } from "@/interfaces/qrcodeTypes"


interface SelectQRCodeProps {
    qrcode: qrcodeTypes
    setQrcode: (type: qrcodeTypes) => void
}


export const SelectQRCode = ({ qrcode, setQrcode }: SelectQRCodeProps) => {

    const qrTypes = [
        { id: 'default', label: 'Standard', icon: LuQrCode, premium: false },
        { id: 'label', label: 'Label', icon: LuCaseSensitive, premium: true },
        { id: 'custom', label: 'Custom', icon: LuFlaskConical, premium: true },
    ] as const

    const hasPremium = false

    return (
        <div className="bg-white rounded-xl shadow-lg p-6 w-full mt-6">

            {/* title and icon */}
            <div className="flex items-center gap-2 mb-6">
                <div className="p-2 bg-purple-100 rounded-lg">
                    <LuQrCode color='#8D0FFC' size={20} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                    Select QR Code Style
                </h3>
            </div>

            {/* qr style selector */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {qrTypes.map((type) => (
                    <button
                        disabled={type.premium && !hasPremium}
                        key={type.id}
                        onClick={() => setQrcode(type.id)}
                        className={`
                            relative p-4 rounded-lg border-2 transition-all
                            flex flex-col items-center gap-2
                            ${type.premium && !hasPremium ? 'opacity-60 cursor-not-allowed' : ''}
                            ${qrcode === type.id
                                ? 'border-purple-500 bg-purple-50'
                                : 'border-gray-200 hover:border-purple-200'
                            }
                        `}
                    >
                        <type.icon className="h-6 w-6 text-gray-700" />
                        <div className="font-medium text-gray-800">{type.label}</div>
                        {type.premium && (
                            <div className="absolute -top-2 -right-2 bg-purple-500 text-white text-xs font-semibold px-2 py-1 rounded-full shadow-sm">
                                Premium
                            </div>
                        )}
                    </button>
                ))}
            </div>
        </div>
    )
}