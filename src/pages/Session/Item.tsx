import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { FaEllipsisV, FaTrashAlt } from 'react-icons/fa';
import { Interval } from '../../types/Session';

export function Item(props: ItemProps) {
  const {
    index,
    onRemove,
    interval: { id, exercise, duration, restDuration },
  } = props;

  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <div
          className="flex items-center justify-between py-3 border-b"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div>
            <FaEllipsisV className="text-xs inline" />{' '}
            <strong>{exercise}</strong> ({duration}min)
            {restDuration && ` - Rest ${restDuration}min`}
          </div>

          <button onClick={() => void onRemove(id)}>
            <FaTrashAlt />
          </button>
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
