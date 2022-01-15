import React, { useState, cloneElement, useRef, useEffect } from "react";
import { styled } from "@mui/styles";
import Box from "@mui/system/Box";
import CategoryMenuCard from "components/categories/CategoryMenuCard";

// Styled Component
const Wrapper = styled(Box)(({ open }) => ({
  position: "relative",
  cursor: "pointer",
  "& .dropdown-icon": {
    marginLeft: "0.25rem",
    transition: "all 250ms ease-in-out",
    transform: `rotate(${open ? "90deg" : "0deg"})`,
  },
}));

const CategoryMenu = ({ open: isOpen = false, children }) => {
  const [open, setOpen] = useState(isOpen);
  const popoverRef = useRef(open);
  popoverRef.current = open;

  // Open or Close the Categories Menu
  const toggleMenu = (e) => {
    e.stopPropagation();
    if (!isOpen) setOpen((open) => !open);
  };

  // Click Events
  const handleDocumentClick = () => {
    if (popoverRef.current && !isOpen) setOpen(false);
  };

  useEffect(() => {
    window.addEventListener("click", handleDocumentClick);
    return () => {
      window.removeEventListener("click", handleDocumentClick);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Wrapper open={open}>
      {cloneElement(children, {
        open,
        className: `${children.props.className}`,
        onClick: toggleMenu,
      })}
      <CategoryMenuCard open={open} />
    </Wrapper>
  );
};

export default CategoryMenu;
