import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );

}

const Message = (props) => {
    return(
        <div className={s.dialog}>{props.message}</div>
    );
}


const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name='Bodya' id='1'/>
                <DialogItem name='Gena' id='2'/>
                <DialogItem name='Albert' id='3'/>
                <DialogItem name='Andrew' id='4'/>
                <DialogItem name='Vova' id='5'/>


            </div>
            <div className={s.messages}>
                <Message message='Hi'/>
                <Message message='How is your health?'/>
                <Message message='Nihaoma'/>



            </div>

        </div>

    );
}

export default Dialogs;