import { Logo } from "../../assets";
import { navitemsConstants } from "..//../constants/navitems";
import NavbarItems from "../NavbarItems";
import Modal from "../Modal";
import ToggleMode from "../togglemode";

const Navbar = () => {
    return (
        <nav className="py-5 border-b-[1px] border-bgmuted dark:border-black/20 sticky top-0 bg-hero bg-bgprimary z-10 dark:bg-white ">
            <div className="container w-10/12 mx-auto flex justify-between items-center">
                <img
                    className="lg:w-[7%] cursor-pointer md:w-[12%] sm:w-[13%] xs:w-[15%]"
                    src={Logo}
                    alt="logo"
                />
                <ul className="lg:flex font-parkinsans text-white gap-4 dark:text-black md:flex sm:hidden xs:hidden ">
                    {navitemsConstants.map((i) => (
                        <NavbarItems
                            icon={i.icon}
                            name={i.name}
                            link={i.link}
                        />
                    ))}
                </ul>
                <div className="flex items-center gap-4">
                    <ToggleMode />
                    <Modal />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

//
