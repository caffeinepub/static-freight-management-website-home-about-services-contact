import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { CheckCircle2, Mail, Phone, MapPin, Clock } from 'lucide-react';
import ContactDetailsCard from '../components/ContactDetailsCard';
import { validateContactForm } from '../lib/contactValidation';

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  service?: string;
  message?: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error for this field when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const validationErrors = validateContactForm(formData);
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });
    }, 1000);
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="border-b bg-gradient-to-br from-background via-background to-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6">Contact Us</h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Get in touch with our team to discuss your freight and logistics needs. We're here to help you find the perfect solution.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Details */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <Alert className="border-primary/50 bg-primary/5">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      <AlertTitle className="text-primary">Message Sent Successfully!</AlertTitle>
                      <AlertDescription>
                        Thank you for contacting us. Our team will review your message and get back to you shortly.
                      </AlertDescription>
                    </Alert>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid gap-6 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="name">
                            Name <span className="text-destructive">*</span>
                          </Label>
                          <Input
                            id="name"
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={(e) => handleChange('name', e.target.value)}
                            className={errors.name ? 'border-destructive' : ''}
                          />
                          {errors.name && (
                            <p className="text-sm text-destructive">{errors.name}</p>
                          )}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">
                            Email <span className="text-destructive">*</span>
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="john@example.com"
                            value={formData.email}
                            onChange={(e) => handleChange('email', e.target.value)}
                            className={errors.email ? 'border-destructive' : ''}
                          />
                          {errors.email && (
                            <p className="text-sm text-destructive">{errors.email}</p>
                          )}
                        </div>
                      </div>

                      <div className="grid gap-6 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone (Optional)</Label>
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="+1 (555) 123-4567"
                            value={formData.phone}
                            onChange={(e) => handleChange('phone', e.target.value)}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="service">
                            Service Interested In <span className="text-destructive">*</span>
                          </Label>
                          <Select
                            value={formData.service}
                            onValueChange={(value) => handleChange('service', value)}
                          >
                            <SelectTrigger
                              id="service"
                              className={errors.service ? 'border-destructive' : ''}
                            >
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="air-freight">Air Freight</SelectItem>
                              <SelectItem value="ocean-freight">Ocean Freight</SelectItem>
                              <SelectItem value="road-transport">Road Transport</SelectItem>
                              <SelectItem value="rail-freight">Rail Freight</SelectItem>
                              <SelectItem value="customs-brokerage">Customs Brokerage</SelectItem>
                              <SelectItem value="warehousing">Warehousing</SelectItem>
                              <SelectItem value="last-mile">Last-Mile Delivery</SelectItem>
                              <SelectItem value="project-cargo">Project Cargo</SelectItem>
                              <SelectItem value="insurance">Freight Insurance</SelectItem>
                              <SelectItem value="consulting">Supply Chain Consulting</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          {errors.service && (
                            <p className="text-sm text-destructive">{errors.service}</p>
                          )}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">
                          Message <span className="text-destructive">*</span>
                        </Label>
                        <Textarea
                          id="message"
                          placeholder="Tell us about your shipping needs..."
                          rows={6}
                          value={formData.message}
                          onChange={(e) => handleChange('message', e.target.value)}
                          className={errors.message ? 'border-destructive' : ''}
                        />
                        {errors.message && (
                          <p className="text-sm text-destructive">{errors.message}</p>
                        )}
                      </div>

                      <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <ContactDetailsCard />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

