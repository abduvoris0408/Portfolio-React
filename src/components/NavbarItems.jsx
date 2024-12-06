import React from "react";
import { Link } from "react-router-dom";

const NavbarItems = ({ name, icon, link = "" }) => {
    return (
        <div>
            <li>
                <Link
                    to={link}
                    className=" flex items-center gap-1 rounded-full border-[1px] border-slate-500 p-2 hover:border-green-500 cursor-pointer px-4 hover:text-green-500 duration-300 xs:text-[16px] xs:p-2 "
                >
                    {" "}
                    {icon}
                    <p>{name}</p>
                </Link>
            </li>
        </div>
    );
};

export default NavbarItems;
