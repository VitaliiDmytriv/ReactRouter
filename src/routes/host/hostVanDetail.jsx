import { Link, NavLink, Outlet, useParams } from "react-router-dom";
import arrow from "../../assets/leftArrow.svg";
import { makefirstLettUpp, setCssClass, styleActiveLink } from "../../utils";
import { useEffect, useState } from "react";
import MyModal from "../../components/ui/myModal";
import Spinner from "../../components/ui/spinner";

function HostVanDetail() {
    const { id } = useParams();
    const [van, setVan] = useState(null);

    useEffect(() => {
        fetch(`/api/host/vans/${id}`)
            .then((res) => res.json())
            .then((data) => setVan(data.vans[0]));
    }, [id]);

    return (
        <section className="hostVanDetail">
            <Link to={".."} relative="path" className="backLink">
                <img src={arrow} alt="" />
                Back to all vans
            </Link>
            {van ? (
                <article className="hostVanDetail__card">
                    <header>
                        <img src={van.imageUrl} alt="" />
                        <div className="hostVanDetail__cardInfo">
                            <span
                                className={`btn typeBtn ${setCssClass(
                                    van.type
                                )}`}
                            >
                                {makefirstLettUpp(van.type)}
                            </span>
                            <h3 className="fz_1-5rem hostVanDetail__cardTitle">
                                {van.name}
                            </h3>
                            <p className="fz_1-25rem fw_700 lh_2rem ">
                                ${van.price}
                                <span className="fz_1rem fw_500">/day</span>
                            </p>
                        </div>
                    </header>
                    <nav>
                        <NavLink className={styleActiveLink} end to={`.`}>
                            Details
                        </NavLink>
                        <NavLink className={styleActiveLink} to={`pricing`}>
                            Pricing
                        </NavLink>
                        <NavLink className={styleActiveLink} to={`photos`}>
                            Photos
                        </NavLink>
                    </nav>
                    <div className="hostVanDetailOutlet">
                        <Outlet context={{ van }} />
                    </div>
                </article>
            ) : (
                <MyModal>
                    <Spinner />
                </MyModal>
            )}
        </section>
    );
}

export default HostVanDetail;
