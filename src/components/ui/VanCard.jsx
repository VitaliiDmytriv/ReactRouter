import { Link } from "react-router-dom";
import { setCssClass, makefirstLettUpp } from "../../utils";

/* eslint-disable react/prop-types */
function VanCard({ van, searchParams, typeFilter }) {
    return (
        <article className="vanCard fz_1-25rem fw_600">
            <Link
                to={van.id}
                state={{ search: `?${searchParams.toString()}`, typeFilter }}
            >
                <div className="vanCard__img">
                    <img src={van.imageUrl} alt="" />
                </div>
                <div className="vanCard__body">
                    <div className="vanCard__title">
                        <p>{van.name}</p>
                        <span>
                            <span className="vanCard__price">${van.price}</span>
                            <span className="vanCard__badge fw_500">/day</span>
                        </span>
                    </div>
                    <span
                        className={`btn vanCard__btn  ${setCssClass(van.type)}`}
                    >
                        {makefirstLettUpp(van.type)}
                    </span>
                </div>
            </Link>
        </article>
    );
}

export default VanCard;
