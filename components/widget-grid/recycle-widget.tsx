import { Widget } from "./widget";

export function RecycleWidget({ id }: { id: string }) {
  return (
    <Widget
      title="Trash"
      img="/recyclebin.webp"
      alt="Trash Widget App"
      id={id}
    />
  );
}
