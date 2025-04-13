import { useTaskStore } from "@/zustand/task-store";
import { Widget } from "./widget";
import { ProjectPage } from "../project-page/project-page";

export function DeathPredictionWidget({ id }: { id: string }) {
  const { addOpenTask } = useTaskStore();

  return (
    <Widget
      title="Covid Death Prediction, Project"
      img="https://q85crflxoa.ufs.sh/f/d5mHhMklorR4h6l2MkeLcAWLqQCd0ln2uRm74Sw1ysizBXjY"
      alt="Covid Death Prediction Project Widget"
      action={() => {
        addOpenTask({
          title: "Covid Death Prediction",
          content: (
            <ProjectPage
              title={"Covid Death Prediction using Machine Learning"}
              icon="https://q85crflxoa.ufs.sh/f/d5mHhMklorR4h6l2MkeLcAWLqQCd0ln2uRm74Sw1ysizBXjY"
              description={`This project tries to predict the total number of covid deaths for a given region 
                based on some related data from the previous week. To solve this problem, this project uses a 
                "Histogram-Boosting" ensemble regression model from scikit-learn. For more information about the 
                problem and solution please check out the readme on github. The problem was posed as part of a 
                Kaggle.com competition, where the model implemented in this notebook scored the 38th place in the 
                private scoring round.`}
              projectImages={[
                "https://q85crflxoa.ufs.sh/f/d5mHhMklorR48yGegYVrWkhUb4CVot6Ta7BFY1NJdRGzMqyZ",
                "https://q85crflxoa.ufs.sh/f/d5mHhMklorR42gT7EjqrKxbBvPMcJYToWutGdRsgqhlfpwH4",
                "https://q85crflxoa.ufs.sh/f/d5mHhMklorR44BrgxEjjehkx6TatQRzOiwV9LYSNqU0g47mH",
                "https://q85crflxoa.ufs.sh/f/d5mHhMklorR4bE6HLgKBTyOlDuhvY1Irp5W3XUmcnCka8QEg",
              ]}
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
