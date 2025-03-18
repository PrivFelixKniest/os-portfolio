"use client";

import { useEffect, useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import { Button } from "../ui/button";
import { toast } from "sonner";

export function AskForFullScreen() {
  const [open, setOpen] = useState(true);

  function handleRequestFullScreen() {
    const elem = document.documentElement;

    if (elem.requestFullscreen) {
      elem.requestFullscreen();
      // @ts-ignore
    } else if (elem.webkitRequestFullscreen) {
      /* Safari */
      // @ts-ignore
      elem.webkitRequestFullscreen();
      // @ts-ignore
    } else if (elem.msRequestFullscreen) {
      /* IE11 */
      // @ts-ignore
      elem.msRequestFullscreen();
    }

    toast.info("Entering Full Screen", {
      description: "Press Esc to leave",
    });

    setOpen(false);
  }

  return (
    <>
      <AlertDialog open={open}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              PortfoliOS is best experienced in Full Screen Mode
            </AlertDialogTitle>
            <AlertDialogDescription>
              You can always leave full screen using Esc or F11.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel
              onClick={() => {
                setOpen(false);
              }}
            >
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction onClick={handleRequestFullScreen}>
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
