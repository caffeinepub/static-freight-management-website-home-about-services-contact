import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { type LucideIcon } from 'lucide-react';

interface Service {
  name: string;
  description: string;
}

interface ServiceCategorySectionProps {
  title: string;
  icon: LucideIcon;
  services: Service[];
}

export default function ServiceCategorySection({ title, icon: Icon, services }: ServiceCategorySectionProps) {
  return (
    <div>
      <div className="mb-8 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <h2 className="text-3xl font-semibold">{title}</h2>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <Card key={index} className="transition-all hover:shadow-soft hover:border-primary/50">
            <CardHeader>
              <CardTitle className="text-lg">{service.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">{service.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
      {services.length > 0 && <Separator className="mt-12" />}
    </div>
  );
}

