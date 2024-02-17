import { FC } from "react";
import { useNavigate } from "react-router-dom";

import { IUser } from "../../../interfaces";

interface IProps {
    user: IUser;
}

const User: FC<IProps> = ({user}) => {
    const {id, name} = user;
    const navigate = useNavigate();

    return (
        <div style={{display: 'flex', justifyContent: 'space-between', width: '50vw'}}>
            <div style={{fontSize: '20px'}}>{id}) {name}</div>
            <button onClick={() => navigate(id.toString(), {state: {value: user}})}>show details</button>
        </div>
    );
};

export { User };