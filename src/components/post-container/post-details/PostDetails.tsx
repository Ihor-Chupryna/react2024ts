import { FC } from "react";

import { IPost } from "../../../interfaces/postInterface";

interface IProps {
    post: IPost
}

const PostDetails: FC<IProps> = ({post}) => {
    const {id, userId, title, body} = post;

    return (
        <div>
            <div>id: {id}</div>
            <div>userId: {userId}</div>
            <div>title: {title}</div>
            <div>body: {body}</div>
        </div>
    );
};

export { PostDetails };



