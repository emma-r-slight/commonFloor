import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardItemProps {
  children: ReactNode;
  /** A Tailwind background class (e.g. "bg-red-500"). Defaults to white if not provided. */
  className?: string;
}

export function CardItem({ children, className }: CardItemProps) {
  return (
    <div className={cn("rounded-xl py-4 px-6 w-full bg-white", className)}>
      {children}
    </div>
  );
}
