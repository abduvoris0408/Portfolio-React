import { Link } from "react-router-dom";
import { BlogIMG } from "../assets";
import { GrFormNextLink } from "react-icons/gr";
import { Slide } from "../components/Slide";

const Blog = () => {
    return (
        <>
            <div className="container w-10/12 mx-auto">
                <div className=" m-auto text-center mt-10">
                    <Slide delay={0.5}>
                        <h1 className="text-white text-[50px] font-bold font-parkinsans dark:text-black">
                            Blog
                        </h1>
                    </Slide>
                    <Slide delay={0.5}>
                        <p className="text-bgmuted mb-10 dark:text-black/60">
                            Welcome to my blog domain,where I share my personal
                            stories about what I've learned,projects, and just
                            general findings.I also write for other
                            publications.Feel free to follow.Don't forget to
                            support me if you like.
                        </p>
                    </Slide>
                </div>
                <Slide delay={0.5}>
                    <h2 className="mb-10 text-white lg:text-[50px] font-bold text-center font-parkinsans dark:text-cyan-500 xs:text-[30px]">
                        Writing about design and tech...
                    </h2>
                </Slide>
                <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 gap-8 items-center">
                    <img
                        className="border-[1px] border-bgmuted rounded-[20px]"
                        src={BlogIMG}
                        alt="Thumbnaiil"
                    />
                    <Slide delay={0.5}>
                        <div className=" flex flex-col justify-center pt-8 gap-5">
                            <p className=" text-white text-[25px] font-bold font-mono dark:text-black">
                                Arriving to a new milestone in my career
                            </p>
                            <p className="text-bgmuted text-[18px] font-parkinsans dark:text-black">
                                December 3, 2024
                            </p>
                            <Link
                                to={"/blog"}
                                className="w-[90px] flex items-center justify-center bg-bgprimary rounded-full text-white border-[1px] border-green-500 font-serif px-2"
                            >
                                Journal
                                <GrFormNextLink />
                            </Link>
                        </div>
                    </Slide>
                </div>
                <Slide delay={0.5}>
                    <div className=" flex flex-col items-center gap-5 m-auto  my-[100px] lg:w-[60%] xs:w-[100%] text-center lg:p-20 md:p-19 sm:p-10 xs:p-4 rounded-[30px] border-[1px] border-blue-700  bg-gradient-to-bl from-bgprimary to-black ">
                        <p className="text-white lg:text-[35px] md:text-[35px]  sm:text-[27px]  xs:text-[25px] font-bold ">
                            Subscribe to Abduvoris's Newsletter
                        </p>
                        <p className="text-white text-center text-[16px] font-parkinsans">
                            I occasionally write about design, technology, and
                            share thoughts on the intersection of creativity and
                            engineering.
                        </p>

                        <div className="flex flex-row justify-between mt-8 lg:w-[70%]">
                            {" "}
                            <input
                                className="border-[1px] border-blue-600 rounded-xl px-3 py-2 bg-transparent text-[16px] text-white lg:w-[80%] md:w-[75%] sm:w-[70%] xs:w-[70%]"
                                type="email"
                                placeholder="Email"
                            />
                            <button className="text-black font-bold font-parkinsans text-[16px] bg-white rounded-xl px-2 py-1">
                                Send
                            </button>
                        </div>
                    </div>
                </Slide>
            </div>
        </>
    );
};

export default Blog;
