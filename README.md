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

## Current build: v0.5-alpha GitHub Pages dashboard

The current runnable paths are:

```text
mock hazard signal -> risk score -> action card -> receipt
mock hazard signal -> visual dashboard card -> receipt/source tags -> JSON export bundle
push to main -> build dashboard -> publish to GitHub Pages
```

The dashboard uses mock data only. The goal is to prove the local reasoning loop, action-card shape, receipt visibility, exportable evidence bundle, and public static deployment path before connecting live public data sources.

## Live dashboard

Expected GitHub Pages URL:

```text
https://michaelwave369.github.io/EmberFlow369/
```

If the page is not live yet, open the repository settings and set:

```text
Settings -> Pages -> Build and deployment -> Source -> GitHub Actions
```

Then push to `main` or run the `Deploy EmberFlow369 Dashboard to GitHub Pages` workflow manually.

See [`docs/GITHUB_PAGES.md`](docs/GITHUB_PAGES.md).

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

## Run the dashboard locally

```bash
npm install
npm run dashboard
```

The v0.5 dashboard renders mock Northern California hazard zones with:

- active signal cards
- risk score and risk state
- official-status override display
- action-card steps
- source tags
- receipt IDs
- a JSON receipt export button
- safety boundary panel
- GitHub Pages deploy workflow

Use `npm run dashboard:build` to typecheck and build the dashboard.
Use `npm run dashboard:preview` to preview the built dashboard locally.

## What the receipt export contains

The browser export is a prototype JSON evidence bundle. It includes:

- bundle metadata and version
- safety boundary text
- action-card records
- receipt records
- risk score and risk state
- source IDs
- claim tags
- raw mock signals

This is not a signed ledger or official incident archive yet. It is the first UI-level proof that the cockpit can turn visible local risk cards into portable review artifacts.

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
- exportable evidence bundles
- public static dashboard deployment

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
├── .github/
│   └── workflows/
│       ├── ci.yml
│       └── pages.yml
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
│           ├── exportBundle.ts
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
│   ├── GITHUB_PAGES.md
│   └── sprints/
│       ├── v0.3-alpha-dashboard.md
│       ├── v0.4-alpha-receipt-export.md
│       └── v0.5-alpha-github-pages.md
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

Current status: **v0.5-alpha GitHub Pages dashboard prototype**

Next milestone: add an in-app receipt viewer/diff so hosted users can inspect evidence bundles before downloading JSON.

## License

License is currently **TBD** by the repo owner.
