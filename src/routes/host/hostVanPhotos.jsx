import { useOutletContext } from "react-router-dom";

function HostVanPhotos() {
    const { van } = useOutletContext();

    return (
        <div className="hostVanPhotos">
            <img src={van.imageUrl} alt="" />
        </div>
    );
}

export default HostVanPhotos;
