import { ReactElement } from "react";
import { Header } from "./";

function Page({children}: {children: ReactElement}) {
    return (
        <div id="page-wrapper">
            <Header />
            <div id="page-container" className="max-w-5xl mx-auto my-12 rounded-2xl bg-white dark:bg-foreground-dark/50 p-6 px-8">
                {children}
            </div>
        </div>
    );
}

export default Page;