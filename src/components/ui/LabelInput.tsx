"use client"

import React, { memo } from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string
    error?: string
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const LabelInput = memo(({
    label,
    error,
    value,
    onChange,
    className = '',
    ...props
}: InputProps) => {

    const isActive = value.length > 0

    return (
        <div className="relative w-full">
            <label
                className={`
                    absolute transition-all duration-200 px-1
                    ${isActive
                        ? '-top-2 left-2 text-xs bg-white text-blue-600'
                        : 'top-[10px] left-3 text-gray-500 -z-10'
                    }
                `}
            >
                {label}
            </label>
            <input
                {...props}
                value={value}
                onChange={onChange}
                placeholder={label}
                className={`
                    w-full px-3 py-2 rounded-lg bg-transparent
                    border-2 outline-none transition-all
                    focus:border-blue-500
                    ${error ? 'border-red-500' : 'border-gray-200'}
                    ${className}
                `}
            />
            {error && (
                <p className="mt-1 text-sm text-red-500">{error}</p>
            )}
        </div>
    )
})

LabelInput.displayName = 'LabelInput'

export default LabelInput