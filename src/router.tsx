import { createBrowserRouter, Navigate } from "react-router-dom";

import { MainLayout } from "./components";
import { ErrorPage, PostDetailsPage, PostsPage, UserDetailsPage, UsersPage } from "./pages";
import { postService } from "./services/postService";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, errorElement: <ErrorPage/>, children: [
            {
                index: true, element: <Navigate to={'posts'}/>
            },
            {
                path: 'users', element: <UsersPage/>, children: [
                    {
                        path: ':id', element: <UserDetailsPage/>
                    }
                ]
            },
            {
                path: 'posts', element: <PostsPage/>, loader: () => postService.getAll(), children: [
                    {
                        path: ':postId', element: <PostDetailsPage/>, loader: ({params:{postId}})=> postService.getById(+postId)
                    }
                ]
            }
        ]
    }
]);

export { router }