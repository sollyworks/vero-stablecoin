"use client";

import { Copy01Icon, Link04Icon, Wallet03Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/button/button";

type DepositInstructionsCardProps = {
  networkLabel?: string;
  address?: string;
};

export function DepositInstructionsCard({
  networkLabel = "Ethereum ERC-20",
  address = "0x71C7656EC7ab88b098defB751B7401B...",
}: DepositInstructionsCardProps) {
  const [isCopied, setIsCopied] = useState(false);
  const copiedTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (copiedTimeoutRef.current) {
        clearTimeout(copiedTimeoutRef.current);
      }
    };
  }, []);

  const showCopiedState = () => {
    setIsCopied(true);

    if (copiedTimeoutRef.current) {
      clearTimeout(copiedTimeoutRef.current);
    }

    copiedTimeoutRef.current = setTimeout(() => {
      setIsCopied(false);
    }, 1600);
  };

  const copyAddressToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(address);
      showCopiedState();
      return;
    } catch {
      const textArea = document.createElement("textarea");
      textArea.value = address;
      textArea.style.position = "fixed";
      textArea.style.opacity = "0";
      document.body.append(textArea);
      textArea.select();
      const copySucceeded = document.execCommand("copy");
      textArea.remove();

      if (copySucceeded) {
        showCopiedState();
      }
    }
  };

  return (
    <article className="rounded-2xl border border-border-subtle bg-surface p-6">
      <div className="flex flex-col gap-8 xl:flex-row xl:items-center xl:gap-10">
        <div className="flex flex-1 flex-col gap-4">
          <div className="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">
            <div className="overflow-hidden rounded-lg bg-canvas p-3 size-40 sm:size-48">
              <Image
                src="/qrcode-image.svg"
                alt="Deposit QR code"
                width={192}
                height={192}
                className="h-full w-full object-contain"
              />
            </div>

            <div className="flex w-full max-w-[379px] flex-col gap-4">
              <div className="flex items-start justify-between gap-4 text-14 leading-20 font-medium tracking-0 text-text-secondary">
                <div className="w-[131px]">
                  <p>Deposit Address</p>
                  <p>({networkLabel})</p>
                </div>
                <p className="w-[204px] text-right">
                  Only send supported tokens on the selected network
                </p>
              </div>

              <div className="flex items-center justify-between rounded-lg border border-[#c8c4ba] bg-canvas px-4 py-3">
                <p className="text-14 leading-20 font-semibold tracking-0 text-text-secondary">
                  {address}
                </p>
                <div className="relative">
                  <button
                    type="button"
                    className="flex cursor-pointer items-center rounded-[50px] bg-surface p-2"
                    aria-label="Copy deposit address"
                    onClick={copyAddressToClipboard}
                  >
                    <HugeiconsIcon icon={Copy01Icon} size={16} className="shrink-0 text-text-secondary" />
                  </button>
                  <span
                    role="status"
                    aria-live="polite"
                    className={[
                      "pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 rounded-md bg-black px-2 py-1 text-12 leading-14 font-medium tracking-0 text-white transition-all duration-150",
                      isCopied ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0",
                    ].join(" ")}
                  >
                    Copied
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 text-14 leading-20 font-medium tracking-0 text-text-secondary">
            <p>
              <span className="font-semibold">Automatic Conversion:</span>
              {" "}
              Deposits are converted to stable reserves at prevailing market prices at the time of
              confirmation. If routing is unavailable, funds are automatically returned to the
              originating address.
            </p>
            <p>
              <span className="font-semibold">FX Hedging:</span>
              {" "}
              Non-stable assets are automatically protected via FX hedge after required network
              confirmations.
            </p>
          </div>
        </div>

        <div className="hidden h-[290px] flex-col items-center justify-center gap-4 xl:flex">
          <div className="w-px flex-1 bg-[#d9d9d9]" />
          <p className="text-center text-14 leading-20 font-bold tracking-0 text-text-secondary">
            OR
          </p>
          <div className="w-px flex-1 bg-[#d9d9d9]" />
        </div>

        <div className="flex w-full flex-col items-center justify-center gap-4 xl:w-[436px]">
          <div className="rounded-[72.727px] bg-canvas p-[14.5px]">
            <HugeiconsIcon icon={Wallet03Icon} size={32} className="shrink-0 text-text-secondary" />
          </div>
          <p className="text-center text-[18px] leading-24 font-bold tracking-0 text-text-primary">
            Connect your Wallet
          </p>
          <p className="w-[204px] text-center text-14 leading-20 font-medium tracking-0 text-text-secondary">
            Connect your institutional wallet to auto-fill transfer details securely.
          </p>
          <Button variant="secondary" leftIcon={Link04Icon}>
            Connect Wallet
          </Button>
        </div>
      </div>
    </article>
  );
}
