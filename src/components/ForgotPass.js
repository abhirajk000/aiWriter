import React from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBIcon
}
    from 'mdb-react-ui-kit';
import './login.css'

import { FcGoogle } from "react-icons/fc";

function ForgotPass() {
    return (
        <>
            <div className='login2-container'>

                <MDBContainer fluid>

                    <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                        <MDBCol col='12'>

                            <MDBCard className='bg-dark text-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '400px' }}>
                                <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

                                    <h2 className="fw-bold mb-2 mb-5">Forgot Password?</h2>
                                
                                    <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Enter email or username' id='formControlLg' type='email' size="lg" className='text-white-50'/>
                                  <br/>
                                    <MDBBtn outline className='mx-2 px-5 btn-rounded mb-4 login-btn' color='white' size='lg'>
                                        Submit
                                    </MDBBtn>

                                    {/* <div>
                                        <p className="mb-0">Don't have an account? <a href="signup2" class="text-white-50 fw-bold">Sign Up</a></p>

                                    </div> */}
                                </MDBCardBody>
                            </MDBCard>

                        </MDBCol>
                    </MDBRow>

                </MDBContainer>
            </div>
        </>
    );
}

export default ForgotPass;