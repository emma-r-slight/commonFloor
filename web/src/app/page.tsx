// app/page.tsx
// import Header from "./components/header";
import Sidebar from "./components/sidebar";
import { mockTransactions } from "@/lib/mock-transactions";
import { TransactionList } from "@/app/components/transaction-list";

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 ml-64 p-8">
        {/* <Header /> */}
        <div className="flex flex-col gap-[32px] items-start">
          <h1 className="text-2xl font-bold">Body Corporate DAO Dashboard</h1>

          {/* Stats Section */}
          <section className="w-full mb-8">
            <h2 className="text-xl font-semibold mb-4">Stats</h2>
            <div className="bg-gray-200 h-32 rounded-lg w-full"></div>
          </section>

          {/* Latest Proposals Section */}
          <section className="w-full mb-8">
            <h2 className="text-xl font-semibold mb-4">Latest proposals</h2>
            <div className="bg-gray-200 p-6 rounded-lg">
              <div className="space-y-4">
                {[1, 2, 3, 4].map((item) => (
                  <div
                    key={item}
                    className="border-b border-gray-300 pb-4"
                  ></div>
                ))}
              </div>
            </div>
          </section>

          {/* Transactions Section */}
          <section className="w-full">
            <TransactionList transactions={mockTransactions} limit={4} />
          </section>
        </div>
      </main>
    </div>
  );
}
