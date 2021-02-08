import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img
                    src='https://earthsky.org/upl/2018/06/ocean-apr27-2020-Cidy-Chai-North-Pacific-scaled-e1591491800783.jpeg'></img>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                ava + description
            </div>


        </div>
    );
}


export default ProfileInfo;