import { ShieldOff } from 'lucide-react';

/**
 * Standalone maintenance/offline screen displayed when the site is unpublished.
 * This is the ONLY component rendered when maintenance mode is enabled.
 * No navigation, no routes, no backend calls - just a clear offline message.
 */
export function MaintenanceScreen() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="flex justify-center">
          <div className="rounded-full bg-muted p-6">
            <ShieldOff className="h-16 w-16 text-muted-foreground" />
          </div>
        </div>
        
        <div className="space-y-3">
          <h1 className="text-3xl font-bold text-foreground">
            Site Unavailable
          </h1>
          <p className="text-lg text-muted-foreground">
            This website is currently offline and cannot be accessed.
          </p>
          <p className="text-sm text-muted-foreground/80">
            All content and features are disabled.
          </p>
        </div>
      </div>
    </div>
  );
}
