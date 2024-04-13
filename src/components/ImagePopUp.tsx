import React from 'react';
import { useState } from 'react';
import { CldImage } from 'next-cloudinary';

interface ImagePopUpProps {
    hideDialog: () => void;
    imageUrl: string;
    show: boolean;
}

const ImagePopUp: React.FC<ImagePopUpProps> = ({ hideDialog, imageUrl, show }) => {
    const handleClickOutside = (event: React.MouseEvent<HTMLDivElement>) => {
        hideDialog();
    };

    return (
        <div className={`image-popup ${show ? 'show' : ''}`} onClick={handleClickOutside}>
            <div className="image-popup-content">
                <div className="image-popup-inner">
                    <CldImage
                        src={imageUrl}
                        alt="foto3"
                        width={600}
                        height={700}
                        style={{ objectFit: 'cover', width: "85%", height: 'auto', display: 'block' }}
                    />
                </div>
            </div>
        </div>
    );
};

export default ImagePopUp;
