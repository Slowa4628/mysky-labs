# My Sky Labs API

Public API contract, documentation and examples for **My Sky Labs** — astronomy tools for Moon details, eclipse catalogues and local sidereal time.

- Website: https://mysky.hearth.dpdns.org
- API documentation: https://mysky.hearth.dpdns.org/docs/api
- OpenAPI 3.0: [`openapi/openapi.json`](openapi/openapi.json)
- App: My Sky Labs is also available for iOS; the website and API documentation are the public web entry points.

## What is public here

This repository deliberately contains only the public integration surface:

- OpenAPI specification in YAML and JSON;
- copy-pasteable curl, JavaScript and Python examples;
- integration documentation and future public SDKs.

The private calculation engine, service implementation, infrastructure configuration, credentials, internal validation artefacts and product repository history are not included.

## Quick start

Set an API base URL and an API key issued for your integration:

```sh
export MYSKY_API_BASE="https://api.example.com"
export MYSKY_API_KEY="replace-with-your-key"
```

Then use one of the examples:

```sh
sh examples/curl/engine-run.sh
node examples/javascript/engine-run.mjs
python examples/python/engine_run.py
```

The current API may report `meta.status: "stub"` or `"unavailable"` when a requested private calculation module is not connected. Consumers must read `meta.status` and must not infer a verified Advanced result from the requested `engine` field.

## Repository layout

```text
openapi/    # API contract — YAML source and generated JSON artifact
examples/   # curl, JavaScript and Python requests
docs/       # integration notes
packages/   # future public SDKs or explicitly released components
```

## Future public code

This repository is designed to grow. A future SDK, client library or explicitly released part of the engine can be added under `packages/` with its own documentation, tests, license and versioning. Nothing is copied automatically from the private repository: every public module goes through a separate security, licensing and API-stability review.

## Contributing and security

Please read [CONTRIBUTING.md](CONTRIBUTING.md) before proposing changes. Do not open public issues with API keys, private data or calculation-engine source. Security concerns should follow [SECURITY.md](SECURITY.md).

## License

No open-source license has been granted yet. A license will be chosen before accepting third-party code or publishing reusable SDK source.
