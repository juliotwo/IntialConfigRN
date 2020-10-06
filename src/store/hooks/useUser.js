
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "_store/actions/user";

//Método que codifica las credenciales
export const useUser = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
    const state = useSelector((state) => state);
    console.log("State", state)
    const setUser = () => {
        dispatch(setUserData({
            user: "HOLI"
        }))
    }
    const actionsUser = {
        setUser
    };
    return { user, actionsUser };
};
