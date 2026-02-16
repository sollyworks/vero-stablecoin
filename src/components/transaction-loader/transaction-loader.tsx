import {
  CheckmarkBadge01Icon,
  InformationDiamondIcon,
} from "@hugeicons-pro/core-solid-standard";
import {
  Loading02Icon,
} from "@hugeicons-pro/core-solid-rounded";
import { HugeiconsIcon } from "@hugeicons/react";

type TransactionLoaderState =
  | "waiting"
  | "confirming"
  | "converting"
  | "success"
  | "error";

type TransactionLoaderProps = {
  state?: TransactionLoaderState;
};

export function TransactionLoader({ state = "waiting" }: TransactionLoaderProps) {
  const isWaiting = state === "waiting";
  const isConfirming = state === "confirming";
  const isConverting = state === "converting";
  const isSuccess = state === "success";
  const isError = state === "error";

  const showLoading = isWaiting || isConfirming || isConverting;
  const loadingColorClassName = isWaiting || isConfirming ? "text-[#e2be39]" : "text-[#228be6]";

  return (
    <article className="flex items-center justify-center gap-4 rounded-[50px] border border-border-subtle bg-surface px-4 py-2.5 shadow-[0px_8px_24px_0px_rgba(0,0,0,0.1)]">
      {showLoading ? (
        <>
          <HugeiconsIcon icon={Loading02Icon} size={24} className={`shrink-0 ${loadingColorClassName}`} />
          <p className="text-14 leading-20 font-semibold tracking-0 text-text-secondary">
            {isWaiting
              ? "Waiting for network confirmation..."
              : isConfirming
                ? "Confirming transaction..."
                : "Converting to Stable Reserves"}
          </p>
        </>
      ) : null}

      {isConverting ? (
        <p className="text-12 leading-16 font-medium tracking-0 text-text-secondary">
          Executing FX Hedge
        </p>
      ) : null}

      {isConfirming ? (
        <p className="text-12 leading-16 font-medium tracking-0 text-text-secondary">
          33%
        </p>
      ) : null}

      {isWaiting ? (
        <div className="flex items-center gap-2">
          <p className="text-12 leading-16 font-medium tracking-0 text-text-secondary">
            Listening on Mainnet
          </p>
          <div className="rounded-lg bg-canvas px-2 py-1">
            <p className="text-[10px] leading-4 font-bold tracking-[0.5px] text-text-secondary uppercase">
              Idle
            </p>
          </div>
        </div>
      ) : null}

      {isSuccess ? (
        <>
          <HugeiconsIcon
            icon={CheckmarkBadge01Icon}
            size={24}
            className="shrink-0 text-[#16a34a]"
          />
          <p className="text-14 leading-20 font-semibold tracking-0 text-text-secondary">
            Funds Successfully Added to Treasury
          </p>
        </>
      ) : null}

      {isError ? (
        <>
          <HugeiconsIcon
            icon={InformationDiamondIcon}
            size={24}
            className="shrink-0 text-[#dc2626]"
          />
          <p className="text-14 leading-20 font-semibold tracking-0 text-text-secondary">
            Routing Unavailable
          </p>
          <p className="text-12 leading-16 font-medium tracking-0 text-text-secondary">
            Returned on-chain
          </p>
        </>
      ) : null}
    </article>
  );
}
