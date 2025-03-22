import React from "react";
import { CardList } from "./card-list";
import { CardItem } from "./card";

interface InvestmentSummaryProps {
  balance?: number;
  rewards?: number;
  rewardsRate?: number;
}

const InvestmentSummary = ({
  balance = 250000,
  rewards = 22500,
  rewardsRate = 4.5,
}: InvestmentSummaryProps) => {
  // Format currency with commas and dollar sign
  const formatCurrency = (amount: number) => {
    return `$${amount.toLocaleString()}`;
  };

  return (
    <div className="w-full mb-6">
      <div className="flex items-center justify-between p-4 ">
        <h2 className="text-xl font-semibold text-gray-90">Investment</h2>
      </div>

      <CardList>
        <CardItem>
          <div className="flex justify-between items-center">
            <span className="text-gray-900 font-medium">Current Balance</span>
            <span className="text-red-700 font-semibold">
              {formatCurrency(balance)}
            </span>
          </div>
        </CardItem>

        <CardItem>
          <div className="flex justify-between items-center">
            <span className="text-gray-900 font-medium">Rewards</span>
            <span className="text-teal-600 font-semibold">
              + {formatCurrency(rewards)}
            </span>
          </div>
        </CardItem>

        <CardItem>
          <div className="flex justify-between items-center">
            <span className="text-gray-900 font-medium">
              Current Rewards Balance
            </span>
            <span className="text-gray-900 font-semibold">{rewardsRate}%</span>
          </div>
        </CardItem>
      </CardList>
    </div>
  );
};

export default InvestmentSummary;
