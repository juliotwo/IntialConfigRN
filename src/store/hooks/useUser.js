
import { useDispatch, useSelector } from "react-redux";
import { login } from "_store/actions/user";

export const useUser = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);

    //HookEjemplo
    const Login = () => {
        dispatch(login({
            user: "Usuario"
        }))
    }

    const actionsUser = {
        Login
    };
    return { user, actionsUser };
};
