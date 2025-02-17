import React, { useCallback } from 'react'
import '../../styles/ButtonHover.css'
import { LuLoaderCircle } from 'react-icons/lu'

interface props {
    text: string
    color: string
    secundaryColor?: string
    props?: string
    loading?: boolean
    onClick?: () => void
}

export default function ButtonHover({ color, text, secundaryColor, loading, props, onClick }: props) {

    return (
        <button 
            className={`
                button
                outline-[var(--main)]
                before:bg-[var(--main)]
                text-[var(--main)]
                ${props}
            `}
            onClick={onClick}
            disabled={loading}
        >
            {loading ?
                <LuLoaderCircle className='animate-spin' />
                :
                text
            }
        </button>
    )
}
