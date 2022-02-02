import { connect } from 'react-redux';
import {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
    toggleFollowingProgress
} from '../../Redux/users-reducer';
import * as axios from 'axios';
import React from 'react';
import Users from './Users';
import Preloader from '../Common/Preloader/Preloader';
import { usersAPI } from '../../API/api';

// UsersContainer - контейнерная компонента
class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then((data) => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount);
        });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);

        usersAPI.getUsers(pageNumber, this.props.pageSize).then((data) => { 
                this.props.toggleIsFetching(false); 
                this.props.setUsers(data.items);
        });
    }

    render() {
        return (
			<>     
            { this.props.isFetching ? <Preloader /> : null } {/* //* react-loadable - это нормальная библиотека для loader !! */ }

			<Users
				totalUsersCount = { this.props.totalUsersCount }
				pageSize = { this.props.pageSize }
				currentPage = { this.props.currentPage }
				onPageChanged = { this.onPageChanged }
				users = { this.props.users }
				follow = { this.props.follow }
				unfollow = { this.props.unfollow } 
				toggleFollowingProgress = { this.props.toggleFollowingProgress } 
				followingInProgress = { this.props.followingInProgress } 
			/>
			</>
		); 
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}

export default connect(mapStateToProps, {
	follow,
	unfollow,
	setUsers,
	setCurrentPage,
	setTotalUsersCount,
	toggleIsFetching,
	toggleFollowingProgress,
})(UsersContainer);


/* ...если вы передаете в connect вторым аргументом не mapDispatchToProps, а объект с AC, то 
connect оборачивает ваши AC в функцию-обертку () => store.dispatch(AC) и передаёт в props компонента */

/* Раньше было так:

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
        },
        setCurrentPage: (pageNumber) => {
            dispatch (setCurrentPageActionCreator(pageNumber))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch (setUsersTotalCountActionCreator(totalCount))
        },
        toggleIsFetching: (isFetching) => {
            dispatch (toggleIsFetchingActionCreator(isFetching))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer) ; */
