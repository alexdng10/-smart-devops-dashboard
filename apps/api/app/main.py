import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .db import Base, engine, SessionLocal
from .models import Metric
from .routes.metrics import router

Base.metadata.create_all(bind=engine)

app = FastAPI(title="Smart DevOps Dashboard API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://127.0.0.1:3000"],
    allow_methods=["GET", "POST", "OPTIONS"],
    allow_headers=["Content-Type", "Authorization"],
)

app.include_router(router)

@app.get("/health")
def health():
    return {"status": "ok"}

if os.environ.get("ENABLE_DEV_ENDPOINTS") == "1":
    @app.post("/dev/seed")
    def seed_dev_data():
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
            return {"inserted": inserted}
        finally:
            session.close()