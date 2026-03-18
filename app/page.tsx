import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black selection:bg-emerald-500 selection:text-black">
      <Navbar />
      <Hero />
    </main>
  );
}
