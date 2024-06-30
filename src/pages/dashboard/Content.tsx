import { Tabs, TabsContent, TabsList } from "@/components/Tabs";
import { AnalyticsContent } from "./analytics/Content";
import { ExtractContent } from "./extract/Content";
import { GoalsContent } from "./goals/Content";
import { DashboardNavbar } from "./Navbar";
import { PreferencesContent } from "./preferences/Content";
import { ReceiptsContent } from "./receipts/Content";

export function DashboardContent() {
  return (
    <Tabs defaultValue="dashboard" className="w-screen h-auto pt-4">
      <TabsList className="bg-transparent flex justify-center items-center">
        <DashboardNavbar />
      </TabsList>

      <TabsContent value="dashboard">
        <AnalyticsContent />
      </TabsContent>
      <TabsContent value="extract">
        <ExtractContent />
      </TabsContent>
      <TabsContent value="receipts">
        <ReceiptsContent />
      </TabsContent>
      <TabsContent value="goals">
        <GoalsContent />
      </TabsContent>
      <TabsContent value="preferences">
        <PreferencesContent />
      </TabsContent>
    </Tabs>
  );
}
