import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src='https://earthsky.org/upl/2018/06/ocean-apr27-2020-Cidy-Chai-North-Pacific-scaled-e1591491800783.jpeg'></img>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>


        </div>
    );
}


export default ProfileInfo;