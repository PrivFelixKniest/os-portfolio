"use client";
import { useTaskStore } from "@/zustand/task-store";
import { Button } from "../ui/button";
import { X } from "lucide-react";
import "./content-window.css";
import Link from "next/link";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";

export function ContentWindow() {
  const { killOpenTask, selectedTask, openTasks } = useTaskStore();

  if (selectedTask !== null && selectedTask < openTasks.length) {
    const task = openTasks[selectedTask];
    return (
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[calc(100vh-100px)] w-[calc(100vw-20px)] sm:h-[80vh] sm:w-[80vw] rounded-xl overflow-hidden bg-slate-950/20 backdrop-blur-2xl shadow-xl flex flex-col window-animation">
        <div className=" bg-white text-black p-2 flex justify-between items-center">
          <div className="px-2">{task.title}</div>
          <div className="flex items-center gap-1">
            <Menubar dir="rtl" className="block md:hidden h-9">
              <MenubarMenu>
                <MenubarTrigger>Links</MenubarTrigger>
                <MenubarContent>
                  {task.references?.map((reference, idx) => {
                    return (
                      <MenubarItem asChild key={idx}>
                        <Link href={reference.link} target="_blank">
                          {reference.title}
                        </Link>
                      </MenubarItem>
                    );
                  })}
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
            <div className="items-center gap-1 hidden md:flex">
              {task.references?.map((reference, idx) => {
                return (
                  <Button asChild key={idx} variant="outline">
                    <Link href={reference.link} target="_blank">
                      {reference.title}
                    </Link>
                  </Button>
                );
              })}
            </div>
            <Button
              variant="ghost"
              onClick={() => {
                if (selectedTask !== null) killOpenTask(selectedTask);
              }}
            >
              <X />
            </Button>
          </div>
        </div>
        <div className="grow overflow-y-hidden">{task.content}</div>
      </div>
    );
  }
  return <></>;
}
