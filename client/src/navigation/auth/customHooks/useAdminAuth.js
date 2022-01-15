import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { HOME, LOGIN } from "navigation/CONSTANTS";

const mapState = ({ user }) => ({ currentUser: user.currentUser });

const useAdminAuth = (props) => {
  const { currentUser } = useSelector(mapState);
  const history = useHistory();

  useEffect(() => {
    if (!currentUser) {
      history.push(LOGIN);
    } else if (!currentUser.isAdmin) {
      history.push(HOME);
    }
  }, [history, currentUser]);

  return currentUser;
};

export default useAdminAuth;
