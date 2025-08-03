import React from "react";
import { motion } from "framer-motion";

const SecondaryButton = ({
  children,
  onClick,
  className = "",
  disabled = false,
  fullWidth = true,
  type = "button",
}) => {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        active:scale-[0.98] 
        ${fullWidth ? "w-full" : ""} 
        py-2 
        border 
        border-black/20 
        rounded-md
        transition-all
        duration-200
        ${
          disabled
            ? "opacity-50 cursor-not-allowed"
            : "hover:bg-gray-50 cursor-pointer"
        }
        ${className}
      `}
      whileHover={!disabled ? { scale: 1.02 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
    >
      {children}
    </motion.button>
  );
};

export default SecondaryButton;
