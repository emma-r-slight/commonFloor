import { ReactNode } from "react";

export function CardItem({ children }: { children: ReactNode }) {
  return (
    <div
      className="
        bg-white rounded-xl
        py-4 px-6
      "
    >
      {children}
    </div>
  );
}
