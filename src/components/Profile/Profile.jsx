import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts.jsx';


const Profile = () => {
    return <div>
    <div>
      <img src='https://earthsky.org/upl/2018/06/ocean-apr27-2020-Cidy-Chai-North-Pacific-scaled-e1591491800783.jpeg'></img>
    </div>
    <div>
      ava + description
    </div>
    <MyPosts />

  </div>
}

export default Profile;