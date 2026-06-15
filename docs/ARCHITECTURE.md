# EmberFlow369 Architecture

## System view

```text
External Sources
  -> Source Adapters
  -> Normalized Source Records
  -> Hazard Graph
  -> Risk Fusion Engine
  -> Action Card Engine
  -> Receipt Ledger
  -> Dashboard / Export / Community Review
```

## 1. Source adapters

Adapters convert outside signals into normalized records. v0.1 should use mock adapters first.

Source classes:

- official
- forecast
- hydrology
- satellite
- sensor
- infrastructure
- witness

## 2. Normalized source records

Every source record should answer:

- Who said this?
- When was it observed?
- When did EmberFlow369 retrieve it?
- What place or area does it apply to?
- Is it official, measured, forecast, witnessed, or inferred?
- How stale could it be?

## 3. Hazard graph

The hazard graph represents local reality as nodes and relationships.

Example nodes:

- home
- RV site
- workplace
- family location
- road segment
- creek
- culvert
- ridge
- burn scar
- shelter
- power corridor
- camera viewpoint
- rain gauge
- stream gauge

Example relationships:

- upstream_of
- downstream_of
- evacuation_route_for
- drains_to
- visible_from
- exposed_to_wind_from
- affected_by_burn_scar
- supplies_access_to

## 4. Risk fusion engine

The engine should be simple, inspectable, and testable.

```text
Risk = Hazard x Exposure x Vulnerability x TimePressure / VerifiedReadiness
```

Each factor should be stored separately. The UI should show why a score changed.

## 5. Action-card engine

Action cards translate risk into plain language.

Action card types:

- watch
- prepare
- avoid
- verify
- official instruction
- after-action

Each card must include:

- title
- local context
- recommended action
- source summary
- confidence
- timestamp
- official instruction status
- receipt ID

## 6. Receipt ledger

The receipt ledger is append-only by default. Corrections create superseding receipts instead of erasing the past.

Receipt categories:

- source receipt
- risk receipt
- action receipt
- witness receipt
- correction receipt
- after-action receipt

## 7. Privacy layer

Sensitive location and household data should be local-first when possible. Sharing should require user intent and visible scope.

## 8. Adapter lifecycle

| Status | Meaning |
| --- | --- |
| planned | documented but not implemented |
| mock | fake/demo data only |
| experimental | real feed in testing |
| live | active adapter with docs and tests |
| deprecated | no longer trusted or maintained |

## 9. Build sequence

1. Define schemas.
2. Implement risk function.
3. Generate mock source records.
4. Generate action cards.
5. Export receipts.
6. Build dashboard.
7. Add real adapters behind flags.
