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

export type ActionCard = {
  id: string;
  createdAt: string;
  expiresAt?: string | null;
  zoneId: string;
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
  sourceIds: string[];
  claimTags: ClaimTag[];
  confidence: ConfidenceState;
  status: 'active' | 'stale' | 'superseded' | 'disputed' | 'retracted';
  summary: string;
  riskFactors?: (RiskInputs & { score: number; state: RiskState }) | null;
  supersedes?: string | null;
  supersededBy?: string | null;
};
