"use client";
import React from "react";
import ReactPlayer from "react-player";

const Video = () => {
    //video path
    let videosrc = "/videos/next.mp4";

    return (
        <div>
            <ReactPlayer
                className="w-100 h-50"
                url={videosrc}
                controls={true}
                // light is usefull incase of dark mode
                light={false}
                // picture in picture
                pip={true}
            />
            <source src={videosrc} type="video/mp4" />
        </div>
    );
};

export default Video;