import { ReactNode } from "react";

interface CardListProps {
  children: ReactNode;
}

export function CardList({ children }: CardListProps) {
  return (
    <div className="p-4 bg-slate-100 flex flex-col gap-[10px] rounded-[20px]">
      {children}
    </div>
  );
}
