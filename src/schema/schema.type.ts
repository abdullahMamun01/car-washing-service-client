export type TVehicleServiceRequest = {
  slotId: string;
  vehicleType:
    | "car"
    | "truck"
    | "SUV"
    | "van"
    | "motorcycle"
    | "bus"
    | "electricVehicle"
    | "hybridVehicle"
    | "bicycle"
    | "tractor";
  vehicleBrand: string;
  vehicleModel: string;
  slotTime?: string;
  date?: Date;
  manufacturingYear: number;
  registrationPlate: string;
};
