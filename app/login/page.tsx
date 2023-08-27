import * as React from "react"
import ToggleTheme from "@/components/toggle-theme";
import LoginForm from "@/components/login-form";
import Logo from "@/components/logo";

export const metadata = {
    title: "Login"
}

export default function Login() {
    return (
        <div className={"w-full h-full relative flex justify-center items-center"}>
            <Logo className={"absolute top-2 left-0"}/>
            <ToggleTheme className={"absolute top-2 right-0"}/>
            <LoginForm/>
        </div>
    )
}
