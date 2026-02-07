import { Link } from '@tanstack/react-router';
import { Mail, Phone, MapPin, Heart } from 'lucide-react';
import { SiFacebook, SiX, SiLinkedin, SiInstagram } from 'react-icons/si';

export default function SiteFooter() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="/assets/frgmtlogo.png" 
                alt="Di Logisolution" 
                className="h-10 w-auto"
              />
              <span className="text-xl font-bold">Di Logisolution</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Your trusted partner in global logistics and freight management solutions.
            </p>
            <div className="flex gap-3">
              <a href="#" className="text-muted-foreground transition-colors hover:text-primary">
                <SiFacebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground transition-colors hover:text-primary">
                <SiX className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground transition-colors hover:text-primary">
                <SiLinkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground transition-colors hover:text-primary">
                <SiInstagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground transition-colors hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground transition-colors hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground transition-colors hover:text-primary">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/tracking" className="text-muted-foreground transition-colors hover:text-primary">
                  Track Shipment
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground transition-colors hover:text-primary">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Air Freight</li>
              <li>Ocean Freight</li>
              <li>Road Transport</li>
              <li>Warehousing</li>
              <li>Customs Brokerage</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">Contact</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 flex-shrink-0" />
                <a href="mailto:info@dilss.in" className="hover:text-primary transition-colors">
                  info@dilss.in
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <a href="tel:+919568740074" className="hover:text-primary transition-colors">
                    +91-9568740074
                  </a>
                  <a href="tel:01141447376" className="hover:text-primary transition-colors">
                    011-41447376
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0" />
                <div>
                  <div className="font-medium mb-1">Office Address:</div>
                  <span>Di LOGISOLUTIONS<br />A89, ROAD NO 2, MAHIPALPUR<br />NEW DELHI, 110037</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0" />
                <div>
                  <div className="font-medium mb-1">Registered Address:</div>
                  <span>RZK-2/326-I, Khasra No. 85/17,<br />Block K-2, Nihal Vihar, Nangaloi,<br />West Delhi, Delhi, 110041</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>
            © 2026. Built with <Heart className="inline h-4 w-4 text-primary" /> using{' '}
            <a
              href="https://caffeine.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
