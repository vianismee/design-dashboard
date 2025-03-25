import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function MainSizeChart() {
  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account" className="cursor-pointer">
          Account
        </TabsTrigger>
        <TabsTrigger value="password" className="cursor-pointer">
          Password
        </TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <div>Hello World</div>
      </TabsContent>
      <TabsContent value="password">
        <div>Hello </div>
      </TabsContent>
    </Tabs>
  );
}
