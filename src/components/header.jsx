import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { styleActiveLink } from "../utils";

function MyHeader() {
    return (
        <header className="header">
            <div className="logo">
                <NavLink to={"/"}>
                    <img src={logo} alt="" />
                </NavLink>
            </div>
            <nav>
                <NavLink className={styleActiveLink} to={"host"}>
                    Host
                </NavLink>
                <NavLink className={styleActiveLink} to={"about"}>
                    About
                </NavLink>
                <NavLink className={styleActiveLink} to={"vans"}>
                    Vans
                </NavLink>
            </nav>
        </header>
    );
}

export default MyHeader;
