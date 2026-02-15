import { Add01Icon, ArrowUp02Icon } from "@hugeicons/core-free-icons";
import { Button } from "@/components/button/button";

type PageHeaderProps = {
  title?: string;
  subtitle?: string;
  showActions?: boolean;
};

export function PageHeader({
  title = "Company Wallet",
  subtitle,
  showActions = true,
}: PageHeaderProps) {
  const alignmentClassName = subtitle ? "items-start" : "items-center";

  return (
    <header
      className={`flex w-full justify-between gap-4 ${alignmentClassName}`}
      aria-label="Page header"
    >
      <div className="flex min-w-0 flex-1 flex-col gap-1">
        <h1 className="text-24 leading-32 font-semibold tracking-0 text-text-secondary">{title}</h1>
        {subtitle ? (
          <p className="text-14 leading-20 font-semibold tracking-0 text-text-secondary">
            {subtitle}
          </p>
        ) : null}
      </div>

      {showActions ? (
        <div className="flex shrink-0 items-center gap-2">
          <Button
            variant="secondary"
            leftIcon={ArrowUp02Icon}
          >
            Withdraw
          </Button>
          <Button
            variant="primary"
            href="/add-funds"
            leftIcon={Add01Icon}
          >
            Add Funds
          </Button>
        </div>
      ) : null}
    </header>
  );
}
