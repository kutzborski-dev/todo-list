import { ReactNode } from "react";
import { Header } from "./";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

function BackButton() {
    const navigate = useNavigate();
    const location = useLocation();
    const isHome = location.pathname === '/';

    if(isHome) return <div className="mt-20 pt-1"></div>;

    return (
        <Button onClick={() => navigate(-1)}>
            Back
        </Button>
    );
}

function Page({children}: {children: ReactNode}) {
    return (
        <div id="page-wrapper">
            <Header />
            <div id="page-container" className="max-w-5xl mx-auto my-12">
                    <BackButton />
                <div id="content-container" className="rounded-2xl bg-white shadow-md shadow-slate-800/5 dark:shadow-none dark:bg-foreground-dark/50 p-4 px-8">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Page;