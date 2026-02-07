import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function ContactDetailsCard() {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Contact Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
              <Mail className="h-5 w-5 text-primary" />
            </div>
            <div>
              <div className="font-medium">Email</div>
              <a
                href="mailto:info@dilss.in"
                className="text-sm text-muted-foreground hover:text-primary"
              >
                info@dilss.in
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
              <Phone className="h-5 w-5 text-primary" />
            </div>
            <div>
              <div className="font-medium">Phone</div>
              <div className="flex flex-col gap-1">
                <a
                  href="tel:+919568740074"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  +91-9568740074
                </a>
                <a
                  href="tel:01141447376"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  011-41447376
                </a>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
              <MapPin className="h-5 w-5 text-primary" />
            </div>
            <div>
              <div className="font-medium">Office Address</div>
              <p className="text-sm text-muted-foreground">
                Di LOGISOLUTIONS
                <br />
                A89, ROAD NO 2, MAHIPALPUR
                <br />
                NEW DELHI, 110037
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
              <MapPin className="h-5 w-5 text-primary" />
            </div>
            <div>
              <div className="font-medium">Registered Address</div>
              <p className="text-sm text-muted-foreground">
                RZK-2/326-I, Khasra No. 85/17,
                <br />
                Block K-2, Nihal Vihar, Nangaloi,
                <br />
                West Delhi, Delhi, 110041
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Business Hours</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
              <Clock className="h-5 w-5 text-primary" />
            </div>
            <div className="text-sm">
              <div className="font-medium">Monday - Friday</div>
              <div className="text-muted-foreground">8:00 AM - 6:00 PM EST</div>
            </div>
          </div>
          <div className="ml-13 text-sm">
            <div className="font-medium">Saturday</div>
            <div className="text-muted-foreground">9:00 AM - 2:00 PM EST</div>
          </div>
          <div className="ml-13 text-sm">
            <div className="font-medium">Sunday</div>
            <div className="text-muted-foreground">Closed</div>
          </div>
          <div className="ml-13 mt-4 rounded-lg bg-primary/5 p-3 text-sm">
            <div className="font-medium text-primary">24/7 Emergency Support</div>
            <div className="text-muted-foreground">Available for urgent shipments</div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
