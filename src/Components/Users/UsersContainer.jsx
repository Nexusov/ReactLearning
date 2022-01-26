import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import {
    followActionCreator,
    unfollowActionCreator,
    setUsersActionCreator
} from '../../Redux/users-reducer';

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followActionCreator(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowActionCreator(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users) ;
