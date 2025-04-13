import { useTaskStore } from "@/zustand/task-store";
import { OSButton } from "./os-button";

export function TaskBar() {
  const { openTasks, selectOpenTask, selectedTask } = useTaskStore();

  return (
    <section className="fixed bottom-0 w-full h-10 bg-black/30 backdrop-blur-lg flex items-center gap-2">
      <OSButton />
      <div className="flex h-full items-center overflow-y-auto grow">
        {openTasks.map((task, idx) => {
          return (
            <button
              className="h-full flex items-center px-2 hover:bg-white/5 transition-all cursor-pointer text-nowrap"
              style={{
                backgroundColor:
                  idx === selectedTask
                    ? "color-mix(in oklab, var(--color-white) /* #fff = #ffffff */ 10%, transparent)"
                    : "",
              }}
              key={idx}
              onClick={() => {
                selectOpenTask(idx);
              }}
            >
              {task.title}
            </button>
          );
        })}
      </div>
    </section>
  );
}
