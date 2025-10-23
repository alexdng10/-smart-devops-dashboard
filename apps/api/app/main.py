from fastapi import FastAPI
from .db import Base, engine
from .routes.metrics import router

Base.metadata.create_all(bind=engine)

app = FastAPI(title="Smart DevOps Dashboard API")

app.include_router(router)