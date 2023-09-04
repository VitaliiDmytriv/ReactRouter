import { useOutletContext } from "react-router-dom";
import { makefirstLettUpp } from "../../utils";

function HostVanInfo() {
    const { van } = useOutletContext();

    return (
        <>
            <article className="hostVanInfo">
                <p className="fw_700">
                    Name: <span className="fw_500">{van.name}</span>
                </p>
                <p className="fw_700">
                    Category:{" "}
                    <span className="fw_500">{makefirstLettUpp(van.type)}</span>
                </p>
                <p className="fw_700">
                    Description:{" "}
                    <span className="fw_500">{van.description}</span>
                </p>
                <p className="fw_700">
                    Visibility: <span className="fw_500">Public</span>
                </p>
            </article>
        </>
    );
}

export default HostVanInfo;
