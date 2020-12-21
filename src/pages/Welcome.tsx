import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export function Welcome() {
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => void history.push('/sessions'), 3500);
  }, [history]);

  return (
    <div className="bg-primary-default opacity-60">
      <div className="container h-screen flex items-center justify-center">
        <h1 className="text-white font-bold text-4xl">Create Sessions</h1>
      </div>
    </div>
  );
}
