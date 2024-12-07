import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const FloatingSocialIcons = () => {
    const verticalPosition = '9rem'; // Puedes ajustar esta variable
    const horizontalPosition = '6.1rem'; // Puedes ajustar esta variable

    return (
        <div
            className="fixed flex flex-col gap-6"
            style={{
                bottom: verticalPosition,
                right: horizontalPosition,
                zIndex: 1000,
            }}
        >
            <a
                href="https://www.facebook.com/share/1AkmhpeCEX/?"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#93A267] hover:text-[#485935] text-4xl"
                aria-label="Facebook"
            >
                <FaFacebook />
            </a>
            <a
                href="https://www.instagram.com/repack2024/profilecard/?igsh=NWdtNmFjb2NzOWs1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#93A267] hover:text-[#485935] text-4xl"
                aria-label="Instagram"
            >
                <FaInstagram />
            </a>
        </div>
    );
};

export default FloatingSocialIcons;
