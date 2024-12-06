import { Link } from "react-router-dom";
import { CalendarSVG, MyImagePng, NextbtnSVG } from "../../assets";
import { Slide } from "../../components/Slide";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import Download from "../../components/Download";

const About = () => {
    return (
        <>
            <div className="container w-10/12 mx-auto">
                <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 mt-4">
                    <div className="flex flex-col items-center gap-5">
                        <div className="w-[200px] h-[200px] rounded-full border-[1px] border-bgmuted overflow-hidden">
                            <img src={MyImagePng} alt="Abduvoris Mominov" />
                        </div>
                        <Slide delay={0.5}>
                            <div className="flex items-center gap-4 text-bgmuted text-[18px] font-parkinsans">
                                <i className="fa-solid fa-earth-americas text-blue-400 dark:text-green-500 text-[30px] animate-pulse"></i>{" "}
                                <p className="dark:text-black/60">
                                    Asia/Tashkent
                                </p>
                            </div>
                        </Slide>
                        <Slide delay={0.5}>
                            <div className="flex items-center gap-4">
                                <p className="rounded-full border-[1px] border-bgmuted px-4 py-1 bg-black text-green-500 font-fontArrows cursor-pointer">
                                    Uzbek
                                </p>
                                <p className="rounded-full border-[1px] border-bgmuted px-4 py-1 bg-black text-green-500 font-fontArrows cursor-pointer">
                                    English
                                </p>
                            </div>
                        </Slide>
                        <Slide delay={0.5}>
                            <div className="flex flex-row items-center gap-4">
                                <p className="text-[18px] text-white font-bold dark:text-black">
                                    Resume:
                                 
                                </p>   <Download/>
                            </div>
                        </Slide>
                    </div>

                    <div className="flex flex-col lg:items-start md:items-start sm:items-center sm:gap-4 sm:mt-4 xs:mt-4 xs:items-center">
                        <Slide delay={0.5}>
                            <div className="w-[250px]">
                                <Link to={"https://t.me/Abduvoris_Mominov"}>
                                    <button class=" flex justify-between items-center px-4 py-2 border border-green-400 bg-[rgb(17,47,44,0.5)] text-white font-medium rounded-full shadow-md dark:bg-green-600/60 dark:border-black/60">
                                        <img
                                            className="w-[10%]"
                                            src={CalendarSVG}
                                            alt=""
                                        />
                                        Schedule a call
                                        <img
                                            className="w-[15%] rounded-full border-[1px] p-1  border-bgmuted "
                                            src={NextbtnSVG}
                                            alt=""
                                        />
                                    </button>
                                </Link>
                            </div>
                        </Slide>
                        <Slide delay={0.5}>
                            <p className="xl:text-[60px] lg:text-[50px] md:text-[45px] sm:text-[35px] xs:text-[30px] font-[900] lg:text-start md:text-start sm:text-center xs:text-center font-fontArrows text-white dark:text-black mt-1">
                                Abduvoris Mo'minov
                            </p>
                        </Slide>
                        <Slide delay={0.5}>
                            <p className="font-parkinsans text-[25px] text-white dark:text-black/60">
                                Frontend Developer
                            </p>
                        </Slide>

                        <Slide delay={0.5}>
                            {" "}
                            <ul className="flex items-center lg:gap-4 xs:gap-1 my-4">
                                <li>
                                    <Link
                                        to={"https://github.com/abduvoris0408"}
                                        className="rounded-full py-1 px-2 gap-1 flex items-center border-[1px] border-bgmuted text-white font-bold font-parkinsans bg-transparent  dark:text-black dark:border-black/60"
                                        href="#"
                                    >
                                        <FaGithub />
                                        <p>Git Hub</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to={
                                            "https://www.linkedin.com/in/abduvoris-mo-minov-125459340/"
                                        }
                                        className="rounded-full lg:py-1 lg:px-2 lg:gap-1 xs:py-[2px] xs:px-[3px] flex items-center border-[1px] border-bgmuted text-white font-bold font-parkinsans bg-transparent dark:text-black dark:border-black/60"
                                        href="#"
                                    >
                                        <FaLinkedin className="text-blue-600" />
                                        <p>Linked In</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to={
                                            "https://mail.google.com/mail/u/0/#inbox?compose=new"
                                        }
                                        className="rounded-full py-1 px-2 gap-1 flex items-center border-[1px] border-bgmuted text-white font-bold font-parkinsans bg-transparent  dark:text-black dark:border-black/60"
                                    >
                                        <MdOutlineMailOutline className="text-yellow-500" />
                                        <p>Email</p>{" "}
                                    </Link>
                                </li>
                            </ul>
                        </Slide>

                        <Slide delay={0.5}>
                            {" "}
                            <p className=" lg:text-start md:text-start sm:text-center xs:text-center text-bgmuted text-[18px] my-6 font-parkinsans  dark:text-black/50">
                                Men Abduvoris O'zbekistonlik Frontend
                                Dasturchisiman. 2004-yil 26-iyunda tavallud
                                topganman. Insonlarga oz faoliyatim davomida
                                JavaScript dasturlash tili bo'yicha o'z
                                yordamimni berib kelmoqdaman.Hozirda IT sohasida
                                web va mobile ko'rinishda dasturlar yozib
                                kelmoqdaman.Mening ishlarim raqamli
                                interfeyslarni va texnologiyaning yaqinlashuvini
                                qamrab oladi.
                            </p>
                        </Slide>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
