import { AppBar, useScrollTrigger } from "@mui/material";
import Footer from "components/Footer";
import Header from "components/navigation-components/Header";
import MobileNavBar from "components/mobile-navigation/MobileNavBar";
import Topbar from "components/navigation-components/Topbar";
import { Fragment, useEffect, useState } from "react";

const AppLayout = ({ children, navbar, window }) => {
  // prepare the Sticky component
  const [isFixed, setIsFixed] = useState(true);

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  // Check if user has scrolled
  useEffect(() => {
    setIsFixed(trigger);
  }, [trigger]);

  return (
    <Fragment>
      <Topbar />
      <AppBar position="sticky" color="transparent">
        <Header isFixed={isFixed} />
      </AppBar>

      {navbar && <div className="section-after-sticky">{navbar}</div>}
      {!navbar ? (
        <div className="section-after-sticky">{children}</div>
      ) : (
        children
      )}

      <MobileNavBar />
      <Footer />
    </Fragment>
  );
};

export default AppLayout;
