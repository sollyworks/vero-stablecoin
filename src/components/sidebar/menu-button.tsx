import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react";

type MenuButtonProps = {
  label: string;
  icon: IconSvgElement;
  isActive?: boolean;
};

export function MenuButton({ label, icon, isActive = false }: MenuButtonProps) {
  const baseClassName =
    "flex h-10 w-full items-center gap-2 rounded-2xl p-2 transition-colors";

  const stateClassName = isActive
    ? "bg-canvas text-text-primary"
    : "text-text-muted hover:bg-canvas hover:text-text-primary";

  return (
    <button
      type="button"
      className={`${baseClassName} ${stateClassName}`}
      aria-current={isActive ? "page" : undefined}
    >
      <HugeiconsIcon icon={icon} size={24} className="shrink-0" />
      <span className="text-14 leading-20 font-semibold tracking-0">{label}</span>
    </button>
  );
}
