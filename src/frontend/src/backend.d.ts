import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface ShipmentEventSnapshot {
    status: string;
    timestamp: bigint;
    location: string;
}
export interface ShipmentDetailsSnapshot {
    trackingNumber: string;
    destination: string;
    origin: string;
    recipient: string;
    sender: string;
    events: Array<ShipmentEventSnapshot>;
    currentStatus: string;
}
export interface backendInterface {
    addShipment(trackingNumber: string, sender: string, recipient: string, origin: string, destination: string, initialStatus: string): Promise<boolean>;
    addShipmentEvent(trackingNumber: string, timestamp: bigint, location: string, status: string): Promise<boolean>;
    getAllShipments(): Promise<Array<[string, ShipmentDetailsSnapshot]>>;
    getShipmentDetails(trackingNumber: string): Promise<ShipmentDetailsSnapshot | null>;
}
