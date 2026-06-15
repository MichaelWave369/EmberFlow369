import { createActionCard } from './actionCards';
import { mockSignals } from './mockSignals';
import { createHazardReceipt } from './receipts';
import { calculateRisk } from './risk';

function main(): void {
  console.log('EmberFlow369 v0.2 mock signal -> risk -> action -> receipt demo');
  console.log('SAFETY: This demo uses mock data only and is not an official emergency alert.');
  console.log('');

  const output = mockSignals.map((signal) => {
    const risk = calculateRisk(signal.metrics);
    const actionCard = createActionCard(signal, risk);
    const receipt = createHazardReceipt(signal, risk, actionCard);

    return {
      signal,
      risk,
      actionCard: {
        ...actionCard,
        receiptId: receipt.id,
      },
      receipt,
    };
  });

  for (const item of output) {
    console.log('---');
    console.log(`${item.signal.id} | ${item.signal.hazardKind} | ${item.risk.state.toUpperCase()} | score=${item.risk.score}`);
    console.log(item.actionCard.title);
    for (const action of item.actionCard.recommendedActions) {
      console.log(`- ${action}`);
    }
    console.log(`receipt=${item.receipt.id}`);
  }

  console.log('');
  console.log('Full JSON output:');
  console.log(JSON.stringify(output, null, 2));
}

main();
