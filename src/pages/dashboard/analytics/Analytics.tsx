import { GoalsCard } from "./Goals";
import { GridCards } from "./GridCards";
import { ReceiptsCard } from "./Receipts";

export function AnalyticsCards() {
  return (
    <div className="max-w-lg flex flex-col items-center">
      <div className="w-full space-y-6">
        <GridCards />
        <ReceiptsCard />
        <GoalsCard />
      </div>
    </div>
  );
}
