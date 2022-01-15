import { cloneElement, useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import { Drawer } from "@mui/material";
import clsx from "clsx";

const Wrapper = styled("div")(() => ({
  "& .handle": {
    cursor: "pointer",
  },
}));

const Sidenav = ({
  position,
  open,
  width,
  handle,
  children,
  toggleSidenav,
}) => {
  const [sidenavOpen, setSidenavOpen] = useState(open);

  const handleToggleSidenav = () => {
    setSidenavOpen(!sidenavOpen);
  };

  useEffect(() => {
    setSidenavOpen(open);
  }, [open]);

  return (
    <Wrapper>
      <Drawer
        open={sidenavOpen}
        anchor={position}
        onClose={toggleSidenav || handleToggleSidenav}
        SlideProps={{ style: { width: width || 280 } }}
      >
        {children}
      </Drawer>
      {handle &&
        cloneElement(handle, {
          className: clsx(handle.props.className, "handle"),
          onClick: toggleSidenav || handleToggleSidenav,
        })}
    </Wrapper>
  );
};

export default Sidenav;
