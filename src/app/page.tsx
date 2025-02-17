import {
  Billing,
  CardDeal,
  Clients,
  Hero,
  Metrics,
  MoneyBusiness,
  Testimonials,
  TryNow,
} from '@/components';

export default function Home() {
  return (
    <main>
      <Hero />
      <Metrics />
      <MoneyBusiness />
      <Billing />
      <CardDeal />
      <Testimonials />
      <Clients />
      <TryNow />
    </main>
  );
}
