"use client";
import Image from "next/image";
import useIsIntersecting from "../../utils/isIntersecting";
import { useRef } from "react";
import { Carousel } from "flowbite-react";

interface LaptopMockupProps {
  imageList: string[];
}

// Laptop display for my projects - when laptop is within the window, we will 'flip' it up, and close it when it's out of the window
// const LaptopMockup = ({ image }: LaptopMockupProps) => {
const LaptopMockup = ({ imageList }: LaptopMockupProps) => {
  // const laptopIntersectionRef = useRef();
  const laptopIntersectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIsIntersecting(laptopIntersectionRef, 0.3);

  return (
    <div className="mb-6" ref={laptopIntersectionRef}>
      {/* LAPTOP SCREEN SECTION */}
      <div
        className={`relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px] 
        ${
          isVisible
            ? "animate-flip-up animate-once animate-ease-in transition-opacity opacity-100 duration-[1000ms]"
            : "animate-flip-down animate-once animate-ease-in-out opacity-0"
        }`}
      >
        <div className="rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white dark:bg-gray-800">
          {/* LIGHT MODE */}
          {/* <img
            src={image}
            // src="https://flowbite.s3.amazonaws.com/docs/device-mockups/laptop-screen.png"
            className="dark:hidden h-[156px] md:h-[278px] w-full rounded-xl-"
            alt=""
          /> */}
          {/* DARK MODE */}
          {/* <img
            src={image}
            className="h-[156px] md:h-[278px] w-full  object-center"
            alt="Laptop Mockup"
          /> */}
          {/* slide is passed the intersecting conditional to only have AUTO SLIDE IF LAPTOP IS IN THE VIEWPORT */}
          {/* <Carousel pauseOnHover indicators={false} slide={isVisible ? true : false}> */}
          {/* <Carousel pauseOnHover indicators slide={isVisible ? true : false}> */}
          {/* <Carousel pauseOnHover indicators={imageList.length > 1 ? true : false} slide={isVisible ? true : false}> */}

          {imageList.length > 1 ? (
            <Carousel pauseOnHover indicators slide={isVisible ? true : false}>
              {/* <Carousel pauseOnHover indicators={true} data-carousel="static" slide={false}> */}
              {imageList.map((image, idx) => (
                <div key={idx}>
                  <Image
                    src={image}
                    className="h-[156px] md:h-[278px] w-full object-center animate-fade animate-duration-[1500ms] animate-ease-in"
                    alt="Laptop Mockup"
                    width={500}
                    height={278}
                    quality={100}
                    // priority={true}
                    // TODO added
                    // layout="responsive" // Use responsive layout for better rendering
                    // objectFit="cover" // Ensure the image covers the container
                    // loading="eager" // Load the image immediately
                    // placeholder="blur" // Use a blurred image as a placeholder
                    // // blurDataURL={`/_next/image?url=${image}&w=16&q=1`} // Use a small, blurred data URL as the placeholder
                    // blurDataURL={image} // Use a small, blurred data URL as the placeholder
                    // blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=="
                    // onLoad={(e) => console.log(`image loaded in for ${image}`)}
                    // loading="lazy"
                  />
                </div>
              ))}
            </Carousel>
          ) : (
            <Image
              src={imageList[0]}
              className="h-[156px] md:h-[278px] w-full object-center animate-fade animate-duration-[1500ms] animate-ease-in"
              alt="Laptop Mockup"
              width={500}
              height={278}
              quality={100}
            />
          )}
        </div>
      </div>

      {/* LAPTOP BOTTOM BASE SECTION */}
      <div className="relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px] drop-shadow-2xl">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-800"></div>
      </div>
    </div>
  );
};

export default LaptopMockup;
