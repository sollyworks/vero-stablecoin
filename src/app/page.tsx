import { Sidebar } from "@/components/sidebar/sidebar";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-canvas">
      <Sidebar />
      <section className="flex-1" aria-label="Main content" />
    </main>
  );
}
