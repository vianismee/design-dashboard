import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";
import { Package, Plus } from "lucide-react";

export default function KemasanBaru() {
  return (
    <main className="flex flex-col gap-[20px] h-full">
      <div className="w-full bg-white py-5 px-6 rounded-lg flex h-[15%] grow-0">
        <h1 className="text-2xl font-bold flex items-center gap-3">
          <Package width={40} height={40} className="text-indigo-600" />
          Kemasan Baru
        </h1>
      </div>
      <div className="grow bg-white h-full w-auto rounded-lg py-5 px-6 flex flex-col overflow-hidden gap-2">
        <div className="h-[10%] flex items-center px-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-indigo-600 cursor-pointer">
                <Plus width={10} height={10} />
                Add Packaging
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="flex font-bold text-2xl items-center gap-2">
                  <Package className="text-indigo-600" width={40} height={40} />{" "}
                  Add New Packaging
                </DialogTitle>
                <DialogDescription>Tambahkan kemasan baru</DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
        <div className="h-full overflow-scroll bg-amber-300">
          <div className="h-screen">Hello World</div>
        </div>
      </div>
    </main>
  );
}
