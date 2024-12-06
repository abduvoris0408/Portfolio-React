import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { navitemsConstants } from "../constants/navitems";
import NavbarItems from "./NavbarItems";
import { Logo } from "../assets";

const Modal = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div className=" lg:hidden md:hidden sm:text-[30px] text-white dark:text-black border-[1px] border-bgmuted dark:border-black/60 rounded-md p-1 xs:text-[30px]">
            <div onClick={handleNav} className="block md:hidden">
                {nav ? (
                    <AiOutlineClose size={20} />
                ) : (
                    <AiOutlineMenu size={20} />
                )}
            </div>

            <ul
                className={
                    nav
                        ? "px-4 py-4 gap-2 flex flex-col fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
                        : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
                }
            >
                <img src={Logo} className="xs:w-[30%]" alt="logo" />
                {navitemsConstants.map((i) => (
                    <NavbarItems name={i.name} icon={i.icon} link={i.link} />
                ))}
            </ul>
        </div>
    );
};

export default Modal;
