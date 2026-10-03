# API integration notes

The authoritative machine-readable contract is [`../openapi/openapi.yaml`](../openapi/openapi.yaml). The JSON artifact is generated from the same YAML source.

## Time and location

- Submit moments as ISO 8601 with a timezone offset; UTC `Z` is preferred.
- Submit an IANA time zone such as `Europe/Moscow` when the endpoint supports `tz`.
- Latitude is −90…90; longitude is −180…180.
- Invalid input must be treated as a `400` response; clients should not silently replace an invalid date with the current time.

## Result status

Every calculation result exposes `meta`. Treat `meta.status` and engine/version identifiers as authoritative. `stub` and `unavailable` are not verified Advanced calculations.

## Rate limits and keys

Use `X-API-Key` only in a request header. Never place it in a browser URL, source code, public issue, screenshot or log. Handle `429` and respect `Retry-After`.
