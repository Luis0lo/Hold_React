import React from 'react';
import Signup from '../Components/Authentication/Signup';
import { Container } from 'react-bootstrap';
const SignupPage = () => {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: '80vh' }}
    >
      <div className="w-100" style={{ maxWidth: '400px' }}>
        <Signup />
      </div>
    </Container>
  );
};

export default SignupPage;
