import type { OfficialStatus, RiskInputs, RiskResult, RiskState } from './types';

const MIN_READINESS = 0.1;

export function calculateRisk(inputs: RiskInputs): RiskResult {
  const readiness = Math.max(inputs.verifiedReadiness, MIN_READINESS);
  const rawScore =
    (inputs.hazard * inputs.exposure * inputs.vulnerability * inputs.timePressure) / readiness;

  const score = round(rawScore, 3);
  const state = officialOverride(inputs.officialStatus) ?? scoreToRiskState(score);

  const explanation = [
    `hazard=${inputs.hazard}`,
    `exposure=${inputs.exposure}`,
    `vulnerability=${inputs.vulnerability}`,
    `timePressure=${inputs.timePressure}`,
    `verifiedReadiness=${readiness}`,
    `score=${score}`,
    `state=${state}`,
  ];

  if (inputs.officialStatus && inputs.officialStatus !== 'none') {
    explanation.push(`officialStatus=${inputs.officialStatus}`);
  }

  return { score, state, explanation };
}

export function scoreToRiskState(score: number): RiskState {
  if (score < 1) return 'green';
  if (score < 4) return 'yellow';
  if (score < 9) return 'orange';
  if (score < 16) return 'red';
  return 'black';
}

export function officialOverride(status: OfficialStatus = 'none'): RiskState | null {
  switch (status) {
    case 'order':
    case 'shelter_in_place':
      return 'black';
    case 'road_closure':
      return 'red';
    case 'warning':
      return 'red';
    case 'watch':
      return 'orange';
    case 'none':
    case 'unknown':
    default:
      return null;
  }
}

function round(value: number, decimals: number): number {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}

export const exampleRisk = calculateRisk({
  hazard: 2.5,
  exposure: 2,
  vulnerability: 1.5,
  timePressure: 2,
  verifiedReadiness: 1,
  officialStatus: 'none',
});
