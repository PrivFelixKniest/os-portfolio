import Image from "next/image";
import { StartMenuCard } from "./start-menu-card";
import Link from "next/link";
import "./start-menu.css";

export function StartMenu() {
  return (
    <section
      aria-label="Os Startmenu open"
      className="overflow-hidden absolute -top-[22rem] left-0 h-[22rem] w-60"
    >
      <div className="bg-gray-950/50 p-2 backdrop-blur-2xl  rounded-t-xl flex flex-col gap-4 menu-animation w-full h-full">
        <div className="flex flex-col gap-1">
          <div className="font-bold text-lg h-20 flex items-center justify-center bg-white/5 transition-all rounded-lg overflow-hidden">
            <Image
              src="/portfolios.svg"
              height={200}
              width={200}
              alt="Portfoli OS logo"
              draggable={false}
              className="transition-all hover:-translate-y-[.1rem]"
            />
          </div>
          <p className="italic opacity-60 text-sm">
            Website, Sounds & Art <br />
            by <span className="pulsing-1">Felix</span>{" "}
            <span className="pulsing-2">Kniest</span>
          </p>
        </div>
        <section
          aria-label="Resume"
          className="flex flex-col gap-2 overlfow-y-auto"
        >
          <StartMenuCard>
            <Link
              href="https://q85crflxoa.ufs.sh/f/d5mHhMklorR4ymxYinlkvY1DfuVMQ8iB0jmAhKJePqsSaUOE"
              download={true}
              target="_blank"
            >
              <h1 className="font-bold">Resume</h1>
              <p className="text-sm opacity-60">26. March 2025</p>
            </Link>
          </StartMenuCard>
          <StartMenuCard>
            <Link href="https://github.com/PrivFelixKniest" target="_blank">
              <h1 className="font-bold">Github</h1>
              <p className="text-sm opacity-60">github.com/PrivFelixKniest</p>
            </Link>
          </StartMenuCard>
          <StartMenuCard>
            <Link href="https://linkedin.com/in/felix-kniest" target="_blank">
              <h1 className="font-bold">LinkedIn</h1>
              <p className="text-sm opacity-60">linkedin.com/in/felix-kniest</p>
            </Link>
          </StartMenuCard>
        </section>
      </div>
    </section>
  );
}
