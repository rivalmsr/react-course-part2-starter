import useCounterStore from "../counter/store";
import useAuthStore from "./store";

// const useAuth = () => useContext(AuthContext); -> old code
const useAuth = () => useAuthStore();

export default useAuth;
