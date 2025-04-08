import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../store/authSlice';
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
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const apiUrl = import.meta.env.VITE_API_BASE_URL;

function LogIn() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        console.log(formData);

        try {
            const response = await fetch(
                `${apiUrl}/auth/login`
                // 'http://localhost:5000/api/auth/login'
                , {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData),
                });

            const data = await response.json();
            setLoading(false);

            if (response.ok) {
                localStorage.setItem("token", data.token);
                localStorage.setItem("userId", data.user.id);
                dispatch(loginSuccess({ token: data.token, userId: data.user.id }));

                toast.success(data.message);
                navigate('/');
            } else {
                toast.error(data.error || 'Invalid credentials');
            }
        } catch (error) {
            setLoading(false);
            console.error('Error:', error);
            toast.error(error.message || 'An error occurred while logging in');
        }
    };

    return (
        <MDBContainer style={{ minHeight: '120vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <MDBCard className='m-5' style={{ borderRadius: '25px', backgroundColor: '#EEEEEE' }}>
                <MDBCardBody>
                    <MDBRow>
                        <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>
                            <p className="text-center h1 fw-bold mb-4 mt-2" style={{ color: "#212121" }}>LOGIN</p>
                            <form onSubmit={handleSubmit} style={{ width: '100%' }}>
                                <div className="d-flex flex-row align-items-center mb-4">
                                    <MDBIcon fas icon="envelope me-3" size='lg' style={{ color: '#332d2d' }} />
                                    <div className='position-relative w-100'>
                                        <input
                                            type='email'
                                            name="email"
                                            placeholder='Your Email'
                                            value={formData.email}
                                            onChange={handleChange}
                                            className='form-control'
                                            style={{ border: '2px solid orange' }}
                                            required
                                        />
                                    </div>
                                </div>

                                {/* 🔹 Updated Password Field with Eye Icon inside */}
                                <div className="d-flex flex-row align-items-center mb-4">
                                    <MDBIcon fas icon="lock me-3" size='lg' style={{ color: '#332d2d' }} />
                                    <div className='position-relative w-100'>
                                        <input
                                            type={showPassword ? 'text' : 'password'}
                                            name="password"
                                            placeholder='Password'
                                            value={formData.password}
                                            onChange={handleChange}
                                            className='form-control'
                                            style={{ border: '2px solid orange' }}
                                            required
                                        />
                                        <button
                                            type='button'
                                            className='position-absolute end-0 top-50 translate-middle-y btn'
                                            onClick={() => setShowPassword(!showPassword)}
                                        >
                                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                                        </button>
                                    </div>
                                </div>

                                <div className='mb-4'>
                                    <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' style={{ color: '#332d2d' }} />
                                </div>
                                <MDBBtn className='mb-4' size='lg' type='submit' disabled={loading} style={{ backgroundColor: 'black', color: 'white' }}>
                                    {loading ? 'Logging In...' : 'Log In'}
                                </MDBBtn>
                            </form>
                        </MDBCol>
                        <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
                            <MDBCardImage src='/src/assets/img/gallery/Conceito de compras online Moda na internet Gerar Ai _ imagem Premium gerada com IA.jpeg' fluid />
                        </MDBCol>
                    </MDBRow>
                </MDBCardBody>
            </MDBCard>
        </MDBContainer>
    );
}
export default LogIn;
