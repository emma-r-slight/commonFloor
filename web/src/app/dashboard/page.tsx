// app/page.tsx
"use client";
// import Header from "./components/header";
import Sidebar from "@/components/sidebar";
import { mockTransactions } from "@/lib/mock-transactions";
import { TransactionList } from "@/components/transaction-list";
import { ArrowRightLeft, BellRing } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CardItem } from "@/components/card";
import Image from "next/image";
import CommunityProposals from "@/components/community-proposals";
import InvestmentSummary from "@/components/investment-summary";
import { useAccount } from "wagmi";
import { useRouter } from "next/navigation";

export default function Home() {
  const { isConnected } = useAccount();
  const router = useRouter();

  if (!isConnected) {
    return router.push("/");
  }

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 ml-64 p-8">
        {/* <Header /> */}
        <div className="flex flex-col gap-[32px] items-start">
          <header className="w-full flex justify-between items-center ">
            <div className="flex gap-4 items-center">
              <h1 className="text-2xl font-bold">
                Pacific Surf Body Corporate
              </h1>
              <ArrowRightLeft />
            </div>
            <div className="flex gap-6 items-center">
              <BellRing /> <Button variant="primary">Proposal</Button>
            </div>
          </header>
          <section className="flex gap-8 w-full">
            <CardItem className="bg-teal-50">
              <div>
                <p className="text-sm text-gray-600">Total home owners</p>
                <h3 className="font-semibold text-gray-900 capitalize">
                  55 owners
                </h3>
              </div>
              <div>
                <p className="text-sm text-gray-600">Treasury balance</p>
                <h3 className="font-semibold text-gray-900 capitalize">
                  $450,000
                </h3>
              </div>
            </CardItem>
            <CardItem className="bg-yellow-50">
              <div>
                <p className="text-sm text-gray-600">Your unit number</p>
                <h3 className="font-semibold text-gray-900 capitalize">2A</h3>
              </div>
              <div>
                <p className="text-sm text-gray-600">
                  Voting power: <b>2,000 (80%)</b>
                </p>
                <p className="text-sm text-gray-600">
                  Delegated: <b>500 (20%)</b>
                </p>
              </div>
            </CardItem>
            <Image
              src="/apartment.png"
              width={400}
              height={200}
              alt="Apartment building"
            />
          </section>

          {/* Latest Proposals Section */}
          <section className="w-full mb-8">
            <CommunityProposals />
          </section>

          {/* Transactions Section */}
          <section className="w-full grid grid-cols-2 gap-8">
            <TransactionList transactions={mockTransactions} limit={4} />
            <InvestmentSummary />
          </section>
        </div>
      </main>
    </div>
  );
}
