"use client";

import { FormEvent, useState } from "react";

interface Reminder {
  id: number;
  text: string;
  isEditing: boolean;
}

export default function AdminReminderPage() {
  const [reminders, setReminders] = useState<Reminder[]>([
    {
      id: 1,
      text: "📖 Read Surah Mulk before sleeping",
      isEditing: false,
    },
    {
      id: 2,
      text: "🕌 Pray all Salat in congregation",
      isEditing: false,
    },
    {
      id: 3,
      text: "📘 Read Surah Kahf on Friday",
      isEditing: false,
    },
    {
      id: 4,
      text: "🤲 Make morning and evening adhkar",
      isEditing: false,
    },
  ]);

  const [newReminder, setNewReminder] = useState("");
  const [editingText, setEditingText] = useState<{ [key: number]: string }>({});

  const handleAddReminder = (e: FormEvent) => {
    e.preventDefault();
    if (!newReminder.trim()) return;

    const reminder: Reminder = {
      id: Math.max(0, ...reminders.map((r) => r.id)) + 1,
      text: newReminder,
      isEditing: false,
    };

    setReminders([...reminders, reminder]);
    setNewReminder("");
    console.log("Added new reminder:", reminder);
  };

  const handleDeleteReminder = (id: number) => {
    setReminders(reminders.filter((r) => r.id !== id));
    console.log("Deleted reminder:", id);
  };

  const startEditing = (reminder: Reminder) => {
    setEditingText({ ...editingText, [reminder.id]: reminder.text });
    setReminders(
      reminders.map((r) =>
        r.id === reminder.id ? { ...r, isEditing: true } : r
      )
    );
  };

  const saveEdit = (id: number) => {
    setReminders(
      reminders.map((r) =>
        r.id === id ? { ...r, text: editingText[id], isEditing: false } : r
      )
    );
    console.log("Updated reminder:", id, editingText[id]);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Edit Daily Reminders
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Manage Islamic daily reminders for the community
          </p>
        </div>

        {/* Reminders List */}
        <div className="space-y-4 mb-8">
          {reminders.map((reminder) => (
            <div
              key={reminder.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 flex flex-col sm:flex-row items-start sm:items-center gap-4"
            >
              {reminder.isEditing ? (
                <input
                  type="text"
                  value={editingText[reminder.id]}
                  onChange={(e) =>
                    setEditingText({
                      ...editingText,
                      [reminder.id]: e.target.value,
                    })
                  }
                  className="flex-1 px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              ) : (
                <p className="flex-1 text-gray-900 dark:text-white">
                  {reminder.text}
                </p>
              )}

              <div className="flex gap-2 w-full sm:w-auto">
                {reminder.isEditing ? (
                  <button
                    onClick={() => saveEdit(reminder.id)}
                    className="flex-1 sm:flex-none px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-200"
                  >
                    Save
                  </button>
                ) : (
                  <button
                    onClick={() => startEditing(reminder)}
                    className="flex-1 sm:flex-none px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
                  >
                    Edit
                  </button>
                )}
                <button
                  onClick={() => handleDeleteReminder(reminder.id)}
                  className="flex-1 sm:flex-none px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors duration-200"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Add New Reminder Form */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Add New Reminder
          </h2>
          <form
            onSubmit={handleAddReminder}
            className="flex flex-col sm:flex-row gap-4"
          >
            <input
              type="text"
              value={newReminder}
              onChange={(e) => setNewReminder(e.target.value)}
              placeholder="Enter new reminder text..."
              className="flex-1 px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
            >
              <span>Add Reminder</span>
              <span>➕</span>
            </button>
          </form>
        </div>

        {/* Tips */}
        <div className="mt-8 bg-blue-50 dark:bg-blue-900/30 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Tips for Writing Reminders
          </h3>
          <ul className="list-disc list-inside space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <li>Keep reminders concise and clear</li>
            <li>Include relevant emojis for better visibility</li>
            <li>Focus on daily Islamic practices</li>
            <li>Use respectful and encouraging language</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
