"use client";

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
import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";
import Image from "next/image";
import fiestdark from "../images /freeats-dark.webp";
import dashimg from "../images /dashboard-dark.webp";
import logo from "../images /acme-logo-dark.png";


export default function Signup() {
  const [data, setData] = useState<{
    email: string;
    password: string;
  }>({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false)

  const { setTheme } = useTheme();
  const router = useRouter();
  const { toast } = useToast();

  const signup = async (e : React.FormEvent) => {
    e.preventDefault();

    try {
        setIsLoading(true);
      const { data: dataUser, error } = await supabase.auth.signUp({
        email: data.email,
        password: data.password,
      });
      console.log(dataUser);
      if (!error) {
        console.log("inside if condition");
        console.log(data);
        router.push("/authenticated");
      }
      if (error) {
        console.log(error);
        toast({
          variant: "destructive",
          title: "oh No!",
          description: `${error.message}`,
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        });
      }
    } catch (err) {
      console.log(err);
      toast({
        variant: "destructive",
        title: "oh No!",
        description: `${err}`,
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    }
    finally{
        setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-200 dark:bg-gray-900">
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
      <div
      className="grid h-full dark:bg-gray-900/20"
      style={{ gridTemplateRows: "auto 1fr" }}
    >
      <div className="row-auto"></div>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col items-center justify-center h-screen text-center space-y-8">
          <div className="min-w-48 h-full max-w-lg mx-auto text-left grid items-center overflow-auto">
            <div className="space-y-8">
              <div className="flex flex-col items-start gap-0 w-[320px]">
                <h1 className="text-xl font-bold">
                  SignUP to Everything Talent
                </h1>
                <p className="text-base font-medium">
                  create new account
                </p>
              </div>

              <hr />

              <form onSubmit={signup} className="space-y-4" >
                <label
                  htmlFor="password-email"
                  className="text-sm font-medium text-muted-foreground"
                >
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  onChange={handleChange}
                  placeholder="Type your email"
                  className="block w-full rounded-md border bg-gray-50 dark:bg-gray-800/20 h-10 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <label
                  htmlFor="password"
                  className="text-sm font-medium text-muted-foreground"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    onChange={handleChange}
                    placeholder="Type your password"
                    className="block w-full rounded-md border bg-gray-50 dark:bg-gray-800/20 h-10 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="flex justify-between text-sm">
                  <Link
                    href="/login"
                    className="font-medium text-blue-600 dark:text-blue-400 hover:text-blue-500"
                  >
                    Sign In instead?
                  </Link>
                </div>

                <button
                  className="bg-gradient-to-b from-blue-500 to-blue-600 text-white h-10 w-full rounded-md transition hover:shadow-xl"
                >
                  SignUp
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="relative p-3 hidden lg:block">
          <div className="gap-10 bg-cover flex flex-col justify-between rounded-xl w-full dark:bg-gray-800 bg-gray-100 bg-opacity-90 h-full px-10 pt-10 pb-10">
            <div className="ml-6 space-y-10">
              <div className="relative flex items-center space-x-10 gap-5">
                <Image
                  alt="Logo Login"
                  loading="lazy"
                  width="40"
                  height="40"
                  decoding="async"
                  className="w-[64px] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
                  src={logo}
                  style={{ color: "transparent" }}
                />
                <Image
                  alt="Logo Login"
                  loading="lazy"
                  width="40"
                  height="40"
                  decoding="async"
                  className="w-[64px] absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
                  src={logo}
                  style={{ color: "transparent" }}
                />
                <p className="text-2xl font-bold leading-none">
                  Everything Talent
                </p>
              </div>

              <div className="relative">
                <div className="dark:hidden mb-8 relative">
                  <Image
                    alt="Login Header Light"
                    loading="lazy"
                    width="1351"
                    height="606"
                    decoding="async"
                    className="relative z-0 border border-black object-cover object-left rounded-lg w-[32rem] h-[24rem]"
                    src={dashimg}
                    style={{ color: "transparent" }}
                  />
                  <Image
                    alt="Login Header Light Overlay"
                    loading="lazy"
                    width="1192"
                    height="598"
                    decoding="async"
                    className="z-10 border border-black object-cover object-left absolute top-[4rem] left-[20rem] h-[16rem] w-[18rem] rounded-lg"
                    src={fiestdark}
                    style={{ color: "transparent" }}
                  />
                </div>

                <div className="hidden dark:block mb-8 relative">
                  <Image
                    alt="Login Header Dark"
                    loading="lazy"
                    width="1343"
                    height="600"
                    decoding="async"
                    className="relative z-0 border border-aliceblue object-cover object-left rounded-lg w-[32rem] h-[24rem]"
                    src={dashimg}
                    style={{ color: "transparent" }}
                  />
                  <Image
                    alt="Login Header Dark Overlay"
                    loading="lazy"
                    width="1191"
                    height="591"
                    decoding="async"
                    className="z-10 border border-aliceblue object-cover object-left absolute top-[4rem] left-[20rem] h-[16rem] w-[18rem] rounded-lg"
                    src={fiestdark}
                    style={{ color: "transparent" }}
                  />
                </div>
              </div>

              <div className="xl:w-[640px]">
                <h4 className="mt-8 scroll-m-20 text-xl font-semibold tracking-tight">
                  Everything Talent revolutionized our hiring at TechStaff
                  Solutions. Swiftly identifies top talent, streamlines
                  operations, and enables data-driven decisions. Essential to
                  our recruitment strategy, consistently delivers top-tier
                  talent.
                </h4>
                <p className="mt-8 text-base font-medium dark:text-gray-100">
                  Narendra Patel - CEO of TechStaff
                </p>
                <div className="mt-2 flex justify-start">
                  <p className="leading-7">⭐️ ⭐️ ⭐️ ⭐️ ⭐️</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
      <Toaster />
    </div>
  );
}
