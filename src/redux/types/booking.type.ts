export type Customer = {
  _id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
};

export type Service = {
  _id: string;
  name: string;
  description: string;
  price: number;
  duration: number;
  isDeleted: boolean;
};

export type Slot = {
  _id: string;
  service: string;
  date: string;
  startTime: string;
  endTime: string;
  isBooked: string;
};

export type TBookingResponse = {
  _id: string;
  customer: Customer;
  service: Service;
  slot: Slot;
  vehicleType: string;
  vehicleBrand: string;
  manufacturingYear: number;
  vehicleModel: string;
  registrationPlate: string;
  createdAt: string;
  updatedAt: string;
};
