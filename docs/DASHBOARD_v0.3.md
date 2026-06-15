# EmberFlow369 Dashboard v0.3-alpha

The v0.3 dashboard is the first visual cockpit for EmberFlow369.

## What it shows

- Four mock Northern California hazard signals.
- Risk scores derived from hazard, exposure, vulnerability, time pressure, and readiness factors.
- Official-status override behavior for evacuation warnings, warnings, watches, and road closures.
- Action cards with plain-language preparedness steps.
- Receipt IDs and source tags for each card.
- A visible safety boundary.

## Current dashboard loop

```text
mock signal -> risk score -> risk state -> action card -> receipt reference -> source tags
```

## Run command

```bash
npm install
npm run dashboard
```

## Next dashboard step

The next sprint should connect the dashboard to shared package code instead of duplicating the demo scoring logic locally. After that, add file export for JSON receipts.
