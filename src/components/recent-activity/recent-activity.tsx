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

      <table className="w-full table-fixed border-collapse">
        <thead>
          <tr className="h-8 bg-[#f5f3ef]">
            <th
              className="w-[188px] px-4 text-left text-12 leading-14 font-semibold tracking-0 text-text-secondary"
              scope="col"
            >
              Entity / Reference
            </th>
            <th
              className="w-[165px] px-4 text-left text-12 leading-14 font-semibold tracking-0 text-text-secondary"
              scope="col"
            >
              Operational Type
            </th>
            <th
              className="w-[96px] px-4 text-left text-12 leading-14 font-semibold tracking-0 text-text-secondary"
              scope="col"
            >
              Status
            </th>
            <th
              className="px-4 text-right text-12 leading-14 font-semibold tracking-0 text-text-secondary"
              scope="col"
            >
              Amount
            </th>
          </tr>
        </thead>
        <tbody>
          {activityItems.map((item, index) => (
            <tr key={`${item.reference}-${index}`} className="h-[68px]">
              <td className="align-top px-4 py-4">
                <div className="flex flex-col gap-2">
                  <p className="text-14 leading-16 font-semibold tracking-0 text-text-secondary">
                    {item.reference}
                  </p>
                  <p className="text-12 leading-12 font-semibold tracking-0 text-text-subtle">
                    {item.timestamp}
                  </p>
                </div>
              </td>
              <td className="align-top px-4 py-4">
                <p className="text-14 leading-16 font-medium tracking-0 text-text-secondary">
                  <span className="block">{item.operation[0]}</span>
                  <span className="block">{item.operation[1]}</span>
                </p>
              </td>
              <td className="align-top px-4 py-4">
                <Badge label={item.status} size="small" tone={item.statusTone} />
              </td>
              <td className="align-top px-4 py-4 text-right">
                <p className="text-14 leading-16 font-semibold tracking-0 text-text-primary">
                  {item.amount}
                </p>
                <p className="mt-2 text-12 leading-12 font-semibold tracking-0 text-text-subtle">
                  {item.currency}
                </p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </article>
  );
}
