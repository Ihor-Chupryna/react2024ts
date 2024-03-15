import { FC, PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";

import { authService } from "../services/authService";
import { useAppLocation } from "../hooks";

interface IProps extends PropsWithChildren {

}

const AuthRequired: FC<IProps> = ({children}) => {
    const access = authService.getAccessToken();
    const {pathname} = useAppLocation();

    if (!access) {
        return <Navigate to={'/login'} state={{pathname}}/>
    }

    return (
        <>
            {children}
        </>
    );
};


export { AuthRequired };