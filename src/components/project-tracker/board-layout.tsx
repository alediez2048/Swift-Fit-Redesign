"use client";

import { useMemo, useState, useEffect } from "react";
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
import { TaskEditModal } from "./task-edit-modal";

export function BoardLayout() {
    // Initialize state with empty array first to avoid hydration mismatch
    const [tasks, setTasks] = useState<ProjectTask[]>([]);
    const [activeTask, setActiveTask] = useState<ProjectTask | null>(null);
    const [editingTask, setEditingTask] = useState<ProjectTask | null>(null);
    const [mounted, setMounted] = useState(false);

    // Load tasks from localStorage or fall back to initialTasks on mount
    useEffect(() => {
        setMounted(true);
        const savedTasks = localStorage.getItem("swiftFitProjectTasks");
        if (savedTasks) {
            try {
                setTasks(JSON.parse(savedTasks));
            } catch (e) {
                console.error("Failed to parse tasks from localStorage", e);
                setTasks(initialTasks);
            }
        } else {
            setTasks(initialTasks);
        }
    }, []);

    // Save tasks to localStorage whenever they change
    useEffect(() => {
        if (mounted) {
            localStorage.setItem("swiftFitProjectTasks", JSON.stringify(tasks));
        }
    }, [tasks, mounted]);

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

        // Ensure tasks is an array before iterating
        if (Array.isArray(tasks)) {
            tasks.forEach((task) => {
                if (acc[task.columnId]) {
                    acc[task.columnId].push(task);
                }
            });
        }

        return acc;
    }, [tasks]);

    function handleAddTask(columnId: ColumnId, title: string) {
        const newTask: ProjectTask = {
            id: `task-${Date.now()}`,
            columnId,
            title,
            date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
        };
        setTasks((prev) => [...prev, newTask]);
    }

    function handleDeleteTask(id: string) {
        if (confirm("Are you sure you want to delete this ticket?")) {
            setTasks((prev) => prev.filter((task) => task.id !== id));
        }
    }

    function handleUpdateTask(updatedTask: ProjectTask) {
        setTasks((prev) => prev.map((t) => (t.id === updatedTask.id ? updatedTask : t)));
    }

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
                    return arrayMove(newTasks, activeIndex, 0);
                }
                return tasks;
            });
        }
    }

    function onDragEnd(event: DragEndEvent) {
        setActiveTask(null);
    }

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
                        onAddTask={handleAddTask}
                        onDeleteTask={handleDeleteTask}
                        onEditTask={setEditingTask}
                    />
                ))}
            </div>

            {createPortal(
                <DragOverlay>
                    {activeTask && (
                        <BoardCard
                            task={activeTask}
                            onDelete={() => { }}
                            onClick={() => { }}
                        />
                    )}
                </DragOverlay>,
                document.body
            )}

            {/* Edit Modal */}
            {editingTask && (
                <TaskEditModal
                    task={editingTask}
                    isOpen={!!editingTask}
                    onClose={() => setEditingTask(null)}
                    onSave={handleUpdateTask}
                />
            )}
        </DndContext>
    );
}
