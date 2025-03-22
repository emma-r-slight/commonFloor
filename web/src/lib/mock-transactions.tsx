// app/lib/mockData.ts
import { Transaction } from "@/app/components/transaction-card";

// Sample transaction data based on the example image
export const mockTransactions: Transaction[] = [
  {
    id: "tx-001",
    type: "withdraw",
    description: "Motion #001",
    amount: 5000,
    currency: "NZDD",
    timestamp: new Date(2025, 2, 15), // March 15, 2025
  },
  {
    id: "tx-002",
    type: "send",
    description: "Water bill",
    amount: 1200,
    currency: "NZDD",
    timestamp: new Date(2025, 2, 10), // March 10, 2025
  },
  {
    id: "tx-003",
    type: "deposit",
    description: "Annual body corp fee",
    amount: 2200,
    currency: "NZD",
    timestamp: new Date(2025, 2, 5), // March 5, 2025
  },
  {
    id: "tx-004",
    type: "stake",
    description: "Staking pool",
    amount: 2200,
    currency: "NZD",
    timestamp: new Date(2025, 2, 1), // March 1, 2025
  },
  {
    id: "tx-005",
    type: "deposit",
    description: "Interest earned",
    amount: 125,
    currency: "NZD",
    timestamp: new Date(2025, 1, 28), // February 28, 2025
  },
  {
    id: "tx-006",
    type: "send",
    description: "Electricity bill",
    amount: 850,
    currency: "NZDD",
    timestamp: new Date(2025, 1, 25), // February 25, 2025
  },
];
