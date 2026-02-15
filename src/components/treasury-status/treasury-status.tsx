import { DashboardSpeed02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

const metrics = [
  { label: "Current Stable", value: "79%", valueClassName: "text-[#0f172a]" },
  { label: "Recommended", value: "85%", valueClassName: "text-[#1e88e5]" },
  { label: "Hedge Coverage", value: "100%", valueClassName: "text-[#059669]" },
];

export function TreasuryStatus() {
  return (
    <article className="rounded-2xl border border-border-subtle bg-sidebar p-2" aria-label="Treasury Status">
      <header className="flex items-center gap-2 px-2">
        <HugeiconsIcon icon={DashboardSpeed02Icon} size={16} className="shrink-0 text-text-secondary" />
        <h2 className="text-16 leading-20 font-semibold tracking-0 text-text-secondary">
          Treasury Status
        </h2>
      </header>

      <div className="mt-2 rounded-lg bg-canvas p-4">
        <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
          <div className="flex max-w-[528px] flex-col gap-4">
            <p className="text-16 leading-24 font-semibold tracking-0 text-text-secondary">
              Stable liquidity is below optimal settlement threshold. Increasing stable reserves
              improves international settlement efficiency.
            </p>
            <p className="text-14 leading-20 font-semibold tracking-0 text-text-secondary">
              Non-stable assets deposited are automatically protected via FX hedge.
            </p>
          </div>

          <div className="flex shrink-0 divide-x divide-sidebar whitespace-nowrap">
            {metrics.map((metric, index) => (
              <div
                key={metric.label}
                className={index === 0 ? "px-2 text-right" : "px-6 text-right"}
              >
                <p className="text-14 leading-16 font-semibold tracking-0 text-[#64748b]">{metric.label}</p>
                <p className={`mt-1 text-24 leading-32 font-semibold tracking-0 ${metric.valueClassName}`}>
                  {metric.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
