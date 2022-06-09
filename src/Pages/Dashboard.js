import React, { useState } from 'react';
import { Card, Button, Alert, Container } from 'react-bootstrap';
import { useAuth } from '../Components/Context/AuthContext';

const Dashboard = () => {
  const [error, setError] = useState('');
  const { currentUser } = useAuth();

  const handleLogout = () => {};

  return (
    <Container
      className="d-flex flex-column align-items-center justify-content-center"
      style={{ minHeight: '80vh' }}
    >
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email: </strong>
          {currentUser.email}
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2" style={{ maxWidth: '400px' }}>
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
      </div>
    </Container>
  );
};

export default Dashboard;
