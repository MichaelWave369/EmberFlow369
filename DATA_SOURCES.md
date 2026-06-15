# EmberFlow369 Data Source Strategy

EmberFlow369 v0.1 should start with public, official, and well-labeled data sources. Each integration must preserve source identity, timestamp, confidence, and limitations.

## Source classes

| Class | Examples | Use |
| --- | --- | --- |
| Official incident | CAL FIRE, county emergency management, local sheriff/OES, emergency alerts | Authority layer, evacuation/order awareness. |
| Weather forecast | NWS alerts, forecast discussions, precipitation/wind forecasts | Fire weather, atmospheric river, flood watch context. |
| Hydrology | CDEC, USGS gauges, river forecast centers | Creek, river, reservoir, stage/flow, rainfall, flood timing. |
| Satellite fire | NASA FIRMS, VIIRS/MODIS detections | Active fire signal and broad situational awareness. |
| Camera/sensor | ALERTCalifornia, local cameras, rain gauges, creek sensors | Visual/sensor confirmation where available. |
| Air/smoke | AirNow, PurpleAir-style local sensors where permitted | Smoke and air-quality awareness. |
| Infrastructure | road closures, power outages, shelters, local utilities | Local action and route planning context. |
| Community witness | trusted local reports | Fast local awareness, never treated as official by default. |

## Ingestion principles

Every source adapter should preserve:

- source name
- source URL or identifier
- retrieval time
- source event time if available
- geographic scope
- data license/terms note
- freshness window
- confidence default
- known limitations

## Freshness windows

Initial guidance only; each source adapter should define its own freshness rules.

| Data type | Suggested stale threshold |
| --- | --- |
| official evacuation/order | until superseded or canceled |
| fire incident perimeter | 30-120 minutes depending on source |
| satellite hotspot | 15 minutes to several hours depending on feed |
| wind/rain forecast | when next forecast cycle replaces it |
| rain gauge | 15-60 minutes |
| stream gauge | 15-60 minutes |
| witness report | 15-90 minutes unless reconfirmed |
| road closure | until superseded or source expires |

## v0.1 integration posture

Start with mock adapters and clearly documented real-source targets. Do not imply a real feed is live until the adapter exists, is tested, and is labeled.

## Suggested adapter shape

```ts
type SourceAdapter = {
  id: string;
  name: string;
  class: 'official' | 'sensor' | 'forecast' | 'satellite' | 'witness' | 'infrastructure';
  status: 'planned' | 'mock' | 'experimental' | 'live' | 'deprecated';
  fetch: () => Promise<SourceRecord[]>;
};
```

## Data licensing rule

Before committing real ingestion code, verify the source terms, attribution requirements, rate limits, and redistribution constraints.

## Human-readable source labels

A user should never have to guess where a recommendation came from. Every card should say something like:

> Based on NWS forecast + local rain gauge + USGS gauge trend. Not an official evacuation order.
