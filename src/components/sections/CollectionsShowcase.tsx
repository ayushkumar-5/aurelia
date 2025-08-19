import { Button } from '@/components/ui/button';

const CollectionsShowcase = () => {
  const collections = [
    {
      id: 1,
      title: 'Dress',
      description: 'Elegant timepieces for formal occasions',
      image: '/src/assets/collection-dress.jpg',
      count: 24,
    },
    {
      id: 2,
      title: 'Sport',
      description: 'Built for active lifestyles and adventure',
      image: '/src/assets/collection-sport.jpg',
      count: 18,
    },
    {
      id: 3,
      title: 'Heritage',
      description: 'Classic designs with timeless appeal',
      image: '/src/assets/collection-dress.jpg',
      count: 15,
    },
    {
      id: 4,
      title: 'Chronograph',
      description: 'Precision timing for the modern professional',
      image: '/src/assets/collection-sport.jpg',
      count: 12,
    },
  ];

  return (
    <section className="py-20 px-4 bg-card/50">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-display mb-4">Curated Collections</h2>
          <p className="text-subhead max-w-2xl mx-auto">
            Discover watches organized by style, function, and heritage
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {collections.map((collection) => (
            <div key={collection.id} className="group relative overflow-hidden rounded-xl">
              {/* Background Image */}
              <div className="aspect-[16/10] bg-gradient-to-br from-muted/20 to-muted/5">
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent flex items-end">
                <div className="p-8 w-full">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {collection.title}
                    </h3>
                    <p className="text-muted-foreground mb-1">
                      {collection.description}
                    </p>
                    <p className="text-sm text-primary font-medium">
                      {collection.count} pieces
                    </p>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    Explore Collection
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionsShowcase;