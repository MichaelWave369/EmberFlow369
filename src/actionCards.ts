import type { ActionCard, HazardSignal, RiskResult } from './types.js';

const SAFETY_DISCLAIMER =
  'EmberFlow369 is not an official alerting authority. Follow official emergency instructions, evacuation orders, road closures, and local public-safety guidance.';

export function createActionCard(signal: HazardSignal, risk: RiskResult, now = new Date()): ActionCard {
  const createdAt = now.toISOString();
  const type = chooseActionType(signal, risk);

  return {
    id: createId('card', signal.id, createdAt),
    createdAt,
    expiresAt: null,
    zoneId: signal.zoneId,
    signalId: signal.id,
    type,
    riskState: risk.state,
    title: createTitle(signal, risk, type),
    body: createBody(signal, risk),
    recommendedActions: recommendedActions(signal, risk, type),
    sourceIds: signal.sourceIds,
    confidence: signal.confidence,
    officialStatus: signal.officialStatus,
    receiptId: null,
    disclaimer: SAFETY_DISCLAIMER,
  };
}

function chooseActionType(signal: HazardSignal, risk: RiskResult): ActionCard['type'] {
  if (signal.officialStatus === 'order' || signal.officialStatus === 'warning' || signal.officialStatus === 'shelter_in_place') {
    return 'official_instruction';
  }

  if (signal.officialStatus === 'road_closure' || signal.hazardKind === 'road') {
    return 'avoid';
  }

  if (risk.state === 'orange' || risk.state === 'red' || risk.state === 'black') {
    return 'prepare';
  }

  if (signal.confidence === 'unverified') {
    return 'verify';
  }

  return 'watch';
}

function createTitle(signal: HazardSignal, risk: RiskResult, type: ActionCard['type']): string {
  if (type === 'official_instruction') return `Official-status signal: ${formatHazard(signal.hazardKind)} risk is ${risk.state}`;
  if (type === 'avoid') return `Avoidance card: ${formatHazard(signal.hazardKind)} risk is ${risk.state}`;
  if (type === 'prepare') return `Prepare card: ${formatHazard(signal.hazardKind)} risk is ${risk.state}`;
  if (type === 'verify') return `Verify card: ${formatHazard(signal.hazardKind)} report needs confirmation`;
  return `Watch card: ${formatHazard(signal.hazardKind)} conditions are ${risk.state}`;
}

function createBody(signal: HazardSignal, risk: RiskResult): string {
  return `${signal.summary} Risk scored ${risk.score} and mapped to ${risk.state}. Source label: ${signal.sourceLabel}.`;
}

function recommendedActions(signal: HazardSignal, risk: RiskResult, type: ActionCard['type']): string[] {
  const actions: string[] = [];

  if (type === 'official_instruction') {
    actions.push('Check and follow official emergency channels immediately.');
    actions.push('Do not treat this prototype as the authority source.');
  }

  if (type === 'avoid') {
    actions.push('Avoid the affected route or low-risk-confidence area until confirmed clear.');
    actions.push('Use official road-closure and evacuation-route information before travel.');
  }

  if (type === 'prepare' || risk.state === 'orange' || risk.state === 'red' || risk.state === 'black') {
    actions.push('Prepare meds, documents, chargers, pet supplies, water, and vehicle fuel.');
    actions.push('Check neighbors, family members, RV readiness, and alternate routes if safe to do so.');
  }

  if (signal.hazardKind === 'flood' || signal.hazardKind === 'debris_flow') {
    actions.push('Avoid low-water crossings, drainage channels, and steep burn-scar runoff paths.');
  }

  if (signal.hazardKind === 'wildfire' || signal.hazardKind === 'smoke') {
    actions.push('Monitor smoke, wind direction, evacuation routes, and indoor air quality.');
  }

  if (type === 'verify') {
    actions.push('Seek a second source before treating the report as confirmed.');
  }

  if (actions.length === 0) {
    actions.push('Monitor conditions and keep source receipts attached.');
  }

  return [...new Set(actions)];
}

function formatHazard(kind: HazardSignal['hazardKind']): string {
  return kind.replace('_', ' ');
}

function createId(prefix: string, signalId: string, createdAt: string): string {
  const safeTimestamp = createdAt.replace(/[^0-9]/g, '').slice(0, 14);
  return `${prefix}_${signalId}_${safeTimestamp}`;
}
