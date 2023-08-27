"use client"
import React, {useEffect, useState} from 'react'
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Eye, EyeOff, Shield, User2} from "lucide-react";

const LoginForm = () => {
    const [loading, setLoading] = useState()
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    })
    const [showPassword, setShowPassword] = useState(false)

    useEffect(() => {
        const password = document.getElementById("password");

        if (showPassword && password)
            password.setAttribute("type", "text");
        else if (password)
            password.setAttribute("type", "password");

    }, [showPassword]);

    const handleSubmit = (e: any) => {
        e.preventDefault();
    }
    return (
        <form onSubmit={handleSubmit}>
            <Card className="w-full sm:w-[350px]">
                <CardHeader className={"!text-center"}>
                    <CardTitle>Login to Dashboard</CardTitle>
                    <CardDescription>Hi Rohit Welcome to Your Dashboard</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="email"
                                   className={"!flex gap-2 items-center "}><User2 width={15}/> Username</Label>
                            <Input autoComplete={"off"} value={formData.username}
                                   onChange={(e: any) => setFormData({...formData, username: e.target.value})}
                                   id="email" type={"email"} placeholder="Enter Username"/>
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <div className={"flex items-center justify-between gap-2"}>
                                <Label htmlFor="framework" className={"!flex gap-2 items-center "}><Shield
                                    width={15}/> Password

                                </Label>
                                <Button onClick={() => setShowPassword(!showPassword)} type={"button"}
                                        className={"rounded-full justify-self-end"} variant={"ghost"}
                                        size={"icon"}>
                                    {showPassword ? <Eye width={15}/> : <EyeOff width={15}/>}
                                </Button>
                            </div>
                            <Input id="password" value={formData.password}
                                   onChange={(e: any) => {
                                       setFormData({...formData, password: e.target.value})
                                       setShowPassword(false)
                                   }}
                                   type={"password"} placeholder="Enter Password"/>
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button type={"reset"} variant="outline">Reset</Button>
                    <Button type={"submit"}>Login</Button>
                </CardFooter>
            </Card>
        </form>
    )
}
export default LoginForm
