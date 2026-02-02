"use client";

import { useMemo, useState } from "react";
import { createPortal } from "react-dom";
import {
    DndContext,
    DragOverlay,
    DragStartEvent,
    DragEndEvent,
    DragOverEvent,
    useSensor,
    useSensors,
    PointerSensor,
    TouchSensor,
    closestCorners,
} from "@dnd-kit/core";
import { sortableKeyboardCoordinates, arrayMove } from "@dnd-kit/sortable";

import { ProjectTask, ColumnId, columns as initialColumns, initialTasks } from "@/lib/data/project-tasks";
import { BoardColumn } from "./board-column";
import { BoardCard } from "./board-card";

export function BoardLayout() {
    const [tasks, setTasks] = useState<ProjectTask[]>(initialTasks);
    const [activeTask, setActiveTask] = useState<ProjectTask | null>(null);

    const columns = initialColumns;

    const sensorOptions = { activationConstraint: { distance: 5 } };
    const sensors = useSensors(
        useSensor(PointerSensor, sensorOptions),
        useSensor(TouchSensor, sensorOptions)
    );

    const tasksByColumn = useMemo(() => {
        const acc: Record<ColumnId, ProjectTask[]> = {
            todo: [],
            inprogress: [],
            blocked: [],
            done: [],
            resources: []
        };

        tasks.forEach((task) => {
            acc[task.columnId].push(task);
        });

        return acc;
    }, [tasks]);

    function onDragStart(event: DragStartEvent) {
        if (event.active.data.current?.type === "Task") {
            setActiveTask(event.active.data.current.task);
        }
    }

    function onDragOver(event: DragOverEvent) {
        const { active, over } = event;
        if (!over) return;

        const activeId = active.id;
        const overId = over.id;

        if (activeId === overId) return;

        const isActiveTask = active.data.current?.type === "Task";
        const isOverTask = over.data.current?.type === "Task";
        const isOverColumn = over.data.current?.type === "Column";

        if (!isActiveTask) return;

        // Dragging task over another task
        if (isActiveTask && isOverTask) {
            setTasks((tasks) => {
                const activeIndex = tasks.findIndex((t) => t.id === activeId);
                const overIndex = tasks.findIndex((t) => t.id === overId);

                if (tasks[activeIndex].columnId !== tasks[overIndex].columnId) {
                    const newTasks = [...tasks];
                    newTasks[activeIndex] = {
                        ...newTasks[activeIndex],
                        columnId: tasks[overIndex].columnId
                    };
                    return arrayMove(newTasks, activeIndex, overIndex);
                }

                return arrayMove(tasks, activeIndex, overIndex);
            });
        }

        // Dragging task over a column
        if (isActiveTask && isOverColumn) {
            setTasks((tasks) => {
                const activeIndex = tasks.findIndex((t) => t.id === activeId);
                const overColumnId = over.id as ColumnId;

                if (tasks[activeIndex].columnId !== overColumnId) {
                    const newTasks = [...tasks];
                    newTasks[activeIndex] = {
                        ...newTasks[activeIndex],
                        columnId: overColumnId
                    };
                    return arrayMove(newTasks, activeIndex, 0); // Move to top of new column? Or maintain index? simple append is easier.
                }
                return tasks;
            });
        }
    }

    function onDragEnd(event: DragEndEvent) {
        setActiveTask(null);
    }

    // Client-side only rendering for portal
    const [mounted, setMounted] = useState(false);
    useMemo(() => setMounted(true), []);

    if (!mounted) return null;

    return (
        <DndContext
            sensors={sensors}
            collisionDetection={closestCorners}
            onDragStart={onDragStart}
            onDragOver={onDragOver}
            onDragEnd={onDragEnd}
        >
            <div className="flex h-full overflow-x-auto gap-4 p-6 items-start">
                {columns.map((col) => (
                    <BoardColumn
                        key={col.id}
                        id={col.id}
                        title={col.title}
                        tasks={tasksByColumn[col.id]}
                    />
                ))}
            </div>

            {createPortal(
                <DragOverlay>
                    {activeTask && <BoardCard task={activeTask} />}
                </DragOverlay>,
                document.body
            )}
        </DndContext>
    );
}
