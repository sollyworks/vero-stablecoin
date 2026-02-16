import {
  BankIcon,
  ChartRelationshipIcon,
  SecurityCheckIcon,
  TradeUpIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export type FundingMethodOption = "bank-transfer" | "stablecoin-deposit";

type FundingMethodProps = {
  selectedMethod: FundingMethodOption | null;
  onSelectMethod: (method: FundingMethodOption) => void;
};

export function FundingMethod({ selectedMethod, onSelectMethod }: FundingMethodProps) {
  const isBankTransferSelected = selectedMethod === "bank-transfer";
  const isStablecoinDepositSelected = selectedMethod === "stablecoin-deposit";
  const baseCardClassName =
    "relative h-[359px] w-full cursor-pointer rounded-2xl border text-center transition-colors hover:border-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-strong focus-visible:ring-offset-2";

  return (
    <section aria-label="Funding Method">
      <h2 className="text-[18px] leading-24 font-semibold tracking-0 text-text-secondary">
        Funding Method
      </h2>

      <div className="mt-4 grid gap-6 xl:grid-cols-2">
        <button
          type="button"
          onClick={() => onSelectMethod("bank-transfer")}
          className={`${baseCardClassName} ${
            isBankTransferSelected ? "border-black bg-[#fffcf2]" : "border-border-subtle bg-surface"
          }`}
          aria-pressed={isBankTransferSelected}
        >
          <article className="flex h-full flex-col items-center justify-between px-4 pb-6 pt-16">
            <div className="flex w-full flex-col items-center gap-6">
              <div
                className={`flex items-center justify-center rounded-[72px] p-[14.5px] ${
                  isBankTransferSelected ? "bg-action-primary" : "bg-canvas"
                }`}
              >
                <HugeiconsIcon
                  icon={BankIcon}
                  size={35}
                  className={`shrink-0 ${isBankTransferSelected ? "text-text-primary" : "text-text-secondary"}`}
                />
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
        </button>

        <div className="flex flex-col items-center gap-[17px]">
          <button
            type="button"
            onClick={() => onSelectMethod("stablecoin-deposit")}
            className={`${baseCardClassName} ${
              isStablecoinDepositSelected ? "border-black bg-[#fffcf2]" : "border-border-subtle bg-surface"
            }`}
            aria-pressed={isStablecoinDepositSelected}
          >
            <div className="absolute right-2 top-2 rounded-[50px] bg-status-success-bg px-3 py-1.5">
              <p className="text-12 leading-14 font-semibold tracking-0 text-status-success-fg">
                Recommended for faster settlement readiness
              </p>
            </div>

            <article className="flex h-full flex-col items-center justify-between px-4 pb-6 pt-16">
              <div className="flex w-full flex-col items-center gap-6">
                <div
                  className={`flex items-center justify-center rounded-[72px] p-[14.5px] ${
                    isStablecoinDepositSelected ? "bg-action-primary" : "bg-canvas"
                  }`}
                >
                  <HugeiconsIcon
                    icon={ChartRelationshipIcon}
                    size={32}
                    className={`shrink-0 ${isStablecoinDepositSelected ? "text-text-primary" : "text-text-secondary"}`}
                  />
                </div>

                <div className="flex w-full flex-col items-center gap-4">
                  <div className="flex w-full flex-col items-center gap-2">
                    <p className="text-[18px] leading-24 font-semibold tracking-0 text-text-primary">
                      Stablecoin Deposit
                    </p>
                    <p className="text-16 leading-24 font-semibold tracking-0 text-balance text-text-secondary">
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
          </button>

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
