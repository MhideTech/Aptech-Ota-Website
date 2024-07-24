import { Link } from "react-router-dom";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  to: string;
  children: string;
  variant?: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({
  to,
  children,
  variant = "primary",
}) => {
  const baseStyles =
    "py-3 px-5 border transition-all ease-in duration-300";

  const variantStyles = {
    primary: "bg-blue text-white hover:bg-none hover:border-blue hover:text-blue",
    secondary: "bg-yellow text-black hover:text-yellow hover:bg-none hover:border-yellow",
    danger: "bg-red-500 text-white hover:bg-red-600",
  };

  return (
    <Link to={to} className={`${baseStyles} ${variantStyles[variant]} flex items-center`}>
      {children}
      <svg
        className="ml-2 h-5 w-5"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M17 8l4 4m0 0l-4 4m4-4H3"
        />
      </svg>
    </Link>
  );
};

export default Button;
