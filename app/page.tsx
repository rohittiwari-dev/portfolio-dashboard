import {SideBarLarge} from "@/components/side-bar";

export default function Home() {
    return <main className="grid h-full grid-cols-10">
        <SideBarLarge className={"col-span-2 border-r"} navigationList={[]}/>
        <div className={"col-span-8 border px-4"}>
            DashBoard
        </div>
    </main>;
}
