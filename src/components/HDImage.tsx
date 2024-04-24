import React, { useEffect, useRef } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { useI18n } from "../../translations/client";
import { useWindowSize } from "@/lib/hooks/useWindowsize";

interface ImagePopUpProps {
  hideDialog: () => void;
  imageUrl: string;
  show: boolean;
}

const HDImage: React.FC<ImagePopUpProps> = ({ hideDialog, imageUrl, show }) => {
  const t = useI18n();
  const windowSize = useWindowSize();
  const smallScreen = windowSize.width! < 800;

  return (
    <div className={`image-popup ${show ? "show" : ""}`}>
      <div
        className=" flex flex-col justify-center"
        style={{ maxWidth: "100%", maxHeight: "95%", objectFit: "contain" }}
      >
        <div className={"p-2 pt-2 text-white flex flex-row justify-between"}>
          <div onClick={hideDialog}>{t("general.close")}</div>
          {smallScreen ? (
            <div>{t("general.zoomMobile")}</div>
          ) : (
            <div>{t("general.zoom")}</div>
          )}
        </div>
        <TransformWrapper>
          <TransformComponent>
            <img src={imageUrl} alt="wall1" />
          </TransformComponent>
        </TransformWrapper>
      </div>
    </div>
  );
};

export default HDImage;
