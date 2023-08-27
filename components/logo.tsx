import React from 'react'
import Image from "next/image";
import favicon from "@/app/favicon.ico";
import Link from "next/link";

const Logo = ({iconClassName = "", className = "", textVisible = true}: {
    className?: string,
    textVisible?: boolean
    iconClassName?: string
}) => {
    return (
        <Link
            href="/"
            className={`${className} w-fit flex bg-slate-900 dark:bg-transparent dark:rounded-none dark:shadow-none px-2 py-1 rounded-md shadow-lg gap-2 font-bold text-lg text-sky-200 word-nowrap items-center justify-start`}
        >
            <Image
                src={favicon}
                alt="logo"
                priority
                sizes="6vh"
                width={20}
                height={20}
                className={` w-6 h-6 ${iconClassName}`}
            />
            {textVisible && <span className={"hidden xs:block"}>Rohit Tiwari</span>}

        </Link>
    )
}
export default Logo
