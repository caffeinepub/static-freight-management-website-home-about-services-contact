import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import ServiceCategorySection from '../components/ServiceCategorySection';
import {
  Plane,
  Ship,
  Truck,
  Train,
  FileText,
  Warehouse,
  Package,
  Container,
  Shield,
  BarChart3,
} from 'lucide-react';

const serviceCategories = [
  {
    title: 'Air Freight',
    icon: Plane,
    services: [
      {
        name: 'Express Air Cargo',
        description: 'Expedited air freight for urgent shipments with guaranteed delivery times and priority handling.',
      },
      {
        name: 'Standard Air Freight',
        description: 'Cost-effective air cargo solutions for time-sensitive but non-urgent international shipments.',
      },
      {
        name: 'Charter Services',
        description: 'Dedicated aircraft charter for oversized cargo, special projects, or high-volume shipments.',
      },
    ],
  },
  {
    title: 'Ocean Freight',
    icon: Ship,
    services: [
      {
        name: 'Full Container Load (FCL)',
        description: 'Exclusive container shipping for large volume cargo with direct port-to-port service.',
      },
      {
        name: 'Less than Container Load (LCL)',
        description: 'Consolidated shipping for smaller cargo volumes, sharing container space to reduce costs.',
      },
      {
        name: 'Bulk Cargo',
        description: 'Specialized handling for loose cargo loads including grains, minerals, and liquids.',
      },
      {
        name: 'Roll-on/Roll-off (RoRo)',
        description: 'Vehicle and heavy machinery shipping with drive-on/drive-off loading capabilities.',
      },
    ],
  },
  {
    title: 'Road Transport',
    icon: Truck,
    services: [
      {
        name: 'Full Truckload (FTL)',
        description: 'Dedicated truck service for large shipments requiring exclusive vehicle use.',
      },
      {
        name: 'Less than Truckload (LTL)',
        description: 'Consolidated trucking for smaller shipments, optimizing costs through shared capacity.',
      },
      {
        name: 'Cross-Border Trucking',
        description: 'International road freight with customs clearance and border crossing expertise.',
      },
    ],
  },
  {
    title: 'Rail Freight',
    icon: Train,
    services: [
      {
        name: 'Intermodal Rail',
        description: 'Container shipping by rail with seamless transfers to truck or ocean transport.',
      },
      {
        name: 'Bulk Rail Transport',
        description: 'High-volume rail shipping for commodities, raw materials, and industrial goods.',
      },
    ],
  },
  {
    title: 'Customs Brokerage',
    icon: FileText,
    services: [
      {
        name: 'Import/Export Clearance',
        description: 'Complete customs documentation and clearance services for international shipments.',
      },
      {
        name: 'Duty & Tax Management',
        description: 'Expert guidance on tariffs, duties, and tax optimization for cross-border trade.',
      },
      {
        name: 'Compliance Consulting',
        description: 'Regulatory compliance support and trade agreement utilization strategies.',
      },
    ],
  },
  {
    title: 'Warehousing & Distribution',
    icon: Warehouse,
    services: [
      {
        name: 'Storage Solutions',
        description: 'Secure, climate-controlled warehousing facilities with flexible short and long-term options.',
      },
      {
        name: 'Inventory Management',
        description: 'Real-time inventory tracking, stock control, and automated replenishment systems.',
      },
      {
        name: 'Pick & Pack Services',
        description: 'Order fulfillment, kitting, and custom packaging for e-commerce and retail distribution.',
      },
      {
        name: 'Cross-Docking',
        description: 'Rapid transfer of goods from inbound to outbound transport with minimal storage time.',
      },
    ],
  },
  {
    title: 'Last-Mile Delivery',
    icon: Package,
    services: [
      {
        name: 'Urban Delivery',
        description: 'Fast, reliable delivery to residential and commercial addresses in metropolitan areas.',
      },
      {
        name: 'White Glove Service',
        description: 'Premium delivery with unpacking, assembly, and installation for high-value items.',
      },
    ],
  },
  {
    title: 'Project Cargo',
    icon: Container,
    services: [
      {
        name: 'Heavy Lift',
        description: 'Specialized equipment and expertise for oversized and overweight cargo transportation.',
      },
      {
        name: 'Breakbulk Shipping',
        description: 'Handling of non-containerized cargo requiring special loading and securing methods.',
      },
      {
        name: 'Project Management',
        description: 'End-to-end coordination for complex, multi-modal logistics projects.',
      },
    ],
  },
  {
    title: 'Freight Insurance',
    icon: Shield,
    services: [
      {
        name: 'Cargo Insurance',
        description: 'Comprehensive coverage protecting your goods against loss or damage during transit.',
      },
      {
        name: 'Liability Coverage',
        description: 'Protection against third-party claims and carrier liability limitations.',
      },
    ],
  },
  {
    title: 'Supply Chain Consulting',
    icon: BarChart3,
    services: [
      {
        name: 'Network Optimization',
        description: 'Strategic analysis and design of distribution networks to reduce costs and improve efficiency.',
      },
      {
        name: 'Process Improvement',
        description: 'Lean logistics consulting to streamline operations and eliminate waste.',
      },
      {
        name: 'Technology Integration',
        description: 'Implementation of TMS, WMS, and other logistics technology solutions.',
      },
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="border-b bg-gradient-to-br from-background via-background to-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6">Our Services</h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Comprehensive freight and logistics solutions designed to meet every shipping need. From air to ocean, customs to warehousing, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Services Categories */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="space-y-16">
            {serviceCategories.map((category, index) => (
              <ServiceCategorySection
                key={index}
                title={category.title}
                icon={category.icon}
                services={category.services}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t bg-muted/30 py-16 md:py-20">
        <div className="container text-center">
          <h2 className="mb-4">Need a Custom Solution?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
            Every business has unique logistics needs. Contact us to discuss how we can create a tailored freight solution for your specific requirements.
          </p>
          <Link to="/contact">
            <Button size="lg">
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

