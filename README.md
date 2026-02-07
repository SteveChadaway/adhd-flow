# ADHD Flow - Daily Management App

A visual timeline and task management app designed specifically for ADHD brains. Built with React, TypeScript, and Tailwind CSS.

## Features (MVP)

✅ **Visual Timeline** - See your entire day at a glance with color-coded task blocks  
✅ **Goal Tracking** - Track progress on 3 daily goals with visual progress bars  
✅ **Current Time Indicator** - Always know where you are in your day  
✅ **Task Types** - Deep work (purple), Meetings (amber), Light tasks (green), Breaks (gray)  
✅ **Emotion Ratings** - Track how you feel about each task (😊 to 😰)  
✅ **Quick Task Completion** - Click any task to mark complete  
✅ **Dark Mode** - Easy on the eyes, reduces overstimulation  

## Getting Started

### Prerequisites

- Node.js 18+ installed ([Download here](https://nodejs.org/))
- A code editor (VS Code recommended)

### Installation

1. **Navigate to the project folder:**
   ```bash
   cd code/adhd-flow
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open in your browser:**
   - The app will be running at `http://localhost:3000`
   - You should see the ADHD Flow dashboard with sample data

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Usage

### Main Dashboard

- **Goals Section** - Shows your 3 main goals with progress percentages
- **NOW Indicator** - Blue line shows current time in your schedule
- **Timeline** - Scrollable list of tasks from morning to evening
- **Task Blocks** - Color-coded by type:
  - 🟣 Purple = Deep work (high focus required)
  - 🟠 Amber = Meetings (collaborative)
  - 🟢 Green = Light tasks (admin, email)
  - ⚫ Gray = Breaks (rest, lunch)

### Interacting with Tasks

- **Click any task** to mark it complete (or uncomplete)
- **View details** in the modal popup
- **Green checkmark** appears on completed tasks

## Customization

### Adding Your Own Tasks

Edit `src/App.tsx` and modify the `sampleTasks` array:

```typescript
const sampleTasks: Task[] = [
  {
    id: '1',
    title: 'Your Task Name',
    startTime: '09:00',
    endTime: '10:00',
    type: 'deep', // deep | meeting | light | break
    emotion: 3, // 1-5 (1=happy, 5=stressed)
    completed: false,
    energyLevel: 'high', // high | medium | low
  },
  // Add more tasks...
];
```

### Changing Goals

Edit the `sampleGoals` array in `src/App.tsx`:

```typescript
const sampleGoals: Goal[] = [
  { 
    id: '1', 
    title: 'Your Goal', 
    progress: 50, // 0-100
    color: '#8b5cf6' // Hex color
  },
  // Add more goals...
];
```

### Styling

- Colors defined in `tailwind.config.js`
- Main styles in `src/index.css`
- Component-specific styles use Tailwind classes

## Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Fast build tool
- **Tailwind CSS** - Utility-first styling
- **date-fns** - Date formatting

## Project Structure

```
adhd-flow/
├── src/
│   ├── components/
│   │   ├── Header.tsx        # Top greeting and date
│   │   ├── GoalCard.tsx      # Individual goal progress
│   │   └── TaskBlock.tsx     # Individual task in timeline
│   ├── App.tsx               # Main application
│   ├── types.ts              # TypeScript interfaces
│   ├── main.tsx              # App entry point
│   └── index.css             # Global styles
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## Next Steps (Phase 2)

- [ ] Real-time clock updates
- [ ] Add/edit/delete tasks in UI
- [ ] Morning planning screen
- [ ] Focus mode with Pomodoro timer
- [ ] Energy tracking over time
- [ ] Google Calendar integration
- [ ] Local storage persistence
- [ ] Mobile PWA (install on phone)

## Troubleshooting

**Port already in use:**
```bash
# Kill process on port 3000
npx kill-port 3000
# Or change port in vite.config.ts
```

**Dependencies not installing:**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Build errors:**
```bash
# Check Node version (need 18+)
node --version
# Update if needed
```

## License

MIT - Use this however you want!

## Created By

Built with Nebula AI for ADHD entrepreneurs who need visual structure and external accountability.

---

**Feedback?** Open an issue or reach out at steve@freelancemvc.net
