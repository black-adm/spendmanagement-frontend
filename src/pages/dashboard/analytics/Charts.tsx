import { ChartCategories } from "./Categories";
import { LineChartsResume } from "./LineCharts";
import { ChartOverview } from "./Overview";

export function ChartsCards() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-full space-y-6">
        <LineChartsResume />
        <ChartOverview />
        <ChartCategories />
      </div>
    </div>
  );
}
