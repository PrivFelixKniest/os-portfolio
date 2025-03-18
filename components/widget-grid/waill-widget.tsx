import { useTaskStore } from "@/zustand/task-store";
import { Widget } from "./widget";

export function WaillWidget({ id }: { id: string }) {
  const { addOpenTask } = useTaskStore();

  return (
    <Widget
      title="Wail, Project"
      img="/well.jpg"
      alt="wail widget"
      action={() => {
        addOpenTask({
          title: "Waill",
          content: <iframe src="https://waill.net" className="w-full h-full" />,
          references: [
            { title: "Website", link: "https://waill.net" },
            {
              title: "Github",
              link: "https://github.com/PrivFelixKniest/waill",
            },
          ],
        });
      }}
      id={id}
    />
  );
}
