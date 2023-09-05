import { useEffect, useState } from "react";
import VanCard from "../components/ui/VanCard";
import MyModal from "../components/ui/myModal";
import Spinner from "../components/ui/spinner";
import { useSearchParams } from "react-router-dom";

function Vans() {
    const [vans, setVans] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();

    const typeFilter = searchParams.get("type");

    useEffect(() => {
        fetch("/api/vans")
            .then((res) => res.json())
            .then((value) => {
                setVans(value.vans);
            });
    }, []);

    const typeFilteredVans = (vans = [], typeFilter) => {
        if (typeFilter) {
            return vans.filter((van) => van.type.toLowerCase() === typeFilter);
        }
        return vans;
    };

    const filteredVans = typeFilteredVans(vans, typeFilter);

    const handleFilterChange = (key, value) => {
        setSearchParams((prev) => {
            if (value === null) {
                prev.delete(key);
            } else {
                prev.set(key, value);
            }

            return prev;
        });
    };

    return (
        <section className="vans bodyPage">
            <h2 className="fz_2rem lh_2rem">Explore our van options</h2>
            <div className="vansFilterRow">
                <span
                    onClick={() => handleFilterChange("type", "simple")}
                    className={`vansFilter simple ${
                        typeFilter === "simple" ? "active" : ""
                    }`}
                >
                    Simple
                </span>
                <span
                    onClick={() => handleFilterChange("type", "luxury")}
                    className={`vansFilter luxury ${
                        typeFilter === "luxury" ? "active" : ""
                    }`}
                >
                    Luxury
                </span>
                <span
                    onClick={() => handleFilterChange("type", "rugged")}
                    className={`vansFilter rugged ${
                        typeFilter === "rugged" ? "active" : ""
                    }`}
                >
                    Rugged
                </span>
                {typeFilter && (
                    <span
                        className="vans__clearBtn"
                        onClick={() => handleFilterChange("type", null)}
                    >
                        Clear Filters
                    </span>
                )}
            </div>
            <div className="vansList">
                {vans.length !== 0 ? (
                    filteredVans.map((van) => (
                        <VanCard
                            key={van.id}
                            van={van}
                            typeFilter={typeFilter}
                            searchParams={searchParams}
                        />
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

export default Vans;
