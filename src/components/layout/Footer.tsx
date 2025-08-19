import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  const footerSections = [
    {
      title: 'Shop',
      links: [
        { name: 'Men\'s Watches', href: '/shop/men' },
        { name: 'Women\'s Watches', href: '/shop/women' },
        { name: 'Unisex Watches', href: '/shop/unisex' },
        { name: 'New Arrivals', href: '/shop/new' },
        { name: 'Sale', href: '/shop/sale' },
      ],
    },
    {
      title: 'Collections',
      links: [
        { name: 'Dress', href: '/collections/dress' },
        { name: 'Sport', href: '/collections/sport' },
        { name: 'Heritage', href: '/collections/heritage' },
        { name: 'Chronograph', href: '/collections/chronograph' },
        { name: 'Everyday', href: '/collections/everyday' },
      ],
    },
    {
      title: 'Support',
      links: [
        { name: 'Size Guide', href: '/support/size-guide' },
        { name: 'Care Instructions', href: '/support/care' },
        { name: 'Warranty', href: '/support/warranty' },
        { name: 'Returns', href: '/support/returns' },
        { name: 'Contact Us', href: '/support/contact' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'Our Story', href: '/about' },
        { name: 'Journal', href: '/journal' },
        { name: 'Careers', href: '/careers' },
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
      ],
    },
  ];

  const paymentMethods = [
    'Visa', 'Mastercard', 'American Express', 'PayPal', 'Apple Pay', 'Google Pay'
  ];

  return (
    <footer className="bg-card border-t border-border">
      {/* Newsletter Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-semibold text-foreground mb-4">
            Stay in Time
          </h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Get exclusive access to new arrivals, special editions, and horological insights
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1"
            />
            <Button className="btn-hero whitespace-nowrap">
              Subscribe
            </Button>
          </div>
          
          <p className="text-xs text-muted-foreground mt-3">
            By subscribing, you agree to receive marketing emails. Unsubscribe anytime.
          </p>
        </div>

        <Separator className="mb-12" />

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-foreground mb-4 tracking-wide">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Brand */}
          <div>
            <h4 className="text-xl font-bold tracking-[0.2em] text-foreground mb-1">
              AURELIA
            </h4>
            <p className="text-xs text-muted-foreground tracking-[0.1em]">
              TIME, REFINED
            </p>
          </div>

          {/* Payment Methods */}
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground hidden sm:block">
              We accept:
            </span>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              {paymentMethods.slice(0, 4).map((method) => (
                <span key={method} className="px-2 py-1 bg-muted/20 rounded">
                  {method}
                </span>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} AURELIA. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;