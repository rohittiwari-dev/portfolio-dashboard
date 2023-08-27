"use client"
import React from 'react'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger
} from "@/components/ui/sheet";
import {Menu} from "lucide-react";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import {Separator} from "@/components/ui/separator";
import Link from "next/link";


export const SideBarLarge = ({className = "", navigationList, ...props}: {
    className?: string,
    navigationList: []
}) => {
    return (
        <div className={`${className} px-2 border h-full`}>
            SideBar
        </div>
    )
}


/**
 * This is Sidebar Sheet Module created with Modal for Small Screen With a Trigger to Activate
 * */
export const SideBar = ({className}: { className: string }) => {
    return (
        <Sheet>
            <SheetTrigger asChild><Menu className={`${className} cursor-pointer hover:text-primary`}/></SheetTrigger>
            <SheetContent className="w-full xs:w-[250px]" side={"left"}>
                <SheetHeader>
                    <SheetTitle>Navigations</SheetTitle>
                    <SheetDescription>
                        Portal Navigations
                    </SheetDescription>
                </SheetHeader>
                <Separator className={"my-2"} orientation={"horizontal"}/>
                <NavigationMenu>
                    <NavigationMenuList className={"!flex flex-col gap-2 !w-40"}>
                        <NavigationMenuItem>
                            <SheetClose asChild>
                                <Link href="/" className={navigationMenuTriggerStyle({className: "!w-40"})}>
                                    Documentation
                                </Link>
                            </SheetClose>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger onClick={() => null} className={"!w-40"}>Getting
                                started</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <SheetClose asChild>
                                    <Link className={`${navigationMenuTriggerStyle({className: "!w-40"})} !w-36 !p-1`}
                                          href={"/about"}>Opne</Link>
                                </SheetClose>
                                <SheetClose asChild>
                                    <Link className={`${navigationMenuTriggerStyle({className: "!w-40"})} !w-36 !p-1`}
                                          href={"/about"}>Opne</Link>
                                </SheetClose>
                                <SheetClose asChild>
                                    <Link className={`${navigationMenuTriggerStyle({className: "!w-40"})} !w-36 !p-1`}
                                          href={"/about"}>Opne</Link>
                                </SheetClose>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>

                </NavigationMenu>
            </SheetContent>
        </Sheet>
    )
}
