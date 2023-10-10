import { technologyIconsList } from "../constants";
import Image from "next/image";
// Displays the list of technologies that we currently know and/or familiar with
const TechnologiesList = () => {
  return (
    <ul className="flex flex-row flex-wrap gap-2 text-white justify-center my-8 max-w-[1000px]">
      {technologyIconsList.map(({ name, iconPath }) => {
        return (
          <li key={name} className="self-center- b w-[120px]">
            {/* <div className="b"> */}
            <div className="max-w-[60px] max-h-[60px] w-full self-center mx-auto">
              <Image src={iconPath} className="w-full- h-full- b-" alt={`${name} Icon`} width={60} height={60} />
            </div>
            <p className="text-center text-sm font-semibold">{name}</p>
            {/* </div> */}
          </li>
        );
      })}
    </ul>
  );
};

export default TechnologiesList;
