import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile } from '../../Redux/profile-reducer';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { Redirect } from 'react-router-dom';

class ProfileContainer extends React.Component {

	componentDidMount() {
		let userId = this.props.match.params.userId
		if (!userId) {
			userId = 2;
		}
		this.props.getUserProfile(userId)
	}

	render() {
		if (!this.props.isAuth) {
			return <Redirect to = '/Login' /> //! в react-router-dom V6 нет Redirect, вместо него <Navigate to = '/Login'/> */
		}

		return (
			<div>
				<Profile {...this.props} profile = {this.props.profile} />
			</div>
		);
	}
}

let mapStateToProps = (state) => (
	{
		profile: state.profilePage.profile,
		isAuth : state.auth.isAuth
	}
)

let WithUrlDataContainerComponent =  withRouter(ProfileContainer) //! В react-router-dom v6 убрали withRouter, вместо него, можно использовать useMatch */

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent)