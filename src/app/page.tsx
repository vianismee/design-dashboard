import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex justify-center items-center">
      <Button>
        <Link href={"/generator"}>Text Generator</Link>
      </Button>
    </div>
  );
}
