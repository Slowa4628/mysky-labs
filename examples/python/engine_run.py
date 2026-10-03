import os
import requests

base_url = os.environ["MYSKY_API_BASE"].rstrip("/")
api_key = os.environ["MYSKY_API_KEY"]
payload = {
    "mode": "moon_at",
    "datetime": "2026-10-02T12:00:00Z",
    "observer": {"lat": 56.7476, "lon": 35.6039, "height_m": 0},
    "engine": "advanced",
}
response = requests.post(
    f"{base_url}/v1/engine/run",
    json=payload,
    headers={"X-API-Key": api_key},
    timeout=15,
)
response.raise_for_status()
print(response.json())
