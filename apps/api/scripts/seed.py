import sys
import os

sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..', '..', '..'))

from apps.api.app.db import SessionLocal
from apps.api.app.models import Metric

def seed():
    session = SessionLocal()
    try:
        inserted = 0
        if not session.query(Metric).filter(Metric.build_id == "build-1").first():
            session.add(Metric(build_id="build-1", duration_seconds=120, coverage=82.5, status="success"))
            inserted += 1
        if not session.query(Metric).filter(Metric.build_id == "build-2").first():
            session.add(Metric(build_id="build-2", duration_seconds=95, coverage=85.1, status="success"))
            inserted += 1
        session.commit()
        print(f"Inserted {inserted} rows")
    finally:
        session.close()

if __name__ == "__main__":
    seed()