import { createAction } from "_utils/functions/actionsStore";

export const LOGIN = "@user/LOGIN";
export const SIGNUP = "@user/SIGNUP";


const loginAction = createAction(LOGIN);
const signUpAction = createAction(SIGNUP);

export const login = (data) => loginAction({ data });
export const signUp = (data) => signUpAction({ data });
