# EmberFlow369 Sprint v0.2

## Sprint name

**Mock Signal -> Risk -> Action -> Receipt**

## Goal

Turn the v0.1 design foundation into the smallest runnable prototype path.

```text
mock hazard signal -> calculate risk -> generate action card -> create receipt
```

## What this sprint adds

- Shared TypeScript types for hazard signals, zones, action cards, and receipts.
- A risk kernel using the v0.1 formula.
- An action-card generator that converts local risk state into plain-language next steps.
- A receipt creator that records the source signal, score, action card, confidence, and claim tags.
- Mock wildfire, flood, burn-scar/debris-flow, and road-closure signals.
- A demo command that prints the complete pipeline.

## Run it

```bash
npm install
npm run demo
```

## Safety boundary

This sprint uses mock data only.

The demo is not an official alert. It must not be used for emergency decisions. It is a prototype for source labeling, local readiness modeling, action-card language, and receipt generation.

## Acceptance checklist

- [x] Mock signals exist.
- [x] Risk score is computed from inspectable factors.
- [x] Official-status overrides can raise risk state.
- [x] Action cards include safety disclaimer text.
- [x] Receipts include signal ID, source IDs, claim tags, confidence, score, state, and action-card ID.
- [x] `npm run demo` is available.

## Next sprint options

1. Add a small web dashboard that renders the demo output.
2. Add JSON schema validation for signals, action cards, and receipts.
3. Add zone profiles for home, RV, family, route, creek, and burn-scar watch areas.
4. Add export support for incident packets.
5. Add the first read-only connector adapter interface for public data sources.
