interface DescriptionProps {
  text: String;
}

const Description = ({ text }: DescriptionProps) => {
  return <div className="mb-4 h-full">{text}</div>;
};

export default Description;
