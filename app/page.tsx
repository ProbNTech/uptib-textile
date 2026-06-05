import { HomeHero } from "@/components/home/HomeHero";
import { ProductsShowcase } from "@/components/home/ProductsShowcase";
import { WhyPartner } from "@/components/home/WhyPartner";
import { ProcessStrip } from "@/components/home/ProcessStrip";
import { MarketBillions } from "@/components/home/MarketBillions";
import { TrendsRow } from "@/components/home/TrendsRow";
import { TrustedShield } from "@/components/home/TrustedShield";
import { FaqSplit } from "@/components/home/FaqSplit";
import { FinalCta } from "@/components/home/FinalCta";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <ProductsShowcase />
      <WhyPartner />
      <ProcessStrip />
      <MarketBillions />
      <TrendsRow />
      <TrustedShield />
      <FaqSplit />
      <FinalCta />
    </>
  );
}
