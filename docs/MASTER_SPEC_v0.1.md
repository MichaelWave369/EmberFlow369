# EmberFlow369 v0.1 Master System Specification

## Subtitle

Fire + Flood Resilience Mesh

## Status

Public scaffold / design foundation. This document is a markdown companion to the v0.1 master specification.

## 1. Executive summary

EmberFlow369 is a practical fire-and-flood resilience mesh for California communities living with wildfire, smoke, atmospheric rivers, flooding, debris flows, road closures, and evacuation stress.

The core insight is simple: fire and flood risk are connected. Fire can remove vegetation, alter soils, damage infrastructure, and turn later rain into elevated runoff, debris-flow, and mudflow risk. The system should remember that relationship instead of resetting between seasons.

EmberFlow369 starts as a software-first, public, transparent project. It turns existing official data, public sensors, forecasts, satellite signals, and community reports into local risk states, action cards, and auditable receipts.

## 2. Claim boundary

EmberFlow369 is not an official emergency alerting authority. It must not replace CAL FIRE, county emergency management, FEMA/IPAWS, NWS, local law enforcement, fire departments, emergency medical services, or 911.

The system may:

- support preparedness
- surface official information with source labels
- explain local risk factors
- generate local action cards
- document source receipts
- support after-action learning

The system must not:

- invent official orders
- guarantee safety
- predict disaster with certainty
- hide uncertainty
- treat unverified witness reports as official truth

## 3. Master formula

```text
Risk = Hazard x Exposure x Vulnerability x TimePressure / VerifiedReadiness
```

### Factor meanings

- **Hazard:** intensity or likelihood of fire, flood, smoke, debris flow, wind, rainfall, or related threat.
- **Exposure:** people, structures, roads, RVs, pets, livestock, utilities, and assets in the affected zone.
- **Vulnerability:** access constraints, mobility, fuel load, drainage weakness, communication gaps, or limited preparation.
- **TimePressure:** how fast conditions are changing and how little time remains for safe action.
- **VerifiedReadiness:** confirmed preparation such as packed go-bags, fuel, route plan, contact plan, cleared drains, and official-channel monitoring.

## 4. Operating loop

```text
Sense -> Fuse -> Localize -> Act -> Verify -> Learn
```

- **Sense:** gather official, sensor, forecast, satellite, and witness signals.
- **Fuse:** keep signals separate but compare them.
- **Localize:** translate broad events into local zones, routes, creeks, ridges, homes, RV parks, and community assets.
- **Act:** produce plain-language action cards.
- **Verify:** record source receipts, confidence, and outcomes.
- **Learn:** improve thresholds and playbooks after incidents.

## 5. Architecture layers

1. **Source adapters** — planned connectors for official, forecast, hydrology, satellite, sensor, infrastructure, and witness sources.
2. **Hazard graph** — local graph of places, routes, watersheds, ridges, creeks, drains, structures, and dependencies.
3. **Risk fusion engine** — inspectable scoring and confidence assignment.
4. **Action-card engine** — plain-language, source-labeled recommendations.
5. **Receipt ledger** — append-only event history for review.
6. **Community witness mode** — structured local reports with verification states.
7. **Fire-to-flood continuity layer** — post-burn seasonal carryover into winter flood/debris-flow risk.
8. **Privacy and governance layer** — consent, minimization, abuse prevention, and correction policy.

## 6. MVP product scope

The v0.1 MVP should work with mock data first.

### Required features

- define local places and routes
- load mock fire and flood signals
- calculate a transparent risk score
- assign risk state: green, yellow, orange, red, black
- generate action cards
- attach source receipts
- create witness reports
- export ledger JSON
- show official-vs-local distinction

### Risk states

| State | Meaning |
| --- | --- |
| Green | Normal monitoring. |
| Yellow | Watch conditions. |
| Orange | Prepare now. |
| Red | Act on urgent instructions or local safety plan. |
| Black | Life-safety emergency context; official instructions dominate. |

## 7. Fire module

The fire module should eventually consider:

- ignition proximity
- incident status
- wind direction and speed
- terrain/ridge exposure
- fuel and vegetation context
- evacuation route exposure
- smoke plume context
- ember exposure indicators
- power outage and utility risks

## 8. Flood module

The flood module should eventually consider:

- rainfall intensity and duration
- upstream gauge trends
- creek/river stage and rate of rise
- burn scar proximity
- culvert and drainage weak points
- road low points
- soil saturation indicators
- reservoir and release context where applicable

## 9. Fire-to-flood continuity

When a fire occurs, EmberFlow369 should create a seasonal continuity record:

- burn area
- downstream creeks and road crossings
- slopes and debris channels
- drainage and culvert watch points
- rainfall thresholds to monitor
- winter preparedness cards
- after-action records

## 10. Receipt ledger

Every important system output should produce a receipt with:

- timestamp
- location or zone
- source records
- risk inputs
- computed state
- confidence
- action card
- official instruction status
- stale/superseded markers
- outcome notes when available

## 11. Governance

The governance model is simple:

- no hidden authority claims
- no fake certainty
- no unsafe witness incentives
- no sensitive data exposure by default
- no deletion of corrected history
- every promotion in confidence needs a receipt

## 12. Next build target

Build a local prototype that can run with mock data and demonstrate the full loop:

```text
mock hazard signal -> risk score -> action card -> receipt export
```
