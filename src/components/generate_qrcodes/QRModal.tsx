"use client"

import Image from "next/image"
import React, { useEffect, useState } from "react"
import { LuX, LuExternalLink, LuCopy, LuCheck } from "react-icons/lu"

interface Props {
    image: string
    title: string
    onClose: () => void
    isOpen: boolean
}

export default function QRModal({ image, onClose, title, isOpen }: Props) {

    const [isLinkCopied, setIsLinkCopied] = useState<boolean>(false)

    // Handle escape key press
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                closeModal()
            }
        }

        if (isOpen) {
            window.addEventListener("keydown", handleEscape)
        } else {
            window.removeEventListener("keydown", handleEscape)
        }

        return () => window.removeEventListener("keydown", handleEscape)
    }, [isOpen, onClose])

    // Handle backdrop click
    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            closeModal()
        }
    }

    function copyLink() {
        navigator.clipboard.writeText(title)
        setIsLinkCopied(true)
    }

    function closeModal() {
        onClose()
        setIsLinkCopied(false)
    }

    return (
        <div
            className={`fixed inset-0 bg-black/50 flex items-center justify-center z-50 m-0 p-0 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
            onClick={handleBackdropClick}
            style={{
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                margin: 0,
                padding: 0
            }}
        >
            <div
                className={`bg-white rounded-2xl overflow-hidden shadow-lg max-w-sm w-full transition-transform duration-300 ${isOpen ? "scale-100" : "scale-95"
                    }`}
            >
                {/* Title Banner */}
                <div className="bg-gradient-to-r from-[var(--main)] to-blue-300 p-6">

                    <div className="flex justify-between items-center">
                        <span className="text-white text-xl font-semibold">QR created!</span>
                        <button onClick={closeModal} className="text-white hover:text-gray-800">
                            <LuX size={24} />
                        </button>
                    </div>
                </div>

                {/* Content */}
                <div className="p-6">

                    {/* QR CODE */}
                    <div className="flex justify-center my-4">
                        <Image
                            src={image}
                            alt={title}
                            width={200}
                            height={100}
                            priority

                        />
                    </div>

                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-center space-x-4 px-6 pb-6">

                    <a href={title} target="_blank">
                        <button className="bg-[var(--main)] hover:bg-[var(--main-hover)] rounded-md shadow-sm flex space-x-2 items-center px-6 py-2 text-white">
                            <LuExternalLink />
                            <span>Open URL</span>
                        </button>
                    </a>


                    <button
                        onClick={copyLink}
                        className={`${isLinkCopied ? "bg-green-300" : "bg-[var(--main)]"} ${!isLinkCopied && "hover:bg-[var(--main-hover)]"} rounded-md shadow-sm flex space-x-2 items-center px-6 py-2 text-white`}
                    >
                        {isLinkCopied ? <LuCheck /> : <LuCopy />}
                        <span>{isLinkCopied ? "URL Copied" : "Copy URL"}</span>
                    </button>


                </div>

            </div>
        </div>
    )
}
