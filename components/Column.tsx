// components/Column.tsx
'use client';

import { ColumnType } from '../types';
import Card from './Card';
import { Droppable } from '@hello-pangea/dnd';

interface Props {
  column: ColumnType;
  index: number;
}

export default function Column({ column, index }: Props) {
  return (
    <div className="w-72 flex-shrink-0 bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg">
      <h2 className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-200">
        {column.title}
      </h2>
      <Droppable droppableId={column.id} type="CARD">
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="p-10 min-h-[500px] space-y-3 bg-indigo-300  border rounded-xl "
          >
            {column.cards.map((card, i) => (
              <Card key={card.id} card={card} index={i} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}
