const baseUrl = process.env.MYSKY_API_BASE?.replace(/\/$/, "");
const apiKey = process.env.MYSKY_API_KEY;
if (!baseUrl || !apiKey) throw new Error("Set MYSKY_API_BASE and MYSKY_API_KEY.");

const response = await fetch(`${baseUrl}/v1/engine/run`, {
  method: "POST",
  headers: { "Content-Type": "application/json", "X-API-Key": apiKey },
  body: JSON.stringify({
    mode: "moon_at",
    datetime: "2026-10-02T12:00:00Z",
    observer: { lat: 56.7476, lon: 35.6039, height_m: 0 },
    engine: "advanced",
  }),
});
if (!response.ok) throw new Error(await response.text());
console.log(await response.json());
