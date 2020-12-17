import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Interval } from '../../types/Session';
import { List } from './List';
import { Item } from './Item';
import { Selectors } from './Selectors';
import { DropResult } from 'react-beautiful-dnd';

export function Session() {
  const params = useParams<{ id?: string }>();
  const [name, setName] = useState('');
  const [intervals, setIntervals] = useState<Interval[]>([]);

  function onDragEnd({ source, destination }: DropResult) {
    if (!destination || destination.index === source.index) {
      return;
    }

    const removed = intervals.splice(source.index, 1);
    intervals.splice(destination.index, 0, ...removed);
    setIntervals([...intervals]);
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
    </>
  );
}
