import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabase";
import Link from "next/link";


export default function Home() {
  const setNewView = async () => {
    const { data, error } = await supabase.from("supabasetask1").select();

    console.log("ayush patel");

    if (data) console.log(data);
    if (error) console.log(error);
  };
  setNewView();

  return <div className="dark">go on about page by clicking here = <Link href="/about"><Button>click here</Button></Link></div>;
}
