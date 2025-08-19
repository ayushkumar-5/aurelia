import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';

const Contact = () => {
  const locations = [
    {
      city: 'New York',
      address: '432 Park Avenue, Suite 1205\nNew York, NY 10016',
      phone: '+1 (555) 123-4567',
      email: 'ny@aurelia.com',
      hours: 'Mon-Sat: 10AM-7PM\nSun: 12PM-5PM'
    },
    {
      city: 'Los Angeles',
      address: '9200 Sunset Boulevard\nWest Hollywood, CA 90069',
      phone: '+1 (555) 234-5678',
      email: 'la@aurelia.com',
      hours: 'Mon-Sat: 10AM-8PM\nSun: 11AM-6PM'
    },
    {
      city: 'London',
      address: '45 Conduit Street\nMayfair, London W1S 2YN',
      phone: '+44 20 7123 4567',
      email: 'london@aurelia.com',
      hours: 'Mon-Sat: 9AM-6PM\nSun: Closed'
    }
  ];

  const inquiryTypes = [
    'General Information',
    'Product Inquiry',
    'Purchase Assistance',
    'Service & Warranty',
    'Trade-In Program',
    'Press & Media',
    'Partnership Opportunities'
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
                <BreadcrumbPage>Contact</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Hero Section */}
        <section className="container mx-auto px-4 pb-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-heading mb-6">
              Contact Us
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Whether you're seeking the perfect timepiece or need expert advice, 
              our team of specialists is here to assist you every step of the way.
            </p>
          </div>

          {/* Quick Contact */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <Card className="card-luxury text-center">
              <CardContent className="p-6">
                <Phone className="h-8 w-8 text-accent mx-auto mb-4" />
                <h3 className="font-heading text-lg mb-2">Call Us</h3>
                <p className="text-muted-foreground mb-4">
                  Speak with our experts
                </p>
                <p className="font-semibold text-lg">+1 (555) 123-4567</p>
                <Badge variant="outline" className="mt-2">
                  Available Now
                </Badge>
              </CardContent>
            </Card>

            <Card className="card-luxury text-center">
              <CardContent className="p-6">
                <MessageCircle className="h-8 w-8 text-accent mx-auto mb-4" />
                <h3 className="font-heading text-lg mb-2">Live Chat</h3>
                <p className="text-muted-foreground mb-4">
                  Instant assistance
                </p>
                <Button className="btn-hero">
                  Start Chat
                </Button>
                <Badge variant="outline" className="mt-2">
                  Response in 2 min
                </Badge>
              </CardContent>
            </Card>

            <Card className="card-luxury text-center">
              <CardContent className="p-6">
                <Mail className="h-8 w-8 text-accent mx-auto mb-4" />
                <h3 className="font-heading text-lg mb-2">Email Us</h3>
                <p className="text-muted-foreground mb-4">
                  Detailed inquiries
                </p>
                <p className="font-semibold">info@aurelia.com</p>
                <Badge variant="outline" className="mt-2">
                  24-48 hour response
                </Badge>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-heading mb-6">Send us a Message</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Have a specific question or need personalized recommendations? 
                Fill out the form below and one of our specialists will get back to you promptly.
              </p>
              
              <Card className="card-luxury">
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">First Name *</label>
                        <Input placeholder="John" required />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Last Name *</label>
                        <Input placeholder="Doe" required />
                      </div>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium mb-2 block">Email *</label>
                      <Input type="email" placeholder="john@example.com" required />
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium mb-2 block">Phone</label>
                      <Input type="tel" placeholder="+1 (555) 123-4567" />
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium mb-2 block">Inquiry Type</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          {inquiryTypes.map((type) => (
                            <SelectItem key={type} value={type.toLowerCase().replace(/\s+/g, '-')}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium mb-2 block">Budget Range (Optional)</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-1000">Under $1,000</SelectItem>
                          <SelectItem value="1000-5000">$1,000 - $5,000</SelectItem>
                          <SelectItem value="5000-15000">$5,000 - $15,000</SelectItem>
                          <SelectItem value="15000-50000">$15,000 - $50,000</SelectItem>
                          <SelectItem value="over-50000">Over $50,000</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium mb-2 block">Message *</label>
                      <Textarea 
                        placeholder="Please tell us how we can help you..."
                        className="min-h-32"
                        required
                      />
                    </div>
                    
                    <Button className="w-full btn-hero">
                      Send Message
                    </Button>
                    
                    <p className="text-xs text-muted-foreground text-center">
                      * Required fields. We respect your privacy and will never share your information.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Locations */}
            <div>
              <h2 className="text-3xl font-heading mb-6">Visit Our Showrooms</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Experience our timepieces in person at one of our flagship locations. 
                Private appointments available for personalized consultations.
              </p>
              
              <div className="space-y-6">
                {locations.map((location, index) => (
                  <Card key={index} className="card-luxury">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-2 rounded-full bg-accent/10">
                          <MapPin className="h-5 w-5 text-accent" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-heading text-lg mb-2">{location.city}</h3>
                          <div className="space-y-3 text-sm">
                            <div>
                              <p className="text-muted-foreground whitespace-pre-line">
                                {location.address}
                              </p>
                            </div>
                            
                            <div className="flex items-center gap-2">
                              <Phone className="h-4 w-4 text-accent" />
                              <span>{location.phone}</span>
                            </div>
                            
                            <div className="flex items-center gap-2">
                              <Mail className="h-4 w-4 text-accent" />
                              <span>{location.email}</span>
                            </div>
                            
                            <div className="flex items-start gap-2">
                              <Clock className="h-4 w-4 text-accent mt-0.5" />
                              <span className="whitespace-pre-line text-muted-foreground">
                                {location.hours}
                              </span>
                            </div>
                          </div>
                          
                          <div className="flex gap-3 mt-4">
                            <Button size="sm" variant="outline">
                              Get Directions
                            </Button>
                            <Button size="sm" className="btn-hero">
                              Book Appointment
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Additional Services */}
          <div className="text-center py-16 border-t border-border">
            <h2 className="text-3xl font-heading mb-4">Additional Services</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Beyond our showrooms, we offer specialized services to enhance your experience.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Card className="card-luxury">
                <CardContent className="p-6 text-center">
                  <h3 className="font-heading mb-2">Private Consultations</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    One-on-one sessions with our experts
                  </p>
                  <Button variant="outline" size="sm">
                    Schedule
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="card-luxury">
                <CardContent className="p-6 text-center">
                  <h3 className="font-heading mb-2">Home Delivery</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Secure delivery to your location
                  </p>
                  <Button variant="outline" size="sm">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="card-luxury">
                <CardContent className="p-6 text-center">
                  <h3 className="font-heading mb-2">Trade-In Program</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Upgrade your collection with ease
                  </p>
                  <Button variant="outline" size="sm">
                    Get Quote
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;