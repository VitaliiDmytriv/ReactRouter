import { useOutletContext } from "react-router-dom";

function HostVanPricing() {
    const { van } = useOutletContext();

    return (
        <p className="hostVanPricing fz_1-5rem fw_600">
            ${van.price}
            <span className="fw_500 fz_1rem">/day</span>
        </p>
    );
}

export default HostVanPricing;
