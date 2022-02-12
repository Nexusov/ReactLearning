import React from 'react';
import Preloader from '../../Common/Preloader/Preloader';
import s from './ProfileInfo.module.css';

export default class ProfileStatus extends React.Component {
	state = {
		editMode: false,
	};

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
    }

	render() {
		return (
			<div>
				{!this.state.editMode && (
					<div>
						<span onDoubleClick = { this.activateEditMode }> {this.props.status} </span>
					</div>
				)}
				{this.state.editMode && (
					<div>
						<input autoFocus = {true} onBlur = {this.deactivateEditMode} value = {this.props.status} />
					</div>
				)}
			</div>
		);
	}
}
