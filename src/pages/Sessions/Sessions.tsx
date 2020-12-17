import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';
import { selectSessions } from '../../app/sessionsSlice';

export function Sessions() {
  const sessions = useSelector(selectSessions);

  return (
    <div className="min-h-screen">
      <div className="container py-8">
        <h1 className="text-3xl text-center py-5">
          Session <span className="text-gray-500">List</span>
        </h1>

        {sessions.length === 0 && <p>No sessions saved</p>}

        {sessions.length > 0 && (
          <ul className="border-t text-lg">
            {sessions.map(({ id, name }) => (
              <li key={id}>
                <Link
                  className="flex items-center justify-between w-full border-b py-3"
                  to={`/session/${id}`}
                >
                  {name} <FaChevronRight className="text-base" />
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>

      <Link to={'/session'} className="w-full fixed bottom-0">
        <button className="w-full px-8 py-4 bg-blue-500 text-white">
          Add New Session
        </button>
      </Link>
    </div>
  );
}
