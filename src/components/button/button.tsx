import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react";
import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
  leftIcon?: IconSvgElement;
  rightIcon?: IconSvgElement;
  className?: string;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children" | "className">;

export function Button({
  children,
  variant = "primary",
  href,
  leftIcon,
  rightIcon,
  className,
  type = "button",
  ...buttonProps
}: ButtonProps) {
  const isDisabled = Boolean(buttonProps.disabled);

  const variantClassName =
    isDisabled
      ? "border border-transparent bg-[#dedac7] text-[#827f6e] hover:!bg-[#dedac7]"
      : variant === "primary"
        ? "bg-action-primary text-text-primary"
        : "border border-border-strong bg-surface text-text-secondary";

  const baseClassName =
    "group flex h-10 items-center gap-2 rounded-[50px] px-4 py-2 text-14 leading-20 font-semibold tracking-0";

  const interactionClassName = isDisabled
    ? "cursor-not-allowed"
    : "cursor-pointer";

  const rootClassName = [baseClassName, interactionClassName, variantClassName, className].filter(Boolean).join(" ");

  const isPlainTextLabel = typeof children === "string" || typeof children === "number";

  const labelContent = isPlainTextLabel ? (
    <span className="relative block h-5 overflow-hidden">
      <span
        className={`block ${
          isDisabled
            ? ""
            : "transition-transform duration-200 ease-out group-hover:-translate-y-full group-focus-visible:-translate-y-full"
        }`}
      >
        {children}
      </span>
      <span
        aria-hidden="true"
        className={`absolute inset-0 block ${
          isDisabled
            ? "hidden"
            : "translate-y-full transition-transform duration-200 ease-out group-hover:translate-y-0 group-focus-visible:translate-y-0"
        }`}
      >
        {children}
      </span>
    </span>
  ) : (
    <span>{children}</span>
  );

  const content = (
    <>
      {leftIcon ? <HugeiconsIcon icon={leftIcon} size={24} className="shrink-0" /> : null}
      {labelContent}
      {rightIcon ? <HugeiconsIcon icon={rightIcon} size={24} className="shrink-0" /> : null}
    </>
  );

  if (href && !isDisabled) {
    return (
      <Link href={href} className={rootClassName}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={rootClassName}
      {...buttonProps}
    >
      {content}
    </button>
  );
}
