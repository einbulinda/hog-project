import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { LOGIN } from "navigation/CONSTANTS";

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
});

const useAuth = (props) => {
  const { currentUser } = useSelector(mapState);
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      navigate(LOGIN);
    }
  }, [navigate, currentUser]);

  return currentUser;
};

export default useAuth;
