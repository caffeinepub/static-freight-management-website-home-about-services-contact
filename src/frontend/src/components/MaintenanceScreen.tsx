import { AlertCircle } from 'lucide-react';

/**
 * Standalone maintenance/offline screen displayed when the site is unpublished.
 * Shows a clear message that the site is not available and to check back later.
 */
export function MaintenanceScreen() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="flex justify-center">
          <div className="rounded-full bg-muted p-6">
            <AlertCircle className="h-16 w-16 text-muted-foreground" />
          </div>
        </div>
        
        <div className="space-y-3">
          <h1 className="text-3xl font-bold text-foreground">
            Site Not Available
          </h1>
          <p className="text-lg text-muted-foreground">
            This website is currently not published and is not available for public access.
          </p>
          <p className="text-base text-muted-foreground">
            Please check back later.
          </p>
        </div>
      </div>
    </div>
  );
}
