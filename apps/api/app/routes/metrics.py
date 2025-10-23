from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from ..db import get_db
from ..models import Metric as DBMetric
from ..schemas import Metric, MetricCreate

router = APIRouter()

@router.post("/metrics", response_model=Metric, status_code=201)
def create_metric(metric: MetricCreate, db: Session = Depends(get_db)):
    """Create a new metric."""
    db_metric = DBMetric(**metric.model_dump())
    db.add(db_metric)
    db.commit()
    db.refresh(db_metric)
    return db_metric

@router.get("/metrics", response_model=list[Metric])
def get_metrics(db: Session = Depends(get_db)):
    """Get the last 50 metrics."""
    return db.query(DBMetric).order_by(DBMetric.id.desc()).limit(50).all()