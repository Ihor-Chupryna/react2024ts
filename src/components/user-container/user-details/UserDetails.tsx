import { FC } from "react";

import { IUser } from "../../../interfaces";

interface IProps {
    userDetails: IUser
}

const UserDetails: FC<IProps> = ({userDetails}) => {
    const {name, username, phone, email} = userDetails;

    return (
        <div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <div>phone: {phone}</div>
            <div>email: {email}</div>
        </div>
    );
};

export { UserDetails };