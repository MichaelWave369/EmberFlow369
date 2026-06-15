import type { ActionCard, HazardReceipt, HazardSignal, RiskResult } from './types';

export function createHazardReceipt(
  signal: HazardSignal,
  risk: RiskResult,
  actionCard?: ActionCard,
  now = new Date(),
): HazardReceipt {
  const createdAt = now.toISOString();

  return {
    id: createId('receipt', signal.id, createdAt),
    type: actionCard ? 'action' : 'risk',
    createdAt,
    sourceObservedAt: signal.observedAt,
    zoneId: signal.zoneId,
    signalId: signal.id,
    actionCardId: actionCard?.id ?? null,
    sourceIds: signal.sourceIds,
    claimTags: normalizeClaimTags(signal),
    confidence: signal.confidence,
    status: 'active',
    summary: createSummary(signal, risk, actionCard),
    riskFactors: {
      ...signal.metrics,
      score: risk.score,
      state: risk.state,
    },
    supersedes: null,
    supersededBy: null,
  };
}

function normalizeClaimTags(signal: HazardSignal): HazardReceipt['claimTags'] {
  const tags = new Set(signal.claimTags);
  tags.add('inferred');
  return [...tags];
}

function createSummary(signal: HazardSignal, risk: RiskResult, actionCard?: ActionCard): string {
  const actionText = actionCard ? ` Action card ${actionCard.id} created with type ${actionCard.type}.` : '';
  return `${signal.hazardKind} signal ${signal.id} scored ${risk.score} with risk state ${risk.state}.${actionText}`;
}

function createId(prefix: string, signalId: string, createdAt: string): string {
  const safeTimestamp = createdAt.replace(/[^0-9]/g, '').slice(0, 14);
  return `${prefix}_${signalId}_${safeTimestamp}`;
}
