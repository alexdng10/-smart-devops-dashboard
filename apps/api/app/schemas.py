from typing import Literal
from pydantic import BaseModel

class MetricCreate(BaseModel):
    """Schema for creating a metric."""
    build_id: str
    duration: float
    tests_passed: int
    coverage: float
    status: Literal["success", "failed"]

class Metric(MetricCreate):
    """Schema for metric response."""
    id: int