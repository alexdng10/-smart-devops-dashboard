import { BACKEND_URL } from './env';
import { Metric } from './types';
import { fmtDuration } from './utils';

export async function fetchMetrics(limit = 50): Promise<Metric[]> {
  const res = await fetch(`${BACKEND_URL}/metrics`);
  if (!res.ok) throw new Error(`Failed to fetch metrics: ${res.status}`);
  const data: Metric[] = await res.json();
  return data.sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime());
}