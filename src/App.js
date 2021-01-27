//import logo from './logo.svg';

import React from 'react';
import './App.css';
import Navbar from './components/Header/Header.jsx';
import Header from './components/Navbar/Navbar.jsx';
import Profile from './components/Profile/Profile.jsx';
import Music from "./components/Music/Music";
import News from "./components/News/News";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


const App = () => {

    return (
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/profile' render={ () => <Profile />}/>
                    <Route path='/dialogs' render={ () => <DialogsContainer />}/>
                    <Route path='/news' render={ () => <News/>}/>
                    <Route path='/music' render={ () => <Music/>}/>


                </div>

            </div>
    );
}


export default App;
