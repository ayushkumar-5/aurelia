import { Shield, Clock, RotateCcw, Award } from 'lucide-react';

const TrustSection = () => {
  const trustFeatures = [
    {
      icon: Shield,
      title: 'Authenticity Guaranteed',
      description: 'Every timepiece comes with authentication certificates and manufacturer warranties',
    },
    {
      icon: Clock,
      title: 'Swiss Precision',
      description: 'Curated selection of Swiss-made and Swiss-grade movements for lasting reliability',
    },
    {
      icon: RotateCcw,
      title: '7-Day Returns',
      description: 'Not completely satisfied? Return your watch within 7 days for a full refund',
    },
    {
      icon: Award,
      title: 'Expert Curation',
      description: 'Our horological experts handselect each piece for quality, heritage, and value',
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-display mb-4">Built for the Moments That Matter</h2>
          <p className="text-subhead max-w-3xl mx-auto">
            AURELIA represents more than timekeeping—we deliver confidence, 
            craftsmanship, and character with every carefully selected piece
          </p>
        </div>

        {/* Trust Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustFeatures.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl mb-6 group-hover:shadow-glow transition-all duration-300">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-card/50 to-card/30 rounded-xl border border-border">
          <h3 className="text-2xl font-semibold text-foreground mb-4">
            Start Your Collection Today
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust AURELIA for their timepiece needs
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-hero">
              Browse Watches
            </button>
            <button className="btn-secondary">
              Read Our Story
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;