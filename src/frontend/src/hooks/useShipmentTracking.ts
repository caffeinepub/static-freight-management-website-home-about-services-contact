import { useQuery } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { ShipmentDetailsSnapshot } from '../backend';

export function useShipmentTracking(trackingNumber: string) {
  const { actor, isFetching } = useActor();

  return useQuery<ShipmentDetailsSnapshot | null>({
    queryKey: ['shipment', trackingNumber],
    queryFn: async () => {
      if (!actor || !trackingNumber) return null;
      const result = await actor.getShipmentDetails(trackingNumber);
      return result;
    },
    enabled: !!actor && !isFetching && !!trackingNumber,
  });
}
