import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Plane, 
  Ship, 
  Truck, 
  Clock, 
  Globe, 
  Shield, 
  TrendingUp, 
  CheckCircle2,
  ArrowRight 
} from 'lucide-react';
import ServicePreviewGrid from '../components/ServicePreviewGrid';

const highlights = [
  {
    icon: Clock,
    title: 'On-Time Delivery',
    description: '99.8% on-time delivery rate with real-time tracking and updates.',
  },
  {
    icon: Globe,
    title: 'Global Coverage',
    description: 'Serving 150+ countries with our extensive logistics network.',
  },
  {
    icon: Shield,
    title: 'Secure & Insured',
    description: 'Full cargo insurance and secure handling for peace of mind.',
  },
  {
    icon: TrendingUp,
    title: 'Cost Efficient',
    description: 'Optimized routes and competitive rates to maximize your savings.',
  },
  {
    icon: CheckCircle2,
    title: 'Customs Expertise',
    description: 'Seamless customs clearance with our expert brokerage team.',
  },
  {
    icon: Truck,
    title: '24/7 Support',
    description: 'Round-the-clock customer support for all your shipping needs.',
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/30">
        <div className="container relative z-10 py-20 md:py-28 lg:py-36">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col justify-center space-y-6">
              <div className="space-y-4">
                <h1 className="animate-fade-in">
                  Global Freight Solutions for Your Business
                </h1>
                <p className="text-lg text-muted-foreground md:text-xl">
                  Reliable, efficient, and cost-effective logistics services connecting your business to the world. From air to ocean, we handle it all.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link to="/contact">
                  <Button size="lg" className="w-full sm:w-auto">
                    Get a Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/services">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    View Services
                  </Button>
                </Link>
              </div>
              <div className="flex flex-wrap gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-primary">25+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">150+</div>
                  <div className="text-sm text-muted-foreground">Countries Served</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">50K+</div>
                  <div className="text-sm text-muted-foreground">Shipments/Year</div>
                </div>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-medium">
                <img
                  src="/assets/generated/freight-hero.dim_1920x800.png"
                  alt="Global freight and logistics"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="border-t bg-background py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4">Why Choose GlobalFreight</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              We deliver excellence in every shipment with our commitment to reliability, security, and customer satisfaction.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((highlight, index) => (
              <Card key={index} className="transition-shadow hover:shadow-soft">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <highlight.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{highlight.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{highlight.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="border-t bg-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4">Our Services</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Comprehensive freight and logistics solutions tailored to your business needs.
            </p>
          </div>
          <ServicePreviewGrid />
          <div className="mt-12 text-center">
            <Link to="/services">
              <Button size="lg" variant="outline">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t bg-primary py-16 text-primary-foreground md:py-20">
        <div className="container text-center">
          <h2 className="mb-4 text-primary-foreground">Ready to Ship with Us?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg opacity-90">
            Get a customized quote for your freight needs. Our team is ready to help you find the best solution.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary">
              Contact Us Today
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

