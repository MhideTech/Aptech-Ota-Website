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
    <Link to={to} className={`${baseStyles} ${variantStyles[variant]}`}>
      {children}
    </Link>
  );
};

export default Button;
