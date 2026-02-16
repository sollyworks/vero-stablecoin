import Image from "next/image";

type SelectNetworkCardProps = {
  logoSrc: string;
  logoAlt: string;
  networkName: string;
  networkType: string;
  estimatedTime: string;
  supportedTokens?: string;
  isSelected?: boolean;
  onSelect?: () => void;
};

export function SelectNetworkCard({
  logoSrc,
  logoAlt,
  networkName,
  networkType,
  estimatedTime,
  supportedTokens = "USDC, USDT",
  isSelected = false,
  onSelect,
}: SelectNetworkCardProps) {
  const cardStateClassName = isSelected
    ? "border-black bg-[#fffcf2]"
    : "border-border-subtle bg-surface hover:border-black";

  return (
    <button
      type="button"
      aria-pressed={isSelected}
      data-state={isSelected ? "selected" : "default"}
      className={[
        "flex flex-col gap-6 rounded-2xl border p-4 text-left transition-colors duration-150",
        "cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas",
        cardStateClassName,
      ].join(" ")}
      onClick={onSelect}
    >
      <div className="flex w-[143px] flex-col gap-4">
        <div className="flex items-center gap-3">
          <Image
            src={logoSrc}
            alt={logoAlt}
            width={56}
            height={56}
            className="shrink-0"
          />
          <p className="text-16 leading-20 font-semibold tracking-0 text-text-primary">
            {networkName}
          </p>
        </div>
        <p className="text-14 leading-20 font-medium tracking-0 text-text-secondary">
          {networkType}
        </p>
      </div>

      <div className="h-px w-full bg-[#d9d9d9]" />

      <div className="flex items-center justify-between text-text-secondary">
        <div className="flex w-[106px] flex-col gap-1">
          <p className="text-12 leading-14 font-medium tracking-0">
            Supported Tokens
          </p>
          <p className="text-14 leading-20 font-semibold tracking-0">
            {supportedTokens}
          </p>
        </div>

        <div className="flex w-[106px] flex-col gap-1 text-right">
          <p className="text-12 leading-14 font-medium tracking-0">
            Est. Time
          </p>
          <p className="text-14 leading-20 font-semibold tracking-0">
            {estimatedTime}
          </p>
        </div>
      </div>
    </button>
  );
}
