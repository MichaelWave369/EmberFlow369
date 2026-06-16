import { dashboardScenarios, type DashboardRiskState, type DashboardScenario } from './demoData';
import { buildReceiptExportBundle, downloadReceiptExport } from './exportBundle';

const stateLabels: Record<DashboardRiskState, string> = {
  green: 'Green / Normal',
  yellow: 'Yellow / Watch',
  orange: 'Orange / Prepare',
  red: 'Red / Act',
  black: 'Black / Official life-safety priority'
};

function formatToken(value: string) {
  return value.replace(/_/g, ' ');
}

const sortedScenarios = [...dashboardScenarios].sort((a, b) => b.riskScore - a.riskScore);

function StatePill({ state }: { state: DashboardRiskState }) {
  return <span className={`state-pill state-${state}`}>{stateLabels[state]}</span>;
}

function SignalCard({ scenario }: { scenario: DashboardScenario }) {
  const { signal } = scenario;

  return (
    <article className="signal-card">
      <div className="card-header">
        <div>
          <p className="eyebrow">{formatToken(signal.hazardKind)}</p>
          <h3>{signal.zoneName}</h3>
        </div>
        <StatePill state={scenario.riskState} />
      </div>

      <p className="summary">{signal.summary}</p>

      <div className="metric-grid" aria-label="Risk factors">
        <div><span>Risk score</span><strong>{scenario.riskScore}</strong></div>
        <div><span>Confidence</span><strong>{Math.round(signal.confidence * 100)}%</strong></div>
        <div><span>Official status</span><strong>{formatToken(signal.officialStatus)}</strong></div>
        <div><span>Observed</span><strong>{new Date(signal.observedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</strong></div>
      </div>

      <section className="actions">
        <h4>Action card</h4>
        <ol>
          {scenario.actions.map((action) => <li key={action}>{action}</li>)}
        </ol>
      </section>

      <section className="receipt-box">
        <div>
          <span>Action card</span>
          <code>{scenario.actionCardId}</code>
        </div>
        <div>
          <span>Receipt</span>
          <code>{scenario.receiptId}</code>
        </div>
      </section>

      <div className="sources" aria-label="Source tags">
        {signal.sourceIds.map((sourceId) => <span key={sourceId}>{sourceId}</span>)}
      </div>
    </article>
  );
}

export function App() {
  const highest = sortedScenarios[0];
  const receiptCount = sortedScenarios.length;
  const activeZones = new Set(sortedScenarios.map((scenario) => scenario.signal.zoneName)).size;

  const handleReceiptExport = () => {
    downloadReceiptExport(buildReceiptExportBundle(sortedScenarios));
  };

  return (
    <main className="dashboard-shell">
      <section className="hero-panel">
        <div>
          <p className="eyebrow">EmberFlow369 v0.5-alpha GitHub Pages</p>
          <h1>Fire + Flood Resilience Cockpit</h1>
          <p className="hero-copy">
            A local-first visual demo of the EmberFlow369 loop: sense, fuse, localize, act, verify, and learn.
          </p>
        </div>
        <aside className="safety-panel">
          <strong>Safety boundary</strong>
          <p>This demo is not an official emergency alert. Always follow official evacuation orders and local responder instructions.</p>
        </aside>
      </section>

      <section className="summary-grid" aria-label="Dashboard summary">
        <div><span>Highest zone</span><strong>{highest.signal.zoneName}</strong></div>
        <div><span>Highest state</span><strong>{stateLabels[highest.riskState]}</strong></div>
        <div><span>Active zones</span><strong>{activeZones}</strong></div>
        <div><span>Receipts</span><strong>{receiptCount}</strong></div>
      </section>

      <section className="flow-strip" aria-label="EmberFlow processing loop">
        <span>Mock signal</span>
        <span>Risk score</span>
        <span>Action card</span>
        <span>Receipt</span>
        <span>Export bundle</span>
        <span>GitHub Pages</span>
      </section>

      <section className="export-panel" aria-label="Receipt export">
        <div>
          <p className="eyebrow">Receipt export</p>
          <h2>Download the current mock evidence bundle</h2>
          <p>
            Exports the visible dashboard scenarios as JSON with action cards, receipt records, source IDs, claim tags, raw mock signals, and the safety boundary.
          </p>
        </div>
        <button className="export-button" type="button" onClick={handleReceiptExport}>
          Export receipts JSON
        </button>
      </section>

      <section className="cards-grid" aria-label="Hazard action cards">
        {sortedScenarios.map((scenario) => <SignalCard key={scenario.signal.id} scenario={scenario} />)}
      </section>
    </main>
  );
}
