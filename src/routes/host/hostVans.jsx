import { useEffect, useState } from "react";
import MyModal from "../../components/ui/myModal";
import Spinner from "../../components/ui/spinner";
import { NavLink } from "react-router-dom";

function HostVans() {
    const [vans, setVans] = useState([]);

    useEffect(() => {
        fetch("/api/host/vans")
            .then((res) => res.json())
            .then((data) => setVans(data.vans));
    }, []);

    return (
        <section className="hostVans">
            <h2 className="fz_2rem">Your listed vans</h2>
            <div className="hostVans__list">
                {vans.length !== 0 ? (
                    vans.map((van) => (
                        <article key={van.id}>
                            <NavLink className="hostVans__card" to={van.id}>
                                <img src={van.imageUrl} alt="" />
                                <div className="hostVans__cardInfo">
                                    <h4 className="fz_1-25rem lh_2rem">
                                        {van.name}
                                    </h4>
                                    <p className="fw_500 lh_1-5rem">
                                        ${van.price}/day
                                    </p>
                                </div>
                            </NavLink>
                        </article>
                    ))
                ) : (
                    <MyModal>
                        <Spinner />
                        Loading ...
                    </MyModal>
                )}
            </div>
        </section>
    );
}
export default HostVans;
