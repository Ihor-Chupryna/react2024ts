import { Outlet } from "react-router-dom";

import { Header } from "../header/Header";

const MainLayout = () => {
    return (
        <div>
            <Header/>
            <div style={{paddingLeft: "20px"}}><Outlet/></div>
        </div>
    );
};

export { MainLayout };