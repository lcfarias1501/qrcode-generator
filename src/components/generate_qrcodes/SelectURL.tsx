"use client"

import React, { memo, useCallback, useMemo, useState } from 'react'
import { FaGlobe } from 'react-icons/fa6'
import LabelInput from '../ui/LabelInput'


interface SelectURLProps {
    url: string
    setUrl: (value: string) => void
}

export const SelectURL = memo(({ url, setUrl }: SelectURLProps) => {

    const [error, setError] = useState<string>('');

    const validateURL = useCallback((value: string) => {
        if (!value) {
            setError('URL is required');
            return false;
        }
        try {
            new URL(value);
            setError('');
            return true;
        } catch {
            setError('Please enter a valid URL');
            return false;
        }
    }, []);

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setUrl(newValue);
        validateURL(newValue);
    }, [setUrl, validateURL]);

    const showSuccess = useMemo(() => url && !error, [url, error]);

    return (
        <div className="bg-white rounded-xl shadow-lg p-6 w-full">
            <div className="flex items-center gap-2 mb-6">
                <div className="p-2 bg-blue-100 rounded-lg ">
                    <FaGlobe color='#004080' size={20}/>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                    Configure QR Code URL
                </h3>
            </div>

            <LabelInput
                label="Enter URL"
                value={url}
                onChange={handleChange}
                error={error}
                type="url"
            />

            {showSuccess && (
                <div className="mt-4 p-3 bg-green-50 rounded-lg">
                    <p className="text-sm text-green-600">
                        ✓ Valid URL format
                    </p>
                </div>
            )}

        </div>
    )
})
