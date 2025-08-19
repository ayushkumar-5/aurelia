import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, ShoppingBag } from 'lucide-react';

const FeaturedProducts = () => {
  const featuredWatches = [
    {
      id: 1,
      brand: 'TISSOT',
      model: 'Seastar 1000 Powermatic 80',
      price: 1299,
      originalPrice: null,
      image: '/src/assets/hero-watch-1.jpg',
      movement: 'Automatic',
      caseSize: '43mm',
      isNew: true,
      isFeatured: true,
    },
    {
      id: 2,
      brand: 'OMEGA',
      model: 'Speedmaster Professional',
      price: 6850,
      originalPrice: null,
      image: '/src/assets/hero-watch-2.jpg',
      movement: 'Manual',
      caseSize: '42mm',
      isNew: false,
      isFeatured: true,
    },
    {
      id: 3,
      brand: 'TAG HEUER',
      model: 'Formula 1 Quartz',
      price: 995,
      originalPrice: 1195,
      image: '/src/assets/hero-watch-1.jpg',
      movement: 'Quartz',
      caseSize: '41mm',
      isNew: false,
      isFeatured: true,
    },
    {
      id: 4,
      brand: 'SEIKO',
      model: 'Prospex Solar Diver',
      price: 449,
      originalPrice: null,
      image: '/src/assets/hero-watch-2.jpg',
      movement: 'Solar',
      caseSize: '44mm',
      isNew: true,
      isFeatured: false,
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-display mb-4">Editor's Picks</h2>
          <p className="text-subhead max-w-2xl mx-auto">
            Handselected timepieces that embody precision, heritage, and modern design
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredWatches.map((watch) => (
            <div key={watch.id} className="group card-luxury p-0 overflow-hidden">
              {/* Product Image */}
              <div className="relative aspect-square bg-gradient-to-br from-muted/20 to-muted/5 overflow-hidden">
                <img
                  src={watch.image}
                  alt={`${watch.brand} ${watch.model}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  {watch.isNew && (
                    <Badge className="bg-primary text-primary-foreground">New</Badge>
                  )}
                  {watch.originalPrice && (
                    <Badge variant="destructive">Sale</Badge>
                  )}
                </div>

                {/* Quick Actions */}
                <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button size="sm" className="h-8 w-8 p-0">
                    <ShoppingBag className="h-4 w-4" />
                  </Button>
                </div>

                {/* Movement & Size Info */}
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="flex gap-2">
                    <Badge variant="outline" className="bg-background/80 backdrop-blur-sm text-xs">
                      {watch.movement}
                    </Badge>
                    <Badge variant="outline" className="bg-background/80 backdrop-blur-sm text-xs">
                      {watch.caseSize}
                    </Badge>
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="mb-2">
                  <p className="text-sm font-medium text-muted-foreground tracking-wide">
                    {watch.brand}
                  </p>
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {watch.model}
                  </h3>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <span className="text-lg font-bold text-foreground">
                    ${watch.price.toLocaleString()}
                  </span>
                  {watch.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">
                      ${watch.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>

                <Button className="w-full" variant="outline">
                  Quick Add
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button className="btn-hero">
            View All Watches
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;