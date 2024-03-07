"use client"
import React, {useEffect, useState} from "react";
import CloudinaryImage from "@/components/Cloudinary-image";
import { SearchResult } from "@/app/page";
import { fetchResults } from "@/app/api/fetchResults";
import ReactPlayer from "react-player";
import dynamic from "next/dynamic";



interface GalleryProps {
    results: SearchResult[];
}


const Gallery: React.FC<GalleryProps> = ({ results }) => {
    const CloudinaryImage = dynamic(() => import("@/components/Cloudinary-image"));
    const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

    const [filteredResults, setFilteredResults] = useState(results);
    const [justifyClass, setJustifyClass] = useState("justify-start");
    const [coversize, setCoverSize] = useState(48)
    const handleButtonClick = async (folder: string) => {
        try {
            // Call fetchResults from the service with the folder as parameter
            const newResults = await fetchResults(folder);
            setFilteredResults(newResults);
            window.history.replaceState({}, '', `/${folder}`);
        } catch (error) {
            console.error("Error fetching results:", error);
        }
    };

    const handleResize = () => {
        if (window.innerWidth < 672) {
            setJustifyClass("justify-center");
        } else {
            setJustifyClass("justify-start");
        }
    };

    useEffect(() => {
        // Set initial class based on window size
        handleResize();

        // Add event listener for window resize
        window.addEventListener("resize", handleResize);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        // Update the component when coversize changes
        handleResize();
    }, [coversize]);

    return (
        <>
            <ReactPlayer
                width="w-50"
                height="1000px"
                url={"https://www.youtube.com/watch?v=G9ADNi-7MLg"}
                controls={true}
                // light is usefull incase of dark mode
                light={false}
                // picture in picture
                pip={true}
            />
            <div className="flex justify-end gap-5">
                <button className="button-style" onClick={() => handleButtonClick("")}>alles</button>
                <button className="button-style" onClick={() => handleButtonClick("mies")}>mies</button>
                <button className="button-style" onClick={() => handleButtonClick("neeltje")}>neeltje</button>
                <button className="button-style" onClick={() => handleButtonClick("mi-ne")}>mi-ne</button>
            </div>
            <div className={`flex flex-row flex-wrap gap-7 ml-10 ${justifyClass}`}>
                {filteredResults?.map((result: SearchResult) => (
                    <div className="flex mt-4" key={result.public_id}>
                        <CloudinaryImage
                            cover={coversize}
                            src={result.public_id}
                            width={500}
                            height={400}
                            title={result.filename}
                            alt={result.context?.alt}
                        />
                    </div>
                ))}
            </div>
        </>
    );
};

export default Gallery;