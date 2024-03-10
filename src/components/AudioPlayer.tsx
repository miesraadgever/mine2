import React from "react";
import Image from "next/image";

const AudioPlayer = (props: any) => {
  return (
    <div>
      <Image
        width={500}
        height={300}
        src={props.image}
        alt={"cover"}
        className="object-cover w-72 h-52"
      />
      <audio controls className={"w-full mt-2 mx-auto"}>
        <source src={props.src} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default AudioPlayer;
