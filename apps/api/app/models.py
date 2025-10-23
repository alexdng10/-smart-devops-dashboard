from sqlalchemy import Column, Float, Integer, String
from .db import Base

class Metric(Base):
    """Model for build metrics."""
    __tablename__ = "metrics"
    id = Column(Integer, primary_key=True, index=True)
    build_id = Column(String, index=True)
    duration = Column(Float)
    tests_passed = Column(Integer)
    coverage = Column(Float)
    status = Column(String)