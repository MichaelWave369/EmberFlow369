# EmberFlow369 Data Model v0.2

## Purpose

The v0.2 data model keeps the prototype small, explainable, and claim-safe.

Everything starts as a `HazardSignal`, becomes a `RiskResult`, produces an `ActionCard`, and is preserved as a `HazardReceipt`.

## Main entities

### HazardSignal

A localized input event. In v0.2 this can be mock data, but future versions can map official feeds, sensors, forecasts, satellites, and witness reports into the same shape.

Key fields:

- `id`
- `observedAt`
- `hazardKind`
- `zoneId`
- `summary`
- `sourceKind`
- `sourceLabel`
- `sourceIds`
- `claimTags`
- `confidence`
- `officialStatus`
- `metrics`

### RiskInputs

The inspectable risk factors.

```text
Risk = Hazard x Exposure x Vulnerability x TimePressure / VerifiedReadiness
```

All fields should be visible in receipts.

### RiskResult

The computed score, state, and explanation strings.

Risk states:

```text
green -> yellow -> orange -> red -> black
```

### ActionCard

A plain-language card for a local zone. Action cards must include a safety disclaimer and source IDs.

### HazardReceipt

An auditable record of what the prototype saw, how it scored it, what action card it generated, and which claim tags/confidence labels were attached.

## Claim tags

- `official`
- `sensor`
- `satellite`
- `forecast`
- `witness`
- `inferred`
- `estimated`
- `unknown`
- `disputed`

## Confidence states

- `unverified`
- `observed`
- `multi-source`
- `official-confirmed`
- `stale`
- `superseded`

## Design principle

The model should prefer boring, inspectable records over impressive but unclear outputs.
