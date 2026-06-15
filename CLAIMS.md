# EmberFlow369 Claim Boundary

EmberFlow369 must stay claim-safe from the first commit.

## Primary boundary

EmberFlow369 is a decision-support, preparedness, awareness, documentation, and local resilience tool. It is **not** an official emergency alerting system and must never present itself as one.

## Official authority rule

When official instructions exist, they take priority over every other layer:

1. evacuation order
2. evacuation warning
3. shelter-in-place instruction
4. road closure
5. emergency alert
6. official incident update
7. forecast/advisory/watch/warning
8. local sensor or witness evidence
9. EmberFlow369 inference

## Claim tags

Every visible claim should carry one or more tags.

| Tag | Meaning |
| --- | --- |
| `official` | Emergency authority, public agency, or government source. |
| `sensor` | Gauge, camera, weather station, satellite, or device feed. |
| `forecast` | Forecast model or official forecast office. |
| `witness` | Human report from a community member. |
| `inferred` | Computed by EmberFlow369 from source inputs. |
| `estimated` | Approximate value, not a measured value. |
| `unknown` | Not yet verified or not enough evidence. |
| `disputed` | Conflicting sources exist. |

## Confidence states

| State | Meaning |
| --- | --- |
| `unverified` | Single input, no corroboration. |
| `observed` | Direct source or human witness exists. |
| `multi-source` | Two or more independent signals align. |
| `official-confirmed` | Confirmed by an official source. |
| `stale` | Source may be too old for life-safety use. |
| `superseded` | Newer record replaced this one. |

## Public wording rules

Use wording like:

- "This source reports..."
- "This sensor indicates..."
- "This witness report is unverified..."
- "This is a local preparedness suggestion, not an official order..."
- "Official instruction overrides this card."

Avoid wording like:

- "You are safe."
- "You must evacuate" unless quoting/surfacing an official order.
- "The fire will not reach you."
- "This flood will happen."
- "EmberFlow369 predicts disaster with certainty."

## Promotion rule

A claim can only move upward in confidence if the receipt ledger records:

- source identity
- timestamp
- evidence type
- location or area of relevance
- confidence before and after
- reason for promotion
- actor or process that promoted it

## Correction rule

If a claim is wrong, stale, disputed, or superseded, do not delete the history. Mark it clearly and create a superseding receipt.
