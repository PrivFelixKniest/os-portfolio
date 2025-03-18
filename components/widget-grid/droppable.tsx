"use client";
import React from "react";
import { useDroppable } from "@dnd-kit/core";

export function Droppable(props: { id: string; children: React.ReactNode }) {
  const { isOver, setNodeRef } = useDroppable({
    id: props.id,
  });

  const style = {
    opacity: isOver ? 1 : 1,
  };

  return (
    <div ref={setNodeRef} style={style} className="h-[110px] w-36">
      {props.children}
    </div>
  );
}
