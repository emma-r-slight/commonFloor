// app/components/TransactionList.tsx
"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import TransactionCard, { Transaction } from "./transaction-card";
import { CardList } from "./card-list";

interface TransactionListProps {
  transactions: Transaction[];
  title?: string;
  viewAllLink?: string;
  limit?: number;
}

export const TransactionList: React.FC<TransactionListProps> = ({
  transactions,
  title = "Latest Transactions",
  viewAllLink = "/transactions",
  limit = 4,
}) => {
  // Only show the specified number of transactions
  const displayedTransactions = transactions.slice(0, limit);

  return (
    <div className="bg-white ">
      {/* Header */}
      <div className="flex items-center justify-between p-4 ">
        <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
        {viewAllLink && (
          <Link
            href={viewAllLink}
            className="flex items-center text-teal-600 hover:text-teal-700 transition-colors"
          >
            <span>View all</span> <ChevronRight className="w-5 h-5 ml-1" />
          </Link>
        )}
      </div>

      {/* Transactions */}
      <CardList>
        {displayedTransactions.length > 0 ? (
          displayedTransactions.map((transaction) => (
            <TransactionCard key={transaction.id} transaction={transaction} />
          ))
        ) : (
          <div className="p-6 text-center text-gray-500">
            No transactions found
          </div>
        )}
      </CardList>
    </div>
  );
};
