export interface Task {
  id: string;
  title: string;
  startTime: string; // HH:mm format
  endTime: string; // HH:mm format
  type: 'deep' | 'meeting' | 'light' | 'break';
  emotion: 1 | 2 | 3 | 4 | 5; // 1=happy, 5=stressed
  completed: boolean;
  energyLevel: 'high' | 'medium' | 'low';
}

export interface Goal {
  id: string;
  title: string;
  progress: number; // 0-100
  color: string;
}
