import { TransactionList } from "@/components/transaction-list";
import { mockTransactions } from "@/lib/mock-transactions";

export default function Page() {
  return (
    <div>
      <TransactionList transactions={mockTransactions} />
    </div>
  );
}
