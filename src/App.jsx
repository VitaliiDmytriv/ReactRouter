import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/home";
import About from "./routes/about";
import "./server";
import Vans from "./routes/vans";
import VanDetailed from "./components/vanDetailed";
import Layout from "./components/Layout";
import Dashboard from "./routes/host/dashboard";
import Income from "./routes/host/income";
import HostVans from "./routes/host/hostVans";
import Reviews from "./routes/host/reviews";
import HostLayout from "./components/hostLayout";
import HostVanDetail from "./routes/host/hostVanDetail";
import HostVanInfo from "./routes/host/hostVanInfo";
import HostVanPricing from "./routes/host/hostVanPricing";
import HostVanPhotos from "./routes/host/hostVanPhotos";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="host" element={<HostLayout />}>
                        <Route index element={<Dashboard />} />
                        <Route path="income" element={<Income />} />
                        <Route path="vans" element={<HostVans />} />
                        <Route path="vans/:id" element={<HostVanDetail />}>
                            <Route index element={<HostVanInfo />} />
                            <Route
                                path="pricing"
                                element={<HostVanPricing />}
                            />
                            <Route path="photos" element={<HostVanPhotos />} />
                        </Route>
                        <Route path="reviews" element={<Reviews />} />
                    </Route>
                    <Route path="about" element={<About />} />
                    <Route path="vans" element={<Vans />} />
                    <Route path="vans/:id" element={<VanDetailed />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
