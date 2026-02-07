import { Goal } from '../types';

interface GoalCardProps {
  goal: Goal;
}

export default function GoalCard({ goal }: GoalCardProps) {
  return (
    <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-medium text-white">{goal.title}</h3>
        <span className="text-xs font-semibold text-slate-400">{goal.progress}%</span>
      </div>
      <div className="w-full bg-slate-700 rounded-full h-2">
        <div
          className="h-2 rounded-full transition-all duration-300"
          style={{
            width: `${goal.progress}%`,
            backgroundColor: goal.color,
          }}
        />
      </div>
    </div>
  );
}
