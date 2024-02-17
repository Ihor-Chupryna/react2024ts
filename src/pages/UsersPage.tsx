import { Outlet } from "react-router-dom";

import { Users } from "../components";

const UsersPage = () => {
    return (
        <div>
            <h1>Users:</h1>
            <Outlet/>
            <Users/>
        </div>
    );
};

export { UsersPage };