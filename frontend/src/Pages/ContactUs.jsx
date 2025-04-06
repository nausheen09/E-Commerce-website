import React from 'react';
import { MDBInput, MDBCheckbox, MDBBtn, MDBTextArea } from 'mdb-react-ui-kit';

export default function ContactUs() {
  return (
    <div style={{
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <form id='form' className='text-center p-4' style={{
        width: '100%',
        maxWidth: '350px',
        backgroundColor: '#EEEEEE',
        borderRadius: '15px',
        padding: '20px',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.14)',
        marginTop: "50px"
      }}>
        <h2 className='fw-bold' style={{ color: '#332d2d' }}>Contact Us</h2>

        <MDBInput label='Name' wrapperClass='mb-4' style={{ border: '2px solid orange', backgroundColor: 'transparent' }} />

        <MDBInput type='email' label='Email address' wrapperClass='mb-4' style={{ border: '2px solid orange', backgroundColor: 'transparent' }} />

        <MDBTextArea wrapperClass='mb-4' label='Message' style={{ border: '2px solid orange', backgroundColor: 'transparent' }} />

        <MDBCheckbox wrapperClass='d-flex justify-content-center' label='Send me a copy' style={{ color: '#332d2d' }} />

        <MDBBtn style={{ backgroundColor: 'black', color: 'white', width: '100%' }} className='my-4'>
          Send
        </MDBBtn>
      </form>
    </div>
  );
}