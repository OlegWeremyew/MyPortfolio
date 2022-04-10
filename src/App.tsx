import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Footer} from "./components/Footer/Footer";
import {Intro} from "./components/Intro/Intro";

function App() {
    return (
        <div className="App">
            <Header/>
            <Intro/>
            <Footer/>
        </div>
    );
}

export default App;
