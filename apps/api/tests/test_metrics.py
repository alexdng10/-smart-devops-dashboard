from fastapi.testclient import TestClient
from apps.api.app.main import app

client = TestClient(app)

def test_create_metric_requires_fields():
    response = client.post("/metrics", json={})
    assert response.status_code == 422

def test_create_metric_ok_201():
    response = client.post("/metrics", json={"build_id": "123", "duration": 10.5, "tests_passed": 100, "coverage": 85.0, "status": "success"})
    assert response.status_code == 201
    data = response.json()
    assert "id" in data
    assert "build_id" in data
    assert "duration" in data
    assert "tests_passed" in data
    assert "coverage" in data
    assert "status" in data
    assert data["build_id"] == "123"

def test_list_metrics_ok_array():
    client.post("/metrics", json={"build_id": "123", "duration": 10.5, "tests_passed": 100, "coverage": 85.0, "status": "success"})
    response = client.get("/metrics")
    assert response.status_code == 200
    data = response.json()
    assert isinstance(data, list)
    assert len(data) >= 1
    assert data[0]["build_id"] == "123"