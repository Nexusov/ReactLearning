import React from 'react'
import styles from './Users.module.css';
import userPhoto from '../../Assets/images/user.jpg'
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';

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
                            <NavLink to = { '/Profile/' + u.id }>
                                <img src = {u.photos.large != null ? u.photos.large : userPhoto} alt = '' className = {styles.usersPhoto} />
                            </NavLink>
                        </div>
                        <div>
                            {
                                u.followed 
                                    ? <button  disabled = {props.followingInProgress.some( id => id === u.id )} onClick = { () => {
                                        props.toggleFollowingProgress(true, u.id)
                                        axios
                                            .delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                                withCredentials: true,
                                                headers: {
                                                    "API-KEY": "395cfa01-bf70-4e82-bad5-24895eba6c7f"
                                                }
                                            })
                                            .then((response) => {
                                                if (response.data.resultCode === 0) {
                                                    props.unfollow(u.id) 
                                                }
                                                props.toggleFollowingProgress(false, u.id)
                                            });
                                    } } >Unfollow</button> 
                                    
                                    : <button disabled = {props.followingInProgress.some( id => id === u.id )} onClick = { () => {
                                        props.toggleFollowingProgress(true, u.id) 
                                        axios
                                            .post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                                withCredentials: true,
                                                headers: {
                                                    "API-KEY": "395cfa01-bf70-4e82-bad5-24895eba6c7f"
                                                }
                                            })
                                            .then((response) => {
                                                if (response.data.resultCode === 0) {
                                                    props.follow(u.id) 
                                                }
                                                props.toggleFollowingProgress(false, u.id)
                                            });
                                    } } >Follow</button>
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