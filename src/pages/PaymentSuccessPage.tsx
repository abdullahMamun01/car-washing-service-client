import { useEffect } from "react";

import { Loader2, CheckCircle, ArrowRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useProcessPaymentAndBookingMutation } from "@/redux/api/paymentApi";
import { catchError } from "@/utils/catchError";

export default function PaymentSuccessWaitingPage() {
  const [params] = useSearchParams();
  const navigate = useNavigate();

  const [confirmAppoinment, { isLoading, status }] =
    useProcessPaymentAndBookingMutation();

  useEffect(() => {
    let isMounted = true;
    const sessionId = params.get("session_id") as string;

    const processPaymentAndBooking = async (sessionId: string) => {
      isMounted = false;
      try {
        await confirmAppoinment({
          session_id: sessionId,
        }).unwrap();
      } catch (error) {
        catchError(error as Error);
      }
    };
    console.log(sessionId);
    if (sessionId && isMounted) {
      processPaymentAndBooking(sessionId);
    }

    return () => {
      isMounted = false;
    };
  }, []);
  console.log(status);
  return (
    <div className="container mx-auto md:p-4 px-1 min-h-screen flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-[800px] py-5">
        <CardHeader className="text-center">
          <div>
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          </div>
          <CardTitle className="text-2xl font-bold text-green-700">
            {isLoading ? "Booking Confirmed!" : "Payment Successful!"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div>
            {isLoading ? (
              <div>
                <p className="text-center text-gray-600 mb-6">
                  We're confirming your booking. This will only take a moment.
                </p>
                <div className="flex justify-center mb-4">
                  <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
                </div>

                <p className="text-center text-sm text-gray-500 mt-2">
                  Confirming your appointment...
                </p>
              </div>
            ) : (
              <div key="confirmed">
                <p className="text-center text-gray-600 mb-6">
                  Your car wash appointment has been successfully booked!
                </p>
                {/* <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-700 mb-2">
                    Booking Details
                  </h3>
                  <p className="text-sm text-gray-600">Date: June 15, 2023</p>
                  <p className="text-sm text-gray-600">Time: 2:00 PM</p>
                  <p className="text-sm text-gray-600">Service: Premium Wash</p>
                  <p className="text-sm text-gray-600">
                    Location: 123 Main St, Anytown, USA
                  </p>
                </div> */}
              </div>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          {!isLoading ? (
            <Button
              onClick={() => navigate("/dashboard")}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Go to Dashboard <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          ) : (
            <p className="text-sm text-gray-500">
              Please do not close this page.
            </p>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}
