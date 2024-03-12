import React from "react";
import logo from "../../../public/7.jpeg"
import Image from "next/image";


const Loading = () => {
  return (
      <div className={"flex mx-auto justify-center align-middle mt-10 opacity-50"}>
        <Image src={logo} width={300} height={200} alt={"loading"}/>
      </div>
  )

};

export default Loading;
