import { useEffect, useRef } from "react";

const OutsideAlerter = ({ onClickOutside, className, children }) => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    // Function to handle click outside the element
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        onClickOutside(); // Trigger the outside click handler
      }
    };

    // Bind the event listener
    document.addEventListener("click", handleClickOutside);

    // Cleanup the event listener
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [onClickOutside]);

  return (
    <div ref={wrapperRef} className={className}>
      {children}
    </div>
  );
};

export default OutsideAlerter;
