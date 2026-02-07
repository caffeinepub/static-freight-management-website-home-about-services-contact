import List "mo:core/List";
import Map "mo:core/Map";



actor {
  type ShipmentEvent = {
    timestamp : Int;
    location : Text;
    status : Text;
  };

  type ShipmentDetails = {
    trackingNumber : Text;
    sender : Text;
    recipient : Text;
    origin : Text;
    destination : Text;
    currentStatus : Text;
    events : List.List<ShipmentEvent>;
  };

  type ShipmentEventSnapshot = {
    timestamp : Int;
    location : Text;
    status : Text;
  };

  type ShipmentDetailsSnapshot = {
    trackingNumber : Text;
    sender : Text;
    recipient : Text;
    origin : Text;
    destination : Text;
    currentStatus : Text;
    events : [ShipmentEventSnapshot];
  };

  let shipments = Map.empty<Text, ShipmentDetails>();

  public shared ({ caller }) func addShipment(
    trackingNumber : Text,
    sender : Text,
    recipient : Text,
    origin : Text,
    destination : Text,
    initialStatus : Text,
  ) : async Bool {
    let shipment : ShipmentDetails = {
      trackingNumber;
      sender;
      recipient;
      origin;
      destination;
      currentStatus = initialStatus;
      events = List.empty<ShipmentEvent>();
    };
    shipments.add(trackingNumber, shipment);
    true;
  };

  public shared ({ caller }) func addShipmentEvent(
    trackingNumber : Text,
    timestamp : Int,
    location : Text,
    status : Text,
  ) : async Bool {
    switch (shipments.get(trackingNumber)) {
      case (null) { false };
      case (?shipment) {
        let event : ShipmentEvent = {
          timestamp;
          location;
          status;
        };
        shipment.events.add(event);
        let updatedShipment : ShipmentDetails = {
          shipment with
          currentStatus = status;
        };
        shipments.add(trackingNumber, updatedShipment);
        true;
      };
    };
  };

  public query ({ caller }) func getShipmentDetails(trackingNumber : Text) : async ?ShipmentDetailsSnapshot {
    switch (shipments.get(trackingNumber)) {
      case (null) { null };
      case (?details) {
        ?{
          details with
          events = details.events.toArray().map(
            func(event) { event }
          );
        };
      };
    };
  };

  public query ({ caller }) func getAllShipments() : async [(Text, ShipmentDetailsSnapshot)] {
    shipments.toArray().map(
      func((trackingNumber, details)) {
        (
          trackingNumber,
          {
            details with
            events = details.events.toArray().map(
              func(event) { event }
            );
          },
        );
      }
    );
  };
};
