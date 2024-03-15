import { createBrowserRouter, Navigate } from "react-router-dom";

import { MainLayout } from "./layouts";
import { CarsPage, LoginPage, RegisterPage } from "./pages";
import { AuthRequired } from "./hoc";
import { AuthLayout } from "./layouts/AuthLayout";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {
                index: true, element: <Navigate to={'cars'}/>
            },
            {
                element: <AuthRequired>
                    <AuthLayout/>
                </AuthRequired>, children: [
                    {
                        path: 'cars', element: <CarsPage/>
                    }
                ]
            },
            {
                path: 'register', element: <RegisterPage/>
            },
            {
                path: 'login', element: <LoginPage/>
            },
        ]
    }
]);

export { router }