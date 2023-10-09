interface DescriptionProps {
  text: String;
}

const Description = ({ text }: DescriptionProps) => {
  return <div className="my-2">{text}</div>;
};

export default Description;
