import ButtonProps from "@/types/buttonprops";
import React from "react";



export default function ButtonMY({ onClick, className, type, children }: ButtonProps) {
  return (
    <button 
    className={className}
    onClick={onClick} 
    type={type}
    >
      {children}
    </button>
  );
}
