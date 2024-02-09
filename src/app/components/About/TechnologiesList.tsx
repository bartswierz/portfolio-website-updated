import { technologyIconsList } from "../../constants";
import Image from "next/image";

// Displays the list of technologies that we currently know and/or familiar with within our About section
const TechnologiesList = () => {
  return (
    <ul className="flex flex-row flex-wrap text-white justify-center my-8 max-w-[690px]">
      {technologyIconsList.map(({ name, iconPath }) => {
        return (
          <li key={name}>
            <div className="w-[74px] shrink-0 mb-[2px] mx-[2px] py-1 bg-slate-900/75 rounded-md shadow-2xl">
              <div className="max-w-[40px] max-h-[40px] lg:max-w-[50px] lg:max-h-[50px] w-full self-center mx-auto">
                <Image src={iconPath} className="w-full" alt={`${name} Icon`} width={50} height={50} />
              </div>
              <p className="text-center text-[10px] font-semibold">{name}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default TechnologiesList;
