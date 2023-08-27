import {ThemeProvider} from "@/lib/ThemeProvider";
import "./globals.css";
import type {Metadata} from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
    title: {
        default: "Dashboard | Rohit Tiwari - PORTFOLIO",
        template: `%s | Rohit Tiwari - PORTFOLIO`,
    },
    description: "",
    themeColor: [
        {media: "(prefers-color-scheme: light)", color: "white"},
        {media: "(prefers-color-scheme: dark)", color: "black"},
    ],
};

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className="w-screen flex min-h-screen overflow-x-hidden flex-col h-full">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Header/>
            <div className="flex-1 px-4 py-2">
                {children}
            </div>
            <Footer/>
        </ThemeProvider>
        </body>
        </html>
    );
}
