import React, { useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { DropResult } from 'react-beautiful-dnd';
import { FaBan, FaChevronLeft } from 'react-icons/fa';
import { RootState } from '../../app/store';
import { Interval } from '../../types/Session';
import { addSession } from '../../app/sessionsSlice';
import { List } from './List';
import { Item } from './Item';
import { Selectors } from './Selectors';

const getSession = (id?: string) => (state: RootState) =>
  state.sessions.find((session) => session.id === id);

export function Session() {
  const params = useParams<{ id?: string }>();
  const history = useHistory();
  const dispatch = useDispatch();
  const session = useSelector(getSession(params.id));
  const [name, setName] = useState(session?.name || '');
  const [intervals, setIntervals] = useState<Interval[]>(
    session?.intervals || []
  );
  const disabled = !name || intervals.length === 0;

  function onDragEnd({ source, destination }: DropResult) {
    if (!destination || destination.index === source.index) {
      return;
    }

    const newIntervals = [...intervals];
    const removed = newIntervals.splice(source.index, 1);
    newIntervals.splice(destination.index, 0, ...removed);
    setIntervals(newIntervals);
  }

  return (
    <div className="min-h-screen">
      <div className="container py-8">
        <div className="flex items-center mb-6">
          <Link to={'/sessions'} className="text-2xl pr-5">
            <FaChevronLeft />
          </Link>

          <input
            className="w-full py-2 border-b border-gray-300 font-bold text-lg"
            placeholder="Add a Session Name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <Selectors
          onAdd={(newInterval) => {
            setIntervals([...intervals, newInterval]);
          }}
        />

        <List onDragEnd={onDragEnd}>
          {intervals.map((interval, i) => (
            <Item
              key={interval.id}
              index={i}
              interval={interval}
              onRemove={(id) => {
                setIntervals(
                  intervals.filter((interval) => id !== interval.id)
                );
              }}
            />
          ))}
        </List>
      </div>

      <button
        className="fixed bottom-0 w-full px-8 py-4 bg-blue-500 text-white disabled:opacity-50"
        disabled={disabled}
        onClick={() => {
          const id = params.id || String(+new Date());
          dispatch(addSession({ id, name, intervals }));
          history.goBack();
        }}
      >
        {disabled && <FaBan className="inline-block mr-2" />}
        {disabled ? 'Add Name / Routines' : 'Save Session'}
      </button>
    </div>
  );
}
