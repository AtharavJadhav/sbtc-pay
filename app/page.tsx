import Hero from './components/Hero';
import Features from './components/Features';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto">
        <Hero />
        <Features />
      </main>
    </div>
  );
}
