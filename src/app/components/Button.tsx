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
        return "inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900";
      // return "bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded text-black dark:text-white";
      case "secondary":
        return "inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800";
      // return "bg-green-500 hover:bg-blue-700 font-bold py-2 px-4 rounded text-black dark:text-white";
      case "link":
        return "bg-transparent border-2 border-white hover:bg-blue-700 font-bold py-2 px-4 rounded text-white";
      default:
        return "bg-orange-500";
    }
  };

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
