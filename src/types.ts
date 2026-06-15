export type RiskState = 'green' | 'yellow' | 'orange' | 'red' | 'black';

export type ConfidenceState =
  | 'unverified'
  | 'observed'
  | 'multi-source'
  | 'official-confirmed'
  | 'stale'
  | 'superseded';

export type ClaimTag =
  | 'official'
  | 'sensor'
  | 'satellite'
  | 'forecast'
  | 'witness'
  | 'inferred'
  | 'estimated'
  | 'unknown'
  | 'disputed';

export type OfficialStatus =
  | 'none'
  | 'watch'
  | 'warning'
  | 'order'
  | 'shelter_in_place'
  | 'road_closure'
  | 'unknown';

export type HazardKind =
  | 'wildfire'
  | 'smoke'
  | 'flood'
  | 'debris_flow'
  | 'road'
  | 'utility'
  | 'weather';

export type SignalSourceKind =
  | 'official'
  | 'sensor'
  | 'satellite'
  | 'forecast'
  | 'witness'
  | 'derived'
  | 'mock';

export type RiskInputs = {
  hazard: number;
  exposure: number;
  vulnerability: number;
  timePressure: number;
  verifiedReadiness: number;
  officialStatus?: OfficialStatus;
};

export type RiskResult = {
  score: number;
  state: RiskState;
  explanation: string[];
};

export type LocationZone = {
  id: string;
  label: string;
  kind: 'home' | 'rv' | 'work' | 'family' | 'route' | 'community' | 'other';
  county?: string | null;
  notes?: string | null;
};

export type HazardSignal = {
  id: string;
  observedAt: string;
  hazardKind: HazardKind;
  zoneId: string;
  summary: string;
  sourceKind: SignalSourceKind;
  sourceLabel: string;
  sourceIds: string[];
  claimTags: ClaimTag[];
  confidence: ConfidenceState;
  officialStatus: OfficialStatus;
  metrics: RiskInputs;
};

export type ActionCard = {
  id: string;
  createdAt: string;
  expiresAt?: string | null;
  zoneId: string;
  signalId: string;
  type: 'watch' | 'prepare' | 'avoid' | 'verify' | 'official_instruction' | 'after_action';
  riskState: RiskState;
  title: string;
  body: string;
  recommendedActions: string[];
  sourceIds: string[];
  confidence: ConfidenceState;
  officialStatus: OfficialStatus;
  receiptId?: string | null;
  disclaimer: string;
};

export type HazardReceipt = {
  id: string;
  type: 'source' | 'risk' | 'action' | 'witness' | 'correction' | 'outcome';
  createdAt: string;
  sourceObservedAt?: string | null;
  zoneId: string;
  signalId?: string | null;
  actionCardId?: string | null;
  sourceIds: string[];
  claimTags: ClaimTag[];
  confidence: ConfidenceState;
  status: 'active' | 'stale' | 'superseded' | 'disputed' | 'retracted';
  summary: string;
  riskFactors?: (RiskInputs & { score: number; state: RiskState }) | null;
  supersedes?: string | null;
  supersededBy?: string | null;
};
