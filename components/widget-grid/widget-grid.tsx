"use client";

import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { Droppable } from "./droppable";
import { LabeltrackrWidget } from "./labeltrackr-widget";
import { RecycleWidget } from "./recycle-widget";
import { useState } from "react";
import { WaillWidget } from "./waill-widget";
import { DeathPredictionWidget } from "./death-prediction-widget";
import { SwipingHeaderWidget } from "./swiping-header-widget";

type WidgetParents = {
  [droppableId: string]: string | null;
};

type WidgetsById = {
  [draggableId: string]: React.ReactNode;
};

const widgetsById: WidgetsById = {
  lb: <LabeltrackrWidget id="lb" />,
  tr: <RecycleWidget id="tr" />,
  wa: <WaillWidget id="wa" />,
  cd: <DeathPredictionWidget id="cd" />,
  sh: <SwipingHeaderWidget id="sh" />,
};

export default function WidgetGrid() {
  const [parents, setParents] = useState<WidgetParents>({
    "1": "tr",
    "2": "lb",
    "3": "wa",
    "4": "cd",
    "5": "sh",
  });

  function handleDragEnd(event: DragEndEvent) {
    const overId = event.over?.id;
    const activeId = event.active.id;
    if (overId && activeId) {
      setParents((prev) => {
        // find original spot
        let originalDroppableId = "";
        for (const parentId in prev) {
          if (prev[parentId] === activeId) {
            originalDroppableId = parentId;
          }
        }

        // find collision
        const collidingDraggableId = prev[overId];

        return {
          ...prev,
          [originalDroppableId]: collidingDraggableId,
          [overId]: "" + activeId,
        };
      });
    }
  }

  const droppableIds = ((n = 200) => {
    const a = [];
    for (let i = 1; i <= n; i++) {
      a.push("" + i);
    }
    return a;
  })();

  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] p-4">
      <DndContext onDragEnd={handleDragEnd}>
        {droppableIds.map((id) => {
          return (
            <Droppable key={id} id={id}>
              {widgetsById[parents[id] ?? ""]}
            </Droppable>
          );
        })}
      </DndContext>
    </div>
  );
}
