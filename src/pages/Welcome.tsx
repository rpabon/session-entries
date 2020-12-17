import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export function Welcome() {
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => void history.push('/sessions'), 2000);
  }, [history]);

  return <div>Welcome</div>;
}
