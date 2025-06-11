// components/Board.tsx
'use client';
import { useState } from 'react';
import { DragDropContext, DropResult } from '@hello-pangea/dnd';
import { ColumnType } from '../types';
import Column from './Column';

const initial: ColumnType[] = [
  {
    id: 'todo',
    title: 'To Do',
    cards: [
      { id: 'task-1', content: 'Tarea 1' },
      { id: 'task-2', content: 'Tarea 2' },
    ],
  },
  { id: 'in-progress', title: 'In Progress', cards: [] },
  { id: 'done', title: 'Done', cards: [] },
];

export default function Board() {
  const [columns, setColumns] = useState(initial);

  function onDragEnd(result: DropResult) {
    const { source, destination } = result;
    if (!destination) return;
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return;

    const srcIdx = columns.findIndex((c) => c.id === source.droppableId);
    const dstIdx = columns.findIndex((c) => c.id === destination.droppableId);
    const srcCol = columns[srcIdx];
    const dstCol = columns[dstIdx];

    // Extraer y mover la tarjeta
    const [moved] = srcCol.cards.splice(source.index, 1);
    dstCol.cards.splice(destination.index, 0, moved);

    // Actualizar estado
    const updated = [...columns];
    updated[srcIdx] = { ...srcCol };
    updated[dstIdx] = { ...dstCol };
    setColumns(updated);
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="flex gap-6 px-8 py-6 overflow-x-auto bg-gray-50 h-screen">
        {columns.map((col, i) => (
          <Column key={col.id} column={col} index={i} />
        ))}
      </div>
    </DragDropContext>
  );
}
