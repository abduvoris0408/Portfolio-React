import { FaGithub, FaInstagram, FaTelegram } from "react-icons/fa";
import CompactSlider from "../components/compactslider";
import { FiExternalLink } from "react-icons/fi";
import { Link } from "react-router-dom";

const Projects = () => {
    return (
        <div>
            <CompactSlider />

            <div className="container w-10/12 mx-auto">
                <div className="grid lg:grid-cols-2 gap-5  md:grid-cols-1 mb-4">
                    <div className="flex items-center  gap-4 bg-bgmuted/10 rounded-lg p-[20px] dark:bg-bgprimary/30 cursor-pointer">
                        <div className="border-[1px] rounded-lg p-1 w-[80px] h-[60px] flex items-center justify-center dark:border-black/60">
                            <FaGithub className="text-[40px] text-white dark:text-black" />
                        </div>
                        <div>
                            <div className="flex items-center justify-between text-[18px] font-bold font-parkinsans text-white dark:text-black">
                                <p>Git Hub Profile</p>
                                <Link to={"https://github.com/abduvoris0408"}>
                                    <FiExternalLink className="text-[20px] text-green-600" />
                                </Link>
                            </div>
                            <p className="text-bgmuted font-parkinsans lg:text-[14px] dark:text-black/60">
                                Ushbu havola orqali o'tib sizni qiziqtirgan
                                ishlarimni ko'rishingiz mumkin!
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center  gap-4 bg-bgmuted/10 rounded-lg p-[20px] dark:bg-bgprimary/30 cursor-pointer">
                        <div className="border-[1px] rounded-lg p-1 w-[80px] h-[60px] flex items-center justify-center dark:border-black/60">
                            <FaInstagram className="rounded-lg text-[40px] text-white bg-gradient-to-r from-purple-500 to-red-500  " />
                        </div>
                        <div>
                            <div className="flex items-center justify-between text-[18px] font-bold font-parkinsans text-white dark:text-black">
                                <p>Instagram Profile</p>
                                <Link
                                    to={
                                        "https://instagram.com/abduvoris_mominov"
                                    }
                                >
                                    <FiExternalLink className="text-[20px] text-green-600" />
                                </Link>
                            </div>
                            <p className="text-bgmuted font-parkinsans text-[14px] dark:text-black/60">
                                Ushbu havola orqali o'tib Instagramdagi
                                contentlarimni kuzatib borishingiz mumkin!
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 bg-bgmuted/10 rounded-lg p-[20px] dark:bg-bgprimary/30 cursor-pointer">
                        <div className="border-[1px] rounded-lg p-1 w-[80px] h-[60px] flex items-center justify-center dark:border-black/60">
                            <FaTelegram className="rounded-lg text-[40px] text-cyan-500 " />
                        </div>
                        <div>
                            <div className="flex items-center justify-between text-[18px] font-bold font-parkinsans text-white dark:text-black">
                                <p>Instagram Profile</p>
                                <Link to={"https://t.me/Abduvoris_Mominov"}>
                                    <FiExternalLink className="text-[20px] text-green-600" />
                                </Link>
                            </div>
                            <p className="text-bgmuted font-parkinsans text-[14px] dark:text-black/60">
                                Ushbu havola orqali o'tib siz Telegramdagi
                                kanalimni kuzatib borishingiz mumkin!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
