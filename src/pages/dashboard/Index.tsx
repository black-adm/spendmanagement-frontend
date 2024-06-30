import { DashboardContent } from "./Content";
import { Header } from "./Header";

export function DashboardPage() {
  return (
    <>
    <div className="h-full w-screen overflow-hidden">
      <Header />
      <DashboardContent />
    </div>
    </>
  );
}
