import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Plane, Ship, Truck, Warehouse } from 'lucide-react';

const services = [
  {
    icon: Plane,
    title: 'Air Freight',
    description: 'Fast and reliable air cargo services for time-sensitive shipments worldwide.',
  },
  {
    icon: Ship,
    title: 'Ocean Freight',
    description: 'Cost-effective sea freight solutions for large volume and heavy cargo.',
  },
  {
    icon: Truck,
    title: 'Road Transport',
    description: 'Flexible trucking services for domestic and cross-border deliveries.',
  },
  {
    icon: Warehouse,
    title: 'Warehousing',
    description: 'Secure storage and distribution facilities with inventory management.',
  },
];

export default function ServicePreviewGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {services.map((service, index) => (
        <Card key={index} className="transition-all hover:shadow-soft hover:border-primary/50">
          <CardHeader>
            <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10">
              <service.icon className="h-7 w-7 text-primary" />
            </div>
            <CardTitle className="text-lg">{service.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>{service.description}</CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

