# EmberFlow369

**Fire + Flood Resilience Mesh for California communities**

EmberFlow369 is a claim-safe, public, software-first resilience system for communities facing wildfire, smoke, atmospheric rivers, flooding, debris flows, road closures, evacuation stress, and post-fire winter risk.

The project does **not** replace emergency services, evacuation orders, CAL FIRE, county emergency management, NWS alerts, FEMA/IPAWS, or local officials. It adds the missing layer many people need:

> local awareness + clear action cards + source receipts + community witness reports.

## Core thesis

Wildfire and flooding should not be treated as separate worlds. A wildfire can change the winter flood and debris-flow behavior of the same hillside, creek, road, RV park, neighborhood, or evacuation corridor. EmberFlow369 keeps that continuity visible.

## Operating loop

```text
Sense -> Fuse -> Localize -> Act -> Verify -> Learn
```

## Master formula

```text
Risk = Hazard x Exposure x Vulnerability x TimePressure / VerifiedReadiness
```

The formula is deliberately simple for v0.1. Every factor should be inspectable, explainable, logged, and improved through after-action review.

## What v0.1 is

EmberFlow369 v0.1 is a repo-ready design and prototype foundation for:

- fire/flood hazard graph modeling
- public data-source integration planning
- household, RV, and neighborhood readiness profiles
- risk-state scoring
- action cards
- community witness reports
- receipt ledger records
- post-fire to winter-flood continuity tracking

## What v0.1 is not

EmberFlow369 is not:

- an official alerting authority
- an evacuation-order system
- a disaster prediction guarantee
- a replacement for 911, CAL FIRE, county emergency management, NWS, FEMA/IPAWS, or local agencies
- a place to spread unverified rumors

Official life-safety instructions must always override local suggestions and model outputs.

## Repository map

```text
.
├── README.md
├── CLAIMS.md
├── SAFETY.md
├── DATA_SOURCES.md
├── ROADMAP.md
├── CONTRIBUTING.md
├── docs/
│   ├── MASTER_SPEC_v0.1.md
│   ├── ARCHITECTURE.md
│   ├── RECEIPT_LEDGER.md
│   └── MVP_BACKLOG.md
├── schemas/
│   ├── action-card.schema.json
│   ├── hazard-receipt.schema.json
│   └── witness-report.schema.json
└── src/
    ├── risk.ts
    └── types.ts
```

## First practical build

The first working prototype should be a local hazard dashboard that lets a user define important places, then produces plain-language cards such as:

- **Watch:** smoke detected nearby, wind unfavorable, monitor official channels.
- **Prepare:** pack meds, pet supplies, chargers, IDs, documents, and fuel vehicle.
- **Avoid:** low-water crossing or road closure risk.
- **Act:** official evacuation or life-safety instruction surfaced from authority layer.

Every card should include source receipts and confidence labels.

## Claim discipline

Every public claim should be tagged:

- `official` — from emergency authority or government source
- `sensor` — from gauge, camera, weather station, satellite, or device feed
- `forecast` — from forecast model or forecast office
- `witness` — from human report
- `inferred` — computed by EmberFlow369
- `unknown` — not yet verified

See [`CLAIMS.md`](CLAIMS.md) and [`SAFETY.md`](SAFETY.md).

## Project status

Current status: **v0.1 scaffold / design foundation**

The next milestone is a minimal local dashboard with mock data, schemas, risk scoring, action cards, and a receipt export.

## License

License is currently **TBD** by the repo owner.
