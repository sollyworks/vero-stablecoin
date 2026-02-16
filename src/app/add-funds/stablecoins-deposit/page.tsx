import Image from "next/image";
import { DepositInstructionsCard } from "@/components/deposit-instructions-card/deposit-instructions-card";
import { PageHeader } from "@/components/page-header/page-header";
import { SelectNetworkCard } from "@/components/select-network-card/select-network-card";
import { TransactionLoader } from "@/components/transaction-loader/transaction-loader";

export default function StablecoinsDepositPage() {
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

          <div className="mt-4 grid gap-6 xl:grid-cols-3">
            <SelectNetworkCard
              logoSrc="/ethereum-logo.png"
              logoAlt="Ethereum logo"
              networkName="Ethereum"
              networkType="ERC-20"
              estimatedTime="~4 mins"
              isSelected
            />
            <SelectNetworkCard
              logoSrc="/polygon-logo.png"
              logoAlt="Polygon logo"
              networkName="Polygon"
              networkType="POS Chain"
              estimatedTime="~2 mins"
            />
            <SelectNetworkCard
              logoSrc="/arbitrum-logo.png"
              logoAlt="Arbitrum logo"
              networkName="Arbitrum"
              networkType="L2"
              estimatedTime="~1 mins"
            />
          </div>
        </section>

        <section className="mt-8" aria-label="Deposit instructions">
          <h2 className="text-[18px] leading-24 font-semibold tracking-0 text-text-secondary">
            Deposit Instructions
          </h2>
          <div className="mt-4">
            <DepositInstructionsCard />
          </div>
        </section>

      </section>

      <div className="pointer-events-none fixed bottom-8 left-1/2 z-20 -translate-x-1/2">
        <div className="pointer-events-auto">
          <TransactionLoader state="waiting" />
        </div>
      </div>
    </main>
  );
}
