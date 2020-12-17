import React, { ReactNode } from 'react';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';

export function List(props: ListProps) {
  return (
    <DragDropContext onDragEnd={props.onDragEnd}>
      <Droppable droppableId="list">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {props.children}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

interface ListProps {
  children: ReactNode;
  onDragEnd(result: DropResult): void;
}
