import { useTaskStore } from "@/zustand/task-store";
import { Widget } from "./widget";

export function SwipingHeaderWidget({ id }: { id: string }) {
  const { addOpenTask } = useTaskStore();

  return (
    <Widget
      title="Swiping Header, Project"
      img="/well.jpg"
      alt="swiping header widget"
      action={() => {
        addOpenTask({
          title: "Swiping Header",
          content: (
            <iframe
              src="https://www.npmjs.com/package/swiping-header?activeTab=readme"
              className="w-full h-full"
            />
          ),
          references: [
            {
              title: "npm",
              link: "https://www.npmjs.com/package/swiping-header?activeTab=readme",
            },
            {
              title: "Github",
              link: "https://github.com/PrivFelixKniest/swiping-header",
            },
          ],
        });
      }}
      id={id}
    />
  );
}
