import React from 'react';
import Login from '../Components/Authentication/Login';
import { Container } from 'react-bootstrap';
const LoginPage = () => {
    return (
        <Container
          className="d-flex align-items-center justify-content-center"
          style={{ minHeight: '80vh' }}
        >
          <div className="w-100" style={{ maxWidth: '400px' }}>
            <Login />
          </div>
        </Container>
      );
};

export default LoginPage;
