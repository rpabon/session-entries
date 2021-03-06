import React, { ReactNode } from 'react';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';

export function List(props: ListProps) {
  return (
    <DragDropContext onDragEnd={props.onDragEnd}>
      <Droppable droppableId="list">
        {(provided) => (
          <div
            className="pt-4"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {props.children}
            {provided.placeholder}
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
