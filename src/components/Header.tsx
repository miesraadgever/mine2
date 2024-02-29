import React from 'react';
import Link from "next/link";

const Header = () => {
    return (
        <div className={"flex flex-row justify-between m-3"}>
            <div>
                <span className={"font-medium text-xl"}>
                    mi-ne movement
                </span>
            </div>
            <div className={"flex flex-row gap-5 mr-5"}>
                <div>
                   <Link href={"/"} className={"text-sm hover:opacity-50"}>home</Link>
                </div>
                <div>
                    <Link href={"/about"} className={"text-sm hover:opacity-50"}>about</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;