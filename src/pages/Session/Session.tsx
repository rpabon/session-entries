import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { DropResult } from 'react-beautiful-dnd';
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
  const dispatch = useDispatch();
  const session = useSelector(getSession(params.id));
  const [name, setName] = useState(session?.name || '');
  const [intervals, setIntervals] = useState<Interval[]>(
    session?.intervals || []
  );

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
    <>
      <input value={name} onChange={(e) => setName(e.target.value)} />

      <Selectors
        onAdd={(newInterval) => void setIntervals([...intervals, newInterval])}
      />

      <hr />
      <List onDragEnd={onDragEnd}>
        {intervals.map((interval, i) => (
          <Item
            key={interval.id}
            index={i}
            interval={interval}
            onRemove={(id) => {
              setIntervals(intervals.filter((interval) => id !== interval.id));
            }}
          />
        ))}
      </List>

      <button
        disabled={!name || intervals.length === 0}
        onClick={() => {
          const id = params.id || String(+new Date());
          dispatch(addSession({ id, name, intervals }));
        }}
      >
        Save session
      </button>

      <Link to={'/sessions'}>Back</Link>
    </>
  );
}
