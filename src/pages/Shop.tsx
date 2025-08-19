import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Search, Filter } from 'lucide-react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';

const Shop = () => {
  const [priceRange, setPriceRange] = useState([500, 5000]);
  const [showFilters, setShowFilters] = useState(false);

  const products = [
    {
      id: 1,
      brand: "OMEGA",
      model: "Speedmaster Professional",
      price: 3200,
      movement: "Manual",
      image: "/placeholder.svg",
      isNew: true,
      caseMaterial: "Steel",
      waterResistance: "50M"
    },
    {
      id: 2,
      brand: "ROLEX",
      model: "Submariner Date",
      price: 8950,
      movement: "Automatic",
      image: "/placeholder.svg",
      isNew: false,
      caseMaterial: "Steel",
      waterResistance: "300M"
    },
    {
      id: 3,
      brand: "TISSOT",
      model: "Le Locle Powermatic 80",
      price: 325,
      movement: "Automatic",
      image: "/placeholder.svg",
      isNew: true,
      caseMaterial: "Steel",
      waterResistance: "30M"
    },
    {
      id: 4,
      brand: "TAG HEUER",
      model: "Carrera Calibre 16",
      price: 1650,
      movement: "Automatic",
      image: "/placeholder.svg",
      isNew: false,
      caseMaterial: "Steel",
      waterResistance: "100M"
    },
    {
      id: 5,
      brand: "SEIKO",
      model: "Prospex Solar Diver",
      price: 220,
      movement: "Quartz",
      image: "/placeholder.svg",
      isNew: true,
      caseMaterial: "Steel",
      waterResistance: "200M"
    },
    {
      id: 6,
      brand: "CARTIER",
      model: "Tank Solo Large",
      price: 2750,
      movement: "Quartz",
      image: "/placeholder.svg",
      isNew: false,
      caseMaterial: "Steel",
      waterResistance: "30M"
    }
  ];

  const brands = ["OMEGA", "ROLEX", "TISSOT", "TAG HEUER", "SEIKO", "CARTIER"];
  const movements = ["Automatic", "Manual", "Quartz"];
  const materials = ["Steel", "Gold-tone", "Titanium", "Ceramic"];

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
                <BreadcrumbPage>Shop</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Page Header */}
        <section className="container mx-auto px-4 pb-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-heading mb-4">Timepiece Collection</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our curated selection of luxury watches from the world's finest manufacturers.
            </p>
          </div>

          {/* Search and Sort */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input placeholder="Search by brand, model, or movement..." className="pl-10" />
            </div>
            <div className="flex gap-4">
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="md:hidden"
              >
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
              <Select defaultValue="newest">
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="popular">Most Popular</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="container mx-auto px-4 pb-16">
          <div className="flex gap-8">
            {/* Filters Sidebar */}
            <aside className={`w-80 space-y-6 ${showFilters ? 'block' : 'hidden md:block'}`}>
              <Card className="card-luxury">
                <CardContent className="p-6 space-y-6">
                  {/* Price Range */}
                  <div>
                    <h3 className="font-semibold mb-4">Price Range</h3>
                    <Slider
                      value={priceRange}
                      onValueChange={setPriceRange}
                      max={10000}
                      min={100}
                      step={100}
                      className="mb-4"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>${priceRange[0]}</span>
                      <span>${priceRange[1]}</span>
                    </div>
                  </div>

                  {/* Brands */}
                  <div>
                    <h3 className="font-semibold mb-4">Brand</h3>
                    <div className="space-y-3">
                      {brands.map((brand) => (
                        <div key={brand} className="flex items-center space-x-2">
                          <Checkbox id={brand} />
                          <label htmlFor={brand} className="text-sm cursor-pointer">
                            {brand}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Movement */}
                  <div>
                    <h3 className="font-semibold mb-4">Movement</h3>
                    <div className="space-y-3">
                      {movements.map((movement) => (
                        <div key={movement} className="flex items-center space-x-2">
                          <Checkbox id={movement} />
                          <label htmlFor={movement} className="text-sm cursor-pointer">
                            {movement}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Case Material */}
                  <div>
                    <h3 className="font-semibold mb-4">Case Material</h3>
                    <div className="space-y-3">
                      {materials.map((material) => (
                        <div key={material} className="flex items-center space-x-2">
                          <Checkbox id={material} />
                          <label htmlFor={material} className="text-sm cursor-pointer">
                            {material}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button variant="outline" className="w-full">
                    Clear Filters
                  </Button>
                </CardContent>
              </Card>
            </aside>

            {/* Product Grid */}
            <div className="flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <Card key={product.id} className="group cursor-pointer card-luxury hover:shadow-glow transition-all duration-300">
                    <CardContent className="p-0">
                      <div className="relative overflow-hidden rounded-t-lg">
                        <img
                          src={product.image}
                          alt={`${product.brand} ${product.model}`}
                          className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        {product.isNew && (
                          <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
                            New
                          </Badge>
                        )}
                        <Button
                          size="icon"
                          variant="ghost"
                          className="absolute top-4 right-4 bg-background/80 hover:bg-background"
                        >
                          <Heart className="h-4 w-4" />
                        </Button>
                      </div>
                      
                      <div className="p-6">
                        <div className="mb-2">
                          <p className="text-sm text-muted-foreground font-medium">
                            {product.brand}
                          </p>
                          <h3 className="font-semibold text-lg">{product.model}</h3>
                        </div>
                        
                        <div className="flex items-center gap-2 mb-4">
                          <Badge variant="outline" className="text-xs">
                            {product.movement}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {product.caseMaterial}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {product.waterResistance}
                          </Badge>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <p className="text-2xl font-bold">
                            ${product.price.toLocaleString()}
                          </p>
                          <Button className="btn-hero">
                            Quick Add
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center mt-12">
                <div className="flex gap-2">
                  <Button variant="outline">Previous</Button>
                  <Button variant="outline">1</Button>
                  <Button>2</Button>
                  <Button variant="outline">3</Button>
                  <Button variant="outline">Next</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Shop;