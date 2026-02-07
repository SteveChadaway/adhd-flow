import { format } from 'date-fns';

interface HeaderProps {
  name: string;
}

export default function Header({ name }: HeaderProps) {
  const now = new Date();
  const greeting = now.getHours() < 12 ? 'Good Morning' : now.getHours() < 18 ? 'Good Afternoon' : 'Good Evening';
  const dateStr = format(now, 'EEEE, MMMM d');

  return (
    <div className="bg-slate-800 border-b border-slate-700 px-4 py-6">
      <h1 className="text-2xl font-bold text-white mb-1">
        {greeting}, {name}
      </h1>
      <p className="text-slate-400 text-sm">{dateStr}</p>
    </div>
  );
}
