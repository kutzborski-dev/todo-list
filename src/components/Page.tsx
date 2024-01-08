import { ReactElement } from "react";
import { Header } from "./";

function Page({children}: {children: ReactElement}) {
    return (
        <div id="page-wrapper">
            <Header />
            {children}
        </div>
    );
}

export default Page;