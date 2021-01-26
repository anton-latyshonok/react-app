//import logo from './logo.svg';

import React from 'react';
import './App.css';
import Navbar from './components/Header/Header.jsx';
import Header from './components/Navbar/Navbar.jsx';
import Profile from './components/Profile/Profile.jsx';
import Dialogs from "./components/Dialogs/Dialogs.jsx";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import {Route} from "react-router-dom";


const App = (props) => {

    return (
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/profile' render={ () => <Profile profilePage={props.state.profilePage}
                                                                   dispatch={props.dispatch}/>}/>
                    <Route path='/dialogs' render={ () => <Dialogs store={props.store}/>}/>
                    <Route path='/news' render={ () => <News/>}/>
                    <Route path='/music' render={ () => <Music/>}/>


                </div>

            </div>
    );
}


export default App;
