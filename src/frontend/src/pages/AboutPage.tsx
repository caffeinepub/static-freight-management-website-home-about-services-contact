import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Users, Award, TrendingUp } from 'lucide-react';
import StatsStrip from '../components/StatsStrip';

const values = [
  {
    icon: Target,
    title: 'Our Mission',
    description:
      'To provide seamless, reliable, and innovative logistics solutions that empower businesses to thrive in the global marketplace.',
  },
  {
    icon: Users,
    title: 'Customer First',
    description:
      'We prioritize our clients\' needs, offering personalized service and support to ensure their complete satisfaction.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description:
      'We maintain the highest standards in every aspect of our operations, from handling to delivery.',
  },
  {
    icon: TrendingUp,
    title: 'Innovation',
    description:
      'We continuously invest in technology and processes to stay ahead in the rapidly evolving logistics industry.',
  },
];

const whyChooseUs = [
  {
    title: 'Industry Expertise',
    description: 'Over 25 years of experience in international freight and logistics management.',
  },
  {
    title: 'Global Network',
    description: 'Strategic partnerships with carriers and agents in 150+ countries worldwide.',
  },
  {
    title: 'Technology Driven',
    description: 'Advanced tracking systems and digital platforms for real-time shipment visibility.',
  },
  {
    title: 'Competitive Pricing',
    description: 'Optimized routes and strong carrier relationships ensure cost-effective solutions.',
  },
  {
    title: 'Compliance & Security',
    description: 'Full regulatory compliance and comprehensive insurance coverage for peace of mind.',
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
      <section className="border-b bg-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6">About Di Logisolutions</h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              For over two decades, we've been connecting businesses to the world through reliable, efficient, and innovative freight solutions. Our commitment to excellence has made us a trusted partner for companies of all sizes.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <StatsStrip />

      {/* Mission & Values */}
      <section className="border-b py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4">Our Mission & Values</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Guided by our core principles, we strive to deliver exceptional service and build lasting partnerships.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {values.map((value, index) => (
              <Card key={index} className="transition-shadow hover:shadow-soft">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
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
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4">What Sets Di Logisolutions Apart</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Our unique combination of experience, technology, and customer focus makes us the ideal logistics partner.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="transition-shadow hover:shadow-soft">
                <CardHeader>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
