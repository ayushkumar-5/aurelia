import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';

const Collections = () => {
  const collections = [
    {
      id: 'dress',
      title: 'Dress Collection',
      description: 'Elegant timepieces for formal occasions and sophisticated style.',
      image: '/placeholder.svg',
      count: 24,
      featured: true,
      story: 'Crafted for those moments when every detail matters—boardroom meetings, evening galas, and life\'s milestone celebrations.'
    },
    {
      id: 'sport',
      title: 'Sport Collection',
      description: 'Performance-driven watches built for active lifestyles.',
      image: '/placeholder.svg',
      count: 18,
      featured: false,
      story: 'Engineered for adventure and precision, these timepieces accompany you from the office to the outdoors.'
    },
    {
      id: 'heritage',
      title: 'Heritage Collection',
      description: 'Timeless classics that honor traditional watchmaking.',
      image: '/placeholder.svg',
      count: 12,
      featured: true,
      story: 'Celebrating decades of horological excellence with designs that transcend fleeting trends.'
    },
    {
      id: 'chronograph',
      title: 'Chronograph Collection',
      description: 'Multi-function timepieces for precise timing.',
      image: '/placeholder.svg',
      count: 15,
      featured: false,
      story: 'Where functionality meets artistry—complications that elevate every moment into a measured experience.'
    },
    {
      id: 'everyday',
      title: 'Everyday Collection',
      description: 'Versatile watches perfect for daily wear.',
      image: '/placeholder.svg',
      count: 32,
      featured: false,
      story: 'Reliable companions that seamlessly transition from casual mornings to important evenings.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 py-6">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Collections</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Hero Section */}
        <section className="container mx-auto px-4 pb-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-heading mb-6">
              Curated Collections
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Each collection tells a story. From heritage pieces that honor traditional craftsmanship 
              to modern innovations that push the boundaries of design—discover timepieces that 
              resonate with your personal style and life's moments.
            </p>
          </div>

          {/* Featured Collections */}
          <div className="mb-16">
            <h2 className="text-2xl font-heading mb-8 text-center">Featured Collections</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {collections.filter(collection => collection.featured).map((collection) => (
                <Card key={collection.id} className="group cursor-pointer card-luxury hover:shadow-glow transition-all duration-500 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative h-96 overflow-hidden">
                      <img
                        src={collection.image}
                        alt={collection.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-obsidian/40 to-transparent" />
                      
                      <div className="absolute bottom-0 left-0 right-0 p-8">
                        <div className="mb-4">
                          <Badge className="mb-3 bg-accent/20 text-accent border-accent/30">
                            {collection.count} pieces
                          </Badge>
                          <h3 className="text-3xl font-heading mb-3 text-ivory">
                            {collection.title}
                          </h3>
                          <p className="text-ivory/80 text-lg leading-relaxed mb-4">
                            {collection.story}
                          </p>
                        </div>
                        
                        <Button 
                          className="btn-hero group-hover:bg-accent group-hover:text-obsidian"
                          asChild
                        >
                          <a href={`/collections/${collection.id}`}>
                            Explore Collection
                            <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* All Collections Grid */}
          <div>
            <h2 className="text-2xl font-heading mb-8 text-center">All Collections</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {collections.map((collection) => (
                <Card key={collection.id} className="group cursor-pointer card-luxury hover:shadow-glow transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img
                        src={collection.image}
                        alt={collection.title}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-background/80 text-foreground">
                          {collection.count} pieces
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-heading mb-3">{collection.title}</h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {collection.description}
                      </p>
                      
                      <Button 
                        variant="outline" 
                        className="w-full group-hover:bg-accent group-hover:text-obsidian group-hover:border-accent"
                        asChild
                      >
                        <a href={`/collections/${collection.id}`}>
                          View Collection
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16 py-16 border-t border-border">
            <h2 className="text-3xl font-heading mb-4">
              Can't Decide?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our watch specialists are here to help you find the perfect timepiece for your style and needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-hero" asChild>
                <a href="/contact">Speak with an Expert</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="/shop">Browse All Watches</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Collections;