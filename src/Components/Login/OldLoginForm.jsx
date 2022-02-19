import React from "react";
import { useFormik } from 'formik'
import s from "./Login.module.css";
import * as Yup from 'yup'

const initialValues = {
    login: '',
    password: '',
    rememberMe: '',
}

const onSubmit = values => {
    console.log('form data', values)
}

const validate = values => {
    let errors = {}

    if (!values.login) {
        errors.login = 'Required'
    }

    if (!values.password) {
        errors.password = 'Required'
    }

    return errors
}

const validationSchema = Yup.object({
    login: Yup.string().required('Required'),
    password: Yup.string().required('Required')
})

const OldLoginForm = () => {
    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
        /* validate */
    })

    return (
		<>
			<h1>Login Page</h1>
			<form onSubmit = {formik.handleSubmit}>
				<div className = {s.formControl}>
                    <label htmlFor = "login">Login</label>
					<input placeholder = {'Login'} type = 'text' id = 'login' name = {'login'} onChange = {formik.handleChange} onBlur = {formik.handleBlur} value = {formik.values.login} />
                    {formik.touched.login &&  formik.errors.login ? <div className = {s.error}>{formik.errors.login}</div> : null}
				</div>
				<div className = {s.formControl}>
                <label htmlFor = "password">Password</label>
                    <input placeholder = {'Password'} type = 'password' id = 'password' name = {'password'} onChange = {formik.handleChange} onBlur = {formik.handleBlur} value = {formik.values.password} />
					{formik.touched.password && formik.errors.password ? <div className = {s.error}>{formik.errors.password}</div> : null}
				</div>
				<div>
					<input type = {'checkbox'} id = 'rememberMe' name = {'rememberMe'} onChange = {formik.handleChange} value = {formik.values.rememberMe} /> Remember me
				</div>
                <div>
                    <button type = 'submit'>Login</button>
                </div>
			</form>
		</>
	);
}

export default OldLoginForm