import React from 'react';
import styles from './Users.module.css';

let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
                {
                    id: 1,
                    photoUrl: 'https://i.pinimg.com/originals/53/0e/93/530e9312f7e236423622a03a2ff259a5.jpg',
                    followed: false,
                    fullName: 'Sharlotta',
                    status: 'I am a dog',
                    location: {city: 'Minsk', country: 'Belarus'}
                },
                {
                    id: 2,
                    photoUrl: 'https://i.pinimg.com/originals/53/0e/93/530e9312f7e236423622a03a2ff259a5.jpg',
                    followed: true,
                    fullName: 'Mavr',
                    status: 'I am a dog',
                    location: {city: 'Moscow', country: 'Russia'}
                },
                {
                    id: 3,
                    photoUrl: 'https://i.pinimg.com/originals/53/0e/93/530e9312f7e236423622a03a2ff259a5.jpg',
                    followed: false,
                    fullName: 'Endi',
                    status: 'I am a dog',
                    location: {city: 'Pinsk', country: 'Belarus'}
                }
            ]
        )
    }

    return <div>
        {
            props.users.map(u => <div key={u.id}>
                                <span>
                    <div>
                      <img src={u.photoUrl} className={styles.userPhoto}/>
                    </div>
                    <div>
                      {u.followed
                          ? <button onClick={() => {
                              props.unfollow(u.id)
                          }}>Unfollow</button>
                          : <button onClick={() => {
                              props.follow(u.id)
                          }}>Follow</button>}

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                   </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;