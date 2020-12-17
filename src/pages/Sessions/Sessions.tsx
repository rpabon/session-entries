import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectSessions } from '../../app/sessionsSlice';

export function Sessions() {
  const sessions = useSelector(selectSessions);

  return (
    <>
      <Link to={'/session'}>Add Session</Link>
      <hr />
      <ul>
        {sessions.map(({ id, name }) => (
          <li key={id}>
            <Link to={`/session/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
