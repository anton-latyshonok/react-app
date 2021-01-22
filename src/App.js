//import logo from './logo.svg';

import React from 'react';
import './App.css';
import Navbar from './components/Header/Header.jsx';
import Header from './components/Navbar/Navbar.jsx';
import Profile from './components/Profile/Profile.jsx';
import Dialogs from "./components/Dialogs/Dialogs.jsx";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import {BrowserRouter, Route} from "react-router-dom";



const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/profile' component={Profile}/>
                    <Route path='/dialogs' component={Dialogs}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>


                </div>

            </div>
        </BrowserRouter>
    );
}


export default App;
