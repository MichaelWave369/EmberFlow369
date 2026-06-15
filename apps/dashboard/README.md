# EmberFlow369 Dashboard

The dashboard is the first visual cockpit for the EmberFlow369 loop:

```text
mock hazard signal -> risk score -> action card -> receipt -> JSON export bundle
```

## v0.4-alpha scope

This dashboard is intentionally small and local-first. It does not call live emergency feeds yet. It renders mock Northern California hazard signals through the dashboard demo engine and shows:

- active hazard signals
- risk state and score
- suggested action cards
- source tags
- generated receipt IDs
- claim/safety boundary reminders
- a browser-side JSON receipt export

## Run locally

From the repository root:

```bash
npm install
npm run dashboard
```

To verify the dashboard build:

```bash
npm run dashboard:build
```

## Receipt export

The export button downloads a JSON bundle containing:

- bundle metadata and version
- safety boundary text
- action cards
- receipt records
- source IDs
- claim tags
- raw mock signals

This is a prototype evidence artifact, not a signed official incident record.

## Safety boundary

EmberFlow369 is not an official emergency-alerting authority. Always follow official evacuation orders, emergency alerts, and local responder instructions.
