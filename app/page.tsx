"use client";

import { AskForFullScreen } from "@/components/base/ask-for-fullscreen";
import { ContentWindow } from "@/components/content-window/content-window";
import { Login } from "@/components/login/login";
import { TaskBar } from "@/components/task-bar/task-bar";
import dynamic from "next/dynamic";

const WidgetGrid = dynamic(
  () => import("@/components/widget-grid/widget-grid"),
  { ssr: false }
);

export default function Home() {
  return (
    <div className="h-[100vh] w-full bg-[url(/labeltrackrbg.webp)] bg-center bg-cover text-white overflow-hidden">
      <Login />
      <AskForFullScreen />
      <WidgetGrid />
      <ContentWindow />
      <TaskBar />
    </div>
  );
}
