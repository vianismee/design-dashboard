import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TableData from "./table";

export default function MainSizeChart() {
  return (
    <Tabs defaultValue="inhouse" className="w-full">
      <TabsList className="grid grid-cols-2 w-[500px]">
        <TabsTrigger value="inhouse" className="cursor-pointer">
          In House
        </TabsTrigger>
        <TabsTrigger value="customer" className="cursor-pointer">
          Customer
        </TabsTrigger>
      </TabsList>
      <TabsContent className="overflow-scroll" value="inhouse">
        <TableData filterType="In House" />
      </TabsContent>
      <TabsContent className="overflow-scroll" value="customer">
        <TableData filterType="Customer" />
      </TabsContent>
    </Tabs>
  );
}
