import React, { useEffect, useRef } from 'react';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

interface ImagePopUpProps {
    hideDialog: () => void;
    imageUrl: string;
    show: boolean;
}

const HDImage: React.FC<ImagePopUpProps> = ({ hideDialog, imageUrl, show }) => {

    return (
        <div className={`image-popup ${show ? 'show' : ''}`}>
            <div className=" flex flex-col justify-center" style={{ maxWidth: '100%', maxHeight: '95%', objectFit: 'contain'}}
            >
                <div className={"p-2 pt-2 text-white flex flex-row justify-between"}>
                    <div onClick={hideDialog}>close</div>
                    <div>click and scroll to zoom</div>
                </div>
                <TransformWrapper>
                    <TransformComponent>
                        <img
                            src={imageUrl}
                            alt="wall1"
                        />
                    </TransformComponent>
                </TransformWrapper>
            </div>
        </div>
    );
};

export default HDImage;
