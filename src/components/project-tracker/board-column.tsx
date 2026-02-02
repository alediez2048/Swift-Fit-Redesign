"use client";

import { SortableContext, useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useMemo } from "react";
import { ProjectTask, ColumnId } from "@/lib/data/project-tasks";
import { BoardCard } from "./board-card";

interface BoardColumnProps {
    id: ColumnId;
    title: string;
    tasks: ProjectTask[];
}

export function BoardColumn({ id, title, tasks }: BoardColumnProps) {
    const taskIds = useMemo(() => tasks.map((t) => t.id), [tasks]);

    const { setNodeRef } = useSortable({
        id: id,
        data: {
            type: "Column",
            columnId: id,
        },
    });

    return (
        <div
            ref={setNodeRef}
            className="flex-shrink-0 w-[272px] flex flex-col max-h-full"
        >
            {/* Header */}
            <div className="flex items-center justify-between px-3 py-2">
                <h3 className="text-sm font-semibold text-gray-700">{title}</h3>
                <span className="text-xs text-gray-500 font-medium bg-gray-200 px-2 py-0.5 rounded-full">
                    {tasks.length}
                </span>
            </div>

            {/* Tasks Container */}
            <div className="flex-1 bg-gray-100/80 rounded-xl p-2 flex flex-col gap-2 overflow-y-auto min-h-[100px]">
                <SortableContext items={taskIds}>
                    {tasks.map((task) => (
                        <BoardCard key={task.id} task={task} />
                    ))}
                </SortableContext>
            </div>
        </div>
    );
}
