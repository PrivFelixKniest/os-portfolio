"use client";

import { useDraggable } from "@dnd-kit/core";
import Image from "next/image";
import { CSS } from "@dnd-kit/utilities";

export function Widget({
  img,
  alt,
  title,
  action,
  id,
}: {
  img: string;
  title: string;
  alt: string;
  action?: () => void;
  id: string;
}) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: id,
  });

  const style = {
    // Outputs `translate3d(x, y, 0)`
    transform: CSS.Translate.toString(transform),
  };

  return (
    <button
      className="flex flex-col gap-1 items-center w-36 hover:bg-blue-300/20 focus:bg-blue-300/30 p-1"
      onDoubleClick={action}
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
    >
      <figure className="h-[50px] w-[50px]">
        <Image
          src={img}
          height={50}
          width={50}
          objectFit={"contain"}
          className="rounded"
          alt={alt}
        />
      </figure>
      <figcaption className="text-sm">{title}</figcaption>
    </button>
  );
}
