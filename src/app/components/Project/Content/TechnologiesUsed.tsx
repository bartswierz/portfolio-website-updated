interface TechnologiesUsedProps {
  list: string[];
}

const TechnologiesUsed = ({ list }: TechnologiesUsedProps) => {
  return (
    <ul className="flex justify-center items-center flex-wrap gap-2 font-bold my-4">
      {list.map((technology: string) => {
        return (
          <li key={technology} className="bg-technology text-black rounded-full px-3 py-1 text-[10px] md:text-[12px]">
            {technology}
          </li>
        );
      })}
    </ul>
  );
};

export default TechnologiesUsed;
