import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Target, Users, Award, TrendingUp, Globe2, Shield } from 'lucide-react';
import StatsStrip from '../components/StatsStrip';

const values = [
  {
    icon: Target,
    title: 'Customer Focus',
    description: 'We prioritize our clients\' needs and deliver tailored solutions that exceed expectations.',
  },
  {
    icon: Shield,
    title: 'Reliability',
    description: 'Consistent, dependable service you can count on for every shipment, every time.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Committed to the highest standards in logistics operations and customer service.',
  },
  {
    icon: Globe2,
    title: 'Global Reach',
    description: 'Extensive network spanning continents to connect your business worldwide.',
  },
];

const whyChooseUs = [
  {
    title: 'Industry Expertise',
    description: 'Over 25 years of experience in international freight and logistics management.',
  },
  {
    title: 'Advanced Technology',
    description: 'State-of-the-art tracking systems and digital platforms for complete visibility.',
  },
  {
    title: 'Competitive Pricing',
    description: 'Optimized routes and strong carrier relationships ensure the best rates.',
  },
  {
    title: 'Dedicated Support',
    description: '24/7 customer service team ready to assist with any shipping challenge.',
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="border-b bg-gradient-to-br from-background via-background to-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6">About GlobalFreight</h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              A trusted leader in global logistics, connecting businesses worldwide with reliable, efficient, and innovative freight solutions since 1999.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <StatsStrip />

      {/* Company Overview */}
      <section className="border-b py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 1999, GlobalFreight began with a simple mission: to make international shipping accessible, reliable, and efficient for businesses of all sizes. What started as a small freight forwarding operation has grown into a comprehensive logistics provider serving clients across 150+ countries.
                </p>
                <p>
                  Today, we handle over 50,000 shipments annually, ranging from small parcels to oversized project cargo. Our success is built on strong relationships with carriers, customs authorities, and most importantly, our valued clients who trust us with their most critical shipments.
                </p>
                <p>
                  As we continue to grow, we remain committed to innovation, sustainability, and delivering exceptional service that helps our clients succeed in the global marketplace.
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-lg shadow-medium">
                <img
                  src="/assets/generated/freight-hero.dim_1920x800.png"
                  alt="GlobalFreight operations"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="border-b bg-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4">Our Mission & Values</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Guided by our core values, we strive to be the most trusted partner in global logistics.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4">Why Choose Us</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              What sets GlobalFreight apart in the competitive logistics industry.
            </p>
          </div>
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-8 md:grid-cols-2">
              {whyChooseUs.map((item, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

