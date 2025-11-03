import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

function RootLayout() {
    return (
        <>
            <MainNavigation />
            <main className="font-mono bg-white text-gray-900">
                <Outlet />
            </main>
        </>
    );
}

export default RootLayout;
