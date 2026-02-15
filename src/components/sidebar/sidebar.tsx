import Image from "next/image";
import {
  Analytics01Icon,
  ArrowLeftRightIcon,
  ArrowUpDownIcon,
  BankIcon,
  Home03Icon,
  SecurityCheckIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { MenuButton } from "./menu-button";

const navigationItems = [
  { label: "Home", icon: Home03Icon, isActive: true },
  { label: "Treasury", icon: BankIcon },
  { label: "Settlements", icon: ArrowLeftRightIcon },
  { label: "Reports", icon: Analytics01Icon },
  { label: "FX Management", icon: SecurityCheckIcon },
];

export function Sidebar() {
  return (
    <aside className="flex h-full w-[255px] shrink-0 flex-col border-r border-border-sidebar bg-sidebar">
      <header className="overflow-hidden px-4 pb-4 pt-2">
        <div className="flex items-center p-2">
          <Image
            src="/vero-logo.svg"
            alt="Vero"
            width={76}
            height={22}
            priority
          />
        </div>
      </header>

      <nav className="flex-1 px-4 py-2">
        <ul className="flex flex-col gap-2">
          {navigationItems.map((item) => (
            <li key={item.label}>
              <MenuButton
                label={item.label}
                icon={item.icon}
                isActive={item.isActive}
              />
            </li>
          ))}
        </ul>
      </nav>

      <footer className="px-4 pb-4 pt-2">
        <button
          type="button"
          className="flex w-full items-center gap-2 p-2 text-text-secondary"
        >
          <div className="relative size-8 shrink-0 overflow-hidden rounded-full border border-border-strong bg-surface">
            <Image
              src="/images/avatar/joao-pedro.png"
              alt="João Pedro"
              fill
              sizes="32px"
              className="object-cover"
            />
          </div>

          <div className="min-w-0 flex-1 text-left tracking-0">
            <p className="truncate text-14 leading-20 font-semibold">João Pedro</p>
            <p className="truncate text-12 leading-16 font-normal text-text-muted">
              joão@example.com
            </p>
          </div>

          <HugeiconsIcon icon={ArrowUpDownIcon} size={20} className="shrink-0" />
        </button>
      </footer>
    </aside>
  );
}
