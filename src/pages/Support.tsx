import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Shield, Clock, RefreshCw, Phone, Mail, MessageCircle, CheckCircle } from 'lucide-react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';

const Support = () => {
  const services = [
    {
      icon: Shield,
      title: '2-Year Warranty',
      description: 'Comprehensive coverage for manufacturing defects and timekeeping accuracy.',
      features: ['Manufacturing defects', 'Timekeeping accuracy', 'Crown and pushers', 'Water resistance']
    },
    {
      icon: Clock,
      title: 'Expert Servicing',
      description: 'Professional maintenance by certified watchmakers using genuine parts.',
      features: ['Movement servicing', 'Case refinishing', 'Gasket replacement', 'Timing regulation']
    },
    {
      icon: RefreshCw,
      title: '7-Day Returns',
      description: 'Easy returns within 7 days of delivery in original condition.',
      features: ['Original packaging', 'All accessories included', 'Unworn condition', 'Free return shipping']
    }
  ];

  const faqs = [
    {
      question: 'What does the 2-year warranty cover?',
      answer: 'Our warranty covers manufacturing defects, movement malfunctions, and water resistance issues (when used within specified limits). It does not cover damage from normal wear, accidents, or misuse.'
    },
    {
      question: 'How often should I service my watch?',
      answer: 'We recommend servicing mechanical watches every 3-5 years, depending on usage. Quartz watches typically need battery replacement every 2-3 years and full servicing every 5-7 years.'
    },
    {
      question: 'Are your watches authentic?',
      answer: 'Yes, all our timepieces are sourced directly from authorized dealers and come with original manufacturer warranties and documentation. We guarantee 100% authenticity.'
    },
    {
      question: 'What is your return policy?',
      answer: 'You can return any unworn watch within 7 days of delivery for a full refund. The watch must be in original condition with all packaging and accessories.'
    },
    {
      question: 'Do you offer international shipping?',
      answer: 'Yes, we ship worldwide with full insurance and tracking. Shipping times and costs vary by destination. All shipments are fully insured and require signature confirmation.'
    },
    {
      question: 'How do I know if my watch needs servicing?',
      answer: 'Signs include: losing or gaining time significantly, crown not screwing properly, condensation under crystal, or unusual sounds from the movement. Contact us for professional assessment.'
    },
    {
      question: 'Can you resize my watch bracelet?',
      answer: 'Yes, we offer complimentary bracelet sizing for all purchases. We can also adjust leather straps and provide guidance on proper fit.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, wire transfers, and cryptocurrency. All transactions are secured with bank-level encryption.'
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
                <BreadcrumbPage>Support</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Hero Section */}
        <section className="container mx-auto px-4 pb-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-heading mb-6">
              Service & Support
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Your timepiece deserves exceptional care. From warranty coverage to expert servicing, 
              we're committed to keeping your watch performing perfectly for generations.
            </p>
          </div>

          {/* Service Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="card-luxury text-center">
                  <CardHeader>
                    <div className="mx-auto mb-4 p-3 rounded-full bg-accent/10 w-fit">
                      <IconComponent className="h-8 w-8 text-accent" />
                    </div>
                    <CardTitle className="text-xl font-heading">{service.title}</CardTitle>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center justify-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-accent" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Contact Methods */}
          <div className="mb-16">
            <h2 className="text-3xl font-heading text-center mb-8">Get in Touch</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="card-luxury text-center">
                <CardContent className="p-6">
                  <Phone className="h-8 w-8 text-accent mx-auto mb-4" />
                  <h3 className="font-heading text-lg mb-2">Phone Support</h3>
                  <p className="text-muted-foreground mb-4">
                    Speak with our experts
                  </p>
                  <p className="font-semibold">+1 (555) 123-4567</p>
                  <p className="text-sm text-muted-foreground">Mon-Fri 9AM-6PM EST</p>
                </CardContent>
              </Card>

              <Card className="card-luxury text-center">
                <CardContent className="p-6">
                  <Mail className="h-8 w-8 text-accent mx-auto mb-4" />
                  <h3 className="font-heading text-lg mb-2">Email Support</h3>
                  <p className="text-muted-foreground mb-4">
                    Detailed assistance
                  </p>
                  <p className="font-semibold">support@aurelia.com</p>
                  <p className="text-sm text-muted-foreground">24-48 hour response</p>
                </CardContent>
              </Card>

              <Card className="card-luxury text-center">
                <CardContent className="p-6">
                  <MessageCircle className="h-8 w-8 text-accent mx-auto mb-4" />
                  <h3 className="font-heading text-lg mb-2">Live Chat</h3>
                  <p className="text-muted-foreground mb-4">
                    Instant assistance
                  </p>
                  <Button className="btn-hero">Start Chat</Button>
                  <p className="text-sm text-muted-foreground mt-2">Available now</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
            <div>
              <h2 className="text-3xl font-heading mb-6">Send us a Message</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Have a specific question about your timepiece or need personalized assistance? 
                Our team of watch specialists is here to help.
              </p>
              
              <Card className="card-luxury">
                <CardContent className="p-6">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">First Name</label>
                        <Input placeholder="John" />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Last Name</label>
                        <Input placeholder="Doe" />
                      </div>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium mb-2 block">Email</label>
                      <Input type="email" placeholder="john@example.com" />
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium mb-2 block">Subject</label>
                      <Input placeholder="How can we help you?" />
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium mb-2 block">Message</label>
                      <Textarea 
                        placeholder="Please describe your question or concern in detail..."
                        className="min-h-32"
                      />
                    </div>
                    
                    <Button className="w-full btn-hero">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* FAQ Section */}
            <div>
              <h2 className="text-3xl font-heading mb-6">Frequently Asked Questions</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Quick answers to common questions about our products, services, and policies.
              </p>
              
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-4">
                    <AccordionTrigger className="text-left font-medium hover:text-accent">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>

          {/* Service Centers */}
          <div className="text-center py-16 border-t border-border">
            <h2 className="text-3xl font-heading mb-4">Authorized Service Centers</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Find a certified AURELIA service center near you for professional maintenance and repairs.
            </p>
            <Button variant="outline" className="px-8">
              Find Service Centers
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Support;