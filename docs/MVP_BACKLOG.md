# EmberFlow369 MVP Backlog

## MVP goal

Demonstrate the full trust loop with mock data:

```text
mock source signal -> local risk score -> action card -> receipt export
```

## Epic 1 — Profiles and zones

- [ ] Create a local place profile type.
- [ ] Support home, RV, work, family, route, creek, culvert, and community node categories.
- [ ] Add readiness fields: go-bag, fuel, meds, pet kit, documents, route plan, contact plan.

## Epic 2 — Mock source records

- [ ] Mock fire incident signal.
- [ ] Mock wind signal.
- [ ] Mock smoke signal.
- [ ] Mock rainfall signal.
- [ ] Mock stream gauge signal.
- [ ] Mock road closure signal.
- [ ] Mock witness report.

## Epic 3 — Risk engine

- [ ] Implement inspectable formula.
- [ ] Add factor validation.
- [ ] Convert score to green/yellow/orange/red/black state.
- [ ] Include official instruction override state.
- [ ] Add unit tests.

## Epic 4 — Action cards

- [ ] Generate watch card.
- [ ] Generate prepare card.
- [ ] Generate avoid card.
- [ ] Generate verify card.
- [ ] Generate official-instruction card when official source exists.
- [ ] Attach receipt IDs.

## Epic 5 — Receipt ledger

- [ ] Create append-only in-memory ledger.
- [ ] Export JSON.
- [ ] Mark stale records.
- [ ] Create correction/supersession flow.
- [ ] Create after-action notes.

## Epic 6 — Witness mode

- [ ] Structured witness report form.
- [ ] Confidence states: unverified, observed, multi-source, official-confirmed, stale, superseded.
- [ ] Safety prompt before submission.
- [ ] Location precision controls.
- [ ] Abuse-prevention notes.

## Epic 7 — Demo UI

- [ ] Basic dashboard.
- [ ] Risk factor view.
- [ ] Action card list.
- [ ] Source receipt panel.
- [ ] Export button.
- [ ] Clear disclaimer and official-channel reminder.

## First sprint recommendation

Build the engine and receipt loop before the map.

1. `src/types.ts`
2. `src/risk.ts`
3. mock fixtures
4. action-card generator
5. ledger export
6. basic UI after the data loop works
