"use client";

import { ArrowLeft02Icon, ArrowRight02Icon } from "@hugeicons/core-free-icons";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/button/button";
import { FundingMethod, type FundingMethodOption } from "@/components/funding-method/funding-method";
import { PageHeader } from "@/components/page-header/page-header";
import { TreasuryStatus } from "@/components/treasury-status/treasury-status";

export default function AddFundsPage() {
  const router = useRouter();
  const [selectedMethod, setSelectedMethod] = useState<FundingMethodOption | null>(null);

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back();
      return;
    }

    router.push("/");
  };

  const handleContinue = () => {
    if (selectedMethod === "stablecoin-deposit") {
      router.push("/add-funds/stablecoins-deposit");
      return;
    }

    if (selectedMethod === "bank-transfer") {
      router.push("#");
    }
  };

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
          <FundingMethod
            selectedMethod={selectedMethod}
            onSelectMethod={setSelectedMethod}
          />
        </div>
        <div className="mt-8 flex items-center justify-between border-t border-border-strong pt-6">
          <Button
            variant="secondary"
            leftIcon={ArrowLeft02Icon}
            onClick={handleBack}
          >
            Back
          </Button>
          <Button
            variant="primary"
            rightIcon={ArrowRight02Icon}
            onClick={handleContinue}
            disabled={!selectedMethod}
          >
            Continue
          </Button>
        </div>
      </section>
    </main>
  );
}
