"use client";
import {useTheme} from "next-themes";
import React from "react";
import {Button} from "./ui/button";
import {Moon, Sun} from "lucide-react";

const ToggleTheme = ({className}: { className?: string }) => {
    const {setTheme, theme} = useTheme();
    return (
        <div className={`${className}`}>
            <Button
                className="rounded-full"
                variant={"ghost"}
                size={"icon"}
                onClick={() => {
                    setTheme(theme == "dark" ? "light" : "dark");
                }}
            >
                <Sun className="dark:hidden w-5 h-5"/>
                <Moon className="hidden w-5 h-5 dark:block"/>
            </Button>
        </div>
    );
};

export default ToggleTheme;
