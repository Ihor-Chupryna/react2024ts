import { Outlet, useLoaderData } from "react-router-dom";

import { IPost } from "../interfaces/postInterface";
import { Post } from "../components";

const PostsPage = () => {
    const {data} = useLoaderData() as { data: IPost[] };

    return (
        <div>
            <h2>Posts:</h2>
            <Outlet/>
            {data.map(value => <Post key={value.id} post={value}/>)}
        </div>
    );
};

export { PostsPage };