interface DescriptionProps {
  text: String;
}

const Description = ({ text }: DescriptionProps) => {
  return <div className="my-2 h-full">{text}</div>;
};

export default Description;
