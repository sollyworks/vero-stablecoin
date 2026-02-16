"use client";

import Image from "next/image";
import { useState } from "react";
import { DepositInstructionsCard } from "@/components/deposit-instructions-card/deposit-instructions-card";
import { PageHeader } from "@/components/page-header/page-header";
import { SelectNetworkCard } from "@/components/select-network-card/select-network-card";
import { TransactionLoader } from "@/components/transaction-loader/transaction-loader";

const NETWORKS = [
  {
    id: "ethereum",
    logoSrc: "/ethereum-logo.png",
    logoAlt: "Ethereum logo",
    networkName: "Ethereum",
    networkType: "ERC-20",
    estimatedTime: "~4 mins",
  },
  {
    id: "polygon",
    logoSrc: "/polygon-logo.png",
    logoAlt: "Polygon logo",
    networkName: "Polygon",
    networkType: "POS Chain",
    estimatedTime: "~2 mins",
  },
  {
    id: "arbitrum",
    logoSrc: "/arbitrum-logo.png",
    logoAlt: "Arbitrum logo",
    networkName: "Arbitrum",
    networkType: "L2",
    estimatedTime: "~1 min",
  },
] as const;

export default function StablecoinsDepositPage() {
  const [selectedNetwork, setSelectedNetwork] = useState<(typeof NETWORKS)[number]["id"] | null>(
    null,
  );
  const [showTransactionLoader, setShowTransactionLoader] = useState(false);
  const activeNetwork = NETWORKS.find((network) => network.id === selectedNetwork);

  return (
    <main className="min-h-dvh bg-canvas">
      <div className="px-6 pt-4">
        <Image
          src="/vero-logo.svg"
          alt="Vero"
          width={76}
          height={22}
          priority
        />
      </div>
      <section
        className="mx-auto w-full max-w-[1120px] px-6 pb-32 pt-6 lg:px-8"
        aria-label="Main content"
      >
        <PageHeader
          title="Stablecoins Deposit"
          subtitle="Fund your treasury via supported settlement rails"
          showActions={false}
        />

        <section className="mt-8" aria-label="Select network">
          <h2 className="text-[18px] leading-24 font-semibold tracking-0 text-text-secondary">
            Select Network
          </h2>

          <div className="mt-4 grid gap-6 xl:grid-cols-3" role="group" aria-label="Network options">
            {NETWORKS.map((network) => (
              <SelectNetworkCard
                key={network.id}
                logoSrc={network.logoSrc}
                logoAlt={network.logoAlt}
                networkName={network.networkName}
                networkType={network.networkType}
                estimatedTime={network.estimatedTime}
                isSelected={selectedNetwork === network.id}
                onSelect={() => {
                  setSelectedNetwork(network.id);
                  if (!showTransactionLoader) {
                    setShowTransactionLoader(true);
                  }
                }}
              />
            ))}
          </div>
        </section>

        <section className="mt-8" aria-label="Deposit instructions">
          <h2 className="text-[18px] leading-24 font-semibold tracking-0 text-text-secondary">
            Deposit Instructions
          </h2>
          <div className="mt-4">
            <DepositInstructionsCard
              state={activeNetwork ? "filled" : "empty"}
              networkLabel={activeNetwork ? `${activeNetwork.networkName} ${activeNetwork.networkType}` : undefined}
            />
          </div>
        </section>

      </section>

      <div
        className={[
          "fixed bottom-8 left-1/2 z-20 -translate-x-1/2 transition-all duration-300 ease-out",
          showTransactionLoader
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "translate-y-8 opacity-0 pointer-events-none",
        ].join(" ")}
        aria-hidden={!showTransactionLoader}
      >
        <div>
          <TransactionLoader state="waiting" />
        </div>
      </div>
    </main>
  );
}
