import React from 'react'
import styles from './Users.module.css';
import userPhoto from '../../Assets/images/user.jpg'

// Users - презентационная (чистая) компонента
let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize) // Math.ceil - округляет значение в большую сторону

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div> 
            <div className = {styles.pagesList}>
                {pages.map( p => {
                    return <span className = { props.currentPage === p && styles.selectedPage } 
                        onClick = { () => { props.onPageChanged(p) } }> {p} </span>
                })}
            </div>

            {
                props.users.map( u => <div key = {u.id}>
                    <span>
                        <div>
                            <img src = {u.photos.large != null ? u.photos.large : userPhoto} alt = '' className = {styles.usersPhoto} />
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
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
}

export default Users 