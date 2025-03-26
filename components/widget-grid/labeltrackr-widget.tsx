import { useTaskStore } from "@/zustand/task-store";
import { Widget } from "./widget";

export function LabeltrackrWidget({ id }: { id: string }) {
  const { addOpenTask } = useTaskStore();

  return (
    <Widget
      title="labeltrackr, my SaaS App"
      img="/labeltrackrbubble.webp"
      alt="labeltrackr widget app"
      action={() => {
        addOpenTask({
          title: "labeltrackr.",
          content: (
            <iframe src="https://labeltrackr.com" className="w-full h-full" />
          ),
          references: [
            {
              title: "Website",
              link: "https://labeltrackr.com",
            },
          ],
        });
      }}
      id={id}
    />
  );
}
