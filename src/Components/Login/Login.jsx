import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik'
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

const validationSchema = Yup.object({
    login: Yup.string().required('Required'),
    password: Yup.string().required('Required')
})

const LoginForm = () => {

    return (
        <>
        <h1>Login Page</h1>
		<Formik initialValues = {initialValues} validationSchema = {validationSchema} onSubmit = {onSubmit} >
			<Form>
				<div className = {s.formControl}>
                    <label htmlFor = "login">Login</label>
					<Field placeholder = {'Login'} type = 'text' id = 'login' name = {'login'} />
                    <div className = {s.error}><ErrorMessage name = 'login'/></div>
				</div>
				<div className = {s.formControl}>
                <label htmlFor = "password">Password</label>
                    <Field placeholder = {'Password'} type = 'password' id = 'password' name = {'password'} />
                    <div className = {s.error}><ErrorMessage name = 'password'/></div>
                </div>
				<div>
					<Field type = {'checkbox'} id = 'rememberMe' name = {'rememberMe'} /> Remember me
				</div>
                <div>
                    <button type = 'submit'>Login</button>
                </div>
			</Form>
		</Formik>
        </>
	);
}

export default LoginForm