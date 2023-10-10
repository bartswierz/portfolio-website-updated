import { technologyIconsList } from "../constants";
import Image from "next/image";
// Displays the list of technologies that we currently know and/or familiar with
const TechnologiesList = () => {
  return (
    <ul className="flex flex-row flex-wrap  text-white justify-center my-8 max-w-[720px]">
      {technologyIconsList.map(({ name, iconPath }) => {
        return (
          <li key={name} className="self-center- b w-[80px] shrink-0">
            <div className="max-w-[40px] max-h-[40px] xl:max-w-[60px] xl:max-h-[60px] w-full self-center mx-auto">
              <Image src={iconPath} className="" alt={`${name} Icon`} width={60} height={60} />
            </div>
            <p className="text-center text-[10px] font-semibold">{name}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default TechnologiesList;
