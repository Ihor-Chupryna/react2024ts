import { FC } from "react";
import { NavLink } from "react-router-dom";

import { IPost } from "../../../interfaces/postInterface";

interface IProps {
    post: IPost
}

const Post: FC<IProps> = ({post}) => {
    const {id, title} = post;
    return (
        <h3 style={{margin: '0'}}>
            <NavLink to={id.toString()} style={{textDecoration: 'none'}}>- {title}</NavLink>
        </h3>
    );
};

export { Post };