"use client";

import { useState, useEffect } from "react";
import { ProjectTask } from "@/lib/data/project-tasks";
import { X, Image as ImageIcon, Link as LinkIcon, FloppyDisk } from "@phosphor-icons/react";

interface TaskEditModalProps {
    task: ProjectTask;
    isOpen: boolean;
    onClose: () => void;
    onSave: (updatedTask: ProjectTask) => void;
}

export function TaskEditModal({ task, isOpen, onClose, onSave }: TaskEditModalProps) {
    const [title, setTitle] = useState(task.title);
    const [description, setDescription] = useState(task.description || "");
    const [coverImage, setCoverImage] = useState(task.coverImage || "");
    // Keeping it simple for now, focusing on Image and basic details

    // Reset state when task changes
    useEffect(() => {
        setTitle(task.title);
        setDescription(task.description || "");
        setCoverImage(task.coverImage || "");
    }, [task]);

    if (!isOpen) return null;

    const handleSave = () => {
        onSave({
            ...task,
            title,
            description,
            coverImage
        });
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                {/* Header */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
                    <h3 className="font-semibold text-gray-800">Edit Ticket</h3>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600 rounded-full p-1 hover:bg-gray-100">
                        <X size={20} />
                    </button>
                </div>

                {/* Content */}
                <div className="p-4 space-y-4">

                    {/* Title */}
                    <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Title</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal transition-all font-medium"
                        />
                    </div>

                    {/* Cover Image URL */}
                    <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1 flex items-center gap-1">
                            <ImageIcon size={14} />
                            Cover Image URL
                        </label>
                        <input
                            type="text"
                            value={coverImage}
                            placeholder="https://..."
                            onChange={(e) => setCoverImage(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal transition-all text-gray-600"
                        />
                        {coverImage && (
                            <div className="mt-2 relative h-32 w-full rounded-lg overflow-hidden border border-gray-200">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={coverImage}
                                    alt="Preview"
                                    className="w-full h-full object-cover"
                                    onError={(e) => (e.currentTarget.style.display = 'none')}
                                />
                            </div>
                        )}
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Description</label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            rows={4}
                            className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal transition-all resize-none text-gray-600"
                        />
                    </div>

                </div>

                {/* Footer */}
                <div className="bg-gray-50 px-4 py-3 border-t border-gray-100 flex justify-end gap-2">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSave}
                        className="px-4 py-2 text-sm font-bold text-white bg-teal hover:bg-teal/90 rounded-lg shadow-sm transition-all flex items-center gap-2"
                    >
                        <FloppyDisk size={18} />
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    );
}
