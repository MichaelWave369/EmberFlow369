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

The formula is deliberately simple for the first prototype. Every factor should be inspectable, explainable, logged, and improved through after-action review.

## Current build: v0.3-alpha dashboard

The current runnable paths are:

```text
mock hazard signal -> risk score -> action card -> receipt
mock hazard signal -> visual dashboard card -> receipt/source tags
```

The dashboard uses mock data only. The goal is to prove the local reasoning loop, action-card shape, and receipt visibility before connecting live public data sources.

## Run the engine demo

```bash
npm install
npm run demo
```

The demo prints wildfire, flood, burn-scar/debris-flow, and road-closure mock scenarios. Each scenario produces:

- a risk score and color state
- a user-facing action card
- recommended actions
- an auditable hazard receipt

## Run the dashboard

```bash
npm install
npm run dashboard
```

The v0.3 dashboard renders mock Northern California hazard zones with:

- active signal cards
- risk score and risk state
- official-status override display
- action-card steps
- source tags
- receipt IDs
- safety boundary panel

## What EmberFlow369 is

EmberFlow369 is a repo-ready design and prototype foundation for:

- fire/flood hazard graph modeling
- public data-source integration planning
- household, RV, and neighborhood readiness profiles
- risk-state scoring
- action cards
- community witness reports
- receipt ledger records
- post-fire to winter-flood continuity tracking
- local dashboard visualization

## What EmberFlow369 is not

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
├── apps/
│   └── dashboard/
│       ├── README.md
│       ├── index.html
│       ├── package.json
│       ├── tsconfig.json
│       ├── vite.config.ts
│       └── src/
│           ├── App.tsx
│           ├── demoData.ts
│           ├── main.tsx
│           ├── styles.css
│           └── vite-env.d.ts
├── data/
│   └── mock-signals.json
├── docs/
│   ├── MASTER_SPEC_v0.1.md
│   ├── ARCHITECTURE.md
│   ├── RECEIPT_LEDGER.md
│   ├── MVP_BACKLOG.md
│   ├── SPRINT_v0.2.md
│   ├── DATA_MODEL_v0.2.md
│   ├── DASHBOARD_v0.3.md
│   └── sprints/
│       └── v0.3-alpha-dashboard.md
├── schemas/
│   ├── action-card.schema.json
│   ├── hazard-receipt.schema.json
│   └── witness-report.schema.json
└── src/
    ├── actionCards.ts
    ├── demo.ts
    ├── mockSignals.ts
    ├── receipts.ts
    ├── risk.ts
    └── types.ts
```

## Claim discipline

Every public claim should be tagged:

- `official` — from emergency authority or government source
- `sensor` — from gauge, camera, weather station, satellite, or device feed
- `satellite` — from satellite-derived observation
- `forecast` — from forecast model or forecast office
- `witness` — from human report
- `inferred` — computed by EmberFlow369
- `estimated` — approximate or model-derived value
- `unknown` — not yet verified
- `disputed` — contradicted or under review

See [`CLAIMS.md`](CLAIMS.md) and [`SAFETY.md`](SAFETY.md).

## Project status

Current status: **v0.3-alpha dashboard prototype**

Next milestone: connect the dashboard to shared engine output and add JSON receipt export from the UI.

## License

License is currently **TBD** by the repo owner.
