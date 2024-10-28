"use client"

import Link from "next/link";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";


export default function Signup() {
  const { setTheme } = useTheme();

  return (
    <div className="flex items-center justify-center h-screen bg-gray-200 dark:bg-gray-900 dark:text-black">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon" className="dark:bg-slate-400">
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 " />
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
      <div className="min-w-60 max-w-96 bg-white dark:bg-gray-400 rounded shadow-lg p-8 m-4">
        <h1 className="block w-full text-center text-2xl font-bold mb-6">
          SignUp
        </h1>
        <form className="mb-4 md:flex md:flex-wrap md:justify-between">
          <div className="flex flex-col mb-4 md:w-full">
            <label
              className="mb-2 font-bold text-lg text-grey-darkest"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="border py-2 px-3 text-grey-darkest dark:bg-white "
              type="email"
              name="email"
              id="email"
            />
          </div>
          <div className="flex flex-col mb-6 md:w-full">
            <label
              className="mb-2 font-bold text-lg text-grey-darkest"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="border py-2 px-3 text-grey-darkest dark:bg-white "
              type="password"
              name="password"
              id="password"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              type="button"
            >
              Login
            </button>
          </div>
        </form>
        <div className="text-center">
          <p className="text-grey-dark text-sm">
            already have account?{" "}
            <Link href="/login" className="no-underline text-blue font-bold">
              Login
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
