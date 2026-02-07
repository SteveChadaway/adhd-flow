import { Task } from '../types';

interface TaskBlockProps {
  task: Task;
  onClick: () => void;
}

const typeColors = {
  deep: 'bg-purple-600 border-purple-500',
  meeting: 'bg-amber-600 border-amber-500',
  light: 'bg-emerald-600 border-emerald-500',
  break: 'bg-slate-600 border-slate-500',
};

const emotionEmojis = ['😊', '🙂', '😐', '😟', '😰'];

export default function TaskBlock({ task, onClick }: TaskBlockProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left p-3 rounded-lg border-l-4 transition-all hover:scale-[1.02] ${
        typeColors[task.type]
      } ${task.completed ? 'opacity-50' : ''}`}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-sm font-medium text-white">{task.title}</span>
            <span className="text-xs">{emotionEmojis[task.emotion - 1]}</span>
          </div>
          <p className="text-xs text-slate-300">
            {task.startTime} - {task.endTime}
          </p>
        </div>
        {task.completed && (
          <span className="text-green-400 text-sm">✓</span>
        )}
      </div>
    </button>
  );
}
