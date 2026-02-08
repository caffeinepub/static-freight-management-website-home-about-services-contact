import { useEffect } from 'react';
import { useRouter } from '@tanstack/react-router';

/**
 * ScrollToTop component that resets scroll position to top on route navigation.
 * Listens to TanStack Router location changes and scrolls window to (0, 0).
 */
export default function ScrollToTop() {
  const router = useRouter();

  useEffect(() => {
    // Subscribe to router state changes
    const unsubscribe = router.subscribe('onResolved', () => {
      window.scrollTo(0, 0);
    });

    return () => {
      unsubscribe();
    };
  }, [router]);

  return null;
}
