import { ArrowUp02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Badge } from "@/components/badge/badge";

type ActivityItem = {
  reference: string;
  timestamp: string;
  operation: [string, string];
  status: string;
  statusTone: "positive" | "attention";
  amount: string;
  currency: string;
};

const activityItems: ActivityItem[] = [
  {
    reference: "#TX-883921",
    timestamp: "Oct 24, 10:23 AM",
    operation: ["Supplier", "Settlement"],
    status: "Settled",
    statusTone: "positive",
    amount: "-$12,450.00",
    currency: "USDC",
  },
  {
    reference: "#TX-883921",
    timestamp: "Oct 24, 10:23 AM",
    operation: ["Liquidity", "Inbound"],
    status: "Processing",
    statusTone: "attention",
    amount: "+$4,669.62",
    currency: "USDT",
  },
  {
    reference: "#TX-883921",
    timestamp: "Oct 24, 10:23 AM",
    operation: ["FX Hedge", "Executed"],
    status: "Confirmed",
    statusTone: "positive",
    amount: "-$120.50",
    currency: "Fee",
  },
  {
    reference: "#TX-883921",
    timestamp: "Oct 24, 10:23 AM",
    operation: ["Liquidity", "Inbound"],
    status: "Processing",
    statusTone: "attention",
    amount: "+$4,669.62",
    currency: "USDT",
  },
  {
    reference: "#TX-883921",
    timestamp: "Oct 24, 10:23 AM",
    operation: ["Supplier", "Settlement"],
    status: "Settled",
    statusTone: "positive",
    amount: "-$12,450.00",
    currency: "USDC",
  },
  {
    reference: "#TX-883921",
    timestamp: "Oct 24, 10:23 AM",
    operation: ["FX Hedge", "Executed"],
    status: "Confirmed",
    statusTone: "positive",
    amount: "-$120.50",
    currency: "Fee",
  },
];

export function RecentActivity() {
  return (
    <article className="overflow-hidden rounded-2xl border border-border-subtle bg-surface">
      <header className="flex h-[52px] items-center justify-between border-b border-border-strong px-4">
        <h2 className="text-16 leading-20 font-semibold tracking-0 text-text-secondary">
          Recent Activity
        </h2>

        <button type="button" className="flex items-center gap-2">
          <span className="text-14 leading-16 font-semibold tracking-0 text-text-primary">
            Audit Log
          </span>
          <HugeiconsIcon icon={ArrowUp02Icon} size={16} className="rotate-90" />
        </button>
      </header>

      <div className="grid h-8 grid-cols-[188px_165px_96px_1fr] items-center bg-[#f5f3ef] px-4 text-12 leading-14 font-semibold tracking-0 text-text-secondary">
        <p>Entity / Reference</p>
        <p>Operational Type</p>
        <p>Status</p>
        <p className="text-right">Amount</p>
      </div>

      <div>
        {activityItems.map((item, index) => (
          <div
            key={`${item.reference}-${index}`}
            className="grid h-[68px] grid-cols-[188px_165px_96px_1fr] items-start px-4 py-4"
          >
            <div className="flex flex-col gap-2">
              <p className="text-14 leading-16 font-semibold tracking-0 text-text-secondary">
                {item.reference}
              </p>
              <p className="text-12 leading-12 font-semibold tracking-0 text-text-subtle">
                {item.timestamp}
              </p>
            </div>

            <p className="text-14 leading-16 font-medium tracking-0 text-text-secondary">
              <span className="block">{item.operation[0]}</span>
              <span className="block">{item.operation[1]}</span>
            </p>

            <div>
              <Badge label={item.status} size="small" tone={item.statusTone} />
            </div>

            <div className="text-right">
              <p className="text-14 leading-16 font-semibold tracking-0 text-text-primary">
                {item.amount}
              </p>
              <p className="mt-2 text-12 leading-12 font-semibold tracking-0 text-text-subtle">
                {item.currency}
              </p>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}
