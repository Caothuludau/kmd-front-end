import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({ variant = "primary", children, ...props }) => {
    const baseStyles = "px-4 py-2 rounded-lg font-medium transition-all duration-200";
    const variants = {
        primary: "bg-red-600 text-white hover:bg-red-700",
        secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300",
    };

    return (
        <button className={`${baseStyles} ${variants[variant]}`} {...props}>
            {children}
        </button>
    );
};

export default Button;
