import { Outlet } from "react-router-dom";
import MyFooter from "./footer";
import MyHeader from "./header";

function Layout() {
    return (
        <div className="layout">
            <MyHeader />
            <section className="content">
                <Outlet />
            </section>
            <MyFooter />
        </div>
    );
}

export default Layout;
