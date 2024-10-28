"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/lib/supabase";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";
import Link from "next/link";

const Login = () => {
  const [data, setData] = useState<{
    email: string;
    password: string;
  }>({
    email: "",
    password: "",
  });

  const { toast } = useToast();
  const router = useRouter();

  const login = async () => {
    try {
      const { data: dataUser, error } = await supabase.auth.signInWithPassword({
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
      toast({
        variant: "destructive",
        title: "Uh oh!",
        description: `${err}`,
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
      console.log(err);
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
    <div className="min-h-screen flex justify-center items-center ">
      <div className="min-w-60 p-5 bg-slate-400 rounded-md	">
        <h2 className="mb-4">Login </h2>
        <Input
          className="mb-4 bg-white"
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <Input
          className="mb-4 bg-white"
          type="password"
          name="password"
          placeholder="password"
          onChange={handleChange}
        />
        <Button className="hover:bg-slate-800" onClick={login}>
          submit
        </Button>
        <div className="text-center">
            <p className="text-grey-dark text-sm">
              Don't have an account?{" "}
              <Link href="/signup" className="no-underline text-blue font-bold">
                SignUp
              </Link>
              .
            </p>
          </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Login;
