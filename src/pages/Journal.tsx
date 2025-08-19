import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Search, Clock, ArrowRight } from 'lucide-react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';

const Journal = () => {
  const articles = [
    {
      id: 1,
      title: 'Understanding Watch Movements: Automatic vs. Manual vs. Quartz',
      excerpt: 'Dive deep into the heart of timekeeping with our comprehensive guide to watch movements, their history, and how to choose the right one for your lifestyle.',
      image: '/placeholder.svg',
      category: 'Education',
      readTime: '8 min read',
      publishedAt: '2024-01-15',
      featured: true,
      author: 'Marcus Chen'
    },
    {
      id: 2,
      title: 'The Art of Watch Care: Maintaining Your Timepiece',
      excerpt: 'Essential tips and professional techniques to keep your luxury watch running smoothly for generations. From cleaning to servicing schedules.',
      image: '/placeholder.svg',
      category: 'Care Guide',
      readTime: '6 min read',
      publishedAt: '2024-01-12',
      featured: true,
      author: 'Sophie Laurent'
    },
    {
      id: 3,
      title: 'Investment Timepieces: Watches That Hold Their Value',
      excerpt: 'Explore the world of watch collecting and discover which timepieces have proven to be smart investments over time.',
      image: '/placeholder.svg',
      category: 'Investment',
      readTime: '12 min read',
      publishedAt: '2024-01-10',
      featured: false,
      author: 'James Harrison'
    },
    {
      id: 4,
      title: 'Swiss Made: What It Really Means',
      excerpt: 'Uncover the stringent standards behind the prestigious "Swiss Made" label and why it commands respect in the watchmaking world.',
      image: '/placeholder.svg',
      category: 'Education',
      readTime: '5 min read',
      publishedAt: '2024-01-08',
      featured: false,
      author: 'Anna Dubois'
    },
    {
      id: 5,
      title: 'From Boardroom to Beach: Versatile Watches for Every Occasion',
      excerpt: 'Discover timepieces that seamlessly transition from professional settings to leisure activities without missing a beat.',
      image: '/placeholder.svg',
      category: 'Style Guide',
      readTime: '7 min read',
      publishedAt: '2024-01-05',
      featured: false,
      author: 'Marcus Chen'
    },
    {
      id: 6,
      title: 'The Future of Timekeeping: Smart Features in Luxury Watches',
      excerpt: 'How traditional watchmakers are incorporating modern technology while preserving classical craftsmanship.',
      image: '/placeholder.svg',
      category: 'Innovation',
      readTime: '9 min read',
      publishedAt: '2024-01-03',
      featured: false,
      author: 'David Park'
    }
  ];

  const categories = ['All', 'Education', 'Care Guide', 'Investment', 'Style Guide', 'Innovation'];

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
                <BreadcrumbPage>Journal</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Hero Section */}
        <section className="container mx-auto px-4 pb-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-heading mb-6">
              The AURELIA Journal
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Insights from the world of horology. From technical deep-dives to style guides, 
              discover the stories behind exceptional timepieces and the art of watchmaking.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-6 mb-12">
            <div className="relative flex-1 max-w-md mx-auto md:mx-0">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input placeholder="Search articles..." className="pl-10" />
            </div>
            
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === 'All' ? 'default' : 'outline'}
                  size="sm"
                  className={category === 'All' ? 'btn-hero' : ''}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Featured Articles */}
          <div className="mb-16">
            <h2 className="text-2xl font-heading mb-8">Featured Articles</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {articles.filter(article => article.featured).map((article) => (
                <Card key={article.id} className="group cursor-pointer card-luxury hover:shadow-glow transition-all duration-300 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-64 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 to-transparent" />
                      
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-accent text-obsidian">
                          {article.category}
                        </Badge>
                      </div>
                      
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-2xl font-heading mb-3 text-ivory group-hover:text-accent transition-colors">
                          {article.title}
                        </h3>
                        <p className="text-ivory/80 mb-4 leading-relaxed">
                          {article.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between text-sm text-ivory/60">
                          <div className="flex items-center gap-4">
                            <span>{article.author}</span>
                            <span className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {article.readTime}
                            </span>
                          </div>
                          <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* All Articles */}
          <div>
            <h2 className="text-2xl font-heading mb-8">Latest Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <Card key={article.id} className="group cursor-pointer card-luxury hover:shadow-glow transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge variant="secondary" className="bg-background/80">
                          {article.category}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-lg font-heading mb-3 group-hover:text-accent transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                        {article.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                        <div className="flex items-center gap-3">
                          <span>{article.author}</span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {article.readTime}
                          </span>
                        </div>
                        <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
                      </div>
                      
                      <Button variant="ghost" className="w-full justify-between group-hover:bg-accent/10">
                        Read Article
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button variant="outline" className="px-8">
                Load More Articles
              </Button>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16 py-16 border-t border-border text-center">
            <h2 className="text-3xl font-heading mb-4">
              Stay Updated
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Subscribe to our journal for the latest insights in horology, style guides, and exclusive content from the world of luxury timepieces.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input placeholder="Enter your email" className="flex-1" />
              <Button className="btn-hero">
                Subscribe
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Journal;