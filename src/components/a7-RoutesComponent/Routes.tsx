import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {AboutMe} from '../a3-AboutMe/AboutMe';
import {Portfolio} from "../a4-Portfolio/Portfolio";
import {Contacts} from "../a5-Contacts/Contacts";

export const PATH = {
    ABOUT: '/about',
    PORTFOLIO: '/portfolio',
    CONTACTS: '/contacts',
}

export const RoutesComponent = () => {
    return (
        <div>
            <Routes>
                <Route path={PATH.ABOUT} element={<AboutMe/>}/>
                <Route path={PATH.PORTFOLIO} element={<Portfolio/>}/>
                <Route path={PATH.CONTACTS}  element={<Contacts/>}/>
            </Routes>
        </div>
    );
}