import React from "react";
import { useState } from "react";
import { CldImage } from "next-cloudinary";

interface ImagePopUpProps {
  hideDialog: () => void;
  imageUrl: string;
  show: boolean;
  width?: number;
  height?: number;
}

const ImagePopUp: React.FC<ImagePopUpProps> = ({
  hideDialog,
  imageUrl,
  show,
    width, height
}) => {
  const handleClickOutside = (event: React.MouseEvent<HTMLDivElement>) => {
    hideDialog();
  };

  return (
    <div
      className={`image-popup ${show ? "show" : ""}`}
      onClick={handleClickOutside}
    >
      <div className="image-popup-content">
        <div className="image-popup-inner">
          <CldImage
            src={imageUrl}
            alt="foto3"
            width={!!width ? width : 600}
            height={!!height? height: 700}
            style={{
              objectFit: "cover",
              width: "90%",
              height: "auto",
              display: "block",
              margin: 2
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ImagePopUp;
