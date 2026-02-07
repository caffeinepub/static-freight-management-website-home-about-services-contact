import { Package, Globe, Users, TrendingUp } from 'lucide-react';

const stats = [
  {
    icon: Package,
    value: '50,000+',
    label: 'Annual Shipments',
  },
  {
    icon: Globe,
    value: '150+',
    label: 'Countries Served',
  },
  {
    icon: Users,
    value: '2,500+',
    label: 'Happy Clients',
  },
  {
    icon: TrendingUp,
    value: '99.8%',
    label: 'On-Time Delivery',
  },
];

export default function StatsStrip() {
  return (
    <section className="border-b bg-primary py-12 text-primary-foreground md:py-16">
      <div className="container">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="mb-3 flex justify-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary-foreground/10">
                  <stat.icon className="h-7 w-7" />
                </div>
              </div>
              <div className="text-4xl font-bold">{stat.value}</div>
              <div className="mt-1 text-sm opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

