import {
  Table,
  TableHead,
  TableHeader,
  TableRow,
  TableBody,
  TableCell,
} from "@/components/ui/table";

type packaging = {
  id: number;
  nama: string;
  type: string;
  labelKemasan: string;
  innerbox?: string;
  labelBulat?: string;
};

const packaging: packaging[] = [
  {
    id: 1,
    nama: "Pot Putih 10g",
    type: "In House",
    labelKemasan: "155 x 12mm",
    innerbox: "Innerbox Full Desain = 50 x 39 mm",
    labelBulat: "38mm",
  },
  {
    id: 2,
    nama: "Botol Spray 60ml",
    type: "Customer",
    labelKemasan: "120 x 10mm",
  },
  {
    id: 3,
    nama: "Jar Cream 30g",
    type: "In House",
    labelKemasan: "180 x 14mm",
    innerbox: "Innerbox Polos",
  },
  {
    id: 4,
    nama: "Tube 100ml",
    type: "Customer",
    labelKemasan: "200 x 15mm",
    labelBulat: "40mm",
  },
  {
    id: 5,
    nama: "Pump Bottle 200ml",
    type: "In House",
    labelKemasan: "250 x 20mm",
  },
  {
    id: 6,
    nama: "Dropper Bottle 50ml",
    type: "Customer",
    labelKemasan: "130 x 11mm",
    innerbox: "Innerbox Kustom",
  },
  {
    id: 7,
    nama: "Airless Pump 150ml",
    type: "In House",
    labelKemasan: "190 x 13mm",
    labelBulat: "45mm",
  },
  { id: 8, nama: "Sachet 5ml", type: "Customer", labelKemasan: "90 x 5mm" },
  {
    id: 9,
    nama: "Tube 250ml",
    type: "In House",
    labelKemasan: "270 x 18mm",
    innerbox: "Innerbox Eco",
  },
  {
    id: 10,
    nama: "Pot Hitam 15g",
    type: "Customer",
    labelKemasan: "160 x 12mm",
    labelBulat: "39mm",
  },
  {
    id: 11,
    nama: "Spray Bottle 100ml",
    type: "In House",
    labelKemasan: "140 x 12mm",
  },
  {
    id: 12,
    nama: "Botol Kapsul 500mg",
    type: "Customer",
    labelKemasan: "200 x 15mm",
    innerbox: "Innerbox Polos",
  },
  {
    id: 13,
    nama: "Jar Masker 50g",
    type: "In House",
    labelKemasan: "170 x 13mm",
    labelBulat: "41mm",
  },
  {
    id: 14,
    nama: "Botol Sabun 250ml",
    type: "Customer",
    labelKemasan: "220 x 16mm",
  },
  {
    id: 15,
    nama: "Pot Kaca 30g",
    type: "In House",
    labelKemasan: "185 x 15mm",
    innerbox: "Innerbox Desain",
  },
  {
    id: 16,
    nama: "Botol Serum 30ml",
    type: "Customer",
    labelKemasan: "125 x 10mm",
    labelBulat: "37mm",
  },
  {
    id: 17,
    nama: "Airless Pump 100ml",
    type: "In House",
    labelKemasan: "195 x 14mm",
    innerbox: "Innerbox Premium",
  },
  { id: 18, nama: "Sachet 10ml", type: "Customer", labelKemasan: "95 x 6mm" },
  {
    id: 19,
    nama: "Pot Aluminium 20g",
    type: "In House",
    labelKemasan: "160 x 11mm",
    labelBulat: "38mm",
  },
  {
    id: 20,
    nama: "Botol Lotion 150ml",
    type: "Customer",
    labelKemasan: "210 x 15mm",
    innerbox: "Innerbox Transparan",
  },
];

export default function TableData({ filterType }: { filterType: string }) {
  const filteredData = packaging.filter((item) => item.type === filterType);
  return (
    <main className="w-full">
      <Table className="">
        <TableHeader className="w-full">
          <TableRow className="bg-sky-500 hover:bg-sky-500 *:border-white *:border-2 *:px-3">
            <TableHead>Kemasan</TableHead>
            <TableHead>Label Kemasan {"(P X L)"}</TableHead>
            <TableHead>Innerbox</TableHead>
            <TableHead>Label Bulat {"⌀"}</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredData.map((data) => (
            <TableRow key={data.id}>
              <TableCell>{data.nama}</TableCell>
              <TableCell>{data.labelKemasan}</TableCell>
              <TableCell>{data.innerbox || "-"}</TableCell>
              <TableCell>{`⌀ ${data.labelBulat || "-"}`}</TableCell>
              <TableCell>Edit</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </main>
  );
}
