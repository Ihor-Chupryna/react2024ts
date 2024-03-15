import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { IAuth } from "../interfaces";
import { useAppDispatch, useAppLocation, useAppSelector } from "../hooks";
import { authActions } from "../store";

const Login = () => {
    const {register, handleSubmit} = useForm<IAuth>();
    const dispatch = useAppDispatch();
    const {loginError} = useAppSelector(state => state.authReducer);
    const navigate = useNavigate();
    const {state} = useAppLocation<{ pathname: string }>();
    const loginUser: SubmitHandler<IAuth> = async (data) => {
        const {meta: {requestStatus}} = await dispatch(authActions.login({user: data}));
        if (requestStatus === 'fulfilled') {
            navigate(state?.pathname || '/cars')
        }
    };

    return (
        <div>
            {loginError && <h2>{loginError}</h2>}
            <form onSubmit={handleSubmit(loginUser)}>
                <input type="text" placeholder={'username'} {...register('username')}/>
                <input type="text" placeholder={'password'} {...register('password')}/>
                <button>login</button>
            </form>
        </div>
    );
}

export { Login };