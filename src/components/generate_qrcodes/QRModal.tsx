import React, { useEffect } from "react";
import { LuX } from "react-icons/lu";

interface Props {
    image: string;
    title: string;
    onClose: () => void;
    isOpen: boolean;
}

export default function QRModal({ image, onClose, title, isOpen }: Props) {
    // Handle escape key press
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                onClose();
            }
        };

        if (isOpen) {
            window.addEventListener("keydown", handleEscape);
        } else {
            window.removeEventListener("keydown", handleEscape);
        }

        return () => window.removeEventListener("keydown", handleEscape);
    }, [isOpen, onClose]);

    // Handle backdrop click
    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

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
                className={`bg-white p-6 rounded-lg shadow-lg max-w-sm w-full transition-transform duration-300 ${isOpen ? "scale-100" : "scale-95"
                    }`}
            >
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800">
                    <LuX size={24} />
                </button>

                <h1 className="text-xl font-semibold text-center">{title}</h1>

                <div className="flex justify-center mt-4">
                    <img src={image} alt={title} className="max-w-[200px] rounded-md shadow" />
                </div>
            </div>
        </div>
    );
}
