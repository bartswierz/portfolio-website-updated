import { technologyIconsList } from "../constants";
import Image from "next/image";
// Displays the list of technologies that we currently know and/or familiar with
const TechnologiesList = () => {
  return (
    <ul className="flex flex-row flex-wrap text-white justify-center my-8 max-w-[690px]">
      {technologyIconsList.map(({ name, iconPath }) => {
        return (
          <li key={name} className="w-[70px] shrink-0 mb-2">
            <div className="max-w-[40px] max-h-[40px] lg:max-w-[50px] lg:max-h-[50px] w-full self-center mx-auto">
              <Image src={iconPath} className="" alt={`${name} Icon`} width={50} height={50} />
            </div>
            <p className="text-center text-[10px] font-semibold">{name}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default TechnologiesList;
