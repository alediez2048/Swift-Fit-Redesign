"use client";

import { SortableContext, useSortable } from "@dnd-kit/sortable";
import { useMemo, useState } from "react";
import { ProjectTask, ColumnId } from "@/lib/data/project-tasks";
import { BoardCard } from "./board-card";
import { Plus, X } from "@phosphor-icons/react";

interface BoardColumnProps {
    id: ColumnId;
    title: string;
    tasks: ProjectTask[];
    onAddTask: (columnId: ColumnId, title: string) => void;
    onDeleteTask: (id: string) => void;
    onEditTask: (task: ProjectTask) => void;
}

export function BoardColumn({ id, title, tasks, onAddTask, onDeleteTask, onEditTask }: BoardColumnProps) {
    const taskIds = useMemo(() => tasks.map((t) => t.id), [tasks]);
    const [isAdding, setIsAdding] = useState(false);
    const [newTaskTitle, setNewTaskTitle] = useState("");

    const { setNodeRef } = useSortable({
        id: id,
        data: {
            type: "Column",
            columnId: id,
        },
    });

    const handleAddTask = () => {
        if (!newTaskTitle.trim()) return;
        onAddTask(id, newTaskTitle);
        setNewTaskTitle("");
        setIsAdding(false);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            handleAddTask();
        } else if (e.key === "Escape") {
            setIsAdding(false);
        }
    };

    return (
        <div
            ref={setNodeRef}
            className="flex-shrink-0 w-[320px] flex flex-col max-h-full"
        >
            {/* Header */}
            <div className="flex items-center justify-between px-3 py-3">
                <h3 className="text-base font-bold text-gray-700">{title}</h3>
                <span className="text-xs text-gray-500 font-medium bg-gray-200 px-2 py-0.5 rounded-full">
                    {tasks.length}
                </span>
            </div>

            {/* Tasks Container */}
            <div className="flex-1 bg-gray-100/90 rounded-xl p-3 flex flex-col gap-3 overflow-y-auto min-h-[100px]">
                <SortableContext items={taskIds}>
                    {tasks.map((task) => (
                        <BoardCard
                            key={task.id}
                            task={task}
                            onDelete={onDeleteTask}
                            onClick={onEditTask}
                        />
                    ))}
                </SortableContext>

                {/* Add Task Input/Button */}
                {isAdding ? (
                    <div className="bg-white rounded-lg shadow-sm border border-teal p-2">
                        <textarea
                            autoFocus
                            placeholder="Enter a title for this card..."
                            className="w-full text-sm resize-none outline-none mb-2 placeholder:text-gray-400"
                            rows={3}
                            value={newTaskTitle}
                            onChange={(e) => setNewTaskTitle(e.target.value)}
                            onKeyDown={handleKeyDown}
                        />
                        <div className="flex items-center gap-2">
                            <button
                                onClick={handleAddTask}
                                className="bg-teal text-white text-xs font-semibold px-3 py-1.5 rounded hover:bg-teal/90"
                            >
                                Add Card
                            </button>
                            <button
                                onClick={() => setIsAdding(false)}
                                className="text-gray-500 hover:text-gray-700"
                            >
                                <X size={16} />
                            </button>
                        </div>
                    </div>
                ) : (
                    <button
                        onClick={() => setIsAdding(true)}
                        className="flex items-center gap-2 text-gray-500 hover:bg-gray-200 hover:text-gray-800 p-2 rounded-lg text-sm text-left transition-colors"
                    >
                        <Plus size={16} />
                        <span>Add a card</span>
                    </button>
                )}
            </div>
        </div>
    );
}
