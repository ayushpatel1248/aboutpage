import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Moon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logo from "../images /acme-logo-dark.png";

const Header = () => {
  return (
    <header className="bg-black text-white border-b border-[#1F293A] dark:bg-[#000000]">
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
            className="font-regular hover:text-slate-300 text-slate-400 text-sm"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="font-regular hover:text-slate-300 text-slate-400 text-sm"
          >
            About
          </Link>
          <Link
            href="/use-cases"
            className="font-regular hover:text-slate-300 text-slate-400 text-sm"
          >
            Use Cases
          </Link>
          <Link
            href="/pricing"
            className="font-regular hover:text-slate-300 text-slate-400 text-sm"
          >
            Pricing
          </Link>
          <Link
            href="/resources"
            className="font-regular hover:text-slate-300 text-slate-400 text-sm"
          >
            Resources
          </Link>
          <Link
            href="/blog"
            className="font-regular hover:text-slate-300 text-slate-400 text-sm"
          >
            Blog
          </Link>
          <Link
            href="/support"
            className="font-regular hover:text-slate-300 text-slate-400 text-sm"
          >
            Support
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="login" size="moon">
            <Moon className="h-10 w-10" />
          </Button>
          <Button asChild size={"loginS"} variant={"login"} className="bg-blue-500">
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
