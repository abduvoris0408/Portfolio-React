import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

const CompactSlider = () => {
    const slides = [
        {
            url: "https://demo.magic-portfolio.com/_next/image?url=%2Fimages%2Fprojects%2Fproject-01%2Fcover-02.jpg&w=1920&q=75",
        },
        {
            url: "https://demo.magic-portfolio.com/_next/image?url=%2Fimages%2Fprojects%2Fproject-01%2Fcover-03.jpg&w=1920&q=75",
        },
        {
            url: "https://demo.magic-portfolio.com/_next/image?url=%2Fimages%2Fprojects%2Fproject-01%2Fcover-04.jpg&w=1920&q=75",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };
    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <div>
            <div className="container w-10/12  m-auto">
                <div className="max-w-[1400px] lg:h-[780px] md:h-[780px] sm:h-[600px] xs:h-[500px]   w-full m-auto py-16 px-4 relative group">
                    <div
                        style={{
                            backgroundImage: `url(${slides[currentIndex].url})`,
                        }}
                        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
                    ></div>
                    {/* left */}
                    <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-green-400 cursor-pointer ">
                        <BsChevronCompactLeft onClick={prevSlide} size={30} />
                    </div>
                    {/* right */}
                    <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-green-400  cursor-pointer">
                        <BsChevronCompactRight onClick={nextSlide} size={30} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompactSlider;
