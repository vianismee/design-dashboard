import { PencilRuler } from "lucide-react";
import MainSizeChart from "./component/mainsizechart";

export default function SizeChart() {
  return (
    <main className="flex flex-col gap-3 h-full">
      <header className="flex w-full bg-white h-[15%] rounded-3xl px-5 items-center gap-3">
        <PencilRuler width={40} height={40} className="text-indigo-600" />
        <h1 className="font-bold text-3xl">Size Chart</h1>
      </header>
      <div className="w-full bg-white grow rounded-3xl px-5 py-5">
        <MainSizeChart />
      </div>
    </main>
  );
}
