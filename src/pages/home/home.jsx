import { BeelineSVG, HeaderSVG, NajotSVG, PDPSVG, UzumSVG } from "../../assets";
import FeaturesItems from "../../components/FeaturesItems";
import { Slide } from "../../components/Slide";
import { featuresConstants } from "../../constants/features";

const Home = () => {
    return (
        <>
            <header>
                <div className="container w-10/12 mx-auto lg:my-36 md:my-30 sm:my-24 xs:my-16 lg:grid lg:grid-cols-2 sm:flex flex-col  ">
                    <div className="grid grid-cols-1 lg:w-[100%] md:w-[100%] sm:w-[100%] gap-14">
                        <Slide delay={0.5}>
                            <h1 className=" font-fontArrows lg:text-start lg:text-[42px] md:text-[38px] sm:text-[34px] sm:text-center xs:text-center xs:text-[32px] font-bold text-white dark:text-black">
                                Software engineer, technical writer & Frontend
                                Developer
                            </h1>
                        </Slide>
                        <Slide delay={0.5}>
                            <p className="text-[16px] xs:text-center lg:text-start text-bgmuted dark:text-black">
                                I'm{" "}
                                <span className="text-green-500 text-lg animate-pulse">
                                    Abduvoris Mo'minov
                                </span>
                                , an experienced frontend developer passionate
                                about learning and building open-source software
                                that is beneficial to developers and the world
                                at large.
                            </p>
                        </Slide>
                        <Slide delay={0.5}>
                            <ul className="flex flex-wrap text-white font-[600] text-lg gap-8 dark:text-black ">
                                {featuresConstants.map((i) => (
                                    <FeaturesItems
                                        icon={i.icon}
                                        name={i.name}
                                        link={i.link}
                                    />
                                ))}
                            </ul>
                        </Slide>
                    </div>
                    <div className="flex justify-end ">
                        <img
                            className="w-[600px] h-[350px] animate-pulse"
                            src={HeaderSVG}
                            alt="heafer-svg"
                        />
                    </div>
                </div>
            </header>
            <section className="container w-10/12 mx-auto mb-28">
                <Slide delay={0.5}>
                    <h2 className="text-[30px] text-white font-bold font-fontArrows dark:text-black">
                        Work Experience
                    </h2>
                </Slide>

                <div className="lg:grid lg:grid-cols-2 sm:grid sm:grid-cols-1 mt-12 lg:gap-8 sm:gap-8 xs:grid xs:grid-cols-1 xs:gap-6">
                    <Slide delay={0.5}>
                        {/* 1-card */}
                        <div className="flex flex-row lg:gap-10 xs:gap-4 sm:gap-6 md:gap-10">
                            <div className="flex flex-col lg:w-[30%] md:w-[20%] sm:w-[30%] xs:w-[80%] items-center ">
                                <img
                                    className="border border-1 border-bgmuted bg-bgmuted rounded-lg  dark:bg-cyan-200"
                                    src={UzumSVG}
                                    alt="uzum"
                                />
                                <span
                                    className="w-0 lg:h-[150px] md:h-[150px] sm:h-[170px] 
                                xs:h-[220px] border border-1 border-bgmuted flex items-center dark:border-black/50"
                                ></span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <h6 className="text-[22px] text-white font-fontArrows font-bold  dark:text-black">
                                    Uzum teams Uzb
                                </h6>
                                <p className="font-parkinsans text-white text-[19px]  dark:text-black">
                                    Frontend Developer
                                </p>
                                <p className="my-4 font-parkinsans text-[16px] text-white tracking-widest  dark:text-black">
                                    Nov 25,2024 -{" "}
                                    <span className="text-green-400 text-[18px]">
                                        Present
                                    </span>
                                </p>
                                <p className="text-bgmuted text-[16px] w-[80%]  dark:text-black/50">
                                    We will talk about how we are building the
                                    strongest ecosystem in our country, share
                                    our knowledge, and discuss IT, marketing,
                                    and HR trends.
                                </p>
                            </div>
                        </div>
                    </Slide>
                    {/* 1-card */}
                    <Slide delay={0.5}>
                        {/* 2-card */}
                        <div className="flex flex-row lg:gap-10 xs:gap-4 sm:gap-6 md:gap-10">
                            <div className="flex flex-col lg:w-[30%] md:w-[20%] sm:w-[30%] xs:w-[80%] items-center ">
                                <img
                                    className="border  p-3 border-1 border-bgmuted bg-bgmuted rounded-lg dark:bg-cyan-200"
                                    src={BeelineSVG}
                                    alt="uzum"
                                />
                                <span className="w-0 lg:h-[150px] md:h-[150px] sm:h-[170px] 
                                xs:h-[220px] border border-1 border-bgmuted flex items-center dark:border-black/50"></span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <h6 className="text-[22px] text-white font-fontArrows font-bold dark:text-black">
                                    Beeline Uzbekistan
                                </h6>
                                <p className="font-parkinsans text-white text-[19px] dark:text-black">
                                    Project manager
                                </p>
                                <p className="my-4 font-parkinsans text-[16px] text-white tracking-widest dark:text-black">
                                    March 5,2023 -{" "}
                                    <span className="text-red-600 text-[18px]">
                                        Old
                                    </span>
                                </p>
                                <p className="text-bgmuted text-[16px] w-[80%] dark:text-black/50">
                                    We will talk about how we are building the
                                    strongest ecosystem in our country, share
                                    our knowledge, and discuss IT, marketing,
                                    and HR trends.
                                </p>
                            </div>
                        </div>
                        {/* 2-card */}
                    </Slide>
                    <Slide delay={0.5}>
                        {/* 3-card */}
                        <div className="flex flex-row lg:gap-10 xs:gap-4 sm:gap-6 md:gap-10">
                            <div className="flex flex-col lg:w-[30%] md:w-[20%] sm:w-[30%] xs:w-[80%] items-center  ">
                                <img
                                    className="border border-1 border-bgmuted bg-bgmuted rounded-lg dark:bg-cyan-200"
                                    src={NajotSVG}
                                    alt="uzum"
                                />
                                <span className="w-0 lg:h-[150px] md:h-[150px] sm:h-[170px] 
                                xs:h-[220px] border border-1 border-bgmuted flex items-center dark:border-black/50"></span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <h6 className="text-[22px] text-white font-fontArrows font-bold dark:text-black">
                                    Na'jot Ta'lim
                                </h6>
                                <p className="font-parkinsans text-white text-[19px] dark:text-black">
                                    Frontend IT Teacher
                                </p>
                                <p className="my-4 font-parkinsans text-[16px] text-white tracking-widest dark:text-black">
                                    January 18,2022 -{" "}
                                    <span className="text-red-600 text-[18px]">
                                        Old
                                    </span>
                                </p>
                                <p className="text-bgmuted text-[16px] w-[80%] dark:text-black/50">
                                    We will talk about how we are building the
                                    strongest ecosystem in our country, share
                                    our knowledge, and discuss IT, marketing,
                                    and HR trends.
                                </p>
                            </div>
                        </div>
                    </Slide>
                    {/* 3-card */}
                    <Slide delay={0.5}>
                        {/* 4-card */}
                        <div className="flex flex-row lg:gap-10 xs:gap-4 sm:gap-6 md:gap-10">
                            <div className="flex flex-col lg:w-[30%] md:w-[20%] sm:w-[30%] xs:w-[80%] items-center ">
                                <img
                                    className="border border-1 border-bgmuted bg-bgmuted rounded-lg dark:bg-cyan-200"
                                    src={PDPSVG}
                                    alt="uzum"
                                />
                                <span className="w-0 lg:h-[150px] md:h-[150px] sm:h-[170px] 
                                xs:h-[220px] border border-1 border-bgmuted flex items-center dark:border-black/50"></span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <h6 className="text-[22px] text-white font-fontArrows font-bold dark:text-black">
                                    PDP Academy
                                </h6>
                                <p className="font-parkinsans text-white text-[19px] dark:text-black">
                                    Frontend Basic Elementary
                                </p>
                                <p className="my-4 font-parkinsans text-[16px] text-white tracking-widest dark:text-black">
                                    June 8,2021 -{" "}
                                    <span className="text-red-600 text-[18px]">
                                        Old
                                    </span>
                                </p>
                                <p className="text-bgmuted text-[16px] w-[80%] dark:text-black/50">
                                    We will talk about how we are building the
                                    strongest ecosystem in our country, share
                                    our knowledge, and discuss IT, marketing,
                                    and HR trends.
                                </p>
                            </div>
                        </div>
                        {/* 4-card */}
                    </Slide>
                </div>
            </section>
        </>
    );
};

export default Home;
