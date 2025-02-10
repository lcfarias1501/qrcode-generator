"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { RiQrCodeLine } from 'react-icons/ri'
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi'
import { BiHistory } from 'react-icons/bi'

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className='sticky top-0 z-50 bg-white border-b-2 border-[var(--main)]'>
            <nav className='container mx-auto max-w-6xl px-4 md:px-0'>
                <div className='flex items-center justify-between h-16'>
                    {/* Logo */}
                    <Link href="/" className='flex items-center gap-2'>
                        <div className='relative w-8 h-8'>
                            <Image
                                alt='QR Code Generator'
                                src='/images/qrcode-logo.png'
                                fill
                                priority
                                className='object-contain'
                            />
                        </div>
                        <span className='font-semibold text-lg hidden sm:block'>QR Generator</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className='hidden md:flex items-center gap-6'>
                        <Link 
                            href="/generate" 
                            className='flex items-center gap-2 text-[var(--foreground)] hover:text-[var(--main)] transition-colors'
                        >
                            <RiQrCodeLine size={20} />
                            <span>Generate QR</span>
                        </Link>
                        <Link 
                            href="/history" 
                            className='flex items-center gap-2 text-[var(--foreground)] hover:text-[var(--main)] transition-colors'
                        >
                            <BiHistory size={20} />
                            <span>History</span>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button 
                        className='md:hidden p-2 rounded-lg hover:bg-gray-100'
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <HiOutlineX size={24} /> : <HiOutlineMenu size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className='md:hidden py-4 space-y-2'>
                        <Link 
                            href="/generate" 
                            className='flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100'
                            onClick={() => setIsOpen(false)}
                        >
                            <RiQrCodeLine size={20} />
                            <span>Generate QR</span>
                        </Link>
                        <Link 
                            href="/history" 
                            className='flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100'
                            onClick={() => setIsOpen(false)}
                        >
                            <BiHistory size={20} />
                            <span>History</span>
                        </Link>
                    </div>
                )}
            </nav>
        </header>
    )
}