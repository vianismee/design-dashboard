"use client";

import { useState } from "react";
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
  { id: 1, brand: "Shineskin", nama: "Pot Acrylic Jernih 10g", type: "Pot" },
];

export default function KemasanBaru() {
  const [search, setSearch] = useState("");

  // Filter data berdasarkan pencarian
  const filteredData = packaging.filter(
    (pack) =>
      pack.brand.toLowerCase().includes(search.toLowerCase()) ||
      pack.nama.toLowerCase().includes(search.toLowerCase()) ||
      pack.type.toLowerCase().includes(search.toLowerCase())
  );

  // Tentukan data yang akan ditampilkan
  const displayedData = search === "" ? packaging : filteredData;

  return (
    <main className="flex flex-col gap-5 h-full">
      <div className="w-full bg-white py-5 px-6 rounded-lg flex h-[15%]">
        <h1 className="text-2xl font-bold flex items-center gap-3">
          <Package width={40} height={40} className="text-indigo-600" />
          Kemasan Baru
        </h1>
      </div>

      <div className="grow bg-white w-auto rounded-lg py-5 px-6 flex flex-col overflow-hidden gap-4">
        <div className="flex items-center justify-between">
          {/* Input pencarian */}
          <Input
            placeholder="Cari kemasan..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-1/3"
          />

          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-indigo-600">
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
                    placeholder="e.g., Pot Acrylic Jernih 10g"
                    className="grow"
                  />
                </div>
                <div className="flex">
                  <Label className="w-[30%]">Jenis Kemasan</Label>
                  <div className="grow">
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih jenis" />
                      </SelectTrigger>
                      <SelectContent>
                        {types.packaging.map((type) => (
                          <SelectItem value={type} key={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <Input type="file" accept="image/png, image/jpeg" />
                <Button className="bg-indigo-600">
                  <PlusIcon /> Add Packaging
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Tabel Data */}
        <div className="h-full overflow-auto bg-white px-3 py-4 border rounded-lg">
          <Table className="w-full border-collapse">
            <TableHeader className="sticky top-0 bg-white shadow-md z-10">
              <TableRow>
                <TableHead>Brand</TableHead>
                <TableHead>Nama Kemasan</TableHead>
                <TableHead>Jenis Kemasan</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {displayedData.length > 0 ? (
                displayedData.map((pack) => (
                  <TableRow key={pack.id}>
                    <TableCell>{pack.brand}</TableCell>
                    <TableCell>{pack.nama}</TableCell>
                    <TableCell>{pack.type}</TableCell>
                    <TableCell className="flex gap-3 items-center">
                      <Trash2 className="text-red-500 cursor-pointer" />
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={4} className="text-center">
                    Data belum diinput.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </main>
  );
}
