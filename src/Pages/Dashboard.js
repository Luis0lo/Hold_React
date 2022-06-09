import React, { useState } from 'react';
import { Card, Button, Alert, Container } from 'react-bootstrap';
import { useAuth } from '../Components/Context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [error, setError] = useState('');
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    setError('');
    try {
      await logout();
      navigate('/');
    } catch {
      setError('Failed to log out');
    }
  };

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
          { currentUser.email}
          <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
            Update Profile
          </Link>
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
