import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Search, Package, Info } from 'lucide-react';

export default function TrackingPage() {
  const [trackingNumber, setTrackingNumber] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // No-op: tracking feature is coming soon
  };

  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <section className="border-b bg-muted/30 py-12 md:py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Package className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h1 className="mb-4">Track Your Shipment</h1>
            <p className="text-lg text-muted-foreground">
              Enter your tracking number below to get real-time updates on your shipment status and location.
            </p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="mx-auto max-w-2xl">
            {/* Coming Soon Alert */}
            <Alert className="mb-6">
              <Info className="h-4 w-4" />
              <AlertTitle>Coming Soon</AlertTitle>
              <AlertDescription>
                Our shipment tracking feature is currently under development. Check back soon for real-time tracking updates!
              </AlertDescription>
            </Alert>

            <Card>
              <CardHeader>
                <CardTitle>Enter Tracking Number</CardTitle>
                <CardDescription>
                  Your tracking number can be found in your shipping confirmation email.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSearch} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="tracking-number">Tracking Number</Label>
                    <div className="flex gap-2">
                      <Input
                        id="tracking-number"
                        type="text"
                        placeholder="e.g., TRK001, TRK002, TRK003"
                        value={trackingNumber}
                        onChange={(e) => setTrackingNumber(e.target.value)}
                        className="flex-1"
                        disabled
                      />
                      <Button type="submit" disabled>
                        <Search className="mr-2 h-4 w-4" />
                        Track
                      </Button>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      This feature is coming soon. We're working hard to bring you real-time tracking capabilities.
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
