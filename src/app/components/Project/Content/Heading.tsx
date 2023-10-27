interface HeadingProps {
  header: string;
  subheader: string;
}

const Heading = ({ header, subheader }: HeadingProps) => {
  return (
    <div className="text-center">
      <div className="text-2xl font-bold">{header}</div>
      <div className="text-sm text-gray-300">{subheader}</div>
    </div>
  );
};

export default Heading;
