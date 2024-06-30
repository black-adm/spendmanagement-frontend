import { AnalyticsCards } from "./Analytics";

export function AnalyticsContent() {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 pt-12">
      <div className="grid gap-4 md:grid-cols-2">
        <AnalyticsCards />
      </div>
    </div>
  );
}
