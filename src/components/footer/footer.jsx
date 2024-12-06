import React from "react";
import { Slide } from "../../components/Slide";
import { FaReact } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoLogoVercel } from "react-icons/io5";
import { SiVite } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
const Footer = () => {
    return (
        <footer className="bg-bgprimary bg-hero  border-t-[1px] border-bgmuted py-8 dark:bg-white dark:border-t-black/20">
            <div className=" container w-10/12 mx-auto flex items-center justify-between xs:flex-col xs:gap-4">
                <div className="flex xs:flex xs:gap-4">
                    <Slide delay={0.5}>
                        <p className="text-white font-bold text-[20px] dark:text-black text-center mb-4">
                            Built with:
                        </p>
                        <ul className="flex flex-row items-center gap-4 font-fontArrows  ">
                            <li>
                                <Link
                                    to={"https://react.dev/"}
                                    className="flex items-center flex-row gap-2 text-[16px] text-white dark:text-black/50 xs:flex-col"
                                >
                                    {" "}
                                    <FaReact className="text-blue-500 " />
                                    <p className="text-center">React JS</p>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={"https://vite.dev/"}
                                    className="flex items-center  flex-row gap-2 text-[16px] text-white dark:text-black/50 xs:flex-col"
                                >
                                    <SiVite className="text-purple-500" />

                                    <p className="text-center">Vite dev</p>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={
                                        "https://vercel.com/abduvoris0408s-projects"
                                    }
                                    className="flex items-center  flex-row gap-2 text-[16px] text-white dark:text-black/50 xs:flex-col"
                                >
                                    <IoLogoVercel />

                                    <p className="text-center"> Vercel app</p>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={"https://tailwindcss.com/"}
                                    className="flex items-center flex-row gap-2 text-[16px] text-white dark:text-black/50 xs:flex-col"
                                >
                                    <RiTailwindCssFill className="text-cyan-500" />
                                    <p className="text-center">Tailwind CSS</p>
                                </Link>
                            </li>
                        </ul>
                    </Slide>
                </div>
                <Slide delay={0.5}>
                    <p className="text-[16px] font-parkinsans text-bgmuted dark:text-black xs:text-center">
                        Copyright © Abduvoris Mo'minov 2024 All rights Reserved
                    </p>
                </Slide>
            </div>
        </footer>
    );
};

export default Footer;
