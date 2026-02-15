import { ArrowLeft02Icon, ArrowRight02Icon } from "@hugeicons/core-free-icons";
import { Button } from "@/components/button/button";
import { FundingMethod } from "@/components/funding-method/funding-method";
import { PageHeader } from "@/components/page-header/page-header";
import { Sidebar } from "@/components/sidebar/sidebar";
import { TreasuryStatus } from "@/components/treasury-status/treasury-status";

export default function AddFundsPage() {
  return (
    <main className="flex h-dvh overflow-hidden bg-canvas">
      <Sidebar />
      <section
        className="min-h-0 flex-1 overflow-y-auto px-8 pb-6 pt-4"
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
