import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Heart, Share2, Star, Shield, Truck, RefreshCw, ZoomIn } from 'lucide-react';

const ProductDetail = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedStrap, setSelectedStrap] = useState('black-leather');
  const [quantity, setQuantity] = useState(1);

  const product = {
    brand: 'OMEGA',
    model: 'Speedmaster Professional Moonwatch',
    price: 3200,
    originalPrice: 3500,
    sku: 'OMG-SPD-PRO-2024',
    rating: 4.8,
    reviewCount: 127,
    availability: 'In Stock',
    movement: 'Manual',
    caseMaterial: 'Stainless Steel',
    waterResistance: '50M',
    caseSize: '42mm',
    images: [
      '/placeholder.svg',
      '/placeholder.svg',
      '/placeholder.svg',
      '/placeholder.svg'
    ],
    description: 'The legendary Speedmaster Professional Moonwatch is one of OMEGA\'s most iconic timepieces. Having been a part of all six moon landings, the Speedmaster is an exceptional piece of horological history.',
    highlights: [
      'NASA-qualified chronograph movement',
      'Hesalite crystal with anti-reflective treatment',
      'Stainless steel case and bracelet'
    ],
    curatorNote: 'This Speedmaster represents the pinnacle of space-qualified timekeeping. Its manual-wind movement and robust construction make it a true collector\'s piece that bridges heritage with modern reliability.'
  };

  const specifications = {
    movement: {
      'Caliber': 'OMEGA 3861',
      'Type': 'Manual-winding chronograph',
      'Power Reserve': '50 hours',
      'Frequency': '21,600 vph (3 Hz)',
      'Jewels': '30'
    },
    case: {
      'Material': 'Stainless Steel',
      'Diameter': '42mm',
      'Thickness': '13.18mm',
      'Crystal': 'Hesalite front, sapphire back',
      'Water Resistance': '50 meters (5 bar)',
      'Bezel': 'Black aluminum tachymeter'
    },
    dial: {
      'Color': 'Black',
      'Hands': 'Steel with luminous coating',
      'Markers': 'Applied indices with luminous dots',
      'Subdials': 'Three (30-min, 12-hour, small seconds)'
    },
    bracelet: {
      'Material': 'Stainless Steel',
      'Clasp': 'Fold-over safety clasp',
      'Lug Width': '20mm',
      'Adjustable': 'Yes'
    }
  };

  const strapOptions = [
    { id: 'steel-bracelet', name: 'Steel Bracelet', price: 0 },
    { id: 'black-leather', name: 'Black Leather', price: 150 },
    { id: 'brown-leather', name: 'Brown Leather', price: 150 },
    { id: 'nato-black', name: 'NATO Black', price: 75 }
  ];

  const reviews = [
    {
      id: 1,
      author: 'Michael R.',
      rating: 5,
      date: '2024-01-10',
      title: 'Absolutely stunning timepiece',
      content: 'The craftsmanship is exceptional. Wearing a piece of space history on my wrist is incredible.',
      verified: true
    },
    {
      id: 2,
      author: 'Sarah K.',
      rating: 5,
      date: '2024-01-05',
      title: 'Perfect everyday watch',
      content: 'Versatile enough for both professional and casual settings. The manual wind is therapeutic.',
      verified: true
    },
    {
      id: 3,
      author: 'James L.',
      rating: 4,
      date: '2023-12-28',
      title: 'Classic design, modern reliability',
      content: 'Love the heritage of this watch. Service from AURELIA was exceptional.',
      verified: true
    }
  ];

  const relatedProducts = [
    {
      id: 1,
      brand: 'OMEGA',
      model: 'Seamaster Diver 300M',
      price: 2850,
      image: '/placeholder.svg'
    },
    {
      id: 2,
      brand: 'ROLEX',
      model: 'Submariner Date',
      price: 8950,
      image: '/placeholder.svg'
    },
    {
      id: 3,
      brand: 'TAG HEUER',
      model: 'Carrera Calibre 16',
      price: 1650,
      image: '/placeholder.svg'
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
                <BreadcrumbLink href="/shop">Shop</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/shop?brand=omega">OMEGA</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{product.model}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Product Detail */}
        <section className="container mx-auto px-4 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Product Images */}
            <div>
              <div className="relative mb-4 group">
                <img
                  src={product.images[selectedImage]}
                  alt={`${product.brand} ${product.model}`}
                  className="w-full h-96 lg:h-[500px] object-cover rounded-lg shadow-luxury"
                />
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute top-4 right-4 bg-background/80 hover:bg-background opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <ZoomIn className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="grid grid-cols-4 gap-3">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative overflow-hidden rounded-lg ${
                      selectedImage === index ? 'ring-2 ring-accent' : ''
                    }`}
                  >
                    <img
                      src={image}
                      alt={`View ${index + 1}`}
                      className="w-full h-20 object-cover hover:scale-105 transition-transform"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="mb-6">
                <p className="text-sm text-muted-foreground font-medium mb-2">
                  {product.brand}
                </p>
                <h1 className="text-3xl font-heading mb-4">{product.model}</h1>
                
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating)
                            ? 'fill-accent text-accent'
                            : 'text-muted-foreground'
                        }`}
                      />
                    ))}
                    <span className="text-sm text-muted-foreground ml-2">
                      {product.rating} ({product.reviewCount} reviews)
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-4 mb-6">
                  <span className="text-3xl font-bold">${product.price.toLocaleString()}</span>
                  {product.originalPrice && (
                    <span className="text-lg text-muted-foreground line-through">
                      ${product.originalPrice.toLocaleString()}
                    </span>
                  )}
                  <Badge className="bg-accent text-obsidian">Save ${(product.originalPrice - product.price).toLocaleString()}</Badge>
                </div>

                <div className="flex items-center gap-2 mb-6">
                  <Badge variant="outline">{product.movement}</Badge>
                  <Badge variant="outline">{product.caseMaterial}</Badge>
                  <Badge variant="outline">{product.caseSize}</Badge>
                  <Badge variant="outline">{product.waterResistance}</Badge>
                </div>

                <div className="mb-6">
                  <Badge className="bg-green-500/10 text-green-500">
                    {product.availability}
                  </Badge>
                </div>
              </div>

              {/* Options */}
              <div className="space-y-6 mb-8">
                <div>
                  <label className="text-sm font-medium mb-3 block">Strap Option</label>
                  <Select value={selectedStrap} onValueChange={setSelectedStrap}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {strapOptions.map((option) => (
                        <SelectItem key={option.id} value={option.id}>
                          {option.name} {option.price > 0 && `(+$${option.price})`}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-3 block">Quantity</label>
                  <Select value={quantity.toString()} onValueChange={(value) => setQuantity(parseInt(value))}>
                    <SelectTrigger className="w-24">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {[1, 2, 3, 4, 5].map((num) => (
                        <SelectItem key={num} value={num.toString()}>
                          {num}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-4 mb-8">
                <Button className="w-full btn-hero text-lg py-6">
                  Add to Cart - ${(product.price + (strapOptions.find(s => s.id === selectedStrap)?.price || 0)).toLocaleString()}
                </Button>
                
                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline" className="flex items-center gap-2">
                    <Heart className="h-4 w-4" />
                    Add to Wishlist
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Share2 className="h-4 w-4" />
                    Share
                  </Button>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 py-6 border-t border-border">
                <div className="text-center">
                  <Shield className="h-6 w-6 text-accent mx-auto mb-2" />
                  <p className="text-xs text-muted-foreground">2-Year Warranty</p>
                </div>
                <div className="text-center">
                  <Truck className="h-6 w-6 text-accent mx-auto mb-2" />
                  <p className="text-xs text-muted-foreground">Free Shipping</p>
                </div>
                <div className="text-center">
                  <RefreshCw className="h-6 w-6 text-accent mx-auto mb-2" />
                  <p className="text-xs text-muted-foreground">7-Day Returns</p>
                </div>
              </div>
            </div>
          </div>

          {/* Product Details Tabs */}
          <div className="mb-16">
            <Tabs defaultValue="description" className="space-y-8">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="specifications">Specifications</TabsTrigger>
                <TabsTrigger value="reviews">Reviews ({product.reviewCount})</TabsTrigger>
                <TabsTrigger value="care">Care Guide</TabsTrigger>
              </TabsList>
              
              <TabsContent value="description" className="space-y-6">
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>
                </div>
                
                <Card className="card-luxury">
                  <CardContent className="p-6">
                    <h3 className="font-heading text-lg mb-4">Highlights</h3>
                    <ul className="space-y-2">
                      {product.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                          <span className="text-muted-foreground">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="card-luxury bg-accent/5 border-accent/20">
                  <CardContent className="p-6">
                    <h3 className="font-heading text-lg mb-3">Why We Selected This</h3>
                    <p className="text-muted-foreground leading-relaxed italic">
                      "{product.curatorNote}"
                    </p>
                    <p className="text-sm text-muted-foreground mt-4">— AURELIA Curation Team</p>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="specifications">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {Object.entries(specifications).map(([category, specs]) => (
                    <Card key={category} className="card-luxury">
                      <CardContent className="p-6">
                        <h3 className="font-heading text-lg mb-4 capitalize">{category}</h3>
                        <dl className="space-y-3">
                          {Object.entries(specs).map(([key, value]) => (
                            <div key={key} className="flex justify-between">
                              <dt className="text-muted-foreground">{key}:</dt>
                              <dd className="font-medium">{value}</dd>
                            </div>
                          ))}
                        </dl>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="reviews" className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-heading text-2xl mb-2">Customer Reviews</h3>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-5 w-5 ${
                              i < Math.floor(product.rating)
                                ? 'fill-accent text-accent'
                                : 'text-muted-foreground'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-lg font-semibold">{product.rating}</span>
                      <span className="text-muted-foreground">
                        Based on {product.reviewCount} reviews
                      </span>
                    </div>
                  </div>
                  <Button variant="outline">Write a Review</Button>
                </div>
                
                <div className="space-y-6">
                  {reviews.map((review) => (
                    <Card key={review.id} className="card-luxury">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <span className="font-medium">{review.author}</span>
                              {review.verified && (
                                <Badge variant="outline" className="text-xs">
                                  Verified Purchase
                                </Badge>
                              )}
                            </div>
                            <div className="flex items-center gap-1">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${
                                    i < review.rating
                                      ? 'fill-accent text-accent'
                                      : 'text-muted-foreground'
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                          <span className="text-sm text-muted-foreground">
                            {new Date(review.date).toLocaleDateString()}
                          </span>
                        </div>
                        <h4 className="font-medium mb-2">{review.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {review.content}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="care">
                <div className="space-y-6">
                  <Card className="card-luxury">
                    <CardContent className="p-6">
                      <h3 className="font-heading text-lg mb-4">Watch Care Instructions</h3>
                      <Accordion type="single" collapsible className="space-y-2">
                        <AccordionItem value="daily-care">
                          <AccordionTrigger>Daily Care</AccordionTrigger>
                          <AccordionContent className="text-muted-foreground">
                            Keep your watch clean by wiping it with a soft, dry cloth. Avoid exposure to strong magnetic fields and extreme temperatures.
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="water-resistance">
                          <AccordionTrigger>Water Resistance</AccordionTrigger>
                          <AccordionContent className="text-muted-foreground">
                            This watch is water-resistant to 50 meters. Suitable for everyday use but not for swimming or diving. Crown must be fully screwed down.
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="servicing">
                          <AccordionTrigger>Servicing Schedule</AccordionTrigger>
                          <AccordionContent className="text-muted-foreground">
                            We recommend professional servicing every 3-5 years to maintain optimal performance and water resistance.
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="storage">
                          <AccordionTrigger>Storage</AccordionTrigger>
                          <AccordionContent className="text-muted-foreground">
                            Store in a cool, dry place away from magnetic fields. Use the original box or a watch roll for travel.
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Related Products */}
          <div>
            <h2 className="text-3xl font-heading mb-8 text-center">You Might Also Like</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProducts.map((relatedProduct) => (
                <Card key={relatedProduct.id} className="group cursor-pointer card-luxury hover:shadow-glow transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img
                        src={relatedProduct.image}
                        alt={`${relatedProduct.brand} ${relatedProduct.model}`}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <p className="text-sm text-muted-foreground font-medium mb-1">
                        {relatedProduct.brand}
                      </p>
                      <h3 className="font-semibold mb-3">{relatedProduct.model}</h3>
                      <p className="text-xl font-bold">${relatedProduct.price.toLocaleString()}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;