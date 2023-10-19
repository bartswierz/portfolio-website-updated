interface ButtonProps {
  text: string;
  buttonType: "primary" | "secondary" | "link";
  link?: string; //For content button links
}

// TODO - pass lnik
const Button = ({ text, buttonType, link }: ButtonProps) => {
  if (!link) return null;

  return (
    <div>
      <a
        href={link}
        className="relative inline-flex items-center justify-start inline-block 
        px-5 py-2 
        overflow-hidden font-bold rounded-lg group text-sm"
        target="_blank"
      >
        <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%] "></span>
        <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-[600ms] ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-brand opacity-100 group-hover:-translate-x-8"></span>
        <span className="relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-gray-900">
          {text}
        </span>
        <span className="absolute inset-0 border-2 border-white hover:border-primary rounded-lg"></span>
      </a>
    </div>
  );
};

export default Button;
