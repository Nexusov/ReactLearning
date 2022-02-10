import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";


let mapStateToPropsForRedirect = (state) => (
    {
        isAuth : state.auth.isAuth
    }
)


//HOC
export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) {
                return <Redirect to = '/Login' /> //! в react-router-dom V6 нет Redirect, вместо него <Navigate to = '/Login'/> */
            }

            return <Component {...this.props}  />
        }
    }

    let mapStateToPropsForRedirect = (state) => (
        {
            isAuth : state.auth.isAuth
        }
    )
    
    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)

    return ConnectedAuthRedirectComponent
}