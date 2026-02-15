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
  const variantClassName =
    variant === "primary"
      ? "bg-action-primary text-text-primary"
      : "border border-border-strong bg-surface text-text-secondary";

  const baseClassName =
    "flex h-10 items-center gap-2 rounded-[50px] px-4 py-2 text-14 leading-20 font-semibold tracking-0";

  const rootClassName = [baseClassName, variantClassName, className].filter(Boolean).join(" ");

  const content = (
    <>
      {leftIcon ? <HugeiconsIcon icon={leftIcon} size={24} className="shrink-0" /> : null}
      <span>{children}</span>
      {rightIcon ? <HugeiconsIcon icon={rightIcon} size={24} className="shrink-0" /> : null}
    </>
  );

  if (href) {
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
