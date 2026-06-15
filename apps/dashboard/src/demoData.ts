export type DashboardRiskState = 'green' | 'yellow' | 'orange' | 'red' | 'black';
export type HazardKind = 'wildfire' | 'flood' | 'debris_flow' | 'road_closure';
export type OfficialStatus = 'none' | 'watch' | 'warning' | 'evacuation_warning' | 'evacuation_order' | 'shelter_in_place' | 'road_closure';

export interface DemoHazardSignal {
  id: string;
  hazardKind: HazardKind;
  zoneName: string;
  summary: string;
  hazard: number;
  exposure: number;
  vulnerability: number;
  timePressure: number;
  verifiedReadiness: number;
  confidence: number;
  officialStatus: OfficialStatus;
  sourceIds: string[];
  observedAt: string;
}

export interface DashboardScenario {
  signal: DemoHazardSignal;
  riskScore: number;
  riskState: DashboardRiskState;
  actionCardId: string;
  receiptId: string;
  actions: string[];
}

const clamp = (value: number, min: number, max: number): number => Math.min(Math.max(value, min), max);

const scoreToState = (score: number): DashboardRiskState => {
  if (score >= 95) return 'black';
  if (score >= 70) return 'red';
  if (score >= 45) return 'orange';
  if (score >= 20) return 'yellow';
  return 'green';
};

const applyOfficialOverride = (state: DashboardRiskState, officialStatus: OfficialStatus): DashboardRiskState => {
  if (officialStatus === 'evacuation_order' || officialStatus === 'shelter_in_place') return 'black';
  if (officialStatus === 'evacuation_warning' || officialStatus === 'road_closure') return state === 'black' ? state : 'red';
  if (officialStatus === 'warning') return state === 'green' || state === 'yellow' ? 'orange' : state;
  if (officialStatus === 'watch') return state === 'green' ? 'yellow' : state;
  return state;
};

const calculateRiskScore = (signal: DemoHazardSignal): number => {
  const readiness = Math.max(signal.verifiedReadiness, 0.1);
  const raw = (signal.hazard * signal.exposure * signal.vulnerability * signal.timePressure) / readiness;
  return Math.round(clamp(raw * 100, 0, 100));
};

const actionsFor = (signal: DemoHazardSignal, state: DashboardRiskState): string[] => {
  if (signal.officialStatus === 'evacuation_order') {
    return [
      'Follow the official evacuation order immediately.',
      'Use official routes and avoid unverified shortcuts.',
      'Take medications, IDs, pets, chargers, and essential documents if they are ready.'
    ];
  }

  if (signal.officialStatus === 'road_closure') {
    return [
      'Avoid the closed road or crossing.',
      'Check official transportation and county channels before rerouting.',
      'Do not drive through flooded or debris-covered roadways.'
    ];
  }

  if (signal.hazardKind === 'wildfire') {
    return state === 'red' || state === 'black'
      ? [
          'Prepare to leave or leave if directed by officials.',
          'Move vehicles toward a safer outbound route if safe to do so.',
          'Pack go-bags, pet supplies, medications, and critical documents.'
        ]
      : [
          'Monitor official fire updates and wind changes.',
          'Charge phones and confirm go-bag location.',
          'Review two evacuation routes from this zone.'
        ];
  }

  if (signal.hazardKind === 'flood' || signal.hazardKind === 'debris_flow') {
    return state === 'red' || state === 'black'
      ? [
          'Move away from low crossings, creek banks, and drainage paths.',
          'Move vehicles and critical items to higher ground if safe.',
          'Do not attempt to clear drains or culverts during dangerous flow.'
        ]
      : [
          'Monitor rainfall intensity and nearby gauges.',
          'Keep storm drains clear only if conditions are safe.',
          'Prepare a higher-ground route before water rises.'
        ];
  }

  return ['Review official updates and avoid the affected area.'];
};

const buildScenario = (signal: DemoHazardSignal): DashboardScenario => {
  const riskScore = calculateRiskScore(signal);
  const riskState = applyOfficialOverride(scoreToState(riskScore), signal.officialStatus);

  return {
    signal,
    riskScore,
    riskState,
    actionCardId: `card-${signal.id}`,
    receiptId: `receipt-${signal.id}`,
    actions: actionsFor(signal, riskState)
  };
};

export const demoSignals: DemoHazardSignal[] = [
  {
    id: 'norcal-fire-ridge-001',
    hazardKind: 'wildfire',
    zoneName: 'North Ridge / Wildland Edge',
    summary: 'Wind-aligned wildfire signal near a ridge zone with moderate household readiness.',
    hazard: 0.82,
    exposure: 0.74,
    vulnerability: 0.61,
    timePressure: 0.78,
    verifiedReadiness: 0.48,
    confidence: 0.72,
    officialStatus: 'evacuation_warning',
    sourceIds: ['mock-cal-fire-feed', 'mock-camera-watch', 'mock-local-zone-profile'],
    observedAt: '2026-06-15T20:30:00-07:00'
  },
  {
    id: 'norcal-creek-rise-002',
    hazardKind: 'flood',
    zoneName: 'Creekside Low Crossing',
    summary: 'Rapid water rise at a low crossing after heavy rainfall.',
    hazard: 0.66,
    exposure: 0.69,
    vulnerability: 0.58,
    timePressure: 0.64,
    verifiedReadiness: 0.54,
    confidence: 0.68,
    officialStatus: 'watch',
    sourceIds: ['mock-usgs-gauge', 'mock-nws-rainfall', 'mock-community-report'],
    observedAt: '2026-06-15T20:35:00-07:00'
  },
  {
    id: 'burn-scar-flow-003',
    hazardKind: 'debris_flow',
    zoneName: 'Burn Scar Drainage Path',
    summary: 'Post-fire drainage path flagged for debris-flow readiness after intense rainfall.',
    hazard: 0.79,
    exposure: 0.65,
    vulnerability: 0.74,
    timePressure: 0.71,
    verifiedReadiness: 0.41,
    confidence: 0.63,
    officialStatus: 'warning',
    sourceIds: ['mock-burn-scar-layer', 'mock-rain-threshold', 'mock-slope-model'],
    observedAt: '2026-06-15T20:42:00-07:00'
  },
  {
    id: 'road-closure-004',
    hazardKind: 'road_closure',
    zoneName: 'County Road 12 Crossing',
    summary: 'Road closure report blocks one outbound route from a low-lying zone.',
    hazard: 0.52,
    exposure: 0.83,
    vulnerability: 0.49,
    timePressure: 0.59,
    verifiedReadiness: 0.62,
    confidence: 0.81,
    officialStatus: 'road_closure',
    sourceIds: ['mock-county-roads', 'mock-community-witness-2'],
    observedAt: '2026-06-15T20:48:00-07:00'
  }
];

export const dashboardScenarios = demoSignals.map(buildScenario);
