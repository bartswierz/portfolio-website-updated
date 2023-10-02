"use client";

import { Carousel as Carousel_ } from "flowbite-react";
import Image from "next/image";
// import { nlg_browse } from "../assets/NLG-browse-genre.png";
// REFERENCE: https://www.flowbite-react.com/docs/components/carousel
const Carousel = () => {
  return (
    // export default function DefaultCarousel() {
    // return (
    <Carousel_ className="border border-blue-500 w-[500px] h-[500px]">
      {/* <div> */}
      {/* <Image alt="one" src={nlg_browse} width={500} height={500} /> */}
      <Image alt="two" src="/assets/NLG-browse-genre.png" width={500} height={500} />
      <Image alt="three" src="/assets/NLG-browse-genre.png" width={500} height={500} />
      <Image alt="four" src="/assets/NLG-browse-genre.png" width={500} height={500} />
      <Image alt="five" src="/assets/NLG-browse-genre.png" width={500} height={500} />
      {/* </div> */}
    </Carousel_>
  );
};

export default Carousel;
