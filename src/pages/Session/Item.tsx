import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { Interval } from '../../types/Session';

export function Item(props: ItemProps) {
  const { index, interval, onRemove } = props;

  return (
    <Draggable draggableId={interval.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {interval.exercise}, {interval.duration}min, rest:{' '}
          {interval.restDuration}
          <button onClick={() => void onRemove(interval.id)}>remove</button>
        </div>
      )}
    </Draggable>
  );
}

interface ItemProps {
  index: number;
  interval: Interval;
  onRemove(id: string): void;
}
