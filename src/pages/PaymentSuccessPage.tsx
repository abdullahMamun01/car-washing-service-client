import { useEffect, useState } from "react";

import { Loader2, CheckCircle, ArrowRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function PaymentSuccessWaitingPage() {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);
  const [isBookingConfirmed, setIsBookingConfirmed] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const checkBookingStatus = async () => {
      try {
        // Simulating API call - replace with actual API call in production
        await new Promise((resolve) => setTimeout(resolve, 2000));
        const fakeProgress = Math.min(progress + Math.random() * 30, 100);

        if (isMounted) {
          if (fakeProgress === 100) {
            setProgress(100);
            setIsBookingConfirmed(true);
          } else {
            setProgress(fakeProgress);
            setTimeout(checkBookingStatus, 2000); // Check again in 2 seconds
          }
        }
      } catch (error) {
        console.error("Error checking booking status:", error);
        // Handle error - maybe redirect to an error page
      }
    };

    if (!isBookingConfirmed) {
      checkBookingStatus();
    }

    return () => {
      isMounted = false;
    };
  }, [progress, isBookingConfirmed]);

  return (
    <div className="container mx-auto md:p-4 px-1 min-h-screen flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-[800px] py-5">
        <CardHeader className="text-center">
          <div>
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          </div>
          <CardTitle className="text-2xl font-bold text-green-700">
            {isBookingConfirmed ? "Booking Confirmed!" : "Payment Successful!"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div>
            {!isBookingConfirmed ? (
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
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-700 mb-2">
                    Booking Details
                  </h3>
                  <p className="text-sm text-gray-600">Date: June 15, 2023</p>
                  <p className="text-sm text-gray-600">Time: 2:00 PM</p>
                  <p className="text-sm text-gray-600">Service: Premium Wash</p>
                  <p className="text-sm text-gray-600">
                    Location: 123 Main St, Anytown, USA
                  </p>
                </div>
              </div>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          {isBookingConfirmed ? (
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
