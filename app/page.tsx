'use client';

import Board from '@/components/Board';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <h1 className="text-2xl font-bold text-center my-4">Kanban Board</h1>
      <Board />
    </div>
  );
}
