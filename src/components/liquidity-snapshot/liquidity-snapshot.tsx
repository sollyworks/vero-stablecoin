import { Alert02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

const allocationLegend = [
  {
    label: "Stablecoins",
    color: "bg-data-stable",
    ring: "shadow-[0px_0px_0px_2px_rgba(19,127,236,0.2)]",
    percent: "79.2%",
    detail: "Settlement Ready",
  },
  {
    label: "Non-Stable Assets",
    color: "bg-data-non-stable",
    ring: "shadow-[0px_0px_0px_2px_rgba(129,140,248,0.2)]",
    percent: "17.1%",
    detail: "Fully Hedged",
  },
  {
    label: "In Route",
    color: "bg-data-in-route",
    ring: "shadow-[0px_0px_0px_2px_#fff0d8]",
    percent: "3.7%",
    detail: "Pending Clearing",
  },
];

export function LiquiditySnapshot() {
  return (
    <article className="overflow-hidden rounded-2xl border border-border-subtle bg-surface">
      <header className="flex h-[52px] items-center border-b border-border-strong px-4">
        <h2 className="text-16 leading-20 font-semibold tracking-0 text-text-secondary">
          Liquidity Snapshot
        </h2>
      </header>

      <div className="flex flex-col gap-4 p-4">
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between text-12 leading-12 font-semibold tracking-0 text-text-secondary">
            <p>Liquidity Allocation</p>
            <p>100% Total</p>
          </div>

          <div className="flex h-6 overflow-hidden rounded-[6px]">
            {allocationLegend.map((item) => (
              <div
                key={item.label}
                className={`${item.color}`}
                style={{ width: item.percent }}
              />
            ))}
          </div>

          <p className="text-12 leading-16 font-normal tracking-0 text-text-secondary">
            Stable allocation reduces FX volatility and improves settlement
            predictability
          </p>
        </div>

        <div className="pb-4">
          <div className="flex flex-col gap-4">
            {allocationLegend.map((item) => (
              <div key={item.label} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span
                    className={`size-3 rounded-full ${item.color} ${item.ring}`}
                    aria-hidden="true"
                  />
                  <p className="text-14 leading-20 font-medium tracking-0 text-[#334155]">
                    {item.label}
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-14 leading-20 font-semibold tracking-0 text-text-secondary">
                    {item.percent}
                  </p>
                  <p className="text-12 leading-15 font-normal tracking-0 text-text-secondary">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4 rounded-lg border border-border-warning bg-warning-bg p-3">
            <HugeiconsIcon
              icon={Alert02Icon}
              size={16}
              className="shrink-0 text-warning-fg"
            />
            <p className="text-[11px] leading-[13.75px] font-medium tracking-0 text-warning-fg">
              Stable liquidity below recommended threshold for optimal settlement
              efficiency
            </p>
          </div>

          <div className="border-t border-[#f1f5f9] pt-[17px]">
            <button
              type="button"
              className="h-11 w-full rounded-[50px] border border-border-strong bg-surface text-14 leading-20 font-semibold tracking-0 text-text-secondary"
            >
              Generate Treasury Audit Report
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
