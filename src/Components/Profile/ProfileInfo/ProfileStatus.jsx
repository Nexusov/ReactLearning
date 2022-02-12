import React from 'react';
import Preloader from '../../Common/Preloader/Preloader';
import s from './ProfileInfo.module.css';

export default class ProfileStatus extends React.Component {
	state = {
		editMode: false,
        status: this.props.status
	};

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false,
        })
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

	render() {
		return (
			<div>
				{!this.state.editMode && (
					<div>
						<span onDoubleClick = {this.activateEditMode}> {this.props.status || "NO STATUS"} </span>
					</div>
				)}
				{this.state.editMode && (
					<div>
						<input onchange = {this.onStatusChange} autoFocus = {true} onBlur = {this.deactivateEditMode} value = {this.state.status} />
					</div>
				)}
			</div>
		);
	}
}
