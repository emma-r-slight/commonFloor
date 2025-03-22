import React from "react";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { CardList } from "./card-list";
import { CardItem } from "./card";

// Types for our proposals
interface Proposal {
  id: string;
  title: string;
  author: string;
  timeLeft: string;
  yesVotes?: number;
  noVotes?: number;
  vendorCount?: number;
}

const CommunityProposals = () => {
  // Sample data based on the image
  const proposals: Proposal[] = [
    {
      id: "1",
      title:
        "Proposal for professional gardening services to enhance our beautiful garden",
      author: "janedoe",
      timeLeft: "6d left",
      vendorCount: 3,
    },
    {
      id: "2",
      title: "Move investment from EtherFi to Lido for better rate",
      author: "janedoe",
      timeLeft: "8d left",
      yesVotes: 6,
      noVotes: 4,
    },
  ];

  return (
    <div className="w-full">
      <h1 className="text-2xl font-bold mb-4">
        What&apos;s happening in your community
      </h1>

      {/* Active Proposals Section */}
      <div className="">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center mb-4">
            <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
            <h2 className="text-lg font-bold">Active Proposals</h2>
          </div>
          <Link
            href="/proposals"
            className="text-primary font-medium flex items-center"
          >
            View all <ChevronRight className="w-4 h-4 ml-1" />
          </Link>
        </div>

        <CardList>
          {proposals.map((proposal) => (
            <ProposalCard key={proposal.id} proposal={proposal} />
          ))}
        </CardList>
      </div>
    </div>
  );
};

const ProposalCard = ({ proposal }: { proposal: Proposal }) => {
  return (
    <CardItem>
      <div className="w-full">
        <h3 className="font-medium text-gray-900 mb-1">{proposal.title}</h3>
        <div className="flex items-center justify-between">
          <div className="text-gray-600 text-sm">
            @{proposal.author} {proposal.timeLeft}
          </div>

          {proposal.vendorCount !== undefined ? (
            <div className="text-gray-700 font-medium">
              {proposal.vendorCount} vendors
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <span className="text-teal-600 font-medium">
                {proposal.yesVotes} Yay
              </span>
              <span className="text-red-600 font-medium">
                {proposal.noVotes} Nah
              </span>
            </div>
          )}
        </div>
      </div>
    </CardItem>
  );
};

export default CommunityProposals;
