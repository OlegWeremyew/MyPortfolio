import React, {FC, lazy} from 'react';
import {Route, Routes} from 'react-router-dom';
import {PATH} from "./constants";
import {AboutMe} from "components/a3-AboutMe";
import {Portfolio} from "components/a4-Portfolio";
import {Contacts} from "components/a5-Contacts";

/*export const AboutMe = lazy(() =>
    import("components/a3-AboutMe/AboutMe").then(tm => ({
        default: tm.AboutMe,
    })),
);
export const Portfolio = lazy(() =>
    import("components/a4-Portfolio/Portfolio").then(tm => ({
        default: tm.Portfolio,
    })),
);
export const Contacts = lazy(() =>
    import("components/a5-Contacts/Contacts").then(tm => ({
        default: tm.Contacts,
    })),
);*/

export const RoutesComponent: FC = () => {
    return (
        <div>
            <Routes>
                <Route path={PATH.ABOUT} element={<AboutMe/>}/>
                <Route path={PATH.PORTFOLIO} element={<Portfolio/>}/>
                <Route path={PATH.CONTACTS} element={<Contacts/>}/>
            </Routes>
        </div>
    );
}