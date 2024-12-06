import { AiOutlineAppstore } from "react-icons/ai";
import { FaHome } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import { LiaBookSolid } from "react-icons/lia";

export const navitemsConstants = [
    {
        name: "Home",
        icon: <FaHome />,
        link: "/",
    },
    {
        name: "About",
        icon: <FaRegCircleUser />,
        link: "/about",
    },
    {
        name: "Blog",
        icon: <LiaBookSolid />,
        link: "/blog",
    },
    {
        name: "Projects",
        icon: <AiOutlineAppstore />,
        link: "/projects",
    },
];
