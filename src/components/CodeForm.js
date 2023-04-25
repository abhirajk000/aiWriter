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

function CodeForm() {
    return (
        <>
            <div className='login2-container'>

                <MDBContainer fluid>

                    <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                        <MDBCol col='12'>

                            <MDBCard className='bg-dark text-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '400px' }}>
                                <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

                                    <h2 className="fw-bold mb-2 mb-5 text-center">Enter 6-digit Code</h2>
                                
                                    <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Enter code' id='formControlLg' type='number' size="lg" className='text-white-50'/>
                                  <br/>
                                    <MDBBtn outline className='mx-2 px-5 btn-rounded mb-4 submit-btn' color='white' size='lg'>
                                        Submit
                                    </MDBBtn>
                                </MDBCardBody>
                            </MDBCard>

                        </MDBCol>
                    </MDBRow>

                </MDBContainer>
            </div>
        </>
    );
}

export default CodeForm;