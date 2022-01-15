import { useAuth } from "./customHooks";

const PrivateRoutes = (props) => useAuth(props) && props.children;

export default PrivateRoutes;
