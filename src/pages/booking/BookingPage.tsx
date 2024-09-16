import SubmitButton from "@/components/form/SubmitButton";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useStripePaymentMutation } from "@/redux/api/paymentApi";

import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import { useSelectedSerivce } from "@/redux/features/service/serviceSlice";
import { useAppSelector } from "@/redux/hooks";
import { StripeCheckoutRequest } from "@/redux/types/payment.type";
import { catchError } from "@/utils/catchError";
import { CarIcon, ClockIcon, MailIcon, User } from "lucide-react";

export default function BookingPage() {
  const selectedService = useAppSelector(useSelectedSerivce);
  const user = useAppSelector(selectCurrentUser);
  const [stripePayement, { isLoading }] = useStripePaymentMutation();

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const data: StripeCheckoutRequest = {
        name: selectedService!.serviceName,
        description: selectedService!.serviceName,
        serviceId: selectedService!.serviceId,
        price: selectedService!.price,
        slotId: selectedService!.slotId,
        vehicleType: selectedService!.vehicleType,
        vehicleBrand: selectedService!.vehicleBrand,
        manufacturingYear: selectedService!.manufacturingYear,
        vehicleModel: selectedService!.vehicleModel,
        registrationPlate: selectedService!.registrationPlate,
      };
      console.log(data)
      const response = await stripePayement(data).unwrap();
      window.location.href = response.sessionUrl;
      
    } catch (error) {
      catchError(error as Error);
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/10 to-secondary/10 p-4 md:p-8 flex items-center justify-center">
      <Card className="w-full max-w-6xl shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-sky-600">
            Booking Confirmation
          </CardTitle>
          <CardDescription>
            Review your service details and confirm your booking
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-primary/5 p-6 rounded-lg space-y-4">
              <h2 className="text-xl font-semibold text-primary flex items-center gap-2">
                <CarIcon className="h-6 w-6" />
                Service Details
              </h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Service</span>
                  <span className="font-medium">
                    {selectedService?.serviceName}
                  </span>
                </div>
                <Separator />
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Vehicle type</span>
                  <span className="font-medium">
                    {selectedService?.vehicleType}
                  </span>
                </div>
                <Separator />
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Date</span>
                  <span className="font-medium">
                    {selectedService?.bookingDate}
                  </span>
                </div>
                <Separator />
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Time</span>
                  <span className="font-medium">
                    {selectedService?.slotTime}
                  </span>
                </div>
                <Separator />
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Price</span>
                  <span className="font-bold text-lg">
                    ${selectedService?.price.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-primary">
              Confirm Your Details
            </h2>

            <form onSubmit={onSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                  <Input
                    id="name"
                    type="name"
                    value={user?.name}
                    disabled
                    className="pl-10 bg-muted"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email Address
                </label>
                <div className="relative">
                  <MailIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                  <Input
                    id="email"
                    type="email"
                    value={user?.email}
                    disabled
                    className="pl-10 bg-muted"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="time" className="text-sm font-medium">
                  Booking Time
                </label>
                <div className="relative">
                  <ClockIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                  <Input
                    id="time"
                    value={selectedService?.slotTime}
                    disabled
                    className="pl-10 bg-muted"
                  />
                </div>
              </div>
              <SubmitButton isLoading={isLoading} className="w-full hover:bg-sky-600 mt-6">
                {isLoading
                  ? "payment processing..."
                  : <span> Confirm and Pay   ${selectedService?.price.toFixed(2)} </span>}
              </SubmitButton>
            </form>
          </div>
        </CardContent>
      </Card>
   
    </div>
  );
}
