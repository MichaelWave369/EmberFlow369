import type { DashboardRiskState, DashboardScenario } from './demoData';

export interface DashboardActionCardExport {
  id: string;
  hazardSignalId: string;
  zoneName: string;
  riskState: DashboardRiskState;
  riskScore: number;
  officialStatus: string;
  actions: string[];
  safetyBoundary: string;
}

export interface DashboardReceiptExportRecord {
  id: string;
  hazardSignalId: string;
  actionCardId: string;
  sourceIds: string[];
  claimTags: string[];
  confidence: number;
  riskScore: number;
  riskState: DashboardRiskState;
  generatedFrom: 'mock-dashboard-scenario';
}

export interface DashboardReceiptExportBundle {
  bundleId: string;
  generatedAt: string;
  project: 'EmberFlow369';
  version: 'v0.4-alpha';
  scope: 'mock-dashboard-receipt-export';
  safetyBoundary: string;
  scenarioCount: number;
  highestRiskState: DashboardRiskState;
  actionCards: DashboardActionCardExport[];
  receipts: DashboardReceiptExportRecord[];
  rawSignals: DashboardScenario['signal'][];
}

const safetyBoundary = 'This export is a mock preparedness artifact for prototype review. It is not an official emergency alert, evacuation order, or replacement for local responders.';

const claimTagsFor = (scenario: DashboardScenario): string[] => {
  const tags = ['inferred', 'estimated'];

  if (scenario.signal.officialStatus !== 'none') {
    tags.push('official-status-display');
  }

  if (scenario.signal.sourceIds.some((sourceId) => sourceId.includes('community') || sourceId.includes('witness'))) {
    tags.push('witness');
  }

  if (scenario.signal.sourceIds.some((sourceId) => sourceId.includes('gauge') || sourceId.includes('camera'))) {
    tags.push('sensor');
  }

  return tags;
};

export function buildReceiptExportBundle(scenarios: DashboardScenario[]): DashboardReceiptExportBundle {
  const generatedAt = new Date().toISOString();
  const sortedScenarios = [...scenarios].sort((a, b) => b.riskScore - a.riskScore);

  return {
    bundleId: `emberflow369-export-${generatedAt}`,
    generatedAt,
    project: 'EmberFlow369',
    version: 'v0.4-alpha',
    scope: 'mock-dashboard-receipt-export',
    safetyBoundary,
    scenarioCount: sortedScenarios.length,
    highestRiskState: sortedScenarios[0]?.riskState ?? 'green',
    actionCards: sortedScenarios.map((scenario) => ({
      id: scenario.actionCardId,
      hazardSignalId: scenario.signal.id,
      zoneName: scenario.signal.zoneName,
      riskState: scenario.riskState,
      riskScore: scenario.riskScore,
      officialStatus: scenario.signal.officialStatus,
      actions: scenario.actions,
      safetyBoundary
    })),
    receipts: sortedScenarios.map((scenario) => ({
      id: scenario.receiptId,
      hazardSignalId: scenario.signal.id,
      actionCardId: scenario.actionCardId,
      sourceIds: scenario.signal.sourceIds,
      claimTags: claimTagsFor(scenario),
      confidence: scenario.signal.confidence,
      riskScore: scenario.riskScore,
      riskState: scenario.riskState,
      generatedFrom: 'mock-dashboard-scenario'
    })),
    rawSignals: sortedScenarios.map((scenario) => scenario.signal)
  };
}

export function receiptExportFileName(generatedAt: string): string {
  return `emberflow369-receipts-${generatedAt.replace(/[:.]/g, '-')}.json`;
}

export function downloadReceiptExport(bundle: DashboardReceiptExportBundle): void {
  const json = JSON.stringify(bundle, null, 2);
  const blob = new Blob([json], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');

  link.href = url;
  link.download = receiptExportFileName(bundle.generatedAt);
  document.body.appendChild(link);
  link.click();
  link.remove();

  window.setTimeout(() => URL.revokeObjectURL(url), 0);
}
