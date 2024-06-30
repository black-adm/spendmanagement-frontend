import { ChartCategories } from "./Categories";
import { ChartOverview } from "./Overview";

export function ChartsCards() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-full space-y-6">
        <ChartOverview />
        <ChartCategories />
      </div>
    </div>
  );
}
