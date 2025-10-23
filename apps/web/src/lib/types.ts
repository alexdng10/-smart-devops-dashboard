export type Metric = {
  id: number
  build_id: string
  duration_seconds: number
  coverage: number
  status: "success" | "failed" | string
  created_at: string
}