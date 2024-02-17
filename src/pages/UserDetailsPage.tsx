import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { IUser } from "../interfaces";
import { useAppLocation } from "../hooks";
import { userService } from "../services";
import { UserDetails } from "../components";

const UserDetailsPage = () => {
    const {state} = useAppLocation<{ value: IUser }>();
    const [userDetails, setUserDetails] = useState<IUser>(null);
    const {id} = useParams();

    useEffect(() => {
        if (state?.value) {
            setUserDetails(state.value)
        } else {
            userService.getById(+id).then(({data}) => setUserDetails(data))
        }
    }, [id, state]);


    return (
        <div>
            {userDetails && <UserDetails userDetails={userDetails}/>}
        </div>
    );
};

export { UserDetailsPage };