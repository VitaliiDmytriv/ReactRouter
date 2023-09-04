import { NavLink, Outlet } from "react-router-dom";
import { styleActiveLink } from "../utils";

function HostLayout() {
    return (
        <>
            <section className="bodyPage">
                <header className="host">
                    <nav>
                        <NavLink className={styleActiveLink} end to={"."}>
                            Dashboard
                        </NavLink>
                        <NavLink className={styleActiveLink} to={"income"}>
                            Income
                        </NavLink>
                        <NavLink className={styleActiveLink} to={"vans"}>
                            Vans
                        </NavLink>
                        <NavLink className={styleActiveLink} to={"reviews"}>
                            Reviews
                        </NavLink>
                    </nav>
                </header>
                <Outlet />
            </section>
        </>
    );
}

export default HostLayout;
