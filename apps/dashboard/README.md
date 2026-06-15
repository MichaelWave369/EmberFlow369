# EmberFlow369 Dashboard

The dashboard is the first visual cockpit for the EmberFlow369 loop:

```text
mock hazard signal -> risk score -> action card -> receipt
```

## v0.3-alpha scope

This dashboard is intentionally small and local-first. It does not call live emergency feeds yet. It renders mock Northern California hazard signals through the shared engine and shows:

- active hazard signals
- risk state and score
- suggested action cards
- source tags
- generated receipt IDs
- claim/safety boundary reminders

## Run locally

From the repository root:

```bash
npm install
npm run dashboard
```

## Safety boundary

EmberFlow369 is not an official emergency-alerting authority. Always follow official evacuation orders, emergency alerts, and local responder instructions.
