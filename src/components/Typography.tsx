import React from "react";

interface TypographyProps {
    variant: "h1" | "h2" | "p";
    children: React.ReactNode;
}

const Typography: React.FC<TypographyProps> = ({ variant, children }) => {
    const variants = {
        h1: "text-3xl font-bold",
        h2: "text-2xl font-semibold",
        p: "text-gray-700",
    };

    return React.createElement(variant, { className: variants[variant] }, children);
};

export default Typography;
