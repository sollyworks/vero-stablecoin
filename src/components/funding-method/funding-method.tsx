import {
  BankIcon,
  ChartRelationshipIcon,
  SecurityCheckIcon,
  TradeUpIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export function FundingMethod() {
  return (
    <section aria-label="Funding Method">
      <h2 className="text-[18px] leading-24 font-semibold tracking-0 text-text-secondary">
        Funding Method
      </h2>

      <div className="mt-4 grid gap-6 xl:grid-cols-2">
        <article className="flex h-[359px] flex-col items-center justify-between rounded-2xl border border-border-subtle bg-surface px-4 pb-6 pt-16 text-center">
          <div className="flex w-full flex-col items-center gap-6">
            <div className="flex items-center justify-center rounded-[72px] bg-canvas p-[14.5px]">
              <HugeiconsIcon icon={BankIcon} size={35} className="shrink-0 text-text-secondary" />
            </div>

            <div className="flex w-full flex-col items-center gap-2">
              <p className="text-[18px] leading-24 font-semibold tracking-0 text-text-primary">
                Bank Transfer
              </p>
              <p className="text-16 leading-24 font-semibold tracking-0 text-text-secondary">
                Fund via domestic or international wire transfer.
              </p>
            </div>
          </div>

          <p className="text-14 leading-20 font-medium tracking-0 text-text-secondary">
            1 - 3 Business Days
          </p>
        </article>

        <div className="flex flex-col items-center gap-[17px]">
          <article className="relative flex h-[359px] w-full flex-col items-center justify-between rounded-2xl border border-black bg-[#fffcf2] px-4 pb-6 pt-16 text-center">
            <div className="absolute right-[7px] top-[7px] rounded-[50px] bg-status-success-bg px-3 py-1.5">
              <p className="text-12 leading-14 font-semibold tracking-0 text-status-success-fg">
                Recommended for faster settlement readiness
              </p>
            </div>

            <div className="flex w-full flex-col items-center gap-6">
              <div className="flex items-center justify-center rounded-[72px] bg-action-primary p-[14.5px]">
                <HugeiconsIcon icon={ChartRelationshipIcon} size={32} className="shrink-0 text-text-primary" />
              </div>

              <div className="flex w-full flex-col items-center gap-4">
                <div className="flex w-full flex-col items-center gap-2">
                  <p className="text-[18px] leading-24 font-semibold tracking-0 text-text-primary">
                    Stablecoin Deposit
                  </p>
                  <p className="text-16 leading-24 font-semibold tracking-0 text-text-secondary">
                    Fund using supported stablecoin settlement rails (e.g., USDC / USDT).
                  </p>
                </div>

                <div className="flex w-full items-center justify-center gap-2">
                  <span className="size-2 rounded-full bg-status-success-fg" aria-hidden="true" />
                  <p className="text-12 leading-14 font-semibold tracking-0 text-text-secondary">
                    Near-instant network confirmation
                  </p>
                </div>
              </div>
            </div>

            <div className="flex w-full items-center justify-center gap-2">
              <HugeiconsIcon icon={SecurityCheckIcon} size={14.5} className="shrink-0 text-text-secondary" />
              <p className="text-14 leading-20 font-medium tracking-0 text-text-secondary">
                Settlement verified upon confirmation
              </p>
            </div>
          </article>

          <div className="flex items-center gap-2">
            <HugeiconsIcon icon={TradeUpIcon} size={24} className="shrink-0 text-status-success-fg" />
            <p className="text-12 leading-14 font-semibold tracking-0 text-status-success-fg">
              Projected stable allocation may increase after funding.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
