import { useLoaderData } from "react-router-dom";

import { IPost } from "../interfaces/postInterface";
import { PostDetails } from "../components";

const PostDetailsPage = () => {
    const {data} = useLoaderData() as { data: IPost };

    return (
        <div>
            <PostDetails post={data}/>
        </div>
    );
};

export { PostDetailsPage };