import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background to-card">
      {/* Spline 3D Background */}
      <div className="absolute inset-0 w-full h-full">
        <iframe 
          src="https://my.spline.design/techinspired3dassetssandclock-NvNwT6gmGowkP7s3N0H5q8sP/" 
          frameBorder="0" 
          width="100%" 
          height="100%"
          className="opacity-60"
          title="3D Watch Animation"
        />
      </div>
      
      {/* Content Overlay */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-fade-up">
          <h1 className="text-hero text-foreground mb-6">
            Master Every Second
          </h1>
          
          <p className="text-subhead mb-8 max-w-2xl mx-auto">
            Curated Swiss-grade timepieces—automatic, quartz, and heritage collections
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button className="btn-hero">
              Shop New Arrivals
            </Button>
            <Button className="btn-secondary">
              Discover Our Story
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Free insured shipping</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>2-year warranty</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>7-day easy returns</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Gradient Overlay for Better Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/40"></div>
    </section>
  );
};

export default HeroSection;