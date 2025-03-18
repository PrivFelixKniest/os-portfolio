"use client";

import { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../ui/alert-dialog";
import { toast } from "sonner";

export function AskForFullScreen() {
  const [open, setOpen] = useState(true);

  function handleRequestFullScreen() {
    const elem = document.documentElement;

    if (elem.requestFullscreen) {
      elem.requestFullscreen();
      // @ts-expect-error because of non standard documentElement parameters
    } else if (elem.webkitRequestFullscreen) {
      /* Safari */
      // @ts-expect-error because of non standard documentElement parameters
      elem.webkitRequestFullscreen();
      // @ts-expect-error because of non standard documentElement parameters
    } else if (elem.msRequestFullscreen) {
      /* IE11 */
      // @ts-expect-error because of non standard documentElement parameters
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
