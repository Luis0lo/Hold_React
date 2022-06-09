import React from 'react';
import ForgotPassword from '../Components/Authentication/ForgotPassword';
import { Container } from 'react-bootstrap';
const ForgotPasswordPage = () => {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: '80vh' }}
    >
      <div className="w-100" style={{ maxWidth: '400px' }}>
        <ForgotPassword />
      </div>
    </Container>
  );
};

export default ForgotPasswordPage;
