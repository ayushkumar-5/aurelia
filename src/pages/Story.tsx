import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Heart, Globe, Users } from 'lucide-react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';

const Story = () => {
  const values = [
    {
      icon: Award,
      title: 'Uncompromising Quality',
      description: 'Every timepiece in our collection meets the highest standards of Swiss watchmaking excellence.'
    },
    {
      icon: Heart,
      title: 'Passionate Curation',
      description: 'Our experts personally select each watch based on craftsmanship, heritage, and timeless design.'
    },
    {
      icon: Globe,
      title: 'Global Heritage',
      description: 'We celebrate the rich traditions of watchmaking from Switzerland, Germany, Japan, and beyond.'
    },
    {
      icon: Users,
      title: 'Personal Service',
      description: 'Every client receives personalized attention from our team of certified watch specialists.'
    }
  ];

  const milestones = [
    {
      year: '2018',
      title: 'The Beginning',
      description: 'Founded with a vision to make luxury timepieces accessible to discerning collectors worldwide.'
    },
    {
      year: '2020',
      title: 'Expansion',
      description: 'Partnered with over 50 prestigious watch manufacturers and opened our first flagship showroom.'
    },
    {
      year: '2022',
      title: 'Innovation',
      description: 'Launched our digital platform, revolutionizing how customers discover and purchase luxury watches.'
    },
    {
      year: '2024',
      title: 'Excellence',
      description: 'Recognized as a leading authority in luxury timepieces with customers in over 40 countries.'
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
                <BreadcrumbPage>Our Story</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Hero Section */}
        <section className="container mx-auto px-4 pb-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-heading mb-6">
              Our Story
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Born from a passion for exceptional timepieces and a commitment to preserving 
              the art of traditional watchmaking in the modern world.
            </p>
          </div>

          {/* Main Story */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
            <div>
              <h2 className="text-3xl font-heading mb-6">Time, Refined.</h2>
              <div className="prose prose-lg text-muted-foreground leading-relaxed space-y-6">
                <p>
                  AURELIA was founded on a simple belief: that exceptional timepieces should be 
                  accessible to those who truly appreciate their artistry. What began as a small 
                  collection of carefully selected Swiss watches has evolved into a curated 
                  marketplace celebrating the finest traditions of global watchmaking.
                </p>
                <p>
                  Our journey started when our founder, a third-generation watch collector, 
                  recognized the gap between mass-market timepieces and the exclusive world 
                  of haute horlogerie. He envisioned a space where passion meets precision, 
                  where each watch tells not just time, but a story of human craftsmanship 
                  and innovation.
                </p>
                <p>
                  Today, AURELIA represents more than just a collection of luxury watches. 
                  We are guardians of horological heritage, committed to preserving the 
                  traditions that make each timepiece a work of art while embracing the 
                  innovations that drive the industry forward.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="/placeholder.svg"
                alt="AURELIA Workshop"
                className="w-full h-96 object-cover rounded-lg shadow-luxury"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 to-transparent rounded-lg" />
              <div className="absolute bottom-6 left-6 right-6">
                <Badge className="mb-3 bg-accent text-obsidian">
                  Our Workshop
                </Badge>
                <p className="text-ivory text-sm leading-relaxed">
                  Where traditional craftsmanship meets modern precision in the heart of our facility.
                </p>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading mb-4">Our Values</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do, from selecting timepieces 
                to serving our valued customers.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <Card key={index} className="card-luxury text-center">
                    <CardContent className="p-6">
                      <div className="mx-auto mb-4 p-3 rounded-full bg-accent/10 w-fit">
                        <IconComponent className="h-8 w-8 text-accent" />
                      </div>
                      <h3 className="font-heading text-lg mb-3">{value.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Timeline */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading mb-4">Our Journey</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Key milestones that have shaped AURELIA into the trusted name 
                in luxury timepieces it is today.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {milestones.map((milestone, index) => (
                <Card key={index} className="card-luxury">
                  <CardContent className="p-6">
                    <Badge className="mb-4 bg-accent text-obsidian font-bold">
                      {milestone.year}
                    </Badge>
                    <h3 className="font-heading text-lg mb-3">{milestone.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {milestone.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Authenticity Pledge */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
            <div className="relative order-2 lg:order-1">
              <img
                src="/placeholder.svg"
                alt="Watch Authentication Process"
                className="w-full h-96 object-cover rounded-lg shadow-luxury"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 to-transparent rounded-lg" />
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-heading mb-6">Our Authenticity Pledge</h2>
              <div className="prose prose-lg text-muted-foreground leading-relaxed space-y-6">
                <p>
                  Every timepiece in our collection undergoes rigorous authentication 
                  by our team of certified horologists. We source exclusively from 
                  authorized dealers and maintain detailed provenance records for 
                  each watch.
                </p>
                <p>
                  Our commitment extends beyond the point of sale. We provide 
                  comprehensive warranties, professional servicing, and lifetime 
                  support to ensure your timepiece continues to perform at its best.
                </p>
                <p>
                  This isn't just business—it's our promise to preserve the 
                  integrity and artistry that makes each watch a treasure worth 
                  passing down through generations.
                </p>
              </div>
              
              <div className="mt-8">
                <Button className="btn-hero mr-4">
                  View Our Guarantee
                </Button>
                <Button variant="outline">
                  Contact Our Experts
                </Button>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="text-center py-16 border-t border-border">
            <h2 className="text-3xl font-heading mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our passionate team of watch specialists, collectors, and craftspeople 
              are here to help you discover your perfect timepiece.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-hero">
                Our Specialists
              </Button>
              <Button variant="outline">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Story;