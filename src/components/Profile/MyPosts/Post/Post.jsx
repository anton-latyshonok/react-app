import React from 'react';
import s from './Post.module.css';

const Post = () => {
    return (<div>
        <div className={s.item}>
          <img src='https://upload.wikimedia.org/wikipedia/commons/7/77/Avatar_cat.png'></img>
          post 1
          <div>
          <span>Like</span>
          </div>
        </div>
    </div>);
}

export default Post;