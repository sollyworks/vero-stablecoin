import { Add01Icon, ArrowUp02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

type HeaderActionButtonProps = {
  label: string;
  icon: React.ComponentProps<typeof HugeiconsIcon>["icon"];
  variant: "primary" | "secondary";
};

function HeaderActionButton({ label, icon, variant }: HeaderActionButtonProps) {
  const variantClassName =
    variant === "primary"
      ? "bg-action-primary text-text-primary"
      : "border border-border-strong bg-surface text-text-secondary";

  return (
    <button
      type="button"
      className={`flex h-10 items-center gap-2 rounded-[50px] px-4 py-2 text-14 leading-20 font-semibold tracking-0 ${variantClassName}`}
    >
      <HugeiconsIcon icon={icon} size={24} className="shrink-0" />
      <span>{label}</span>
    </button>
  );
}

export function PageHeader() {
  return (
    <header className="flex w-full items-start justify-between gap-4" aria-label="Page header">
      <h1 className="text-24 leading-32 font-semibold tracking-0 text-text-secondary">
        Company Wallet
      </h1>

      <div className="flex shrink-0 items-center gap-2">
        <HeaderActionButton
          label="Withdraw"
          icon={ArrowUp02Icon}
          variant="secondary"
        />
        <HeaderActionButton label="Add Funds" icon={Add01Icon} variant="primary" />
      </div>
    </header>
  );
}
