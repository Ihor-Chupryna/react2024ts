import { NavLink } from "react-router-dom";

import css from './header.module.css';
import { useAppDispatch, useAppSelector } from "../../hooks";
import { useEffect } from "react";
import { authService } from "../../services/authService";
import { authActions } from "../../store/slices";

const Header = () => {
    const dispatch = useAppDispatch();
    const {currentUser} = useAppSelector(state => state.authReducer);

    const access = authService.getAccessToken()

    useEffect(() => {
        if (access && !currentUser) {
            dispatch(authActions.me())
        }
    }, [access, currentUser, dispatch]);

    return (
        <div className={css.mainStile}>
            <h1>Cars</h1>
            <div>
                {currentUser
                    ?
                    <div>{currentUser.username}</div>
                    :
                    <div>
                        <NavLink to={'login'}>login</NavLink>
                        <NavLink to={'register'}>register</NavLink>
                    </div>
                }
            </div>
        </div>
    );
};

export { Header };