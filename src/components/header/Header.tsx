import { NavLink } from "react-router-dom";

import css from './header.module.css';

const Header = () => {
    return (
        <div className={css.headerStyle}>
            <NavLink to={'users'}>USERS</NavLink>
            <NavLink to={'posts'}>POSTS</NavLink>
        </div>
    );
};

export { Header };