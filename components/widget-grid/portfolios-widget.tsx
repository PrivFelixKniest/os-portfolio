import { useTaskStore } from "@/zustand/task-store";
import { Widget } from "./widget";

export function PortfoliOSWidget({ id }: { id: string }) {
  const { addOpenTask } = useTaskStore();

  return (
    <Widget
      title="PortfoliOS"
      img="/os-black.webp"
      alt="portfoli os widget app"
      action={() => {
        addOpenTask({
          title: "PortfoliOS",
          content: (
            <iframe src="https://felixkniest.com" className="w-full h-full" />
          ),
          references: [
            {
              title: "Website",
              link: "https://felixkniest.com",
            },
            {
              title: "Github",
              link: "https://github.com/PrivFelixKniest/os-portfolio",
            },
          ],
        });
      }}
      id={id}
    />
  );
}
