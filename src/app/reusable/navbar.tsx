"use client"

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import logo from "../images /acme-logo-dark.png";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const { setTheme } = useTheme();

  return (
    <header className="dark:bg-black border-b dark:border-[#1F293A] dark:bg-[#000000]">
      <div className="px-8 mx-auto py-2 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <Image src={logo} alt="Logo" width={30} height={30} />
          <span className="text-xl font-extrabold">Everything Talent</span>
        </div>

        {/* Navbar Links */}
        <nav className="hidden md:flex space-x-8 font-bold">
          <Link
            href="/"
            className="font-regular text-slate-500 dark:hover:text-slate-300 dark:text-slate-400 text-sm"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="font-regular text-slate-500 dark:hover:text-slate-300 dark:text-slate-400 text-sm"
          >
            About
          </Link>
          <Link
            href="/use-cases"
            className="font-regular text-slate-500 dark:hover:text-slate-300 dark:text-slate-400 text-sm"
          >
            Use Cases
          </Link>
          <Link
            href="/pricing"
            className="font-regular text-slate-500 dark:hover:text-slate-300 dark:text-slate-400 text-sm"
          >
            Pricing
          </Link>
          <Link
            href="/resources"
            className="font-regular text-slate-500 dark:hover:text-slate-300 dark:text-slate-400 text-sm"
          >
            Resources
          </Link>
          <Link
            href="/blog"
            className="font-regular text-slate-500 dark:hover:text-slate-300 dark:text-slate-400 text-sm"
          >
            Blog
          </Link>
          <Link
            href="/support"
            className="font-regular text-slate-500 dark:hover:text-slate-300 dark:text-slate-400 text-sm"
          >
            Support
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button
            asChild
            size={"loginS"}
            variant={"login"}
            className="bg-blue-500"
          >
            <Link href="/login">
              Login
              <svg
                className="ml-2 -mr-1 w-5 h-5 group-hover:translate-x-1 transition"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
