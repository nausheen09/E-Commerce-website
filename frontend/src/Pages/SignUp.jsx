import React, { useState } from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBInput,
    MDBIcon,
    MDBCheckbox
} from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const apiUrl = import.meta.env.VITE_API_BASE_URL;

const validationSchema = Yup.object({
    username: Yup.string()
        .matches(/^[a-zA-Z0-9]+$/, 'Username can only contain letters and numbers (No spaces or special characters)')
        .min(3, 'Username must be at least 3 characters long')
        .max(20, 'Username cannot exceed 20 characters')
        .required('Username is required'),

    email: Yup.string()
        .email('Enter a valid email address (e.g., example@domain.com)')
        .matches(/^[^\s@]+@[^\s@]+\.(com|net)$/, 'Only .com and .net domains are allowed')
        .required('Email is required'),

    password: Yup.string()
        .min(3, 'Password must be at least 3 characters long')
        .max(30, 'Password must not exceed 30 characters')
        .matches(/^[a-zA-Z0-9]*$/, 'Only letters (A-Z, a-z) and numbers (0-9) are allowed.')
        .required('Password is required'),
});

function Signup() {
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    return (
        <MDBContainer style={{ minHeight: '120vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <ToastContainer />
            <MDBCard className='m-5' style={{ borderRadius: '25px', backgroundColor: '#EEEEEE' }}>
                <MDBCardBody>
                    <MDBRow>
                        <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>
                            <p className="text-center h1 fw-bold mb-4 mt-2" style={{ color: "#212121" }}>Sign Up</p>
                            <Formik
                                initialValues={{ username: '', email: '', password: '', }}
                                validationSchema={validationSchema}
                                onSubmit={async (values) => {
                                    setLoading(true);
                                    try {
                                        const response = await fetch(
                                           `${apiUrl}/auth/signup`

                                            // 'http://localhost:5000/api/auth/signup'
                                            , {
                                                method: 'POST',
                                                headers: { 'Content-Type': 'application/json' },
                                                body: JSON.stringify(values),
                                            });
                                        const data = await response.json();
                                        setLoading(false);
                                        if (response.ok) {
                                            toast.success(data.message);
                                            navigate('/LogIn');
                                        } else {
                                            toast.error(data.message || 'Signup failed');
                                        }
                                    } catch (error) {
                                        setLoading(false);
                                        toast.error(error.message || 'An error occurred while signing up');
                                    }
                                }}>
                                <Form style={{ width: '100%' }}>
                                    <div className="d-flex flex-row align-items-center mb-4">
                                        <MDBIcon fas icon="user me-3" size='lg' style={{ color: '#332d2d' }} />
                                        <Field name="username" type="text" placeholder='Your Name' className='form-control' style={{ border: '2px solid orange' }} />
                                    </div>
                                    <ErrorMessage name='username' component='p' className='text-red-500 text-sm' />

                                    <div className="d-flex flex-row align-items-center mb-4">
                                        <MDBIcon fas icon="envelope me-3" size='lg' style={{ color: '#332d2d' }} />
                                        <Field name="email" type="email" placeholder='Your Email' className='form-control' style={{ border: '2px solid orange' }} />
                                    </div>
                                    <ErrorMessage name='email' component='p' className='text-red-500 text-sm' />

                                    <div className="d-flex flex-row align-items-center mb-4">
                                        <MDBIcon fas icon="lock me-3" size='lg' style={{ color: '#332d2d' }} />
                                        <div className='position-relative w-100'>
                                            <Field name="password" type={showPassword ? 'text' : 'password'} placeholder='Password' className='form-control' style={{ border: '2px solid orange' }} />
                                            <button type='button' className='position-absolute end-0 top-50 translate-middle-y btn' onClick={() => setShowPassword(!showPassword)}>
                                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                                            </button>
                                        </div>
                                    </div>
                                    <ErrorMessage name='password' component='p' className='text-red-500 text-sm' />

                                    <div className='mb-4'>
                                        <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='Subscribe to our newsletter' style={{ color: '#332d2d' }} />
                                    </div>

                                    <MDBBtn type='submit' size='lg' disabled={loading} style={{ backgroundColor: 'black', color: 'white', marginLeft: "25px" }}>
                                        {loading ? 'Signing Up...' : 'Sign Up'}
                                    </MDBBtn>
                                </Form>
                            </Formik>
                        </MDBCol>
                        <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
                            <MDBCardImage src='/src/assets/img/gallery/download (8).jpeg' fluid />
                        </MDBCol>
                    </MDBRow>
                </MDBCardBody>
            </MDBCard>
        </MDBContainer>
    );
}
export default Signup;
