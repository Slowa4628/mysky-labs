#!/usr/bin/env sh
set -eu

: "${MYSKY_API_BASE:?Set MYSKY_API_BASE, for example https://api.example.com}"
: "${MYSKY_API_KEY:?Set MYSKY_API_KEY}"

curl -sS -X POST "$MYSKY_API_BASE/v1/engine/run" \
  -H "Content-Type: application/json" \
  -H "X-API-Key: $MYSKY_API_KEY" \
  --data '{
    "mode": "moon_at",
    "datetime": "2026-10-02T12:00:00Z",
    "observer": { "lat": 56.7476, "lon": 35.6039, "height_m": 0 },
    "engine": "advanced"
  }'
