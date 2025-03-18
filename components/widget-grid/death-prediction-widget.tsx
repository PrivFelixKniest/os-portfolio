import { useTaskStore } from "@/zustand/task-store";
import { Widget } from "./widget";

export function DeathPredictionWidget({ id }: { id: string }) {
  const { addOpenTask } = useTaskStore();

  return (
    <Widget
      title="Covid Death Prediction, Project"
      img="/well.jpg"
      alt="wail widget"
      action={() => {
        addOpenTask({
          title: "Covid Death Prediction",
          content: (
            <iframe
              src="https://github.com/PrivFelixKniest/covid-death-prediction/tree/master"
              className="w-full h-full"
            />
          ),
          references: [
            {
              title: "Kaggle",
              link: "https://www.kaggle.com/competitions/Covid19-Death-Predictions/overview",
            },
            {
              title: "Leaderboard",
              link: "https://www.kaggle.com/competitions/Covid19-Death-Predictions/leaderboard",
            },
            {
              title: "Github",
              link: "https://github.com/PrivFelixKniest/covid-death-prediction/tree/master",
            },
          ],
        });
      }}
      id={id}
    />
  );
}
