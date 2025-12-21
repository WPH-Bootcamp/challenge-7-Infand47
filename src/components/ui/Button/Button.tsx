import React from "react";

interface ButtonProps {
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ children }) => {
  return <button className="bg-[#FF623E] text-white rounded-4xl m-1 w-full h-10 font-semibold lg:w-46">{children}</button>;
};

export default Button;
