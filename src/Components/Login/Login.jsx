import React from "react";
import { useFormik } from 'formik'

const LoginForm = () => {

    const formik  = useFormik({
        initialValues: {
            login: '',
            password: '',
            rememberMe: '',
        }
    })

    return (
		<>
			<h1>Login</h1>
			<form>
				<div>
					<input placeholder = {'Login'} type = 'text' id = 'login' name = {'login'} onChange = {formik.handleChange} value = {formik.values.login} />
				</div>
				<div>
					<input placeholder = {'Password'} type = 'password' id = 'password' name = {'password'} onChange = {formik.handleChange} value = {formik.values.password} />
				</div>
				<div>
					<input type = {'checkbox'} id = 'rememberMe' name = {'rememberMe'} onChange = {formik.handleChange} value = {formik.values.rememberMe} /> remember me
				</div>
                <div>
                    <button>Login</button>
                </div>
			</form>
		</>
	);
}

export default LoginForm