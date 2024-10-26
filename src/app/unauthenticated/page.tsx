import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import Link from "next/link";
const page = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <h2>please login first to go on authenticated page </h2>
     <Link href = "/login">  <Button>
        <Mail /> Login with Email
      </Button></Link>
    </div>
  );
};

export default page;
