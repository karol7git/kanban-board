// components/Card.tsx
'use client';

import { CardType } from '../types';
import { Draggable } from '@hello-pangea/dnd';

interface Props {
  card: CardType;
  index: number;
}

export default function Card({ card, index }: Props) {
  return (
    <Draggable draggableId={card.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="p-4 mb-2 bg-indigo-100 border border-indigo-200 rounded-xl shadow-md shadow cursor-grab hover:cursor-grabbing"
        >
          {card.content}
        </div>
      )}
    </Draggable>
  );
}
