interface TechnologyListProps {
  list: string[];
}

const TechnologyList = ({ list }: TechnologyListProps) => {
  return (
    <ul className="flex justify-center items-center flex-wrap gap-2 font-bold text-xl my-4">
      {list.map((technology: string) => {
        return (
          <li key={technology} className="bg-technology text-black rounded-full px-3 py-1 text-sm">
            {technology}
          </li>
        );
      })}
    </ul>
  );
};

export default TechnologyList;
