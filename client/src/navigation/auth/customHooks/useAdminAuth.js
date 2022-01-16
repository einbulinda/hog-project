import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { HOME, LOGIN } from "navigation/CONSTANTS";

const mapState = ({ user }) => ({ currentUser: user.currentUser });

const useAdminAuth = (props) => {
  const { currentUser } = useSelector(mapState);
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      navigate(LOGIN);
    } else if (!currentUser.isAdmin) {
      navigate(HOME);
    }
  }, [currentUser, navigate]);

  return currentUser;
};

export default useAdminAuth;
