import { ReactNode } from "react";
import { Header } from "./";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

function BackButton() {
    const navigate = useNavigate();
    const location = useLocation();
    const isHome = location.pathname === '/';

    if(isHome) return <div className="mt-20 pt-1.5"></div>;

    return (
        <Button
            onClick={() => navigate(-1)}
            className="!text-primary dark:!text-primary-dark hover:!bg-primary-hover/10 dark:hover:!bg-primary-dark-hover/10 !mb-2"
        >
            <KeyboardBackspaceIcon fontSize="small" className="mr-2" /> Back
        </Button>
    );
}

function Page({children}: {children: ReactNode}) {
    return (
        <div id="page-wrapper">
            <Header />
            <div id="page-container" className="max-w-5xl mx-auto mt-10 mb-12">
                <BackButton />
                <div id="content-container" className="rounded-2xl bg-white shadow-md shadow-slate-800/5 dark:shadow-none dark:bg-foreground-dark/50 p-4 px-8">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Page;