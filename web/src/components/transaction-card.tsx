"use client";

import React from "react";
import { ArrowUpCircle } from "lucide-react";
import { CardItem } from "./card";

const TRANSACTION_TYPES = {
  withdraw: {
    iconClass: "rotate-90",
    colorClass: "text-red-700",
    bgClass: "bg-red-50",
  },
  send: {
    iconClass: "rotate-90",
    colorClass: "text-red-700",
    bgClass: "bg-red-50",
  },
  deposit: {
    iconClass: "-rotate-90",
    colorClass: "text-teal-600",
    bgClass: "bg-teal-50",
  },
  stake: {
    iconClass: "",
    colorClass: "text-amber-600",
    bgClass: "bg-amber-50",
  },
};

export type TransactionType = "withdraw" | "send" | "deposit" | "stake";

export interface Transaction {
  id: string;
  type: TransactionType;
  description: string;
  amount: number;
  currency: string;
  timestamp: Date;
}

interface TransactionCardProps {
  transaction: Transaction;
}

const TransactionCard: React.FC<TransactionCardProps> = ({ transaction }) => {
  const transactionConfig = TRANSACTION_TYPES[transaction.type];

  // Format amount with appropriate sign
  const isNegative = ["withdraw", "send", "stake"].includes(transaction.type);
  const formattedAmount = `${isNegative ? "-" : "+"}$${Math.abs(
    transaction.amount
  ).toLocaleString()} ${transaction.currency}`;

  return (
    <CardItem>
      <div className="flex items-center justify-between ">
        <div className="flex items-center space-x-3">
          <ArrowUpCircle
            className={`w-10 h-10 ${transactionConfig.colorClass} ${transactionConfig.iconClass} transition-transform`}
          />

          <div>
            <h3 className="font-semibold text-gray-900 capitalize">
              {transaction.type}
            </h3>
            <p className="text-sm text-gray-600">{transaction.description}</p>
          </div>
        </div>
        <span
          className={`font-medium ${
            isNegative ? "text-red-700" : "text-teal-600"
          }`}
        >
          {formattedAmount}
        </span>
      </div>
    </CardItem>
  );
};

export default TransactionCard;
