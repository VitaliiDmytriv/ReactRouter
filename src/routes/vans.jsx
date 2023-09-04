import { useEffect, useState } from "react";
import VanCard from "../components/ui/VanCard";
import MyModal from "../components/ui/myModal";
import Spinner from "../components/ui/spinner";
// import localforage from "localforage";

function Vans() {
    const [vans, setVans] = useState([]);

    useEffect(() => {
        fetch("/api/vans")
            .then((res) => res.json())
            .then((value) => {
                setVans(value.vans);
                // set(value.vans);
            });
    }, []);

    return (
        <section className="vans bodyPage">
            <h2 className="fz_2rem lh_2rem">Explore our van options</h2>
            <div className="vansFilterRow">
                <span className="vansFilter">Simple</span>
                <span className="vansFilter">Luxury</span>
                <span className="vansFilter">Rugged</span>
                <span>Clear Filters</span>
            </div>
            <div className="vansList">
                {vans.length !== 0 ? (
                    vans.map((van) => <VanCard key={van.id} van={van} />)
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

export default Vans;
