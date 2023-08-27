import Logo from "@/components/logo";

const Footer = () => {
    return (
        <footer
            className={"!py-5 border-t px-4 flex-col xs:flex-row text-center md:text-start flex gap-2 items-center justify-between"}>
            <Logo iconClassName={"!w-5 opacity-70 !h-5"} textVisible={false}/>
            <p className={"flex-1 text-gray-400"}>&copy; Reserved by Rohit Tiwari</p>
        </footer>
    )
}
export default Footer
