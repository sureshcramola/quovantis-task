import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { Form } from "react-bootstrap";
import Button from "../../components/Button/Button";
import { loginUser } from './actions';
import "./login.scss";

const Login = () => {
    const [form, setFormData] = useState({
        username: '',
        password: ''
    });

    const { username, password } = form;
    const dispatch = useDispatch();
    
    const checkFormValidation = () => {
        if (username && password) {
            return true
        }
        return false;
    }

    const onInputChange = evt => {
        const { name, value } = evt.target;
        setFormData(form => ({ ...form, [name]: value }));
    }


    const onFormSubmit = evt => {
        evt.preventDefault();
        if (checkFormValidation()) {
            dispatch(loginUser(form))
        } else {
            alert("Both fields are required")
        }
    }


    return (
        <div className="login-wrapper">
            <Form className="login-form-wrapper" onSubmit={onFormSubmit}>
                <div className="login-form-body">
                    <Form.Group controlId="username">
                        <Form.Label>Username:</Form.Label>
                        <Form.Control type="text" name="username" value={username} onChange={onInputChange} />
                    </Form.Group>
                    <Form.Group controlId="password">
                        <Form.Label>Password:</Form.Label>
                        <Form.Control type="text" name="password" value={password} onChange={onInputChange} />
                    </Form.Group>
                </div>
                <div className="login-form-footer">
                    <Form.Group className="text-center mb-0">
                        <Button btnType="submit">
                            Login
                            </Button>
                    </Form.Group>
                </div>
            </Form>
        </div>
    )
}

export default Login;