import { useEffect, useState } from "react";

import { IUser } from "../../../interfaces";
import { userService } from "../../../services";
import { User } from "../user/User";

const Users = () => {
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        userService.getAll().then(({data}) => setUsers(data))
    }, []);

    return (
        <div>
            {users.map(value => <User key={value.id} user={value}/>)}
        </div>
    );
};

export { Users };