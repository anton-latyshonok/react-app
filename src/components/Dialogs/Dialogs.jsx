import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    Bodya
                </div>
                <div className={s.dialog}>
                    Gena
                </div>
                <div className={s.dialog}>
                    Albert
                </div>
                <div className={s.dialog}>
                    Andrew
                </div>
                <div className={s.dialog}>
                    Vladimir
                </div>


            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How is your health?</div>
                <div className={s.message}>Yo</div>

            </div>

        </div>

    );
}

export default Dialogs;