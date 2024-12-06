import {
    FaGithub,
    FaInstagram,
    FaLinkedin,
    FaProductHunt,
    FaTelegram,
    FaYoutube,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export const featuresConstants = [
    {
        name: "Github",
        link: "https://github.com/abduvoris0408",
        icon: <FaGithub className=" text-bgmuted dark:text-black" />,
    },
    {
        name: "Instagram",
        link: "https://instagram.com/abduvoris_mominov",
        icon: <FaInstagram className=" text-purple-400 dark:text-black" />,
    },
    {
        name: "Telegram",
        link: "https://t.me/Abduvoris_Mominov",
        icon: <FaTelegram className=" text-blue-400 dark:text-black" />,
    },
    {
        name: "You tube",
        link: "https://youtube.com",
        icon: <FaYoutube className=" text-red-500 dark:text-black" />,
    },
    {
        name: "Linked in",
        link: "https://www.linkedin.com/in/abduvoris-mo-minov-125459340/",
        icon: <FaLinkedin className=" text-bgmuted dark:text-black" />,
    },
    {
        name: "X",
        link: "https://twitter.com",
        icon: <FaSquareXTwitter className=" text-bgmuted dark:text-black" />,
    },
    {
        name: "ProductHunt",
        link: "https://producthunt.com",
        icon: <FaProductHunt className=" text-bgmuted dark:text-black" />,
    },
];
