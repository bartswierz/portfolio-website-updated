import Link from "next/link";
import { RiArrowDropDownLine } from "react-icons/ri";

const DropdownArrow = () => {
  return (
    <div className="absolute w-full bottom-10 left-[50vw]- left-0 flex justify-center items-center">
      <a
        href="#about"
        className="w-[50px] h-[50px] rounded-full bg-gray-800 border-2 border-[#ffb700] hover:b flex justify-center items-center animate-bounce hover:border-secondary transition-all duration-300 scroll-smooth"
      >
        <RiArrowDropDownLine className="text-[#0072fe] w-[64px] h-[64px] hover:text-[#ffb700] transition-all duration-300" />
      </a>
    </div>
  );
};

export default DropdownArrow;
