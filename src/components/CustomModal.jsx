import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const CustomModal = ({ children, isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black bg-opacity-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          ></motion.div>

          {/* Modal Content */}
          <motion.div
            onClick={(e) => e.stopPropagation()}
            className={`relative bg-white rounded-lg shadow-xl md:w-[450px] lg:w-[550px]  w-full p-3 mx-2`}
            initial={{
              opacity: 0,
              scale: 0.8,
              y: 50,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.8,
              y: 50,
            }}
            transition={{
              type: "spring",
              damping: 25,
              stiffness: 300,
              duration: 0.4,
            }}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CustomModal;
