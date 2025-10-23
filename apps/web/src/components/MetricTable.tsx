"use client";

import { Metric } from "../lib/types";
import { fmtDuration } from "../lib/utils";

interface Props {
  data: Metric[];
}

export default function MetricTable({ data }: Props) {
  const last10 = data.slice(-10);
  return (
    <table className="w-full table-auto">
      <thead>
        <tr>
          <th>Build ID</th>
          <th>Duration</th>
          <th>Coverage</th>
          <th>Status</th>
          <th>Created At</th>
        </tr>
      </thead>
      <tbody>
        {last10.map((m) => (
          <tr key={m.id}>
            <td>{m.build_id}</td>
            <td>{fmtDuration(m.duration_seconds)}</td>
            <td>{m.coverage}%</td>
            <td>{m.status}</td>
            <td>{new Date(m.created_at).toLocaleDateString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
