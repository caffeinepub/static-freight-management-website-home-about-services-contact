import ReactDOM from 'react-dom/client';
import { MAINTENANCE_ENABLED } from './lib/maintenanceMode';
import { MaintenanceScreen } from './components/MaintenanceScreen';
import './index.css';

/**
 * Application entry point with hard maintenance gate.
 * When MAINTENANCE_ENABLED is true, only MaintenanceScreen is rendered.
 * The normal app module is not imported or evaluated during maintenance.
 */

// Hard gate: Check maintenance mode before any app initialization
if (MAINTENANCE_ENABLED) {
  // Maintenance mode: render only the offline screen, do not load the app
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <MaintenanceScreen />
  );
} else {
  // Normal mode: dynamically import and initialize the full app
  import('./main').then((module) => {
    // main.tsx will handle the full app initialization
    // This ensures App.tsx and all its dependencies are never loaded during maintenance
  });
}
