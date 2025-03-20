import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectContent,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Package, Pencil, Plus, PlusIcon, Trash2 } from "lucide-react";

const types = {
  packaging: ["Tube", "Botol", "Pipet", "Pot"],
};

const packaging = [
  {
    id: 1,
    brand: "Shineskin",
    nama: "Pot Acrylic Jernih Tutup Putih 10g",
    type: "Pot",
  },
  {
    id: 2,
    brand: "Shineskin",
    nama: "Pot Acrylic Jernih Tutup Putih 10g",
    type: "Pot",
  },
];

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
        <div className="h-[10%] flex items-center px-2 justify-between">
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
              </DialogHeader>
              <div className="flex flex-col gap-2">
                <div className="flex gap-5">
                  <Label className="w-[30%]">Nama Brand</Label>
                  <Input placeholder="e.g., Shineskin" className="grow" />
                </div>
                <div className="flex gap-5">
                  <Label className="w-[30%]">Nama Kemasan</Label>
                  <Input
                    placeholder="e.g., Pot Acrylic Jernih Tutup Putih 10g"
                    className="grow"
                  />
                </div>
                <div className="flex">
                  <Label className="w-[30%]">Jenis Kemasan</Label>
                  <div className="grow">
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder={"Tube"} />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.values(types)
                          .flat()
                          .map((type) => (
                            <SelectItem value={type} key={type}>
                              {type}
                            </SelectItem>
                          ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <Input
                  type="file"
                  id="picture"
                  accept="image/png, image/jpeg"
                />
                <Button className="bg-indigo-600 cursor-pointer">
                  <PlusIcon /> Add Packaging
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
        <div className="h-full overflow-scroll bg-white px-3 py-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Brand</TableHead>
                <TableHead>Nama Kemasan</TableHead>
                <TableHead>Jenis Kemasan</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {packaging.map((pack) => (
                <TableRow key={pack.id}>
                  <TableCell>{pack.brand}</TableCell>
                  <TableCell>{pack.nama}</TableCell>
                  <TableCell>{pack.type}</TableCell>
                  <TableCell className="flex gap-3 items-center">
                    <Button className="cursor-pointer flex gap-1 items-center bg-indigo-300">
                      <Pencil /> Edit
                    </Button>
                    <Trash2 className="text-red-500 cursor-pointer" />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </main>
  );
}
