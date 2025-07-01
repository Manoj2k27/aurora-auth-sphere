
import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import Auth from '../components/Auth';
import Dashboard from '../components/Dashboard';

const Index = () => {
  const { user } = useAuth();

  return (
    <>
      {user ? <Dashboard /> : <Auth />}
    </>
  );
};

export default Index;
