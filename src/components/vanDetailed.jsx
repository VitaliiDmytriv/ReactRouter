import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { setCssClass, makefirstLettUpp } from "../utils";
import arrow from "../assets/leftArrow.svg";
import MyModal from "./ui/myModal";
import Spinner from "./ui/spinner";

function VanDetailed() {
    const params = useParams();
    const location = useLocation();
    const urlPath = location.state?.search;
    const direction = location.state.typeFilter
        ? location.state.typeFilter
        : "all";

    const [van, setVan] = useState(null);

    useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then((res) => res.json())
            .then((data) => setVan(data.vans));
    }, [params.id]);

    return (
        <>
            {van ? (
                <section className="vanDetailed bodyPage">
                    <Link
                        to={`..${urlPath}`}
                        relative="path"
                        className="backLink"
                    >
                        <img src={arrow} alt="" />
                        Back to {direction} vans
                    </Link>
                    <div className="vanDetailed__img">
                        <img src={van.imageUrl} alt="" />
                    </div>
                    <div className="vanDetailed__info">
                        <span
                            className={`btn typeBtn vanDetailed-typeBtn  ${setCssClass(
                                van.type
                            )}`}
                        >
                            {makefirstLettUpp(van.type)}
                        </span>
                        <h2 className="fz_2rem lh_2rem">{van.name}</h2>
                        <p className="vanDetailed__price fz_1-5rem fw_700 ">
                            ${van.price}{" "}
                            <span className="fz_1-25rem fw_500">/day</span>
                        </p>
                        <p className="vanDetailed__desctiption fw_500 lh_1-5rem">
                            {van.description}
                        </p>
                        <span className="btn mainBtn">Rent this van</span>
                    </div>
                </section>
            ) : (
                <MyModal>
                    <Spinner />
                    Loading ...
                </MyModal>
            )}
        </>
    );
}

export default VanDetailed;
