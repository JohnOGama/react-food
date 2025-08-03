import React from "react";
import { motion } from "framer-motion";

const MainButton = ({
  children,
  onClick,
  className = "",
  disabled = false,
  fullWidth = true,
  type = "button",
  variant = "orange", // orange, blue, green, red
}) => {
  const variantClasses = {
    orange: "bg-orange-600 hover:bg-orange-700 text-white",
    blue: "bg-blue-600 hover:bg-blue-700 text-white",
    green: "bg-green-600 hover:bg-green-700 text-white",
    red: "bg-red-600 hover:bg-red-700 text-white",
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        active:scale-[0.98] 
        ${fullWidth ? "w-full" : ""} 
        py-2 
        rounded-md
        transition-all
        duration-200
        font-medium
        ${variantClasses[variant]}
        ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
        ${className}
      `}
      whileHover={!disabled ? { scale: 1.02 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
    >
      {children}
    </motion.button>
  );
};

export default MainButton;
