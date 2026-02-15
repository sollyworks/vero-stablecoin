import { Badge } from "@/components/badge/badge";
import { LiquiditySnapshot } from "@/components/liquidity-snapshot/liquidity-snapshot";
import { RecentActivity } from "@/components/recent-activity/recent-activity";
import { Sidebar } from "@/components/sidebar/sidebar";
import { PageHeader } from "@/components/page-header/page-header";

export default function Home() {
  return (
    <main className="flex h-dvh overflow-hidden bg-canvas">
      <Sidebar />
      <section
        className="min-h-0 flex-1 overflow-y-auto px-8 pb-6 pt-4"
        aria-label="Main content"
      >
        <PageHeader />

        <div className="mt-6 rounded-2xl border border-border-subtle bg-surface p-8">
          <div className="flex flex-wrap items-end gap-4">
            <div className="flex min-w-[280px] flex-1 flex-col gap-6">
              <div className="flex w-full max-w-[282px] flex-col gap-2">
                <p className="text-16 leading-24 font-semibold tracking-0 text-text-secondary">
                  Available Liquidity
                </p>
                <p className="text-40 leading-40 font-semibold tracking-0 text-text-primary">
                  R$ 124.320,33
                </p>
              </div>

              <p className="text-14 leading-20 font-semibold tracking-0 text-text-secondary">
                Total liquidity available for international settlements
              </p>
            </div>

            <div className="flex min-w-[280px] flex-1 flex-col items-end gap-2">
              <Badge label="Hedge Coverage: 100%" size="large" tone="positive" />
              <p className="text-right text-12 leading-14 font-semibold tracking-0 text-text-secondary">
                100% of non-stable assets protected against FX volatility
              </p>
            </div>
          </div>
        </div>

        <div className="mt-2 grid gap-2 xl:grid-cols-4">
          <article className="h-[136px] rounded-2xl border border-border-subtle bg-surface p-6">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <p className="text-12 leading-12 font-semibold tracking-0 text-text-secondary">
                  Stablecoins
                </p>
                <p className="text-20 leading-24 font-semibold tracking-0 text-text-primary">
                  R$ 45.234,22
                </p>
              </div>

              <p className="text-12 leading-14 font-semibold tracking-0 text-text-secondary">
                USDC &amp; USDT Reserves
              </p>
            </div>
          </article>

          <article className="relative h-[136px] rounded-2xl border border-border-subtle bg-surface p-6">
            <div className="absolute right-2 top-2">
              <Badge label="Settled" size="small" tone="positive" />
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <p className="text-12 leading-12 font-semibold tracking-0 text-text-secondary">
                  Non-Stable Assets
                </p>
                <p className="text-20 leading-24 font-semibold tracking-0 text-text-primary">
                  R$ 45.234,22
                </p>
              </div>

              <p className="text-12 leading-14 font-semibold tracking-0 text-text-secondary">
                Assets awaiting stable conversion or protected via hedge
              </p>
            </div>
          </article>

          <article className="h-[136px] rounded-2xl border border-border-subtle bg-surface p-6">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <p className="text-12 leading-12 font-semibold tracking-0 text-text-secondary">
                  In Route / Pending
                </p>
                <p className="text-20 leading-24 font-semibold tracking-0 text-text-primary">
                  R$ 45.234,22
                </p>
              </div>

              <p className="text-12 leading-14 font-semibold tracking-0 text-text-secondary">
                Clearing through settlement network
              </p>
            </div>
          </article>

          <article className="h-[136px] rounded-2xl border border-border-subtle bg-surface p-6">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <p className="text-12 leading-12 font-semibold tracking-0 text-text-secondary">
                  Hedge Coverage %
                </p>
                <p className="text-20 leading-24 font-semibold tracking-0 text-text-primary">
                  100%
                </p>
              </div>

              <p className="text-12 leading-14 font-semibold tracking-0 text-status-success-fg">
                No FX Exposure
              </p>
            </div>
          </article>
        </div>

        <div className="mt-6 grid gap-6 xl:grid-cols-[755px_414px]">
          <RecentActivity />
          <LiquiditySnapshot />
        </div>
      </section>
    </main>
  );
}
