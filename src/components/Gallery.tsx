"use client";

import React, { useEffect, useState, useTransition } from "react";
import CloudinaryImage from "@/components/Cloudinary-image";
import { SearchResult } from "@/app/[locale]/page";
import { Size, useWindowSize } from "@/lib/hooks/useWindowsize";
import {useI18n} from "../../translations/client";

interface GalleryProps {
  results: SearchResult[];
  fetchFolders: (folder: string) => Promise<SearchResult[]>;
  video?: string;
}

const Gallery: React.FC<GalleryProps> = ({ results, fetchFolders, video }) => {
  const [activePage, setActivePage] = useState("all");
  const [filteredResults, setFilteredResults] = useState(results);
  const [isPending, startTransition] = useTransition();
  const windowSize: Size = useWindowSize();
  const smallScreen = windowSize.width! < 445;
  const t = useI18n();

  useEffect(() => {
    const url = document.URL;
    if (url.includes("mies")) {
      setActivePage("mies");
    } else if (url.includes("neeltje")) {
      setActivePage("neeltje");
    } else if (url.includes("mi_ne")) {
      setActivePage("mi_ne");
    } else {
      setActivePage("all");
    }
  }, [filteredResults]);

  const handleButtonClick = async (folder: string) => {
    setActivePage(folder);
    startTransition(async () => {
      const newResults = fetchFolders(folder);
      setFilteredResults(await newResults);
    });
    window.history.replaceState({}, "", `/${folder}`);
  };

  return (
    <>
      <div className={"relative w-[95%] max-w-6xl mx-auto overflow-hidden"}>
        <video className={"w-full"} loop muted autoPlay>
          <source src={""}></source>
        </video>
      </div>
      <div className="flex justify-center gap-5 mt-8 text-lg ">
        <button
          className={`${activePage === "all" ? "text-black" : "text-gray-400"} hover:opacity-50`}
          onClick={() => handleButtonClick("")}
        >
          {t("general.all")}
        </button>
        <button
          className={`${activePage === "mi_ne" ? "text-black" : "text-gray-400"} hover:opacity-50`}
          onClick={() => handleButtonClick("mi_ne")}
        >
          mi_ne
        </button>
        <button
          className={`${activePage === "mies" ? "text-black" : "text-gray-400"} hover:opacity-50`}
          onClick={() => handleButtonClick("mies")}
        >
          mies
        </button>
        <button
          className={`${activePage === "neeltje" ? "text-black" : "text-gray-400"} hover:opacity-50`}
          onClick={() => handleButtonClick("neeltje")}
        >
          neeltje
        </button>
      </div>
      <div className={"mx-auto mt-10 w-[100%]"}>
        <div
          className={`flex flex-wrap ${smallScreen ? "gap-4" : "gap-6"} justify-center`}
        >
          {filteredResults?.map((result: SearchResult) => (
            <div key={result.public_id}>
              <CloudinaryImage
                src={result.public_id}
                width={500}
                height={400}
                title={result.filename}
                alt={result.context?.alt}
                caption={result.context?.caption}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Gallery;