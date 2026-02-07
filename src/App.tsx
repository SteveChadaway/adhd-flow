import { useState } from 'react';
import { format } from 'date-fns';
import Header from './components/Header';
import GoalCard from './components/GoalCard';
import TaskBlock from './components/TaskBlock';
import { Task, Goal } from './types';

// Sample data
const sampleGoals: Goal[] = [
  { id: '1', title: 'Launch MVP', progress: 40, color: '#8b5cf6' },
  { id: '2', title: 'Client Onboarding', progress: 65, color: '#10b981' },
  { id: '3', title: 'Learn TypeScript', progress: 20, color: '#f59e0b' },
];

const sampleTasks: Task[] = [
  {
    id: '1',
    title: 'Morning Planning',
    startTime: '09:00',
    endTime: '09:30',
    type: 'light',
    emotion: 2,
    completed: true,
    energyLevel: 'high',
  },
  {
    id: '2',
    title: 'Deep Work: Build Dashboard',
    startTime: '09:30',
    endTime: '11:30',
    type: 'deep',
    emotion: 3,
    completed: false,
    energyLevel: 'high',
  },
  {
    id: '3',
    title: 'Client Meeting',
    startTime: '11:30',
    endTime: '12:30',
    type: 'meeting',
    emotion: 2,
    completed: false,
    energyLevel: 'medium',
  },
  {
    id: '4',
    title: 'Lunch Break',
    startTime: '12:30',
    endTime: '13:30',
    type: 'break',
    emotion: 1,
    completed: false,
    energyLevel: 'low',
  },
  {
    id: '5',
    title: 'Email & Admin',
    startTime: '13:30',
    endTime: '14:30',
    type: 'light',
    emotion: 3,
    completed: false,
    energyLevel: 'medium',
  },
  {
    id: '6',
    title: 'Focus: Write Documentation',
    startTime: '14:30',
    endTime: '16:00',
    type: 'deep',
    emotion: 4,
    completed: false,
    energyLevel: 'medium',
  },
  {
    id: '7',
    title: 'Team Sync',
    startTime: '16:00',
    endTime: '16:30',
    type: 'meeting',
    emotion: 2,
    completed: false,
    energyLevel: 'low',
  },
  {
    id: '8',
    title: 'Wrap Up & Planning',
    startTime: '16:30',
    endTime: '17:00',
    type: 'light',
    emotion: 2,
    completed: false,
    energyLevel: 'low',
  },
];

function App() {
  const [tasks, setTasks] = useState<Task[]>(sampleTasks);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  const toggleTaskComplete = (taskId: string) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const handleTaskClick = (task: Task) => {
    setSelectedTask(task);
    toggleTaskComplete(task.id);
  };

  const currentTime = format(new Date(), 'HH:mm');

  return (
    <div className="min-h-screen bg-slate-900">
      <Header name="Steve" />
      
      <div className="max-w-2xl mx-auto px-4 py-6">
        {/* Goals Section */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold text-white mb-4">Today's Goals</h2>
          <div className="grid grid-cols-1 gap-3">
            {sampleGoals.map(goal => (
              <GoalCard key={goal.id} goal={goal} />
            ))}
          </div>
        </section>

        {/* Current Time Indicator */}
        <div className="flex items-center gap-3 mb-4">
          <div className="flex-1 h-px bg-primary"></div>
          <div className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
            NOW {currentTime}
          </div>
          <div className="flex-1 h-px bg-primary"></div>
        </div>

        {/* Timeline Section */}
        <section>
          <h2 className="text-lg font-semibold text-white mb-4">Your Timeline</h2>
          <div className="space-y-3">
            {tasks.map(task => (
              <TaskBlock 
                key={task.id} 
                task={task} 
                onClick={() => handleTaskClick(task)}
              />
            ))}
          </div>
        </section>

        {/* Task Detail Modal (Simple version) */}
        {selectedTask && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-slate-800 rounded-lg p-6 max-w-md w-full">
              <h3 className="text-xl font-bold text-white mb-4">{selectedTask.title}</h3>
              <div className="space-y-3 text-sm text-slate-300">
                <p><strong>Time:</strong> {selectedTask.startTime} - {selectedTask.endTime}</p>
                <p><strong>Type:</strong> {selectedTask.type}</p>
                <p><strong>Energy Level:</strong> {selectedTask.energyLevel}</p>
                <p><strong>Status:</strong> {selectedTask.completed ? 'Completed ✓' : 'Pending'}</p>
              </div>
              <button
                onClick={() => setSelectedTask(null)}
                className="mt-6 w-full bg-primary text-white py-2 rounded-lg font-medium hover:bg-primary/90"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
