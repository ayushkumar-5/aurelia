import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import FeaturedProducts from '@/components/sections/FeaturedProducts';
import CollectionsShowcase from '@/components/sections/CollectionsShowcase';
import TrustSection from '@/components/sections/TrustSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturedProducts />
        <CollectionsShowcase />
        <TrustSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
