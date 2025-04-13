import { useTaskStore } from "@/zustand/task-store";
import { Widget } from "./widget";
import { ProjectPage } from "../project-page/project-page";

export function SwipingHeaderWidget({ id }: { id: string }) {
  const { addOpenTask } = useTaskStore();

  return (
    <Widget
      title="Swiping Header, Project"
      img="https://q85crflxoa.ufs.sh/f/d5mHhMklorR47SSb23hA32ex6jn1qmQYvoCNhrJfzAsIHukg"
      alt="swiping header widget"
      action={() => {
        addOpenTask({
          title: "Swiping Header",
          content: (
            <ProjectPage
              title={"React NPM Package: Swiping Header"}
              icon="https://q85crflxoa.ufs.sh/f/d5mHhMklorR47SSb23hA32ex6jn1qmQYvoCNhrJfzAsIHukg"
              description={`Wanting to know more about the npm ecosystem and what it means to publish
                npm packages, I chose to extract a UI component I had built for a previous portfolio page
                into its own little component library. The "Swiping Header" component allows any user to
                easily add a swiping header hero section inspired be the windows 10 sign in screen into their
                react application. The hero section scrolls up on scroll, revealing the body content below.
                For a visual demostration please view the gif attached to the documentation readme on github.`}
              projectImages={[
                "https://q85crflxoa.ufs.sh/f/d5mHhMklorR4S2pBHoDNBUcvQo4gEGp1IFuzh7kAMjarOXwn",
                "https://q85crflxoa.ufs.sh/f/d5mHhMklorR444UfJAjjehkx6TatQRzOiwV9LYSNqU0g47mH",
                "https://q85crflxoa.ufs.sh/f/d5mHhMklorR4wt2pKT6C4tNyP0AMLrVIzWJGsfZ3aTl5Oj2h",
              ]}
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
