import React from 'react';
import styles from './Users.module.css';

const Users = (props) => {

    if (props.users.length === 0) {
		props.setUsers([
			{
				id: 1,
				photoURL:
					'https://vesti.ua/wp-content/uploads/2020/01/0001-2.jpg',
				followed: false,
				fullName: 'Yegor',
				status: 'How to survive',
				location: { city: 'Vladimir', country: 'Russia' },
			},
			{
				id: 2,
				photoURL:
					'https://st-1.akipress.org/st_gallery/15/982615.845833362c9fc2adceccd93e28186433.jpg',
				followed: true,
				fullName: 'Oleg',
				status: 'SKÅL!',
				location: { city: 'Oslo', country: 'Norway' },
			},
			{
				id: 3,
				photoURL:
					'https://viva.ua/storage/crop/articles/avatar_2182_max.jpg',
				followed: false,
				fullName: 'Dima',
				status: 'Kill me pls',
				location: { city: 'Vladimir', country: 'Russia' },
			},
		]);
	}
    
    return <div>
            {
                props.users.map( u => <div key = {u.id}>
                    <span>
                        <div>
                            <img src = {u.photoURL} alt = '' className = {styles.usersPhoto} />
                        </div>
                        <div>
                            {
                                u.followed 
                                    ? <button onClick = { () => { props.unfollow(u.id) } } >Unfollow</button> 
                                    : <button onClick = { () => { props.follow(u.id) } } >Follow</button>
                            }
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
