import { create } from "zustand";

type Reference = {
  title: string;
  link: string;
};

export type Task = {
  content: React.ReactNode;
  title: string;
  references?: Reference[];
};

interface TaskState {
  openTasks: Task[];
  selectedTask: number | null;
  addOpenTask: (task: Task) => void;
  killOpenTask: (idx: number) => void;
  selectOpenTask: (idx: number) => void;
}

export const useTaskStore = create<TaskState>((set) => ({
  openTasks: [],
  selectedTask: null,
  addOpenTask: (task: Task) =>
    set((state) => {
      return {
        openTasks: [...state.openTasks, task],
        selectedTask: state.openTasks.length,
      };
    }),
  killOpenTask: (idx: number) =>
    set((state) => {
      let newSelectedTask = null;
      if (state.selectedTask && state.selectedTask > idx)
        newSelectedTask = state.selectedTask - 1;

      return {
        openTasks: [
          ...state.openTasks.slice(0, idx),
          ...state.openTasks.slice(idx + 1, state.openTasks.length),
        ],
        selectedTask: newSelectedTask,
      };
    }),
  selectOpenTask: (idx: number) =>
    set((state) => {
      if (idx >= state.openTasks.length) return {};
      return {
        selectedTask: idx,
      };
    }),
}));
