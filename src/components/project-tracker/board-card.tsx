"use client";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { ProjectTask } from "@/lib/data/project-tasks";
import Image from "next/image";
import { Paperclip, CalendarBlank, Link as LinkIcon } from "@phosphor-icons/react";

interface BoardCardProps {
    task: ProjectTask;
}

export function BoardCard({ task }: BoardCardProps) {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging,
    } = useSortable({
        id: task.id,
        data: {
            type: "Task",
            task,
        },
    });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    if (isDragging) {
        return (
            <div
                ref={setNodeRef}
                style={style}
                className="bg-white rounded-lg shadow-xl opacity-50 h-[100px] border-2 border-teal rotate-2 cursor-grabbing"
            />
        );
    }

    return (
        <div
            ref={setNodeRef}
            style={style}
            {...attributes}
            {...listeners}
            className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow group cursor-grab active:cursor-grabbing overflow-hidden"
        >
            {/* Cover Image */}
            {task.coverImage && (
                <div className="relative h-32 w-full">
                    <Image
                        src={task.coverImage}
                        alt={task.title}
                        fill
                        className="object-cover"
                    />
                </div>
            )}

            <div className="p-3">
                {/* Labels */}
                {task.labels && task.labels.length > 0 && (
                    <div className="flex flex-wrap gap-1 mb-2">
                        {task.labels.map((label, index) => (
                            <span
                                key={index}
                                className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${label.color}`}
                            >
                                {label.text}
                            </span>
                        ))}
                    </div>
                )}

                {/* Title */}
                <h4 className="text-sm font-medium text-gray-800 mb-1 leading-snug">
                    {task.title}
                </h4>

                {/* Description Preview (optional) */}
                {/* {task.description && (
                     <p className="text-xs text-gray-500 line-clamp-2 mb-2">{task.description}</p>
                 )} */}


                {/* Links */}
                {task.links && task.links.length > 0 && (
                    <div className="flex flex-col gap-1 mt-2">
                        {task.links.map((link, i) => (
                            <a
                                key={i}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1.5 text-xs text-teal hover:underline bg-teal/5 px-2 py-1 rounded w-fit"
                                onPointerDown={(e) => e.stopPropagation()} // Prevent drag start when clicking link
                            >
                                <LinkIcon size={12} weight="bold" />
                                {link.label}
                            </a>
                        ))}
                    </div>
                )}

                {/* Footer */}
                <div className="flex items-center justify-between mt-3 text-gray-400">
                    <div className="flex items-center gap-3">
                        {task.description && <Paperclip size={14} />}
                        {task.date && (
                            <div className="flex items-center gap-1 text-[10px]">
                                <CalendarBlank size={12} />
                                <span>{task.date}</span>
                            </div>
                        )}
                    </div>

                    {task.members && (
                        <div className="flex -space-x-1">
                            {task.members.map((m, i) => (
                                <div key={i} className="w-5 h-5 rounded-full bg-gray-200 border border-white flex items-center justify-center text-[8px] font-bold text-gray-600">
                                    {m}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
