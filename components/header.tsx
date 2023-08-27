"use client"
import React from "react";
import ToggleTheme from "@/components/toggle-theme";
import {Separator} from "./ui/separator";
import Link from "next/link";
import AvatarDropdown from "./avatar-dropdown";
import {SideBar} from "@/components/side-bar";
import {buttonVariants} from "@/components/ui/button";
import {usePathname} from "next/navigation";
import Logo from "@/components/logo";

export const siteMap = [
    {name: "Dashboard", path: "/", icon: ""},
    {name: "About", path: "/about", icon: ""},
    {name: "Projects", path: "/projects", icon: ""},
    {name: "Articles", path: "/articles", icon: ""},
];

const Header = () => {
    const pathname = usePathname();
    return (
        <header
            className={`${(pathname == "/login") ? "hidden" : "flex"} px-4 h-14 justify-between items-center py-2 gap-3 border-b`}>
            <Logo/>
            <Separator orientation="vertical"/>
            <div className={"flex-1 flex gap-2 items-center"}>
                <SideBar className={"sm:hidden"}/>
                <nav className={"hidden sm:flex gap-2 items-center"}>
                    {siteMap.map((site) => (
                        <Link
                            className={buttonVariants({
                                size: "sm",
                                className: "!p-2 !h-8",
                                variant: pathname == site.path ? "secondary" : "ghost"
                            })}
                            key={site.name}
                            href={site.path}>
                            {site.name}
                        </Link>
                    ))}
                </nav>
            </div>
            <div className="flex gap-2 items-center justify-end">
                <ToggleTheme/>
                <AvatarDropdown/>
            </div>
        </header>
    );
};

export default Header;
