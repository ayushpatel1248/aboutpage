"use client";
import Image from "next/image";
import RetroGrid from "@/components/ui/retro-grid";
import logoimg from "../images /acme-logo-light.webp"

export default function RetroGridDemo() {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-background pb-44">
     <Image
                alt="Everything Talent Logo"
                loading="lazy"
                width="160"
                height="160"
                decoding="async"
                className="-ml-1 h-40 w-40"
                src={logoimg}
              />
      <span className="pointer-events-none z-10 whitespace-pre-wrap  bg-[linear-gradient(to_right,_#000_0%,_#3c3cbf_50%)] dark:bg-[linear-gradient(to_right,_#3c3cbf_5%,_#FFFFFF_50%)] bg-clip-text text-center text-7xl font-bold leading-none tracking-tighter text-transparent ">
        Everything Talent
      </span>
      <br />
      <span className="z-10 bg-[linear-gradient(to_right,_#000_0%,_#3c3cbf_50%)] dark:bg-[linear-gradient(to_right,_#3c3cbf_0%,_#FFFFFF_50%)] bg-clip-text text-center text-5xl font-bold leading-none tracking-tighter text-transparent px-44">
        Simplifies hiring with a free ATS and AI-driven assessments.
      </span>

      <RetroGrid />
    </div>
  );
}
