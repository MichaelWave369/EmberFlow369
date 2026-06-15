# EmberFlow369 Receipt Ledger

The receipt ledger is the trust layer. It records what the system saw, what it inferred, what it recommended, and what later changed.

## Ledger principles

- Append first, correct with superseding receipts.
- Preserve source identity and timestamps.
- Keep official, sensor, forecast, witness, and inferred claims separate.
- Mark stale and disputed records visibly.
- Make after-action review possible.

## Receipt types

| Type | Purpose |
| --- | --- |
| source | Raw or normalized source event. |
| risk | Risk score and factor breakdown. |
| action | Generated action card. |
| witness | Community witness report. |
| correction | Correction, downgrade, dispute, or supersession. |
| outcome | What happened later, when known. |

## Minimal receipt fields

```json
{
  "id": "receipt_001",
  "type": "risk",
  "createdAt": "2026-06-15T00:00:00.000Z",
  "zoneId": "home_zone",
  "sourceIds": ["source_001"],
  "claimTags": ["sensor", "inferred"],
  "confidence": "multi-source",
  "status": "active",
  "summary": "Risk moved from yellow to orange due to rain intensity and stream rise.",
  "supersedes": null
}
```

## Risk receipt details

A risk receipt should store:

- hazard
- exposure
- vulnerability
- time pressure
- verified readiness
- computed risk score
- risk state
- factor explanation
- source IDs
- stale-data notes

## Action receipt details

An action receipt should store:

- action card ID
- title
- action type
- user-facing wording
- official instruction status
- confidence
- source IDs
- generated time
- expiration or review time

## Correction receipts

Corrections are not shame. They are part of the trust system.

Correction reasons:

- stale
- superseded
- wrong location
- duplicate
- conflicting source
- witness retracted
- official update changed context
- system bug

## After-action review

After an incident, the ledger should help answer:

- What was known first?
- Which source changed the risk state?
- Were local suggestions aligned with official instructions?
- Which data went stale?
- Which witness reports helped?
- Which cards were confusing?
- What should be changed before next season?
