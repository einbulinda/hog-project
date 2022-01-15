import RouterConfig from "navigation/RouterConfig";
import { useDispatch } from "react-redux";
import { checkUserSession } from "redux/actions/userActions";
import React, { useEffect } from "react";
import "pure-react-carousel/dist/react-carousel.es.css";
import "./App.scss";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <React.Fragment>
      <RouterConfig />
    </React.Fragment>
  );
}

export default App;
