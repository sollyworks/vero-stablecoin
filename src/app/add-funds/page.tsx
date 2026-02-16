import { ArrowLeft02Icon, ArrowRight02Icon } from "@hugeicons/core-free-icons";
import Image from "next/image";
import { Button } from "@/components/button/button";
import { FundingMethod } from "@/components/funding-method/funding-method";
import { PageHeader } from "@/components/page-header/page-header";
import { TreasuryStatus } from "@/components/treasury-status/treasury-status";

export default function AddFundsPage() {
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
        className="mx-auto w-full max-w-[1120px] px-6 pb-6 pt-6 lg:px-8"
        aria-label="Main content"
      >
        <PageHeader
          title="Add Funds"
          subtitle="Select how you would like to fund your treasury balance"
          showActions={false}
        />
        <div className="mt-6">
          <TreasuryStatus />
        </div>
        <div className="mt-8">
          <FundingMethod />
        </div>
        <div className="mt-8 flex items-center justify-between border-t border-border-strong pt-6">
          <Button
            variant="secondary"
            leftIcon={ArrowLeft02Icon}
          >
            Back
          </Button>
          <Button
            variant="primary"
            rightIcon={ArrowRight02Icon}
          >
            Continue
          </Button>
        </div>
      </section>
    </main>
  );
}
