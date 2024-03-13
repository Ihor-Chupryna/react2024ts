import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { IAuth } from "../interfaces";
import { useAppDispatch, useAppSelector } from "../hooks";
import { authActions } from "../store/slices";

const Register = () => {
    const {register, handleSubmit} = useForm<IAuth>();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const {registerError} = useAppSelector(state => state.authReducer)

    const registerUser: SubmitHandler<IAuth> = async (data) => {
        const {meta: {requestStatus}} = await dispatch(authActions.register({user: data}));

        if (requestStatus === 'fulfilled') {
            navigate('/login')
        }
    };

    return (
        <div>
            {registerError && <h2>{registerError}</h2>}
            <form onSubmit={handleSubmit(registerUser)}>
                <input type="text" placeholder={'username'} {...register('username')}/>
                <input type="text" placeholder={'password'} {...register('password')}/>
                <button>register</button>
            </form>
        </div>
    );
};

export { Register };