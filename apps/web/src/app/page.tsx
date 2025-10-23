import { fetchMetrics } from "../lib/api";
import { Metric } from "../lib/types";
import DurationChart from "../components/DurationChart";
import CoverageChart from "../components/CoverageChart";
import MetricTable from "../components/MetricTable";

export default async function Page() {
  let metrics: Metric[] = [];
  try {
    metrics = await fetchMetrics();
  } catch (e) {
    // Assume no data
  }
  if (metrics.length === 0) {
    return <div>No metrics available.</div>;
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="chartCard">
        <h2>Duration Chart</h2>
        <DurationChart data={metrics} />
      </div>
      <div className="chartCard">
        <h2>Coverage Chart</h2>
        <CoverageChart data={metrics} />
      </div>
      <div className="chartCard col-span-full">
        <h2>Recent Metrics</h2>
        <MetricTable data={metrics} />
      </div>
    </div>
  );
}
