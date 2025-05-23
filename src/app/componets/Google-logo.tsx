import Image from 'next/image';
import React from 'react';

const GoogleLogo = () => {
    return (
        <div className="flex items-center justify-center p-2 bg-white rounded-full shadow-sm">
            <Image
                src="https://raw.githubusercontent.com/DavyDevcosmo/tkd-shop/master/public/img/google.svg" // Coloque seu SVG na pasta public/img
                alt="Google Logo"
                width={24}
                height={24}
                className="w-9 h-9"

            />
        </div>
    );
};

export default GoogleLogo;