type BadgeSize = "large" | "small";
type BadgeTone = "positive" | "attention";

type BadgeProps = {
  label: string;
  size?: BadgeSize;
  tone?: BadgeTone;
};

export function Badge({ label, size = "large", tone = "positive" }: BadgeProps) {
  const isLarge = size === "large";
  const toneClassName =
    tone === "positive"
      ? "bg-status-success-bg text-status-success-fg"
      : "bg-status-warning-bg text-status-warning-fg";

  const sizeClassName = isLarge
    ? "px-4 py-2 text-14 leading-20"
    : "px-3 py-1.5 text-12 leading-14";

  return (
    <div
      className={`inline-flex items-center justify-center rounded-[50px] font-semibold tracking-0 ${toneClassName} ${sizeClassName}`}
    >
      {label}
    </div>
  );
}
