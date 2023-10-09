interface ButtonProps {
  text: string;
  buttonType: "primary" | "secondary" | "link";
  link?: string; //For content button links
}

// Renders out a button with a user option of three different designs, based on the buttonType prop
// const Button = ({ text, buttonType = "default" }: ButtonProps) => {
const Button = ({ text, buttonType, link }: ButtonProps) => {
  const defaultStyle = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded";

  const buttonStyle = (buttonType: string) => {
    switch (buttonType) {
      case "primary":
        return "bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded text-black dark:text-white";
      case "secondary":
        return "bg-green-500 hover:bg-blue-700 font-bold py-2 px-4 rounded text-black dark:text-white";
      case "link":
        return "bg-transparent border-2 border-white hover:bg-blue-700 font-bold py-2 px-4 rounded text-white";
      default:
        return "bg-orange-500";
    }
    // switch (buttonType) {
    //   case "primary":
    //     return "bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded text-black dark:text-white";
    //   case "secondary":
    //     return "bg-green-500 hover:bg-blue-700 font-bold py-2 px-4 rounded text-black dark:text-white";
    //   case "link":
    //     return "bg-red-500 hover:bg-blue-700 font-bold py-2 px-4 rounded text-black dark:text-white";
    //   default:
    //     return "bg-orange-500";
    // }
  };
  // buttonStyle(buttonType);

  // Live Site or View Code Button links - opens in a new tab
  if (buttonType === "link") {
    return (
      <a href={link} target="_blank" className={buttonStyle(buttonType)}>
        <button>{text}</button>
      </a>
    );
  }

  // Not a link, just a button - our modal button('Project Description')
  return <button className={buttonStyle(buttonType)}>{text}</button>;
};

export default Button;
