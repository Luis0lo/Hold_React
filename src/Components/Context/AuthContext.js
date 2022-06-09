import React, { useState, useContext, useEffect } from 'react';
import { auth } from '../../Firebase/firebase';

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  function signup(email, password) {
    //if you want to avoid firebase change the line below
    return auth.createUserWithEmailAndPassword(email, password);
  }
  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
        setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signup,
    login,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
