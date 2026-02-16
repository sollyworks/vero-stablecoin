/* eslint-disable @next/next/no-img-element */
const loadingIconConvertingSrc = "https://www.figma.com/api/mcp/asset/3234ee90-8803-4303-bdf8-2083c1d43ee1";
const loadingIconWaitingOrConfirmingSrc = "https://www.figma.com/api/mcp/asset/531a719d-6de4-4a22-ae8c-40cd60004977";
const informationDiamondSolidSrc = "https://www.figma.com/api/mcp/asset/8c2bc26d-9728-4b05-a447-66c85cc12553";
const checkmarkBadgeSolidSrc = "https://www.figma.com/api/mcp/asset/1962713a-a60b-4092-a0bc-7c7417062012";

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
  const loadingIconSrc = isWaiting || isConfirming
    ? loadingIconWaitingOrConfirmingSrc
    : loadingIconConvertingSrc;

  return (
    <article className="flex items-center justify-center gap-4 rounded-[50px] border border-border-subtle bg-surface px-4 py-2.5 shadow-[0px_8px_24px_0px_rgba(0,0,0,0.1)]">
      {showLoading ? (
        <>
          <img
            src={loadingIconSrc}
            alt=""
            className="size-6 shrink-0"
            aria-hidden="true"
          />
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
          <img
            src={checkmarkBadgeSolidSrc}
            alt=""
            className="size-6 shrink-0"
            aria-hidden="true"
          />
          <p className="text-14 leading-20 font-semibold tracking-0 text-text-secondary">
            Funds Successfully Added to Treasury
          </p>
        </>
      ) : null}

      {isError ? (
        <>
          <img
            src={informationDiamondSolidSrc}
            alt=""
            className="size-6 shrink-0"
            aria-hidden="true"
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
